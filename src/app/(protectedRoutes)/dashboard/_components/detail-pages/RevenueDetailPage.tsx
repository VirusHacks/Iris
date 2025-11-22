"use client";

import { useDashboardDataContext } from "../DashboardDataProvider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, DollarSign, Calendar, BarChart3 } from "lucide-react";
import { useRouter } from "next/navigation";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, AreaChart, Area } from "recharts";
import Chatbot from "./Chatbot";
import { Loader2 } from "lucide-react";
import { REVENUE_SYSTEM_MESSAGE } from "@/lib/ai/systemMessages";

export default function RevenueDetailPage() {
  const router = useRouter();
  const { monthlySales, aovTrend, revenueByDay, revenueByHour, revenueForecast, loading } = useDashboardDataContext();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-purple-400" />
      </div>
    );
  }

  // Calculate summary metrics
  const totalRevenue = monthlySales?.reduce((sum: number, item: any) => sum + (item.revenue || 0), 0) || 0;
  const avgMonthlyRevenue = monthlySales?.length > 0 ? totalRevenue / monthlySales.length : 0;
  const peakMonth = monthlySales?.reduce((max: any, item: any) => 
    (item.revenue || 0) > (max.revenue || 0) ? item : max, monthlySales[0]
  );
  const growthRate = monthlySales && monthlySales.length >= 2
    ? ((monthlySales[monthlySales.length - 1]?.revenue || 0) - (monthlySales[0]?.revenue || 0)) / (monthlySales[0]?.revenue || 1) * 100
    : 0;

  // Combine historical and forecast data
  const forecastData = revenueForecast ? [
    ...(revenueForecast.historical || []).map((item: any) => ({
      month: item.month,
      revenue: item.value,
      type: "Historical",
    })),
    ...(revenueForecast.forecast || []).map((item: any) => ({
      month: item.month,
      revenue: item.value,
      type: "Forecast",
      yhat_lower: item.yhat_lower,
      yhat_upper: item.yhat_upper,
    })),
  ] : [];

  return (
    <div className="min-h-screen bg-background">
      <div className="w-full">
        {/* Header */}
        <div className="border-b border-border/50 bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-transparent px-6 py-5 backdrop-blur-sm">
          <div className="max-w-[1920px] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => router.push("/dashboard")}
                className="hover:bg-purple-500/10 rounded-lg"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30">
                  <DollarSign className="h-8 w-8 text-purple-400" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
                    Revenue Analytics
                  </h1>
                  <p className="text-muted-foreground mt-1 text-sm">Comprehensive revenue insights and trends</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6 p-6 pr-[22rem]">
          {/* Main Content */}
          <div className="flex-1 space-y-6 min-w-0">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border-purple-500/30 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-purple-400" />
                    Total Revenue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-400">${(totalRevenue / 1000).toFixed(1)}k</div>
                  <p className="text-xs text-muted-foreground mt-1">All time</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-blue-500/30 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-blue-400" />
                    Avg Monthly
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-400">${(avgMonthlyRevenue / 1000).toFixed(1)}k</div>
                  <p className="text-xs text-muted-foreground mt-1">Per month</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-emerald-400" />
                    Growth Rate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`text-3xl font-bold flex items-center gap-1 ${growthRate >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                    {growthRate >= 0 ? "+" : ""}{growthRate.toFixed(1)}%
                    <TrendingUp className={`h-5 w-5 ${growthRate >= 0 ? "text-emerald-400" : "text-red-400 rotate-180"}`} />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Period over period</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 border-amber-500/30 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-amber-400" />
                    Peak Month
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-amber-400">${peakMonth ? (peakMonth.revenue / 1000).toFixed(1) : 0}k</div>
                  <p className="text-xs text-muted-foreground mt-1">{peakMonth?.month || "N/A"}</p>
                </CardContent>
              </Card>
            </div>

            {/* Monthly Revenue Trend */}
            <Card className="bg-gradient-to-br from-card to-card/80 border-purple-500/30 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-purple-400" />
                  Monthly Revenue Trend
                </CardTitle>
                <CardDescription>Historical revenue performance over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={450}>
                  <AreaChart data={monthlySales || []}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground))" opacity={0.2} />
                    <XAxis
                      dataKey="month"
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
                        border: "2px solid hsl(var(--purple-500))",
                        borderRadius: "12px",
                        padding: "12px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      }}
                      formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
                      labelStyle={{ fontWeight: 600, marginBottom: "8px" }}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#a78bfa"
                      fillOpacity={1}
                      fill="url(#colorRevenue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Revenue Forecast */}
            {forecastData.length > 0 && (
              <Card className="bg-gradient-to-br from-card to-card/80 border-purple-500/30 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-purple-400" />
                    Revenue Forecast (Prophet AI)
                  </CardTitle>
                  <CardDescription>AI-powered revenue predictions with confidence intervals</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={450}>
                    <AreaChart data={forecastData}>
                      <defs>
                        <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground))" opacity={0.2} />
                      <XAxis
                        dataKey="month"
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
                        border: "2px solid hsl(var(--purple-500))",
                        borderRadius: "12px",
                        padding: "12px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      }}
                      formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
                      labelStyle={{ fontWeight: 600, marginBottom: "8px" }}
                    />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#a78bfa"
                        fillOpacity={1}
                        fill="url(#colorForecast)"
                        name="Revenue"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            )}

            {/* Revenue by Day of Week and Hour - Side by Side */}
            {revenueByDay && revenueByDay.length > 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-card to-card/80 border-purple-500/30 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-purple-400" />
                    Revenue by Day of Week
                  </CardTitle>
                  <CardDescription>Weekly revenue patterns</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={revenueByDay}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground))" opacity={0.2} />
                      <XAxis
                        dataKey="day"
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
                        border: "2px solid hsl(var(--purple-500))",
                        borderRadius: "12px",
                        padding: "12px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      }}
                      formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
                      labelStyle={{ fontWeight: 600, marginBottom: "8px" }}
                    />
                      <Bar dataKey="revenue" fill="#a78bfa" radius={[8, 8, 0, 0]} opacity={0.9} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Revenue by Hour */}
              {revenueByHour && revenueByHour.length > 0 && (
                <Card className="bg-gradient-to-br from-card to-card/80 border-purple-500/30 backdrop-blur-sm shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-purple-400" />
                      Revenue by Hour of Day
                    </CardTitle>
                    <CardDescription>Hourly revenue distribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={revenueByHour}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground))" opacity={0.2} />
                      <XAxis
                        dataKey="hour"
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
                        border: "2px solid hsl(var(--purple-500))",
                        borderRadius: "12px",
                        padding: "12px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      }}
                      formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
                      labelStyle={{ fontWeight: 600, marginBottom: "8px" }}
                    />
                      <Bar dataKey="revenue" fill="#a78bfa" radius={[8, 8, 0, 0]} opacity={0.9} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              )}
              </div>
            )}
          </div>

          {/* Chatbot Sidebar - Fixed to Right */}
          <div className="w-80 flex-shrink-0">
            <div className="fixed right-0 top-0 h-screen z-50">
              <Chatbot
                systemMessage={REVENUE_SYSTEM_MESSAGE}
                contextData={{
                  monthlySales,
                  aovTrend,
                  revenueByDay,
                  revenueByHour,
                  revenueForecast,
                  totalRevenue,
                  avgMonthlyRevenue,
                  peakMonth,
                  growthRate,
                }}
                pageTitle="Revenue Analytics"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

