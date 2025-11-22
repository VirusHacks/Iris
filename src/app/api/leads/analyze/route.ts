import { NextRequest, NextResponse } from "next/server";
import { onAuthenticateUser } from "@/action/auth";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getSegmentationCache } from "@/lib/segmentationCache";
import { prismaClient } from "@/lib/prismaClient";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || "");

/**
 * POST /api/leads/analyze
 * 
 * Analyze historical customer data to generate lead source recommendations
 */
export async function POST(request: NextRequest) {
  try {
    const user = await onAuthenticateUser();
    if (!user.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { analysisType, filters } = body;

    if (!process.env.GOOGLE_AI_API_KEY) {
      return NextResponse.json(
        { error: "Google AI API key not configured" },
        { status: 500 }
      );
    }

    // Get customer segmentation data
    const customerData = getSegmentationCache(user.user.id) || [];
    
    // Get sales transaction data for geographic and timing analysis
    let transactions: any[] = [];
    try {
      const userRecord = await prismaClient.user.findUnique({
        where: { clerkId: user.user.id },
      });

      if (userRecord) {
        transactions = await prismaClient.salesTransaction.findMany({
          where: { userId: userRecord.id },
          select: {
            country: true,
            invoiceDate: true,
            totalPrice: true,
            customerId: true,
            dayOfWeek: true,
            hourOfDay: true,
            invoiceMonth: true,
          },
          take: 1000, // Limit for performance
        });
      }
    } catch (dbError) {
      console.warn("Could not fetch transaction data:", dbError);
      // Continue with empty transactions array
    }

    // Analyze customer data for patterns
    const topCountries = analyzeTopCountries(transactions);
    const topIndustries = analyzeTopIndustries(customerData);
    const timingPatterns = analyzeTimingPatterns(transactions);
    const customerProfile = analyzeCustomerProfile(customerData);

    // If no data available, return helpful message
    if (customerData.length === 0 && transactions.length === 0) {
      return NextResponse.json({
        success: true,
        analysis: {
          summary: "No customer or transaction data available yet. Upload customer data or sales transactions to get personalized lead generation recommendations.",
          topGeographicOpportunities: [],
          topChannels: [
            {
              channel: "LinkedIn",
              priority: "High" as const,
              reason: "Best for B2B lead generation with precise targeting",
              expectedROI: "High - 3-5x return on ad spend",
              actionSteps: ["Create company page", "Run sponsored content", "Use Sales Navigator"],
            },
            {
              channel: "Content Marketing",
              priority: "Medium" as const,
              reason: "Build organic traffic and establish thought leadership",
              expectedROI: "Medium - Long-term sustainable growth",
              actionSteps: ["Start a blog", "Create valuable content", "Share on social media"],
            },
          ],
          bestTiming: {
            dayOfWeek: "Tuesday-Thursday",
            timeOfDay: "10:00-11:00 AM",
            seasonalTrends: "Q1 and Q4 typically show higher engagement",
            recommendation: "Focus outreach on weekdays during business hours",
          },
          targetAudience: {
            industry: "Various",
            companySize: "50-500 employees",
            geographicFocus: "Global",
            persona: "Mid-market businesses looking for growth solutions",
          },
          leadGenerationStrategies: [
            {
              strategy: "Multi-Channel Approach",
              description: "Combine multiple channels for maximum reach and impact",
              channels: ["LinkedIn", "Google Ads", "Email", "Content"],
              expectedResults: "Steady stream of qualified leads",
              implementationDifficulty: "Medium" as const,
            },
          ],
          quickWins: [
            {
              action: "Set up LinkedIn company page",
              impact: "High - Professional presence",
              effort: "Low" as const,
              timeline: "1-2 days",
            },
            {
              action: "Start content marketing",
              impact: "Medium - Long-term growth",
              effort: "Medium" as const,
              timeline: "Ongoing",
            },
          ],
          insights: [
            "Upload customer data to get personalized recommendations",
            "Start with proven channels like LinkedIn and Google Ads",
            "Focus on consistent outreach during business hours",
          ],
        },
        rawData: {
          topCountries: [],
          topIndustries: [],
          timingPatterns: {},
          customerProfile: {},
        },
      });
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

    const prompt = `You are an expert lead generation strategist. Analyze the following business data and provide comprehensive lead generation recommendations.

Business Data:
- Total Customers: ${customerData.length}
- Top Countries: ${JSON.stringify(topCountries.slice(0, 5))}
- Top Industries/Segments: ${JSON.stringify(topIndustries.slice(0, 5))}
- Best Timing: ${JSON.stringify(timingPatterns)}
- Customer Profile: ${JSON.stringify(customerProfile)}

Please provide detailed lead generation recommendations in the following JSON format (respond with ONLY valid JSON, no markdown):

{
  "summary": "A 2-3 sentence summary of the best lead generation opportunities based on the data",
  "topGeographicOpportunities": [
    {
      "country": "Country name",
      "reason": "Why this country is a good opportunity",
      "potentialLeads": "Estimated number or percentage",
      "strategy": "Recommended approach for this market"
    }
  ],
  "topChannels": [
    {
      "channel": "Channel name (e.g., LinkedIn, Google Ads, etc.)",
      "priority": "High|Medium|Low",
      "reason": "Why this channel is recommended",
      "expectedROI": "Expected return on investment",
      "actionSteps": ["Step 1", "Step 2", "Step 3"]
    }
  ],
  "bestTiming": {
    "dayOfWeek": "Best day(s)",
    "timeOfDay": "Best time(s)",
    "seasonalTrends": "Seasonal patterns observed",
    "recommendation": "When to focus lead generation efforts"
  },
  "targetAudience": {
    "industry": "Recommended industries",
    "companySize": "Recommended company size",
    "geographicFocus": "Geographic targeting strategy",
    "persona": "Ideal customer persona description"
  },
  "leadGenerationStrategies": [
    {
      "strategy": "Strategy name",
      "description": "Detailed description",
      "channels": ["Channel 1", "Channel 2"],
      "expectedResults": "Expected outcomes",
      "implementationDifficulty": "Easy|Medium|Hard"
    }
  ],
  "quickWins": [
    {
      "action": "Quick action item",
      "impact": "Expected impact",
      "effort": "Low|Medium|High",
      "timeline": "How long it takes"
    }
  ],
  "insights": [
    "Key insight 1",
    "Key insight 2",
    "Key insight 3"
  ]
}

Focus on:
- Actionable, specific recommendations
- Data-driven insights
- Practical implementation steps
- Realistic expectations
- Multiple channel options

IMPORTANT: Respond with ONLY the JSON object, no markdown formatting, no code blocks, no explanations. Just pure JSON.`;

    const result = await Promise.race([
      model.generateContent(prompt),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error("AI response timeout")), 30000)
      ),
    ]) as any;
    
    const response = await result.response;
    const text = response.text().trim();

    // Parse JSON response
    let analysis;
    try {
      let cleanedText = text.trim();
      cleanedText = cleanedText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      
      const jsonMatch = cleanedText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        analysis = JSON.parse(jsonMatch[0]);
      } else {
        analysis = JSON.parse(cleanedText);
      }
    } catch (parseError: any) {
      console.error("Failed to parse AI response:", text);
      // Return default analysis
      analysis = generateDefaultAnalysis(topCountries, topIndustries, timingPatterns, customerProfile);
    }

    return NextResponse.json({
      success: true,
      analysis,
      rawData: {
        topCountries,
        topIndustries,
        timingPatterns,
        customerProfile,
      },
    });
  } catch (error: any) {
    console.error("Lead analysis error:", error);
    return NextResponse.json(
      {
        error: "Failed to analyze lead sources",
        details: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}

function analyzeTopCountries(transactions: any[]) {
  const countryMap = new Map<string, { count: number; revenue: number }>();
  
  transactions.forEach((t) => {
    const country = t.country || "Unknown";
    const existing = countryMap.get(country) || { count: 0, revenue: 0 };
    countryMap.set(country, {
      count: existing.count + 1,
      revenue: existing.revenue + (t.totalPrice || 0),
    });
  });

  return Array.from(countryMap.entries())
    .map(([country, data]) => ({
      country,
      transactionCount: data.count,
      totalRevenue: data.revenue,
      avgRevenue: data.revenue / data.count,
    }))
    .sort((a, b) => b.totalRevenue - a.totalRevenue);
}

function analyzeTopIndustries(customerData: any[]) {
  const segmentMap = new Map<string, { count: number; totalSpent: number }>();
  
  customerData.forEach((c) => {
    const segment = c.promotional_segment_category || "Unknown";
    const existing = segmentMap.get(segment) || { count: 0, totalSpent: 0 };
    segmentMap.set(segment, {
      count: existing.count + 1,
      totalSpent: existing.totalSpent + (c.total_spent || 0),
    });
  });

  return Array.from(segmentMap.entries())
    .map(([segment, data]) => ({
      segment,
      customerCount: data.count,
      totalSpent: data.totalSpent,
      avgSpent: data.totalSpent / data.count,
    }))
    .sort((a, b) => b.totalSpent - a.totalSpent);
}

function analyzeTimingPatterns(transactions: any[]) {
  const dayMap = new Map<string, number>();
  const hourMap = new Map<number, number>();
  const monthMap = new Map<string, number>();

  transactions.forEach((t) => {
    if (t.dayOfWeek) {
      dayMap.set(t.dayOfWeek, (dayMap.get(t.dayOfWeek) || 0) + 1);
    }
    if (t.hourOfDay !== null && t.hourOfDay !== undefined) {
      hourMap.set(t.hourOfDay, (hourMap.get(t.hourOfDay) || 0) + 1);
    }
    if (t.invoiceMonth) {
      monthMap.set(t.invoiceMonth, (monthMap.get(t.invoiceMonth) || 0) + 1);
    }
  });

  const topDay = Array.from(dayMap.entries())
    .sort((a, b) => b[1] - a[1])[0]?.[0] || "Unknown";
  
  const topHour = Array.from(hourMap.entries())
    .sort((a, b) => b[1] - a[1])[0]?.[0] || 12;

  const topMonth = Array.from(monthMap.entries())
    .sort((a, b) => b[1] - a[1])[0]?.[0] || "Unknown";

  return {
    bestDay: topDay,
    bestHour: topHour,
    bestMonth: topMonth,
    dayDistribution: Object.fromEntries(dayMap),
    hourDistribution: Object.fromEntries(hourMap),
  };
}

function analyzeCustomerProfile(customerData: any[]) {
  if (customerData.length === 0) {
    return {
      avgSpent: 0,
      avgRecency: 0,
      avgIntent: 0.5,
      topSegment: "Unknown",
    };
  }

  const totalSpent = customerData.reduce((sum, c) => sum + (c.total_spent || 0), 0);
  const totalRecency = customerData.reduce((sum, c) => sum + (c.recency || 0), 0);
  const totalIntent = customerData.reduce((sum, c) => sum + (c.intent_score || 0.5), 0);

  const segmentCounts = new Map<string, number>();
  customerData.forEach((c) => {
    const seg = c.promotional_segment_category || "Unknown";
    segmentCounts.set(seg, (segmentCounts.get(seg) || 0) + 1);
  });

  const topSegment = Array.from(segmentCounts.entries())
    .sort((a, b) => b[1] - a[1])[0]?.[0] || "Unknown";

  return {
    avgSpent: totalSpent / customerData.length,
    avgRecency: totalRecency / customerData.length,
    avgIntent: totalIntent / customerData.length,
    topSegment,
    totalCustomers: customerData.length,
  };
}

function generateDefaultAnalysis(
  topCountries: any[],
  topIndustries: any[],
  timingPatterns: any,
  customerProfile: any
) {
  return {
    summary: `Based on your customer data, you have ${customerProfile.totalCustomers} customers with an average spend of $${customerProfile.avgSpent.toFixed(0)}. Your top market is ${topCountries[0]?.country || "Unknown"} with strong potential for expansion.`,
    topGeographicOpportunities: topCountries.slice(0, 5).map((c, i) => ({
      country: c.country,
      reason: `Strong existing presence with ${c.transactionCount} transactions and $${c.totalRevenue.toFixed(0)} in revenue`,
      potentialLeads: `${Math.round(c.transactionCount * 1.5)} potential leads`,
      strategy: `Focus on ${c.country} market with targeted campaigns`,
    })),
    topChannels: [
      {
        channel: "LinkedIn",
        priority: "High",
        reason: "B2B lead generation with precise targeting",
        expectedROI: "High - 3-5x return on ad spend",
        actionSteps: ["Create company page", "Run sponsored content", "Use Sales Navigator"],
      },
      {
        channel: "Google Ads",
        priority: "High",
        reason: "Reach customers actively searching for solutions",
        expectedROI: "Medium-High - 2-4x return",
        actionSteps: ["Research keywords", "Create landing pages", "Set up conversion tracking"],
      },
    ],
    bestTiming: {
      dayOfWeek: timingPatterns.bestDay,
      timeOfDay: `${timingPatterns.bestHour}:00`,
      seasonalTrends: `Peak in ${timingPatterns.bestMonth}`,
      recommendation: `Focus outreach on ${timingPatterns.bestDay}s around ${timingPatterns.bestHour}:00`,
    },
    targetAudience: {
      industry: topIndustries[0]?.segment || "Various",
      companySize: "50-500 employees",
      geographicFocus: topCountries[0]?.country || "Global",
      persona: `Companies in ${topIndustries[0]?.segment || "your top segment"} with average spend of $${customerProfile.avgSpent.toFixed(0)}`,
    },
    leadGenerationStrategies: [
      {
        strategy: "Content Marketing",
        description: "Create valuable content to attract leads organically",
        channels: ["Blog", "Social Media", "Email"],
        expectedResults: "Steady stream of qualified leads",
        implementationDifficulty: "Medium",
      },
    ],
    quickWins: [
      {
        action: `Focus on ${topCountries[0]?.country || "top market"}`,
        impact: "High - proven market",
        effort: "Low",
        timeline: "Immediate",
      },
    ],
    insights: [
      `Your top market is ${topCountries[0]?.country || "Unknown"} with strong revenue potential`,
      `Best time to reach out is ${timingPatterns.bestDay} at ${timingPatterns.bestHour}:00`,
      `Focus on ${topIndustries[0]?.segment || "your top segment"} segment for highest value leads`,
    ],
  };
}

