import { NextRequest, NextResponse } from "next/server";
import { onAuthenticateUser } from "@/action/auth";
import { getForecastFromChain, getUserForecastTypes } from "@/lib/blockchain/contractService";

/**
 * API endpoint to fetch forecast data from blockchain
 * 
 * GET /api/dashboard/forecast/blockchain?type=revenue&userAddress=0x...
 */
export async function GET(request: NextRequest) {
  try {
    const user = await onAuthenticateUser();
    if (!user.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const forecastType = searchParams.get("type") || "revenue";
    const userAddress = searchParams.get("userAddress");

    if (!userAddress) {
      return NextResponse.json(
        { error: "userAddress parameter is required" },
        { status: 400 }
      );
    }

    if (!["revenue", "aov", "orders"].includes(forecastType)) {
      return NextResponse.json(
        { error: "Invalid forecast type. Must be 'revenue', 'aov', or 'orders'" },
        { status: 400 }
      );
    }

    console.log(`[Blockchain API] Fetching ${forecastType} forecast for ${userAddress}`);

    try {
      const forecastData = await getForecastFromChain(
        userAddress,
        forecastType as "revenue" | "aov" | "orders"
      );

      if (!forecastData) {
        // Return 200 with empty data instead of 404
        // This indicates "endpoint exists, but no data found" rather than "endpoint not found"
        console.log(`[Blockchain API] No ${forecastType} forecast found on blockchain for ${userAddress}`);
        return NextResponse.json(
          {
            error: null, // No error, just no data
            message: `No ${forecastType} forecast found on blockchain for this address`,
            historical: [],
            forecast: [],
            metrics: null,
            source: "blockchain",
            exists: false,
          },
          { status: 200 }
        );
      }

      return NextResponse.json({
        ...forecastData,
        exists: true,
      });
    } catch (error: any) {
      console.error("[Blockchain API] Error fetching from blockchain:", error);
      
      // For RPC timeouts or connection errors, return 200 with exists: false
      // This allows frontend to gracefully fallback to API
      const errorMessage = error?.message || String(error);
      if (errorMessage.includes("timeout") || errorMessage.includes("connection") || errorMessage.includes("RPC")) {
        console.log(`[Blockchain API] RPC error (${forecastType}): ${errorMessage} - returning empty data for fallback`);
        return NextResponse.json(
          {
            error: null,
            message: `RPC connection issue. Data will fallback to API.`,
            historical: [],
            forecast: [],
            metrics: null,
            source: "blockchain",
            exists: false,
          },
          { status: 200 }
        );
      }
      
      // For other errors, return 200 with error message (not 500)
      // Frontend will handle this gracefully
      return NextResponse.json(
        {
          error: `Failed to fetch forecast from blockchain: ${errorMessage}`,
          message: errorMessage,
          historical: [],
          forecast: [],
          metrics: null,
          source: "blockchain",
          exists: false,
        },
        { status: 200 }
      );
    }
  } catch (error: any) {
    console.error("[Blockchain API] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch forecast from blockchain" },
      { status: 500 }
    );
  }
}

/**
 * Get all forecast types stored on blockchain for a user
 * GET /api/dashboard/forecast/blockchain/types?userAddress=0x...
 */
export async function POST(request: NextRequest) {
  try {
    const user = await onAuthenticateUser();
    if (!user.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { userAddress } = body;

    if (!userAddress) {
      return NextResponse.json(
        { error: "userAddress is required" },
        { status: 400 }
      );
    }

    try {
      const types = await getUserForecastTypes(userAddress);
      return NextResponse.json({ types });
    } catch (error: any) {
      console.error("[Blockchain API] Error fetching types:", error);
      return NextResponse.json(
        { error: `Failed to fetch forecast types: ${error.message}` },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("[Blockchain API] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch forecast types" },
      { status: 500 }
    );
  }
}

