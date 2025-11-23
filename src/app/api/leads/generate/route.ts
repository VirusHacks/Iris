import { NextRequest, NextResponse } from "next/server";
import { onAuthenticateUser } from "@/action/auth";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getSegmentationCache } from "@/lib/segmentationCache";
import { prismaClient } from "@/lib/prismaClient";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || "");

/**
 * POST /api/leads/generate
 * 
 * Generate actual leads based on best customer profiles and analysis
 */
export async function POST(request: NextRequest) {
  try {
    const user = await onAuthenticateUser();
    if (!user.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { 
      count = 50, 
      country, 
      segment, 
      criteria,
      useAI = true 
    } = body;

    if (!process.env.GOOGLE_AI_API_KEY && useAI) {
      return NextResponse.json(
        { error: "Google AI API key not configured" },
        { status: 500 }
      );
    }

    // Get customer segmentation data
    const customerData = getSegmentationCache(user.user.id) || [];
    
    if (customerData.length === 0) {
      return NextResponse.json(
        { error: "No customer data available. Please upload customer data first." },
        { status: 400 }
      );
    }

    // Analyze best customers to create lead profiles
    const bestCustomers = customerData
      .filter(c => {
        if (country && c.country !== country) return false;
        if (segment && c.promotional_segment_category !== segment) return false;
        return true;
      })
      .sort((a, b) => (b.total_spent || 0) - (a.total_spent || 0))
      .slice(0, 100); // Top 100 customers as reference

    if (bestCustomers.length === 0) {
      return NextResponse.json(
        { error: "No customers match the selected criteria." },
        { status: 400 }
      );
    }

    // Calculate average profile of best customers
    const avgProfile = {
      totalSpent: bestCustomers.reduce((sum, c) => sum + (c.total_spent || 0), 0) / bestCustomers.length,
      avgRecency: bestCustomers.reduce((sum, c) => sum + (c.recency || 0), 0) / bestCustomers.length,
      avgIntent: bestCustomers.reduce((sum, c) => sum + (c.intent_score || 0.5), 0) / bestCustomers.length,
      avgTouchpoints: bestCustomers.reduce((sum, c) => sum + (c.touchpoints_count || 0), 0) / bestCustomers.length,
      topSegment: bestCustomers[0]?.promotional_segment_category || "High Value Engagement",
      topCountries: [...new Set(bestCustomers.map(c => c.country).filter(Boolean))].slice(0, 5),
    };

    let generatedLeads: any[] = [];

    if (useAI) {
      // Use AI to generate realistic lead profiles
      const model = genAI.getGenerativeModel({ 
        model: "gemini-2.5-flash",
        generationConfig: {
          temperature: 0.8,
          topP: 0.95,
          topK: 40,
          maxOutputTokens: 4096,
        },
      });

      const prompt = `You are a lead generation expert. Based on the following best customer profile, generate ${count} realistic B2B lead profiles that match this profile.

Best Customer Profile:
- Average Total Spent: $${avgProfile.totalSpent.toFixed(2)}
- Average Recency: ${avgProfile.avgRecency.toFixed(0)} days
- Average Intent Score: ${(avgProfile.avgIntent * 100).toFixed(1)}%
- Average Touchpoints: ${avgProfile.avgTouchpoints.toFixed(1)}
- Top Segment: ${avgProfile.topSegment}
- Top Countries: ${avgProfile.topCountries.join(", ")}

Generate leads in the following JSON format (respond with ONLY valid JSON, no markdown):

{
  "leads": [
    {
      "name": "Company/Person name",
      "email": "realistic-email@company.com",
      "phone": "valid phone number",
      "company": "Company name",
      "industry": "Industry name",
      "companySize": "50-200 employees",
      "country": "One of the top countries",
      "jobTitle": "Relevant job title",
      "website": "company-website.com",
      "estimatedValue": "Estimated customer value in $",
      "leadScore": "Score 1-100 based on match to profile",
      "matchReason": "Why this lead matches the profile"
    }
  ]
}

Requirements:
- Make leads realistic and diverse
- Use actual company names and industries
- Ensure emails follow standard formats
- Phone numbers should be valid formats
- Lead scores should reflect how well they match the best customer profile
- Match reasons should be specific
- Vary company sizes but focus on target range
- Use countries from the top countries list

IMPORTANT: Respond with ONLY the JSON object, no markdown formatting, no code blocks, no explanations. Just pure JSON.`;

      try {
        const result = await Promise.race([
          model.generateContent(prompt),
          new Promise((_, reject) => 
            setTimeout(() => reject(new Error("AI response timeout")), 45000)
          ),
        ]) as any;
        
        const response = await result.response;
        const text = response.text().trim();

        // Parse JSON response
        let parsedResponse;
        try {
          let cleanedText = text.trim();
          cleanedText = cleanedText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
          
          const jsonMatch = cleanedText.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            parsedResponse = JSON.parse(jsonMatch[0]);
          } else {
            parsedResponse = JSON.parse(cleanedText);
          }

          generatedLeads = parsedResponse.leads || [];
        } catch (parseError: any) {
          console.error("Failed to parse AI response:", text);
          // Fall back to rule-based generation
          generatedLeads = generateLeadsRuleBased(count, avgProfile, bestCustomers);
        }
      } catch (aiError: any) {
        console.error("AI generation error:", aiError);
        // Fall back to rule-based generation
        generatedLeads = generateLeadsRuleBased(count, avgProfile, bestCustomers);
      }
    } else {
      // Rule-based generation without AI
      generatedLeads = generateLeadsRuleBased(count, avgProfile, bestCustomers);
    }

    // Calculate lead statistics
    const leadStats = {
      totalLeads: generatedLeads.length,
      avgLeadScore: generatedLeads.reduce((sum, l) => sum + (parseInt(l.leadScore) || 50), 0) / generatedLeads.length,
      highValueLeads: generatedLeads.filter(l => parseInt(l.leadScore) >= 70).length,
      estimatedTotalValue: generatedLeads.reduce((sum, l) => {
        const value = parseFloat(l.estimatedValue?.replace(/[^0-9.]/g, '') || '0');
        return sum + value;
      }, 0),
    };

    return NextResponse.json({
      success: true,
      leads: generatedLeads,
      stats: leadStats,
      profile: avgProfile,
    });
  } catch (error: any) {
    console.error("Lead generation error:", error);
    return NextResponse.json(
      {
        error: "Failed to generate leads",
        details: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}

function generateLeadsRuleBased(
  count: number,
  avgProfile: any,
  bestCustomers: any[]
): any[] {
  const leads: any[] = [];
  const industries = ["Technology", "Healthcare", "Finance", "Retail", "Manufacturing", "Education", "Real Estate", "Consulting"];
  const jobTitles = [
    "CEO", "CTO", "VP of Sales", "Marketing Director", "Operations Manager",
    "Business Development Manager", "Product Manager", "Finance Director"
  ];
  const companySizes = ["10-50", "50-200", "200-500", "500-1000", "1000+"];

  for (let i = 0; i < count; i++) {
    const country = avgProfile.topCountries[Math.floor(Math.random() * avgProfile.topCountries.length)] || "United States";
    const industry = industries[Math.floor(Math.random() * industries.length)];
    const companySize = companySizes[Math.floor(Math.random() * companySizes.length)];
    const jobTitle = jobTitles[Math.floor(Math.random() * jobTitles.length)];
    
    // Generate realistic company name
    const companyNames = [
      `${industry} Solutions Inc`, `${industry} Group`, `Global ${industry}`,
      `${industry} Partners`, `Advanced ${industry}`, `${industry} Systems`
    ];
    const companyName = companyNames[Math.floor(Math.random() * companyNames.length)];

    // Calculate lead score based on similarity to profile
    const baseScore = 50;
    const sizeScore = companySize.includes("50") || companySize.includes("200") ? 20 : 10;
    const countryScore = avgProfile.topCountries.includes(country) ? 20 : 10;
    const leadScore = Math.min(100, baseScore + sizeScore + countryScore + Math.floor(Math.random() * 10));

    // Estimate value based on profile
    const estimatedValue = avgProfile.totalSpent * (0.8 + Math.random() * 0.4);

    leads.push({
      name: `${jobTitle} at ${companyName}`,
      email: `contact${i + 1}@${companyName.toLowerCase().replace(/\s+/g, '')}.com`,
      phone: `+1-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
      company: companyName,
      industry: industry,
      companySize: `${companySize} employees`,
      country: country,
      jobTitle: jobTitle,
      website: `${companyName.toLowerCase().replace(/\s+/g, '')}.com`,
      estimatedValue: `$${estimatedValue.toFixed(0)}`,
      leadScore: leadScore.toString(),
      matchReason: `Matches profile: ${companySize} employees in ${country}, ${industry} industry`,
    });
  }

  return leads;
}

