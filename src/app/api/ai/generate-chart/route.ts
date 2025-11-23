import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { onAuthenticateUser } from "@/action/auth";
import { CHART_GENERATION_SYSTEM_MESSAGE } from "@/lib/ai/chartGenerationPrompt";
import { parseAIResponse, processDataForChart } from "@/lib/ai/chartGenerator";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || "");

export async function POST(request: NextRequest) {
  try {
    const user = await onAuthenticateUser();
    if (!user.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { userRequest, availableData } = body;

    if (!userRequest) {
      return NextResponse.json(
        { error: "userRequest is required" },
        { status: 400 }
      );
    }

    if (!process.env.GOOGLE_AI_API_KEY) {
      return NextResponse.json(
        { error: "Google AI API key not configured" },
        { status: 500 }
      );
    }

    // Initialize Gemini model
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      generationConfig: {
        temperature: 0.3, // Lower temperature for more consistent JSON output
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 2048,
      },
    });

    // Build available data summary for the AI
    let dataSummary = "\n## Available Data Sources:\n";
    if (availableData) {
      Object.keys(availableData).forEach((key) => {
        const data = availableData[key];
        if (Array.isArray(data) && data.length > 0) {
          dataSummary += `- ${key}: ${data.length} items. Sample: ${JSON.stringify(data.slice(0, 2))}\n`;
        } else if (data && typeof data === "object") {
          dataSummary += `- ${key}: ${JSON.stringify(data)}\n`;
        }
      });
    }

    const fullPrompt = `${CHART_GENERATION_SYSTEM_MESSAGE}${dataSummary}\n\n## User Request:\n${userRequest}\n\nGenerate the chart configuration JSON now:`;

    // Generate content with timeout
    const result = await Promise.race([
      model.generateContent(fullPrompt),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error("AI response timeout. Please try again.")), 30000)
      ),
    ]) as any;
    
    const response = await result.response;
    const text = response.text();

    // Parse the AI response to get chart config
    const chartConfig = parseAIResponse(text);

    if (!chartConfig) {
      return NextResponse.json(
        { error: "Failed to parse chart configuration from AI response", rawResponse: text },
        { status: 500 }
      );
    }

    // Get the appropriate data source
    let rawData: any[] = [];
    const dataSourceType = chartConfig.dataSource.type;

    if (availableData && availableData[dataSourceType]) {
      rawData = availableData[dataSourceType];
    } else {
      // Try to find similar data source
      const keys = Object.keys(availableData || {});
      const similarKey = keys.find(k => k.toLowerCase().includes(dataSourceType.toLowerCase()));
      if (similarKey && availableData[similarKey]) {
        rawData = availableData[similarKey];
      }
    }

    // Process the data according to the chart config
    const processedData = processDataForChart(rawData, chartConfig);

    // Try to extract explanation from AI response
    let explanation = "Chart generated successfully";
    try {
      const parsed = JSON.parse(text);
      if (parsed.explanation) {
        explanation = parsed.explanation;
      }
    } catch (e) {
      // If parsing fails, try to extract from text
      const explanationMatch = text.match(/"explanation"\s*:\s*"([^"]+)"/);
      if (explanationMatch) {
        explanation = explanationMatch[1];
      }
    }

    return NextResponse.json({
      success: true,
      chartConfig,
      data: processedData,
      explanation,
    });
  } catch (error: any) {
    console.error("Chart generation error:", error);
    
    let errorMessage = "Failed to generate chart";
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

