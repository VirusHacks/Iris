import { NextRequest, NextResponse } from "next/server";
import { onAuthenticateUser } from "@/action/auth";
import { convertForecastToContractParams } from "@/lib/blockchain/forecastContract";

/**
 * API endpoint to prepare forecast data for blockchain storage
 * 
 * This endpoint:
 * 1. Fetches forecast data from Python service (or database)
 * 2. Converts it to Solidity-compatible format
 * 3. Returns the formatted data ready for smart contract interaction
 * 
 * Note: Actual blockchain transaction should be handled by frontend
 * using ethers.js, viem, or web3.js
 */
export async function POST(request: NextRequest) {
  try {
    const user = await onAuthenticateUser();
    if (!user.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { forecastType, periods } = body;

    if (!forecastType || !["revenue", "aov", "orders"].includes(forecastType)) {
      return NextResponse.json(
        { error: "Invalid forecast type. Must be 'revenue', 'aov', or 'orders'" },
        { status: 400 }
      );
    }

    // Get forecast data from database (or call Python service)
    // For now, we'll get it from the database
    const { prismaClient } = await import("@/lib/prismaClient");
    
    const forecastRecord = await prismaClient.forecastAnalytics.findUnique({
      where: { userId: user.user.id },
    });

    if (!forecastRecord) {
      return NextResponse.json(
        { error: "No forecast data available. Please generate a forecast first." },
        { status: 404 }
      );
    }

    // Get the appropriate forecast data
    let forecastData: any = null;
    if (forecastType === "revenue" && forecastRecord.revenueForecast) {
      forecastData = forecastRecord.revenueForecast as any;
    } else if (forecastType === "aov" && forecastRecord.aovForecast) {
      forecastData = forecastRecord.aovForecast as any;
    } else if (forecastType === "orders" && forecastRecord.ordersForecast) {
      forecastData = forecastRecord.ordersForecast as any;
    }

    if (!forecastData || !forecastData.historical || !forecastData.forecast) {
      return NextResponse.json(
        { error: `No ${forecastType} forecast data available` },
        { status: 404 }
      );
    }

    // Convert to contract parameters
    const contractParams = convertForecastToContractParams(
      forecastData,
      forecastType as "revenue" | "aov" | "orders",
      periods || 6
    );

    return NextResponse.json({
      success: true,
      contractParams,
      message: "Forecast data formatted for blockchain storage. Use these parameters to call storeForecast() on the smart contract.",
    });
  } catch (error: any) {
    console.error("Error preparing forecast for blockchain:", error);
    return NextResponse.json(
      { error: "Failed to prepare forecast data for blockchain" },
      { status: 500 }
    );
  }
}

