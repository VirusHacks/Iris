import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { onAuthenticateUser } from "@/action/auth";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || "");

export async function POST(request: NextRequest) {
  try {
    const user = await onAuthenticateUser();
    if (!user.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { systemMessage, userMessage, contextData } = body;

    if (!systemMessage || !userMessage) {
      return NextResponse.json(
        { error: "systemMessage and userMessage are required" },
        { status: 400 }
      );
    }

    if (!process.env.GOOGLE_AI_API_KEY) {
      return NextResponse.json(
        { error: "Google AI API key not configured" },
        { status: 500 }
      );
    }

    // Initialize Gemini model - using gemini-2.5-flash
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 2048,
      },
    });

    // Build the full prompt with context
    // Format context data in a readable way
    let contextString = "";
    if (contextData) {
      try {
        // Create a more readable context summary
        contextString = `\n\n## Current Data Context:\n`;
        
        // Format key metrics
        if (contextData.totalRevenue !== undefined) {
          contextString += `Total Revenue: $${(contextData.totalRevenue / 1000).toFixed(1)}k\n`;
        }
        if (contextData.totalOrders !== undefined) {
          contextString += `Total Orders: ${contextData.totalOrders.toLocaleString()}\n`;
        }
        if (contextData.totalCustomers !== undefined) {
          contextString += `Total Customers: ${contextData.totalCustomers.toLocaleString()}\n`;
        }
        if (contextData.avgMonthlyRevenue !== undefined) {
          contextString += `Average Monthly Revenue: $${(contextData.avgMonthlyRevenue / 1000).toFixed(1)}k\n`;
        }
        if (contextData.growthRate !== undefined) {
          contextString += `Growth Rate: ${contextData.growthRate.toFixed(1)}%\n`;
        }
        if (contextData.avgAOV !== undefined) {
          contextString += `Average Order Value: $${contextData.avgAOV.toFixed(2)}\n`;
        }
        if (contextData.avgCustomerValue !== undefined) {
          contextString += `Average Customer Value: $${contextData.avgCustomerValue.toFixed(2)}\n`;
        }
        
        // Add chart data summaries
        if (contextData.monthlySales && Array.isArray(contextData.monthlySales)) {
          contextString += `\nMonthly Sales Data (${contextData.monthlySales.length} months, showing last 6):\n`;
          contextString += JSON.stringify(contextData.monthlySales.slice(-6), null, 2) + "\n";
        }
        if (contextData.orderData && Array.isArray(contextData.orderData)) {
          contextString += `\nOrder Data (${contextData.orderData.length} months, showing last 6):\n`;
          contextString += JSON.stringify(contextData.orderData.slice(-6), null, 2) + "\n";
        }
        if (contextData.topCustomers && Array.isArray(contextData.topCustomers)) {
          contextString += `\nTop Customers (showing top 5):\n`;
          contextString += JSON.stringify(contextData.topCustomers.slice(0, 5), null, 2) + "\n";
        }
        if (contextData.rfmDistribution && Array.isArray(contextData.rfmDistribution)) {
          contextString += `\nRFM Segment Distribution:\n`;
          contextString += JSON.stringify(contextData.rfmDistribution, null, 2) + "\n";
        }
        if (contextData.revenueByDay && Array.isArray(contextData.revenueByDay)) {
          contextString += `\nRevenue by Day of Week:\n`;
          contextString += JSON.stringify(contextData.revenueByDay, null, 2) + "\n";
        }
        if (contextData.revenueByHour && Array.isArray(contextData.revenueByHour)) {
          contextString += `\nRevenue by Hour:\n`;
          contextString += JSON.stringify(contextData.revenueByHour, null, 2) + "\n";
        }
        if (contextData.revenueForecast) {
          contextString += `\nRevenue Forecast Data:\n`;
          contextString += `Historical points: ${contextData.revenueForecast.historical?.length || 0}\n`;
          contextString += `Forecast points: ${contextData.revenueForecast.forecast?.length || 0}\n`;
          if (contextData.revenueForecast.metrics) {
            contextString += `Forecast Metrics: ${JSON.stringify(contextData.revenueForecast.metrics, null, 2)}\n`;
          }
        }
        
        // Add full JSON for detailed analysis if needed
        contextString += `\n\nFull Data Context (for detailed analysis):\n${JSON.stringify(contextData, null, 2)}\n`;
      } catch (e) {
        contextString = `\n\n## Current Data Context:\n${JSON.stringify(contextData, null, 2)}\n`;
      }
    }

    const fullPrompt = `${systemMessage}${contextString}\n\n## User Question:\n${userMessage}\n\nPlease provide a helpful, detailed response based on the data context and your expertise as a sales analytics expert. Be specific, reference actual data points when relevant, and provide actionable recommendations. Format your response in a clear, easy-to-read manner with proper structure.`;

    // Generate content with timeout
    const result = await Promise.race([
      model.generateContent(fullPrompt),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error("AI response timeout. Please try again.")), 30000)
      ),
    ]) as any;
    
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({
      success: true,
      message: text,
    });
  } catch (error: any) {
    console.error("Gemini API error:", error);
    
    // Provide more specific error messages
    let errorMessage = "Failed to generate response";
    let errorDetails = error.message || "Unknown error";
    
    if (error.message?.includes("API key") || error.message?.includes("GOOGLE_AI_API_KEY")) {
      errorMessage = "AI API key not configured";
      errorDetails = "Please add GOOGLE_AI_API_KEY to your environment variables.";
    } else if (error.message?.includes("timeout")) {
      errorMessage = "AI response timeout";
      errorDetails = "The AI service took too long to respond. Please try again.";
    } else if (error.message?.includes("quota") || error.message?.includes("rate limit")) {
      errorMessage = "AI service rate limit exceeded";
      errorDetails = "Too many requests. Please try again in a moment.";
    }
    
    return NextResponse.json(
      {
        error: errorMessage,
        details: errorDetails,
      },
      { status: 500 }
    );
  }
}
