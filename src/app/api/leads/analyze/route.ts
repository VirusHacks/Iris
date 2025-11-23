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
 * Now with enhanced data analysis and real-time insights
 */
export async function POST(request: NextRequest) {
  try {
    const user = await onAuthenticateUser();
    if (!user.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { analysisType, filters, country, segment, timeRange } = body;

    if (!process.env.GOOGLE_AI_API_KEY) {
      return NextResponse.json(
        { error: "Google AI API key not configured" },
        { status: 500 }
      );
    }

    // Get customer segmentation data
    const customerData = getSegmentationCache(user.user.id) || [];
    
    // Get user record for database queries
    let userRecord = null;
    try {
      userRecord = await prismaClient.user.findUnique({
        where: { clerkId: user.user.id },
      });
    } catch (dbError) {
      console.warn("Could not fetch user record:", dbError);
    }

    // Get sales transaction data with filters
    let transactions: any[] = [];
    let analyticsData: any = null;
    
    try {
      if (userRecord) {
        // Build transaction query with filters
        const transactionWhere: any = { userId: userRecord.id };
        if (country) transactionWhere.country = country;
        if (timeRange) {
          const now = new Date();
          const days = timeRange === '30d' ? 30 : timeRange === '90d' ? 90 : timeRange === '1y' ? 365 : 0;
          if (days > 0) {
            transactionWhere.invoiceDate = {
              gte: new Date(now.getTime() - days * 24 * 60 * 60 * 1000)
            };
          }
        }

        transactions = await prismaClient.salesTransaction.findMany({
          where: transactionWhere,
          select: {
            country: true,
            invoiceDate: true,
            totalPrice: true,
            customerId: true,
            dayOfWeek: true,
            hourOfDay: true,
            invoiceMonth: true,
            quantity: true,
            price: true,
          },
          take: 5000, // Increased limit for better analysis
          orderBy: { invoiceDate: 'desc' },
        });

        // Get analytics data for more insights
        analyticsData = await prismaClient.dashboardAnalytics.findUnique({
          where: { userId: user.user.id },
        });
      }
    } catch (dbError) {
      console.warn("Could not fetch transaction data:", dbError);
    }

    // Enhanced data analysis
    const topCountries = analyzeTopCountries(transactions);
    const topIndustries = analyzeTopIndustries(customerData, segment);
    const timingPatterns = analyzeTimingPatterns(transactions);
    const customerProfile = analyzeCustomerProfile(customerData);
    const conversionMetrics = analyzeConversionMetrics(transactions, customerData);
    const leadQualityScore = calculateLeadQualityScore(customerData, transactions);
    const channelPerformance = analyzeChannelPerformance(transactions, customerData);
    const growthTrends = analyzeGrowthTrends(transactions, analyticsData);

    // If no data available, return helpful message
    if (customerData.length === 0 && transactions.length === 0) {
      return NextResponse.json({
        success: true,
        analysis: generateDefaultAnalysis(),
        rawData: {
          topCountries: [],
          topIndustries: [],
          timingPatterns: {},
          customerProfile: {},
          conversionMetrics: {},
          leadQualityScore: 0,
          channelPerformance: [],
          growthTrends: {},
        },
      });
    }

    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 4096, // Increased for more detailed responses
      },
    });

    // Enhanced prompt with more data
    const prompt = `You are an expert lead generation strategist with access to real business data. Analyze the following comprehensive business data and provide actionable, data-driven lead generation recommendations.

COMPREHENSIVE BUSINESS DATA:

Customer Base:
- Total Customers: ${customerData.length}
- Average Customer Value: $${customerProfile.avgSpent?.toFixed(2) || 0}
- Average Recency: ${customerProfile.avgRecency?.toFixed(0) || 0} days
- Top Customer Segment: ${customerProfile.topSegment || "N/A"}
- Lead Quality Score: ${leadQualityScore.toFixed(1)}/10

Geographic Performance:
${topCountries.slice(0, 10).map((c, i) => `${i + 1}. ${c.country}: ${c.transactionCount} transactions, $${c.totalRevenue.toFixed(0)} revenue, Avg: $${c.avgRevenue.toFixed(0)}`).join('\n')}

Customer Segments:
${topIndustries.slice(0, 10).map((s, i) => `${i + 1}. ${s.segment}: ${s.customerCount} customers, $${s.totalSpent.toFixed(0)} total, $${s.avgSpent.toFixed(0)} avg`).join('\n')}

Timing Patterns:
- Best Day: ${timingPatterns.bestDay}
- Best Hour: ${timingPatterns.bestHour}:00
- Best Month: ${timingPatterns.bestMonth}
- Day Distribution: ${JSON.stringify(timingPatterns.dayDistribution)}
- Hour Distribution: ${JSON.stringify(timingPatterns.hourDistribution)}

Conversion Metrics:
- Average Order Value: $${conversionMetrics.avgOrderValue?.toFixed(2) || 0}
- Customer Lifetime Value: $${conversionMetrics.avgLTV?.toFixed(2) || 0}
- Repeat Purchase Rate: ${(conversionMetrics.repeatRate * 100).toFixed(1)}%
- Average Orders per Customer: ${conversionMetrics.avgOrdersPerCustomer?.toFixed(1) || 0}

Growth Trends:
${growthTrends.recentGrowth > 0 ? `- Recent Growth: +${(growthTrends.recentGrowth * 100).toFixed(1)}%` : `- Recent Growth: ${(growthTrends.recentGrowth * 100).toFixed(1)}%`}
- Top Growing Market: ${growthTrends.topGrowingMarket || "N/A"}
- Seasonal Pattern: ${growthTrends.seasonalPattern || "N/A"}

Channel Performance (Historical):
${channelPerformance.map((ch, i) => `${i + 1}. ${ch.channel}: ${ch.performance} performance, ${ch.recommendation}`).join('\n')}

FILTERS APPLIED:
${country ? `- Country: ${country}` : '- Country: All'}
${segment ? `- Segment: ${segment}` : '- Segment: All'}
${timeRange ? `- Time Range: ${timeRange}` : '- Time Range: All Time'}

Based on this REAL data, provide detailed, actionable lead generation recommendations in the following JSON format (respond with ONLY valid JSON, no markdown):

{
  "summary": "A 3-4 sentence summary with specific numbers and data points from the analysis",
  "topGeographicOpportunities": [
    {
      "country": "Country name",
      "reason": "Specific data-driven reason (e.g., 'Generated $X revenue from Y transactions with Z% growth')",
      "potentialLeads": "Estimated number based on data (e.g., '150-200 leads')",
      "strategy": "Specific, actionable strategy for this market",
      "confidence": "High|Medium|Low",
      "estimatedRevenue": "Estimated revenue potential"
    }
  ],
  "topChannels": [
    {
      "channel": "Channel name",
      "priority": "High|Medium|Low",
      "reason": "Data-driven reason with specific metrics",
      "expectedROI": "Specific ROI estimate (e.g., '3.5x return, $50K in 90 days')",
      "actionSteps": ["Specific step 1", "Specific step 2", "Specific step 3"],
      "budgetRecommendation": "Recommended budget range",
      "timeline": "Expected timeline for results"
    }
  ],
  "bestTiming": {
    "dayOfWeek": "Specific day(s) based on data",
    "timeOfDay": "Specific time(s) based on data",
    "seasonalTrends": "Specific seasonal patterns observed",
    "recommendation": "Specific timing recommendation with data backing"
  },
  "targetAudience": {
    "industry": "Specific industry based on top segments",
    "companySize": "Specific size based on data",
    "geographicFocus": "Specific geographic strategy",
    "persona": "Detailed persona description based on best customers",
    "similarityScore": "How similar new leads should be to best customers"
  },
  "leadGenerationStrategies": [
    {
      "strategy": "Strategy name",
      "description": "Detailed description with data backing",
      "channels": ["Channel 1", "Channel 2"],
      "expectedResults": "Specific expected results with numbers",
      "implementationDifficulty": "Easy|Medium|Hard",
      "cost": "Estimated cost range",
      "timeline": "Implementation timeline"
    }
  ],
  "quickWins": [
    {
      "action": "Specific actionable item",
      "impact": "Expected impact with numbers",
      "effort": "Low|Medium|High",
      "timeline": "How long it takes",
      "priority": "High|Medium|Low"
    }
  ],
  "insights": [
    "Data-driven insight 1 with specific numbers",
    "Data-driven insight 2 with specific numbers",
    "Data-driven insight 3 with specific numbers"
  ],
  "leadScoringCriteria": {
    "highValue": "Criteria for high-value leads based on best customers",
    "mediumValue": "Criteria for medium-value leads",
    "lowValue": "Criteria for low-value leads"
  },
  "recommendedActions": [
    {
      "action": "Specific action",
      "reason": "Why this action is recommended",
      "expectedOutcome": "Expected outcome with numbers",
      "nextSteps": ["Step 1", "Step 2"]
    }
  ]
}

CRITICAL REQUIREMENTS:
1. Use ACTUAL numbers from the data provided
2. Be SPECIFIC and ACTIONABLE - no generic advice
3. Reference specific data points in your recommendations
4. Provide realistic timelines and budgets
5. Focus on channels and strategies that match the customer profile
6. Consider the filters applied (country, segment, time range)
7. Base recommendations on patterns in the actual data

IMPORTANT: Respond with ONLY the JSON object, no markdown formatting, no code blocks, no explanations. Just pure JSON.`;

    const result = await Promise.race([
      model.generateContent(prompt),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error("AI response timeout")), 45000)
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
      // Return enhanced default analysis
      analysis = generateEnhancedDefaultAnalysis(
        topCountries,
        topIndustries,
        timingPatterns,
        customerProfile,
        conversionMetrics,
        leadQualityScore
      );
    }

    return NextResponse.json({
      success: true,
      analysis,
      rawData: {
        topCountries,
        topIndustries,
        timingPatterns,
        customerProfile,
        conversionMetrics,
        leadQualityScore,
        channelPerformance,
        growthTrends,
        totalTransactions: transactions.length,
        totalCustomers: customerData.length,
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
  const countryMap = new Map<string, { count: number; revenue: number; customers: Set<number> }>();
  
  transactions.forEach((t) => {
    const country = t.country || "Unknown";
    const existing = countryMap.get(country) || { count: 0, revenue: 0, customers: new Set<number>() };
    countryMap.set(country, {
      count: existing.count + 1,
      revenue: existing.revenue + (t.totalPrice || 0),
      customers: existing.customers.add(t.customerId || 0),
    });
  });

  return Array.from(countryMap.entries())
    .map(([country, data]) => ({
      country,
      transactionCount: data.count,
      totalRevenue: data.revenue,
      avgRevenue: data.revenue / data.count,
      uniqueCustomers: data.customers.size,
      avgRevenuePerCustomer: data.revenue / data.customers.size,
    }))
    .sort((a, b) => b.totalRevenue - a.totalRevenue);
}

function analyzeTopIndustries(customerData: any[], segmentFilter?: string) {
  let filteredData = customerData;
  if (segmentFilter) {
    filteredData = customerData.filter(c => 
      c.promotional_segment_category?.toLowerCase().includes(segmentFilter.toLowerCase())
    );
  }

  const segmentMap = new Map<string, { count: number; totalSpent: number; avgRecency: number; avgIntent: number }>();
  
  filteredData.forEach((c) => {
    const segment = c.promotional_segment_category || "Unknown";
    const existing = segmentMap.get(segment) || { count: 0, totalSpent: 0, avgRecency: 0, avgIntent: 0 };
    segmentMap.set(segment, {
      count: existing.count + 1,
      totalSpent: existing.totalSpent + (c.total_spent || 0),
      avgRecency: existing.avgRecency + (c.recency || 0),
      avgIntent: existing.avgIntent + (c.intent_score || 0),
    });
  });

  return Array.from(segmentMap.entries())
    .map(([segment, data]) => ({
      segment,
      customerCount: data.count,
      totalSpent: data.totalSpent,
      avgSpent: data.totalSpent / data.count,
      avgRecency: data.avgRecency / data.count,
      avgIntent: data.avgIntent / data.count,
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
    monthDistribution: Object.fromEntries(monthMap),
  };
}

function analyzeCustomerProfile(customerData: any[]) {
  if (customerData.length === 0) {
    return {
      avgSpent: 0,
      avgRecency: 0,
      avgIntent: 0.5,
      topSegment: "Unknown",
      totalCustomers: 0,
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

function analyzeConversionMetrics(transactions: any[], customerData: any[]) {
  if (transactions.length === 0) {
    return {
      avgOrderValue: 0,
      avgLTV: 0,
      repeatRate: 0,
      avgOrdersPerCustomer: 0,
    };
  }

  const totalRevenue = transactions.reduce((sum, t) => sum + (t.totalPrice || 0), 0);
  const avgOrderValue = totalRevenue / transactions.length;

  // Calculate LTV from customer data
  const totalLTV = customerData.reduce((sum, c) => sum + (c.total_spent || 0), 0);
  const avgLTV = customerData.length > 0 ? totalLTV / customerData.length : 0;

  // Calculate repeat purchase rate
  const customerOrderCounts = new Map<number, number>();
  transactions.forEach(t => {
    const custId = t.customerId || 0;
    customerOrderCounts.set(custId, (customerOrderCounts.get(custId) || 0) + 1);
  });
  const repeatCustomers = Array.from(customerOrderCounts.values()).filter(count => count > 1).length;
  const repeatRate = customerOrderCounts.size > 0 ? repeatCustomers / customerOrderCounts.size : 0;

  const avgOrdersPerCustomer = customerOrderCounts.size > 0 
    ? transactions.length / customerOrderCounts.size 
    : 0;

  return {
    avgOrderValue,
    avgLTV,
    repeatRate,
    avgOrdersPerCustomer,
  };
}

function calculateLeadQualityScore(customerData: any[], transactions: any[]): number {
  if (customerData.length === 0) return 5.0;

  // Factors: avg spend, recency, intent, repeat rate
  const profile = analyzeCustomerProfile(customerData);
  const metrics = analyzeConversionMetrics(transactions, customerData);

  // Normalize scores (0-10 scale)
  const spendScore = Math.min(10, (profile.avgSpent / 1000) * 2); // $5000 = 10
  const recencyScore = Math.max(0, 10 - (profile.avgRecency / 100)); // 0 days = 10, 1000 days = 0
  const intentScore = profile.avgIntent * 10; // 0-1 to 0-10
  const repeatScore = metrics.repeatRate * 10; // 0-1 to 0-10

  return (spendScore * 0.3 + recencyScore * 0.2 + intentScore * 0.3 + repeatScore * 0.2);
}

function analyzeChannelPerformance(transactions: any[], customerData: any[]): Array<{
  channel: string;
  performance: string;
  recommendation: string;
}> {
  // Analyze which channels would work best based on customer profile
  const profile = analyzeCustomerProfile(customerData);
  const metrics = analyzeConversionMetrics(transactions, customerData);

  const channels = [];

  // LinkedIn - good for B2B, high intent
  if (profile.avgIntent > 0.6 && profile.avgSpent > 500) {
    channels.push({
      channel: "LinkedIn",
      performance: "High",
      recommendation: `Strong match: High intent (${(profile.avgIntent * 100).toFixed(0)}%) and high value customers ($${profile.avgSpent.toFixed(0)} avg)`,
    });
  }

  // Google Ads - good for high search intent
  if (profile.avgSpent > 300) {
    channels.push({
      channel: "Google Ads",
      performance: "Medium-High",
      recommendation: `Good match: Average order value $${metrics.avgOrderValue.toFixed(0)} supports paid search`,
    });
  }

  // Email - good for repeat customers
  if (metrics.repeatRate > 0.3) {
    channels.push({
      channel: "Email Marketing",
      performance: "High",
      recommendation: `Excellent match: ${(metrics.repeatRate * 100).toFixed(0)}% repeat purchase rate`,
    });
  }

  // Content Marketing - good for high LTV
  if (metrics.avgLTV > 1000) {
    channels.push({
      channel: "Content Marketing",
      performance: "Medium",
      recommendation: `Good match: High LTV ($${metrics.avgLTV.toFixed(0)}) supports long-term content strategy`,
    });
  }

  return channels.length > 0 ? channels : [
    {
      channel: "Multi-Channel",
      performance: "Medium",
      recommendation: "Start with a balanced multi-channel approach",
    },
  ];
}

function analyzeGrowthTrends(transactions: any[], analyticsData: any): {
  recentGrowth: number;
  topGrowingMarket: string;
  seasonalPattern: string;
} {
  if (!analyticsData || !analyticsData.monthlySales) {
    return {
      recentGrowth: 0,
      topGrowingMarket: "N/A",
      seasonalPattern: "N/A",
    };
  }

  const monthlySales = analyticsData.monthlySales as Array<{ month: string; revenue: number }>;
  if (monthlySales.length < 2) {
    return {
      recentGrowth: 0,
      topGrowingMarket: "N/A",
      seasonalPattern: "N/A",
    };
  }

  // Calculate recent growth (last 3 months vs previous 3)
  const recent = monthlySales.slice(-3).reduce((sum, m) => sum + (m.revenue || 0), 0);
  const previous = monthlySales.slice(-6, -3).reduce((sum, m) => sum + (m.revenue || 0), 0);
  const growth = previous > 0 ? (recent - previous) / previous : 0;

  // Find top growing market from transactions
  const countryGrowth = new Map<string, number[]>();
  transactions.forEach(t => {
    if (t.country && t.invoiceDate) {
      const month = new Date(t.invoiceDate).toISOString().slice(0, 7);
      const existing = countryGrowth.get(t.country) || [];
      existing.push(t.totalPrice || 0);
      countryGrowth.set(t.country, existing);
    }
  });

  let topMarket = "N/A";
  let maxGrowth = 0;
  countryGrowth.forEach((revenues, country) => {
    if (revenues.length >= 2) {
      const recentRev = revenues.slice(-3).reduce((a, b) => a + b, 0);
      const prevRev = revenues.slice(-6, -3).reduce((a, b) => a + b, 0);
      const countryGrowth = prevRev > 0 ? (recentRev - prevRev) / prevRev : 0;
      if (countryGrowth > maxGrowth) {
        maxGrowth = countryGrowth;
        topMarket = country;
      }
    }
  });

  // Simple seasonal pattern detection
  const seasonalPattern = monthlySales.length >= 12 
    ? "Q4 typically strongest, Q1 shows recovery" 
    : "Insufficient data for seasonal analysis";

  return {
    recentGrowth: growth,
    topGrowingMarket: topMarket,
    seasonalPattern,
  };
}

function generateDefaultAnalysis() {
  return {
    summary: "No customer or transaction data available yet. Upload customer data or sales transactions to get personalized lead generation recommendations.",
    topGeographicOpportunities: [],
    topChannels: [
      {
        channel: "LinkedIn",
        priority: "High" as const,
        reason: "Best for B2B lead generation with precise targeting",
        expectedROI: "High - 3-5x return on ad spend",
        actionSteps: ["Create company page", "Run sponsored content", "Use Sales Navigator"],
        budgetRecommendation: "$500-2000/month",
        timeline: "2-4 weeks to first leads",
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
      similarityScore: "Match best customers' profile",
    },
    leadGenerationStrategies: [],
    quickWins: [],
    insights: [],
    leadScoringCriteria: {},
    recommendedActions: [],
  };
}

function generateEnhancedDefaultAnalysis(
  topCountries: any[],
  topIndustries: any[],
  timingPatterns: any,
  customerProfile: any,
  conversionMetrics: any,
  leadQualityScore: number
) {
  return {
    summary: `Based on your ${customerProfile.totalCustomers} customers with an average spend of $${customerProfile.avgSpent.toFixed(0)}, your lead quality score is ${leadQualityScore.toFixed(1)}/10. Your top market is ${topCountries[0]?.country || "Unknown"} with strong potential for expansion.`,
    topGeographicOpportunities: topCountries.slice(0, 5).map((c) => ({
      country: c.country,
      reason: `Strong existing presence with ${c.transactionCount} transactions and $${c.totalRevenue.toFixed(0)} in revenue`,
      potentialLeads: `${Math.round(c.transactionCount * 1.5)} potential leads`,
      strategy: `Focus on ${c.country} market with targeted campaigns`,
      confidence: "High" as const,
      estimatedRevenue: `$${(c.totalRevenue * 1.2).toFixed(0)} potential`,
    })),
    topChannels: [
      {
        channel: "LinkedIn",
        priority: "High" as const,
        reason: `B2B lead generation matches your customer profile ($${customerProfile.avgSpent.toFixed(0)} avg spend)`,
        expectedROI: `3-5x return, $${(conversionMetrics.avgLTV * 10).toFixed(0)}K in 90 days`,
        actionSteps: ["Create company page", "Run sponsored content", "Use Sales Navigator"],
        budgetRecommendation: "$500-2000/month",
        timeline: "2-4 weeks to first leads",
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
      similarityScore: "Match customers with $500+ spend and <200 days recency",
    },
    leadGenerationStrategies: [
      {
        strategy: "Multi-Channel Approach",
        description: "Combine multiple channels for maximum reach and impact",
        channels: ["LinkedIn", "Google Ads", "Email", "Content"],
        expectedResults: "Steady stream of qualified leads",
        implementationDifficulty: "Medium" as const,
        cost: "$1000-3000/month",
        timeline: "4-8 weeks",
      },
    ],
    quickWins: [
      {
        action: `Focus on ${topCountries[0]?.country || "top market"}`,
        impact: "High - proven market",
        effort: "Low" as const,
        timeline: "Immediate",
        priority: "High" as const,
      },
    ],
    insights: [
      `Your top market is ${topCountries[0]?.country || "Unknown"} with strong revenue potential`,
      `Best time to reach out is ${timingPatterns.bestDay} at ${timingPatterns.bestHour}:00`,
      `Focus on ${topIndustries[0]?.segment || "your top segment"} segment for highest value leads`,
    ],
    leadScoringCriteria: {
      highValue: `Match best customers: $${customerProfile.avgSpent.toFixed(0)}+ spend, <${customerProfile.avgRecency.toFixed(0)} days recency`,
      mediumValue: `Moderate match: $${(customerProfile.avgSpent * 0.6).toFixed(0)}+ spend`,
      lowValue: "Below average profile",
    },
    recommendedActions: [
      {
        action: `Target ${topCountries[0]?.country || "top market"}`,
        reason: "Proven market with existing revenue",
        expectedOutcome: `${Math.round(topCountries[0]?.transactionCount * 1.5 || 0)} new leads`,
        nextSteps: ["Create targeted campaign", "Set up tracking", "Launch in 1 week"],
      },
    ],
  };
}
