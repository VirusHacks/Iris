"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, User, Building2, Phone, Mail, DollarSign, TrendingUp, AlertTriangle, Award, Sparkles, MessageSquare, Video, FileText, Loader2, Calendar, Target, BarChart3 } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CustomerData {
  id: string;
  customerId: string | null;
  name: string | null;
  phone: string | null;
  email: string | null;
  company: string | null;
  totalSpent: number;
  intentScore: number;
  touchpointsCount: number;
  recency: number;
  promotionalSegmentCategory: string;
  clusterLabel: number;
  lastPurchaseDate: string | null;
  [key: string]: any;
}

interface CustomerAnalysis {
  summary: string;
  loyaltyLevel: "Bronze" | "Silver" | "Gold" | "Platinum";
  loyaltyScore: number;
  churnRisk: "Low" | "Medium" | "High";
  churnRiskScore: number;
  lifetimeValue: number;
  lifetimeValueReasoning: string;
  rfmAnalysis: {
    recency: string;
    frequency: string;
    monetary: string;
    overallScore: string;
  };
  recommendedActions: Array<{
    action: string;
    priority: "High" | "Medium" | "Low";
    reason: string;
    expectedOutcome: string;
  }>;
  insights: string[];
  timeline: Array<{
    date: string;
    event: string;
    type: string;
  }>;
  nextBestAction: {
    action: string;
    type: string;
    reasoning: string;
    script: string;
  };
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const formatDate = (date: string | null) => {
  if (!date) return "N/A";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const getLoyaltyColor = (level: string) => {
  switch (level) {
    case "Platinum":
      return "from-purple-500 to-purple-600";
    case "Gold":
      return "from-yellow-500 to-yellow-600";
    case "Silver":
      return "from-gray-400 to-gray-500";
    case "Bronze":
      return "from-orange-600 to-orange-700";
    default:
      return "from-gray-400 to-gray-500";
  }
};

const getChurnRiskColor = (risk: string) => {
  switch (risk) {
    case "Low":
      return "text-emerald-400 bg-emerald-500/10 border-emerald-500/50";
    case "Medium":
      return "text-amber-400 bg-amber-500/10 border-amber-500/50";
    case "High":
      return "text-red-400 bg-red-500/10 border-red-500/50";
    default:
      return "text-gray-400 bg-gray-500/10 border-gray-500/50";
  }
};

interface Customer360PageProps {
  customerId?: string;
}

export default function Customer360Page({ customerId: propCustomerId }: Customer360PageProps = {}) {
  const params = useParams();
  const router = useRouter();
  const customerId = propCustomerId || (params?.customerId as string);

  const [customer, setCustomer] = useState<CustomerData | null>(null);
  const [analysis, setAnalysis] = useState<CustomerAnalysis | null>(null);
  const [loading, setLoading] = useState(true);
  const [analyzing, setAnalyzing] = useState(false);

  useEffect(() => {
    if (customerId) {
      fetchCustomerData();
    }
  }, [customerId]);

  const fetchCustomerData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/customers/${customerId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch customer");
      }
      const data = await response.json();
      if (data.success) {
        setCustomer(data.customer);
        // Auto-analyze when customer data is loaded
        analyzeCustomer(data.customer);
      }
    } catch (error: any) {
      console.error("Error fetching customer:", error);
      toast.error("Failed to load customer data");
    } finally {
      setLoading(false);
    }
  };

  const analyzeCustomer = async (customerData: CustomerData) => {
    setAnalyzing(true);
    try {
      const response = await fetch(`/api/customers/${customerId}/analyze`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ customerData }),
      });

      const result = await response.json();
      if (result.success) {
        setAnalysis(result.analysis);
        toast.success("Customer analysis completed!");
      } else {
        throw new Error(result.error || "Failed to analyze customer");
      }
    } catch (error: any) {
      console.error("Analysis error:", error);
      toast.error("Failed to analyze customer");
    } finally {
      setAnalyzing(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-purple-400" />
      </div>
    );
  }

  if (!customer) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Card>
          <CardContent className="p-8 text-center">
            <AlertTriangle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Customer not found</p>
            <Button onClick={() => router.push("/dashboard/customers")} className="mt-4">
              Back to Customers
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="w-full">
        {/* Header */}
        <div className="border-b border-border/50 bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-transparent px-6 py-4">
          <div className="max-w-[1920px] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => router.push("/dashboard/customers")}
                className="hover:bg-purple-500/10"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
                  <User className="h-8 w-8 text-purple-400" />
                  Customer 360
                </h1>
                <p className="text-muted-foreground mt-1">
                  Complete customer profile and insights
                </p>
              </div>
            </div>
            {analyzing && (
              <Badge variant="outline" className="px-4 py-2">
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Analyzing...
              </Badge>
            )}
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Identity & Company Info */}
          <Card className="bg-gradient-to-br from-card to-card/80 border-border/50">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <User className="h-5 w-5 text-purple-400" />
                Identity & Company Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    Name
                  </div>
                  <p className="text-lg font-semibold">{customer.name || customer.customerId || "N/A"}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="h-4 w-4" />
                    Company
                  </div>
                  <p className="text-lg font-semibold">{customer.company || "N/A"}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    Phone
                  </div>
                  <p className="text-lg font-semibold">{customer.phone || "N/A"}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    Email
                  </div>
                  <p className="text-lg font-semibold">{customer.email || "N/A"}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Analysis Summary */}
          {analysis && (
            <Card className="bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-purple-500/10 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-400" />
                  AI-Powered Analysis Summary
                </CardTitle>
                <CardDescription>Comprehensive customer insights generated by AI</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed mb-6">{analysis.summary}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                    <div className="text-sm text-muted-foreground mb-2">Loyalty Level</div>
                    <Badge className={`bg-gradient-to-r ${getLoyaltyColor(analysis.loyaltyLevel)} text-white px-4 py-2 text-lg`}>
                      {analysis.loyaltyLevel}
                    </Badge>
                    <div className="text-xs text-muted-foreground mt-2">Score: {analysis.loyaltyScore}/100</div>
                  </div>
                  <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                    <div className="text-sm text-muted-foreground mb-2">Churn Risk</div>
                    <Badge className={`${getChurnRiskColor(analysis.churnRisk)} px-4 py-2 text-lg`}>
                      {analysis.churnRisk}
                    </Badge>
                    <div className="text-xs text-muted-foreground mt-2">Score: {analysis.churnRiskScore}/100</div>
                  </div>
                  <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                    <div className="text-sm text-muted-foreground mb-2">Lifetime Value</div>
                    <div className="text-2xl font-bold text-emerald-400">{formatCurrency(analysis.lifetimeValue)}</div>
                    <div className="text-xs text-muted-foreground mt-2">{analysis.lifetimeValueReasoning}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Key Metrics & RFM Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-purple-400" />
                  Key Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total Spent</span>
                    <span className="text-lg font-bold text-emerald-400">{formatCurrency(customer.totalSpent)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Intent Score</span>
                    <Badge variant="outline">
                      {(customer.intentScore * 100).toFixed(0)}%
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Touchpoints</span>
                    <span className="text-lg font-semibold">{customer.touchpointsCount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Recency</span>
                    <span className="text-lg font-semibold">{customer.recency} days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Last Purchase</span>
                    <span className="text-sm">{formatDate(customer.lastPurchaseDate)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Segment</span>
                    <Badge variant="outline">{customer.promotionalSegmentCategory}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {analysis && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-bold flex items-center gap-2">
                    <Target className="h-5 w-5 text-purple-400" />
                    RFM Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Recency</span>
                      <Badge variant="outline">{analysis.rfmAnalysis.recency}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Frequency</span>
                      <Badge variant="outline">{analysis.rfmAnalysis.frequency}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Monetary</span>
                      <Badge variant="outline">{analysis.rfmAnalysis.monetary}</Badge>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground font-medium">Overall Score</span>
                        <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50">
                          {analysis.rfmAnalysis.overallScore}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Recommended Actions & Next Best Action */}
          {analysis && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-bold flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-purple-400" />
                    Recommended Actions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {analysis.recommendedActions.map((action, index) => (
                      <div key={index} className="p-3 rounded-lg bg-muted/30 border border-border/50">
                        <div className="flex items-start justify-between mb-2">
                          <span className="font-semibold">{action.action}</span>
                          <Badge 
                            variant="outline"
                            className={
                              action.priority === "High" 
                                ? "border-red-500 text-red-400"
                                : action.priority === "Medium"
                                ? "border-amber-500 text-amber-400"
                                : "border-blue-500 text-blue-400"
                            }
                          >
                            {action.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{action.reason}</p>
                        <p className="text-xs text-muted-foreground">Expected: {action.expectedOutcome}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border-emerald-500/20">
                <CardHeader>
                  <CardTitle className="text-lg font-bold flex items-center gap-2">
                    <Award className="h-5 w-5 text-emerald-400" />
                    Next Best Action
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Action</div>
                      <p className="font-semibold text-lg">{analysis.nextBestAction.action}</p>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Type</div>
                      <Badge variant="outline">{analysis.nextBestAction.type}</Badge>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Reasoning</div>
                      <p className="text-sm">{analysis.nextBestAction.reasoning}</p>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Suggested Script</div>
                      <div className="p-3 rounded-lg bg-background/50 border border-border/50 text-sm">
                        {analysis.nextBestAction.script}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Key Insights */}
          {analysis && analysis.insights && analysis.insights.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-400" />
                  Key Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {analysis.insights.map((insight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <span className="text-sm">{insight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-400" />
                Customer Timeline
              </CardTitle>
              <CardDescription>Complete interaction history</CardDescription>
            </CardHeader>
            <CardContent>
              {analysis && analysis.timeline && analysis.timeline.length > 0 ? (
                <div className="space-y-4">
                  {analysis.timeline.map((event, index) => (
                    <div key={index} className="flex gap-4 pb-4 border-b border-border/50 last:border-0">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                          {event.type === "Purchase" && <DollarSign className="h-5 w-5 text-purple-400" />}
                          {event.type === "Call" && <Phone className="h-5 w-5 text-blue-400" />}
                          {event.type === "Meeting" && <Video className="h-5 w-5 text-emerald-400" />}
                          {event.type === "Campaign" && <MessageSquare className="h-5 w-5 text-amber-400" />}
                          {!["Purchase", "Call", "Meeting", "Campaign"].includes(event.type) && <Calendar className="h-5 w-5 text-gray-400" />}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold">{event.event}</span>
                          <Badge variant="outline" className="text-xs">{event.type}</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">{formatDate(event.date)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No timeline events available</p>
                  <p className="text-xs mt-2">Timeline will be populated as interactions occur</p>
                  {/* Show last purchase as a timeline event if available */}
                  {customer.lastPurchaseDate && (
                    <div className="mt-6 p-4 rounded-lg bg-muted/30 border border-border/50 text-left max-w-md mx-auto">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                            <DollarSign className="h-5 w-5 text-purple-400" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold">Last Purchase</span>
                            <Badge variant="outline" className="text-xs">Purchase</Badge>
                          </div>
                          <div className="text-sm text-muted-foreground">{formatDate(customer.lastPurchaseDate)}</div>
                          <div className="text-sm font-medium mt-1 text-emerald-400">{formatCurrency(customer.totalSpent)}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold">Quick Actions</CardTitle>
              <CardDescription>Take immediate action with this customer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button
                  variant="outline"
                  className="h-auto py-4 flex flex-col items-center gap-2"
                  onClick={() => toast.info("Video agent meeting prep coming soon")}
                >
                  <Video className="h-6 w-6 text-purple-400" />
                  <div className="text-center">
                    <div className="font-semibold">Prep Meeting</div>
                    <div className="text-xs text-muted-foreground">with Video Agent</div>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 flex flex-col items-center gap-2"
                  onClick={() => {
                    if (analysis?.nextBestAction?.script) {
                      navigator.clipboard.writeText(analysis.nextBestAction.script);
                      toast.success("Upsell script copied to clipboard!");
                    } else {
                      toast.info("Generate analysis first to get upsell script");
                    }
                  }}
                >
                  <FileText className="h-6 w-6 text-blue-400" />
                  <div className="text-center">
                    <div className="font-semibold">Generate</div>
                    <div className="text-xs text-muted-foreground">Upsell Script</div>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 flex flex-col items-center gap-2"
                  onClick={() => {
                    if (customer.phone) {
                      router.push(`/dashboard/customers?sendWhatsApp=${customer.id}`);
                    } else {
                      toast.error("No phone number available for this customer");
                    }
                  }}
                >
                  <MessageSquare className="h-6 w-6 text-green-400" />
                  <div className="text-center">
                    <div className="font-semibold">Send</div>
                    <div className="text-xs text-muted-foreground">Follow-up Message</div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

