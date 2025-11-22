"use client";

import { useDashboardDataContext } from "../DashboardDataProvider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, TrendingUp, Award, BarChart3, PieChart, Pie, Cell } from "lucide-react";
import { useRouter } from "next/navigation";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Chatbot from "./Chatbot";
import { Loader2 } from "lucide-react";
import { CUSTOMERS_SYSTEM_MESSAGE } from "@/lib/ai/systemMessages";

export default function CustomersDetailPage() {
  const router = useRouter();
  const { topCustomers, rfmDistribution, rfmData, loading } = useDashboardDataContext();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-purple-400" />
      </div>
    );
  }

  // Calculate customer metrics
  const totalCustomers = topCustomers?.length || 0;
  const totalCustomerRevenue = topCustomers?.reduce((sum: number, item: any) => sum + (item.revenue || 0), 0) || 0;
  const avgCustomerValue = totalCustomers > 0 ? totalCustomerRevenue / totalCustomers : 0;
  const topCustomer = topCustomers?.[0] || null;

  // RFM segment colors
  const rfmColors: Record<string, string> = {
    "Champions": "#10b981",
    "Loyal Customers": "#3b82f6",
    "Potential Loyalists": "#8b5cf6",
    "New Customers": "#f59e0b",
    "Promising": "#06b6d4",
    "Need Attention": "#f97316",
    "About to Sleep": "#ef4444",
    "At Risk": "#dc2626",
    "Cannot Lose Them": "#991b1b",
    "Hibernating": "#6b7280",
    "Lost": "#374151",
  };

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
                onClick={() => router.push("/dashboard")}
                className="hover:bg-purple-500/10"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
                  <Users className="h-8 w-8 text-purple-400" />
                  Customer Analytics
                </h1>
                <p className="text-muted-foreground mt-1">Comprehensive customer segmentation and insights</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6 p-6 pr-[22rem]">
          {/* Main Content */}
          <div className="flex-1 space-y-6 min-w-0">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border-purple-500/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Customers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{totalCustomers.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground mt-1">Active customers</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-blue-500/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${(totalCustomerRevenue / 1000).toFixed(1)}k</div>
                  <p className="text-xs text-muted-foreground mt-1">From customers</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border-emerald-500/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Avg Customer Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${avgCustomerValue.toFixed(0)}</div>
                  <p className="text-xs text-muted-foreground mt-1">Per customer</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 border-amber-500/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Top Customer</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${topCustomer ? (topCustomer.revenue / 1000).toFixed(1) : 0}k</div>
                  <p className="text-xs text-muted-foreground mt-1">ID: {topCustomer?.customerId || "N/A"}</p>
                </CardContent>
              </Card>
            </div>

            {/* Top Customers */}
            {topCustomers && topCustomers.length > 0 && (
              <Card className="bg-gradient-to-br from-card to-card/80 border-purple-500/30 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <Award className="h-5 w-5 text-purple-400" />
                    Top Customers by Revenue
                  </CardTitle>
                  <CardDescription>Highest value customers</CardDescription>
                </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={450}>
                    <BarChart data={topCustomers.slice(0, 10)}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground))" opacity={0.2} />
                      <XAxis
                        dataKey="customerId"
                        stroke="hsl(var(--foreground))"
                        tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
                      />
                      <YAxis
                        stroke="hsl(var(--foreground))"
                        tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
                        tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--background))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                        formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
                      />
                      <Bar dataKey="revenue" fill="#a78bfa" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            )}

            {/* RFM Distribution */}
            {rfmDistribution && rfmDistribution.length > 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-card to-card/80 border-purple-500/30 backdrop-blur-sm shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-purple-400" />
                      RFM Segment Distribution
                    </CardTitle>
                    <CardDescription>Customer segmentation by RFM analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={350}>
                      <BarChart data={rfmDistribution}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground))" opacity={0.2} />
                        <XAxis
                          dataKey="segment"
                          stroke="hsl(var(--foreground))"
                          tick={{ fill: "hsl(var(--foreground))", fontSize: 11 }}
                          angle={-45}
                          textAnchor="end"
                          height={100}
                        />
                        <YAxis
                          stroke="hsl(var(--foreground))"
                          tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "hsl(var(--background))",
                            border: "1px solid hsl(var(--border))",
                            borderRadius: "8px",
                          }}
                        />
                        <Bar
                          dataKey="count"
                          fill="#a78bfa"
                          radius={[8, 8, 0, 0]}
                        >
                          {rfmDistribution.map((entry: any, index: number) => (
                            <Cell key={`cell-${index}`} fill={rfmColors[entry.segment] || "#a78bfa"} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card to-card/80 border-purple-500/30 backdrop-blur-sm shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold flex items-center gap-2">
                      <PieChart className="h-5 w-5 text-purple-400" />
                      RFM Segment Pie Chart
                    </CardTitle>
                    <CardDescription>Proportional customer distribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={350}>
                      <PieChart>
                        <Pie
                          data={rfmDistribution}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ segment, percent }) => `${segment}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={120}
                          fill="#8884d8"
                          dataKey="count"
                        >
                          {rfmDistribution.map((entry: any, index: number) => (
                            <Cell key={`cell-${index}`} fill={rfmColors[entry.segment] || "#a78bfa"} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "hsl(var(--background))",
                            border: "1px solid hsl(var(--border))",
                            borderRadius: "8px",
                          }}
                        />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* RFM Insights */}
            {rfmData && rfmData.length > 0 && (
              <Card className="bg-gradient-to-br from-card to-card/80 border-purple-500/30 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-purple-400" />
                    RFM Analysis Insights
                  </CardTitle>
                  <CardDescription>Detailed customer segmentation metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {rfmDistribution?.slice(0, 5).map((segment: any, index: number) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-muted/30"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: rfmColors[segment.segment] || "#a78bfa" }}
                          />
                          <div>
                            <p className="font-semibold">{segment.segment}</p>
                            <p className="text-sm text-muted-foreground">
                              {segment.count} customers
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">
                            {((segment.count / totalCustomers) * 100).toFixed(1)}%
                          </p>
                          <p className="text-xs text-muted-foreground">of total</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Chatbot Sidebar - Fixed to Right */}
          <div className="w-80 flex-shrink-0">
            <div className="fixed right-0 top-0 h-screen z-50">
              <Chatbot
                systemMessage={CUSTOMERS_SYSTEM_MESSAGE}
                contextData={{
                  topCustomers,
                  rfmDistribution,
                  rfmData,
                  totalCustomers,
                  totalCustomerRevenue,
                  avgCustomerValue,
                  topCustomer,
                }}
                pageTitle="Customer Analytics"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

