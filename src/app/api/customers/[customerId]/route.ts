import { NextRequest, NextResponse } from "next/server";
import { onAuthenticateUser } from "@/action/auth";
import { getSegmentationCache } from "@/lib/segmentationCache";

/**
 * GET /api/customers/[customerId]
 * 
 * Get detailed customer information by ID
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ customerId: string }> }
) {
  try {
    const user = await onAuthenticateUser();
    if (!user.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { customerId } = await params;

    // Get cached segmentation data
    const cachedData = getSegmentationCache(user.user.id);
    
    if (!cachedData) {
      return NextResponse.json(
        { error: "No customer data available" },
        { status: 404 }
      );
    }

    // Find customer by ID
    const customer = cachedData.find((c: any) => 
      c.customerId === customerId || 
      c.id === customerId ||
      c.customer_id === customerId
    );

    if (!customer) {
      return NextResponse.json(
        { error: "Customer not found" },
        { status: 404 }
      );
    }

    // Extract all customer information
    const customerData = {
      id: customer.customerId || customer.id || customer.customer_id,
      customerId: customer.customerId || customer.id || customer.customer_id,
      name: customer.name || customer.customer_name || customer.customerName || null,
      phone: customer.phone || customer.phone_number || customer.mobile || customer.whatsapp || null,
      email: customer.email || customer.email_address || null,
      company: customer.company || customer.company_name || null,
      totalSpent: customer.total_spent || 0,
      intentScore: customer.intent_score || 0.5,
      touchpointsCount: customer.touchpoints_count || 0,
      recency: customer.recency || 0,
      promotionalSegmentScore: customer.promotional_segment_score || null,
      promotionalSegmentCategory: customer.promotional_segment_category || "Unknown",
      clusterLabel: customer.cluster_label !== undefined ? customer.cluster_label : -1,
      lastPurchaseDate: customer.last_purchase_date || null,
      // Include all other fields from customer data
      ...customer,
    };

    return NextResponse.json({
      success: true,
      customer: customerData,
    });
  } catch (error: any) {
    console.error("[Customer API] Error:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch customer",
        details: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}

