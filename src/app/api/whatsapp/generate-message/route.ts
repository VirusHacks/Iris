import { NextRequest, NextResponse } from "next/server";
import { onAuthenticateUser } from "@/action/auth";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || "");

/**
 * POST /api/whatsapp/generate-message
 * 
 * Generate personalized WhatsApp message using Gemini AI based on customer cluster and segment
 */
export async function POST(request: NextRequest) {
  try {
    const user = await onAuthenticateUser();
    if (!user.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { clusterInfo, segmentCategory, baseMessage } = body;

    if (!process.env.GOOGLE_AI_API_KEY) {
      return NextResponse.json(
        { error: "Google AI API key not configured" },
        { status: 500 }
      );
    }

    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      generationConfig: {
        temperature: 0.8,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 500,
      },
    });

    const prompt = `You are a professional sales and marketing assistant. Generate a personalized WhatsApp message for a customer based on their segment and cluster information.

Customer Segment: ${segmentCategory || "Unknown"}
Cluster Information: ${JSON.stringify(clusterInfo || {})}

${baseMessage ? `Base Message Template:\n${baseMessage}\n\n` : ""}

Requirements:
1. Keep the message concise (under 200 words)
2. Make it personal and engaging
3. Use appropriate tone based on the segment:
   - "High Value Engagement": Appreciative, exclusive offers
   - "Re-engagement": Friendly, win-back approach
   - "New Customer Nurture": Welcoming, educational
4. Include a clear call-to-action
5. Be professional but warm
6. Don't use markdown formatting - plain text only

Generate the WhatsApp message:`;

    const result = await Promise.race([
      model.generateContent(prompt),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error("AI response timeout")), 15000)
      ),
    ]) as any;
    
    const response = await result.response;
    const message = response.text().trim();

    return NextResponse.json({
      success: true,
      message,
    });
  } catch (error: any) {
    console.error("WhatsApp message generation error:", error);
    return NextResponse.json(
      {
        error: "Failed to generate message",
        details: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}

