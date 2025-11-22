import { prismaClient } from "@/lib/prismaClient";
import { onAuthenticateUser } from "@/action/auth";
import { NextRequest, NextResponse } from "next/server";

const FORECAST_SERVICE_URL = process.env.FORECAST_SERVICE_URL || "http://localhost:4000";

export async function GET(request: NextRequest) {
  try {
    const user = await onAuthenticateUser();
    if (!user.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const forecastType = searchParams.get("type") || "revenue";
    const periods = parseInt(searchParams.get("periods") || "6");

    // Get analytics from database
    const analyticsRecord = await prismaClient.dashboardAnalytics.findUnique({
      where: { userId: user.user.id },
    });

    if (!analyticsRecord || !analyticsRecord.monthlySales || (analyticsRecord.monthlySales as any[]).length === 0) {
      return NextResponse.json({
        error: "No analytics data available. Please upload a CSV file.",
        historical: [],
        forecast: [],
        metrics: null
      }, { status: 404 });
    }

    // Use monthly sales and AOV data from database
    const monthlySales = analyticsRecord.monthlySales as any[];
    const aovTrend = analyticsRecord.aovTrend as any[];

    // Combine into monthly data array for forecast
    const monthlyDataMap = new Map<string, { revenue: number; aov: number; orders: number }>();
    
    monthlySales.forEach((item: any) => {
      monthlyDataMap.set(item.month, {
        revenue: item.revenue,
        aov: 0,
        orders: 0,
      });
    });

    aovTrend.forEach((item: any) => {
      const existing = monthlyDataMap.get(item.month);
      if (existing) {
        existing.aov = item.aov;
        // Estimate orders from revenue and AOV
        existing.orders = existing.aov > 0 ? Math.round(existing.revenue / existing.aov) : 0;
      }
    });

    const monthlyDataArray = Array.from(monthlyDataMap.entries())
      .map(([month, data]) => ({
        month,
        revenue: data.revenue,
        orders: data.orders,
        aov: data.aov,
      }))
      .sort((a, b) => a.month.localeCompare(b.month));

    // Check if we have enough data
    if (monthlyDataArray.length < 3) {
      return NextResponse.json({
        error: "Insufficient data. Need at least 3 months of historical data for forecasting.",
        historical: monthlyDataArray,
        forecast: [],
        metrics: null
      }, { status: 400 });
    }

    // Call Python Prophet service
    try {
      console.log(`[Forecast API] Calling Python service: ${FORECAST_SERVICE_URL}/forecast`);
      console.log(`[Forecast API] Data points: ${monthlyDataArray.length}, Type: ${forecastType}, Periods: ${periods}`);
      
      // Create abort controller for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 60000); // 60 second timeout
      
      const response = await fetch(`${FORECAST_SERVICE_URL}/forecast`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          monthlyData: monthlyDataArray,
          periods,
          type: forecastType,
        }),
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);

      if (!response.ok) {
        let errorMessage = "Forecast service error";
        try {
          const text = await response.text();
          if (text) {
            const errorData = JSON.parse(text);
            errorMessage = errorData.error || errorMessage;
          }
        } catch (e) {
          // If response is not JSON, use status text
          errorMessage = response.statusText || `HTTP ${response.status} error`;
        }
        console.error(`[Forecast API] Python service error:`, errorMessage);
        return NextResponse.json(
          { 
            error: errorMessage, 
            historical: monthlyDataArray,
            forecast: [],
            metrics: null
          },
          { status: response.status }
        );
      }

      const text = await response.text();
      if (!text) {
        throw new Error("Empty response from forecast service");
      }

      let forecastData;
      try {
        forecastData = JSON.parse(text);
      } catch (e) {
        console.error(`[Forecast API] Invalid JSON response:`, text.substring(0, 200));
        throw new Error("Invalid JSON response from forecast service");
      }

      console.log(`[Forecast API] Success: ${forecastData.historical?.length || 0} historical, ${forecastData.forecast?.length || 0} forecast points`);
      
      // Validate response structure
      if (!forecastData.historical || !forecastData.forecast) {
        console.error(`[Forecast API] Invalid response structure:`, forecastData);
        return NextResponse.json({
          error: "Invalid forecast response format",
          historical: monthlyDataArray,
          forecast: [],
          metrics: null
        }, { status: 500 });
      }

      return NextResponse.json(forecastData);
    } catch (error: any) {
      console.error("[Forecast API] Error calling forecast service:", error);
      
      // Handle specific error types
      if (error.name === 'AbortError' || error.name === 'TimeoutError' || error.message?.includes('aborted')) {
        return NextResponse.json(
          { 
            error: "Forecast service timeout. The request took too long (60s limit).",
            historical: monthlyDataArray,
            forecast: [],
            metrics: null
          },
          { status: 504 }
        );
      }
      
      if (error.code === 'ECONNREFUSED' || error.message?.includes('ECONNREFUSED') || error.message?.includes('fetch failed')) {
        return NextResponse.json(
          { 
            error: "Forecast service unavailable. Please ensure the Python service is running on port 4000.",
            historical: monthlyDataArray,
            forecast: [],
            metrics: null
          },
          { status: 503 }
        );
      }

      // Handle network errors
      if (error.message?.includes('network') || error.message?.includes('NetworkError')) {
        return NextResponse.json(
          { 
            error: "Network error connecting to forecast service.",
            historical: monthlyDataArray,
            forecast: [],
            metrics: null
          },
          { status: 503 }
        );
      }

      return NextResponse.json(
        { 
          error: error.message || "Forecast service unavailable. Please ensure the Python service is running.",
          historical: monthlyDataArray,
          forecast: [],
          metrics: null
        },
        { status: 503 }
      );
    }
  } catch (error) {
    console.error("Error generating forecast:", error);
    return NextResponse.json(
      { error: "Failed to generate forecast" },
      { status: 500 }
    );
  }
}

