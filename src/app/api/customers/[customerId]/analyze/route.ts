import { NextRequest, NextResponse } from "next/server";
import { onAuthenticateUser } from "@/action/auth";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getSegmentationCache } from "@/lib/segmentationCache";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || "");

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

/**
 * POST /api/customers/[customerId]/analyze
 * 
 * Generate AI-powered customer 360 analysis using Gemini
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ customerId: string }> }
) {
  try {
    const user = await onAuthenticateUser();
    if (!user.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { customerId } = await params;
    const body = await request.json();
    const { customerData } = body;

    if (!process.env.GOOGLE_AI_API_KEY) {
      return NextResponse.json(
        { error: "Google AI API key not configured" },
        { status: 500 }
      );
    }

    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 2048,
      },
    });

    // Calculate RFM scores for better analysis
    const recency = customerData.recency || 0;
    const totalSpent = customerData.total_spent || customerData.totalSpent || 0;
    const intentScore = customerData.intent_score || customerData.intentScore || 0.5;
    const touchpoints = customerData.touchpoints_count || customerData.touchpointsCount || 0;
    const segment = customerData.promotional_segment_category || customerData.promotionalSegmentCategory || "Unknown";
    
    // Determine loyalty level based on spending
    let loyaltyLevel = "Bronze";
    let loyaltyScore = 25;
    if (totalSpent >= 10000) {
      loyaltyLevel = "Platinum";
      loyaltyScore = 90;
    } else if (totalSpent >= 5000) {
      loyaltyLevel = "Gold";
      loyaltyScore = 70;
    } else if (totalSpent >= 2000) {
      loyaltyLevel = "Silver";
      loyaltyScore = 50;
    }
    
    // Adjust loyalty score based on recency and engagement
    if (recency < 90) loyaltyScore += 10;
    if (intentScore > 0.7) loyaltyScore += 10;
    if (touchpoints > 5) loyaltyScore += 5;
    loyaltyScore = Math.min(100, loyaltyScore);
    
    // Determine churn risk
    let churnRisk = "Low";
    let churnRiskScore = 20;
    if (recency > 180) {
      churnRisk = "High";
      churnRiskScore = 80;
    } else if (recency > 90) {
      churnRisk = "Medium";
      churnRiskScore = 50;
    }
    if (intentScore < 0.3) churnRiskScore += 20;
    if (touchpoints < 2) churnRiskScore += 10;
    churnRiskScore = Math.min(100, churnRiskScore);
    
    // Calculate LTV (estimate: current spend * 2-5x based on engagement)
    const ltvMultiplier = intentScore > 0.7 ? 5 : intentScore > 0.4 ? 3 : 2;
    const lifetimeValue = totalSpent * ltvMultiplier;

    // Build recommended actions array
    const recommendedActions: any[] = [];
    if (totalSpent > 5000 && recency < 90) {
      recommendedActions.push({
        action: "Upsell to premium plan",
        priority: "High",
        reason: "High-value customer with recent engagement - perfect for premium upsell",
        expectedOutcome: "Increase revenue by 30-50%"
      });
    }
    if (recency > 180) {
      recommendedActions.push({
        action: "Re-engagement campaign",
        priority: "High",
        reason: `Customer hasn't purchased in ${recency} days - high churn risk`,
        expectedOutcome: "Win back customer and prevent churn"
      });
    }
    if (intentScore > 0.7) {
      recommendedActions.push({
        action: "Offer loyalty rewards",
        priority: "Medium",
        reason: "High intent score indicates strong interest - reward loyalty",
        expectedOutcome: "Increase retention and lifetime value"
      });
    }
    recommendedActions.push({
      action: "Request feedback and review",
      priority: recency < 90 ? "Medium" : "Low",
      reason: "Gather insights to improve service and strengthen relationship",
      expectedOutcome: "Better understanding of customer needs"
    });

    // Build insights array
    const insights: string[] = [];
    if (totalSpent > 5000) {
      insights.push("High-value customer contributing significantly to revenue");
    }
    if (recency < 90) {
      insights.push("Recently active customer with good engagement");
    } else if (recency > 180) {
      insights.push(`Customer has been inactive for ${recency} days - requires immediate attention`);
    } else {
      insights.push("Moderate engagement - opportunity to increase frequency");
    }
    if (intentScore > 0.7) {
      insights.push("Strong purchase intent indicates readiness for upsell or cross-sell");
    } else if (intentScore < 0.3) {
      insights.push("Low intent score suggests need for re-engagement");
    } else {
      insights.push("Moderate intent - nurture relationship to increase engagement");
    }
    const segmentInsight = segment.includes("High Value") 
      ? "premium customer status" 
      : segment.includes("Re-engagement") 
      ? "need for win-back strategy" 
      : "growth potential";
    insights.push(`${segment} segment indicates ${segmentInsight}`);

    // Get customer name for personalization
    const customerName = customerData.name || customerData.customer_name || customerData.customerName || null;
    const firstName = customerName ? customerName.split(' ')[0] : null;
    const greeting = firstName ? `Hi ${firstName}!` : "Hello!";
    
    // Determine next best action with highly personalized scripts
    let nextAction = "Request feedback";
    let nextActionType = "Feedback Request";
    let nextActionReasoning = "Gather feedback to improve relationship";
    let nextActionScript = `${greeting} We noticed you've been with us for a while and we'd love to hear your thoughts. Your feedback helps us serve you better. Could you spare 2 minutes to share your experience?`;

    if (totalSpent > 5000 && recency < 90) {
      nextAction = "Upsell to premium plan";
      nextActionType = "Upsell";
      nextActionReasoning = "High-value customer with recent activity - perfect timing for premium upsell";
      nextActionScript = `${greeting} As one of our top customers with ${formatCurrency(totalSpent)} in total purchases, we have something special for you! Our premium plan offers exclusive benefits like priority support, advanced features, and ${Math.round((totalSpent * 0.3) / 100) * 100} in additional value. Would you like to learn more about how this can help you achieve even better results?`;
    } else if (recency > 180) {
      nextAction = "Re-engagement campaign";
      nextActionType = "Re-engagement";
      nextActionReasoning = `Customer inactive for ${recency} days - urgent re-engagement needed`;
      const daysText = recency > 365 ? "over a year" : `${recency} days`;
      nextActionScript = `${greeting} We've missed you! It's been ${daysText} since we last connected, and we have some exciting updates and exclusive offers we think you'll love. We'd love to reconnect and see how we can help you achieve your goals. What would be most valuable for you right now?`;
    } else if (intentScore > 0.7) {
      nextAction = "Offer loyalty rewards";
      nextActionType = "Loyalty Reward";
      nextActionReasoning = "High intent score indicates readiness for loyalty program";
      nextActionScript = `${greeting} Thank you for being such an engaged customer! Based on your strong interest and ${formatCurrency(totalSpent)} in purchases, we'd like to invite you to our exclusive loyalty program. You'll get early access to new features, special discounts, and personalized recommendations. Interested in learning more?`;
    } else if (totalSpent > 2000 && recency < 90) {
      nextAction = "Cross-sell complementary products";
      nextActionType = "Cross-sell";
      nextActionReasoning = "Active customer with good spending - opportunity for cross-sell";
      nextActionScript = `${greeting} We noticed you've been actively using our services and have invested ${formatCurrency(totalSpent)} with us. We have some complementary products that could help you get even more value. Would you like to explore options that align with your current needs?`;
    }

    // Build timeline
    const timeline: any[] = [];
    if (customerData.last_purchase_date) {
      timeline.push({
        date: customerData.last_purchase_date.split('T')[0],
        event: `Last purchase - ${formatCurrency(totalSpent)}`,
        type: "Purchase"
      });
    }

    const rfmRecency = recency < 90 ? "Recent" : recency < 180 ? "Moderate" : "Distant";
    const rfmFrequency = touchpoints > 10 ? "High" : touchpoints > 5 ? "Medium" : "Low";
    const rfmMonetary = totalSpent > 5000 ? "High" : totalSpent > 1000 ? "Medium" : "Low";
    const rfmOverall = segment.includes("High Value") 
      ? "Champions" 
      : segment.includes("Re-engagement") 
      ? "At Risk" 
      : segment.includes("New") 
      ? "New Customers" 
      : "Need Attention";

    const prompt = `You are an expert customer relationship manager and sales analyst. Analyze the following customer data and provide a comprehensive Customer 360 analysis with highly personalized recommendations.

Customer Data:
- Name: ${customerName || "Unknown"}
- Total Spent: $${totalSpent.toLocaleString()}
- Recency: ${recency} days since last purchase
- Intent Score: ${(intentScore * 100).toFixed(0)}%
- Touchpoints: ${touchpoints}
- Segment: ${segment}
- Cluster: ${customerData.cluster_label !== undefined ? customerData.cluster_label : "Unknown"}
${customerData.last_purchase_date ? `- Last Purchase: ${customerData.last_purchase_date}` : ""}
${customerData.company ? `- Company: ${customerData.company}` : ""}

Based on this data:
- Loyalty Level: ${loyaltyLevel} (Score: ${loyaltyScore}/100)
- Churn Risk: ${churnRisk} (Score: ${churnRiskScore}/100)
- Estimated LTV: $${lifetimeValue.toLocaleString()}

Please provide a detailed analysis in the following JSON format (respond with ONLY valid JSON, no markdown code blocks):

{
  "summary": "A 2-3 sentence executive summary of ${customerName || "this customer"} highlighting their value (${formatCurrency(totalSpent)} spent), engagement level (${recency} days recency, ${(intentScore * 100).toFixed(0)}% intent), and key characteristics. Make it personal and specific.",
  "loyaltyLevel": "${loyaltyLevel}",
  "loyaltyScore": ${loyaltyScore},
  "churnRisk": "${churnRisk}",
  "churnRiskScore": ${churnRiskScore},
  "lifetimeValue": ${lifetimeValue},
  "lifetimeValueReasoning": "Based on ${customerName || "this customer"}'s current spending of ${formatCurrency(totalSpent)} and engagement metrics (${(intentScore * 100).toFixed(0)}% intent, ${touchpoints} touchpoints), estimated lifetime value is ${formatCurrency(lifetimeValue)}. ${intentScore > 0.7 ? "High engagement suggests strong retention potential." : intentScore < 0.3 ? "Lower engagement may require re-activation efforts." : "Moderate engagement with growth potential."}",
  "rfmAnalysis": {
    "recency": "${rfmRecency}",
    "frequency": "${rfmFrequency}",
    "monetary": "${rfmMonetary}",
    "overallScore": "${rfmOverall}"
  },
  "recommendedActions": ${JSON.stringify(recommendedActions)},
  "insights": ${JSON.stringify(insights)},
  "timeline": ${JSON.stringify(timeline)},
  "nextBestAction": {
    "action": "${nextAction}",
    "type": "${nextActionType}",
    "reasoning": "${nextActionReasoning}",
    "script": "${nextActionScript.replace(/"/g, '\\"').replace(/\n/g, ' ')}"
  }
}

IMPORTANT: 
- Make the summary personal and specific to ${customerName || "this customer"}
- Use ${customerName ? `their name "${customerName}"` : "personal pronouns"} naturally in insights
- Keep scripts conversational, warm, and specific to their situation
- Respond with ONLY the JSON object, no markdown formatting, no code blocks, no explanations. Just pure JSON.`;

    const result = await Promise.race([
      model.generateContent(prompt),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error("AI response timeout")), 30000)
      ),
    ]) as any;
    
    const response = await result.response;
    const text = response.text().trim();

    // Parse JSON response (remove markdown code blocks if present)
    let analysis;
    try {
      // Clean the response - remove markdown code blocks
      let cleanedText = text.trim();
      
      // Remove markdown code blocks if present
      cleanedText = cleanedText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      
      // Find JSON object
      const jsonMatch = cleanedText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        analysis = JSON.parse(jsonMatch[0]);
      } else {
        analysis = JSON.parse(cleanedText);
      }
      
      // Validate and ensure all required fields exist with calculated defaults
      if (!analysis.summary) {
        analysis.summary = `${customerData.name || customerData.customer_name || "This customer"} has spent ${formatCurrency(totalSpent)} with ${recency} days since last purchase. ${recency < 90 ? "Recently active" : recency > 180 ? "Requires immediate re-engagement" : "Moderate engagement"}.`;
      }
      if (!analysis.loyaltyLevel) analysis.loyaltyLevel = loyaltyLevel;
      if (!analysis.loyaltyScore) analysis.loyaltyScore = loyaltyScore;
      if (!analysis.churnRisk) analysis.churnRisk = churnRisk;
      if (!analysis.churnRiskScore) analysis.churnRiskScore = churnRiskScore;
      if (!analysis.lifetimeValue) analysis.lifetimeValue = lifetimeValue;
      if (!analysis.lifetimeValueReasoning) {
        analysis.lifetimeValueReasoning = `Based on current spending of ${formatCurrency(totalSpent)} and engagement level (intent: ${(intentScore * 100).toFixed(0)}%), estimated LTV is ${formatCurrency(lifetimeValue)}.`;
      }
      
      // Ensure RFM analysis exists
      if (!analysis.rfmAnalysis) {
        analysis.rfmAnalysis = {
          recency: rfmRecency,
          frequency: rfmFrequency,
          monetary: rfmMonetary,
          overallScore: rfmOverall
        };
      }
      
      // Ensure recommended actions exist
      if (!analysis.recommendedActions || analysis.recommendedActions.length === 0) {
        analysis.recommendedActions = recommendedActions;
      }
      
      // Ensure insights exist
      if (!analysis.insights || analysis.insights.length === 0) {
        analysis.insights = insights;
      }
      
      // Ensure timeline exists
      if (!analysis.timeline) {
        analysis.timeline = timeline;
      }
      
      // Ensure next best action exists
      if (!analysis.nextBestAction) {
        analysis.nextBestAction = {
          action: nextAction,
          type: nextActionType,
          reasoning: nextActionReasoning,
          script: nextActionScript
        };
      }
      
    } catch (parseError: any) {
      console.error("Failed to parse AI response:", text);
      console.error("Parse error:", parseError);
      
      // Return a comprehensive default analysis structure using calculated values
      analysis = {
        summary: `${customerData.name || customerData.customer_name || "This customer"} has spent ${formatCurrency(totalSpent)} with ${recency} days since last purchase. ${recency < 90 ? "Recently active customer with good engagement" : recency > 180 ? "Requires immediate re-engagement" : "Moderate engagement - opportunity to increase frequency"}.`,
        loyaltyLevel: loyaltyLevel,
        loyaltyScore: loyaltyScore,
        churnRisk: churnRisk,
        churnRiskScore: churnRiskScore,
        lifetimeValue: lifetimeValue,
        lifetimeValueReasoning: `Based on current spending of ${formatCurrency(totalSpent)} and engagement metrics (intent: ${(intentScore * 100).toFixed(0)}%, touchpoints: ${touchpoints}), estimated lifetime value is ${formatCurrency(lifetimeValue)}.`,
        rfmAnalysis: {
          recency: rfmRecency,
          frequency: rfmFrequency,
          monetary: rfmMonetary,
          overallScore: rfmOverall
        },
        recommendedActions: recommendedActions,
        insights: insights,
        timeline: timeline,
        nextBestAction: {
          action: nextAction,
          type: nextActionType,
          reasoning: nextActionReasoning,
          script: nextActionScript
        }
      };
    }

    return NextResponse.json({
      success: true,
      analysis,
    });
  } catch (error: any) {
    console.error("Customer analysis error:", error);
    return NextResponse.json(
      {
        error: "Failed to analyze customer",
        details: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}

