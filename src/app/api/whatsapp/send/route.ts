import { NextRequest, NextResponse } from "next/server";
import { onAuthenticateUser } from "@/action/auth";

const WHATSAPP_SERVICE_URL = process.env.FORECAST_SERVICE_URL || "http://localhost:4000";

/**
 * POST /api/whatsapp/send
 * 
 * Send WhatsApp messages to selected customers
 */
export async function POST(request: NextRequest) {
  try {
    const user = await onAuthenticateUser();
    if (!user.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { recipients } = body;

    if (!recipients || !Array.isArray(recipients) || recipients.length === 0) {
      return NextResponse.json(
        { error: "No recipients provided" },
        { status: 400 }
      );
    }

    console.log(`[WhatsApp API] Sending messages to ${recipients.length} recipients`);

    // Forward to Flask WhatsApp service
    const response = await fetch(`${WHATSAPP_SERVICE_URL}/whatsapp/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recipients }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: "Unknown error" }));
      console.error("[WhatsApp API] Service error:", errorData);
      return NextResponse.json(
        { error: errorData.error || "WhatsApp service error" },
        { status: response.status }
      );
    }

    const result = await response.json();

    console.log(`[WhatsApp API] Successfully sent ${result.sent}/${result.total} messages`);

    return NextResponse.json(result);
  } catch (error: any) {
    console.error("[WhatsApp API] Error:", error);
    return NextResponse.json(
      {
        error: "Failed to send WhatsApp messages",
        details: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}

