"use client";

import { useState } from "react";
import { useDashboardDataContext } from "../DashboardDataProvider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, DollarSign, Calendar, BarChart3, Bot, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, AreaChart, Area } from "recharts";
import Chatbot from "./Chatbot";
import { Loader2 } from "lucide-react";
import { REVENUE_SYSTEM_MESSAGE } from "@/lib/ai/systemMessages";

export default function RevenueDetailPage() {
  const router = useRouter();
  const { monthlySales, aovTrend, revenueByDay, revenueByHour, revenueForecast, loading } = useDashboardDataContext();
  const [isChatbotOpen, setIsChatbotOpen] = useState(true);

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
        <div className="border-b border-border/50 bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-transparent px-8 py-6 backdrop-blur-sm shadow-sm">
          <div className="max-w-[1920px] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => router.push("/dashboard")}
                className="hover:bg-purple-500/10 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
                  <DollarSign className="h-8 w-8 text-purple-400" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-foreground flex items-center gap-2 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Revenue Analytics
                </h1>
                  <p className="text-muted-foreground mt-1.5 text-sm font-medium">Comprehensive revenue insights and trends</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`flex gap-6 p-6 transition-all duration-300 ${isChatbotOpen ? 'pr-[29rem]' : 'pr-6'}`}>
          {/* Main Content */}
          <div className={`flex-1 space-y-6 min-w-0 transition-all duration-300 ${isChatbotOpen ? 'max-w-[calc(100%-29rem)]' : 'max-w-full'}`}>
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-purple-500/20">
                      <DollarSign className="h-4 w-4 text-purple-400" />
                    </div>
                    Total Revenue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-400 mb-1">${(totalRevenue / 1000).toFixed(1)}k</div>
                  <p className="text-xs text-muted-foreground font-medium">All time</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-blue-500/20">
                      <BarChart3 className="h-4 w-4 text-blue-400" />
                    </div>
                    Avg Monthly
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-400 mb-1">${(avgMonthlyRevenue / 1000).toFixed(1)}k</div>
                  <p className="text-xs text-muted-foreground font-medium">Per month</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-emerald-500/20">
                      <TrendingUp className="h-4 w-4 text-emerald-400" />
                    </div>
                    Growth Rate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`text-3xl font-bold flex items-center gap-1 mb-1 ${growthRate >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                    {growthRate >= 0 ? "+" : ""}{growthRate.toFixed(1)}%
                    <TrendingUp className={`h-5 w-5 ${growthRate >= 0 ? "text-emerald-400" : "text-red-400 rotate-180"}`} />
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">Period over period</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-amber-500/20">
                      <Calendar className="h-4 w-4 text-amber-400" />
                    </div>
                    Peak Month
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-amber-400 mb-1">${peakMonth ? (peakMonth.revenue / 1000).toFixed(1) : 0}k</div>
                  <p className="text-xs text-muted-foreground font-medium">{peakMonth?.month || "N/A"}</p>
                </CardContent>
              </Card>
            </div>

            {/* Monthly Revenue Trend */}
            <Card className="bg-gradient-to-br from-card to-card/80 border-purple-500/30 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                  <BarChart3 className="h-5 w-5 text-purple-400" />
                  </div>
                  Monthly Revenue Trend
                </CardTitle>
                <CardDescription className="mt-1.5 font-medium">Historical revenue performance over time</CardDescription>
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
              <Card className="bg-gradient-to-br from-card to-card/80 border-purple-500/30 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/20">
                    <TrendingUp className="h-5 w-5 text-purple-400" />
                    </div>
                    Revenue Forecast (Prophet AI)
                  </CardTitle>
                  <CardDescription className="mt-1.5 font-medium">AI-powered revenue predictions with confidence intervals</CardDescription>
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
          {isChatbotOpen && (
            <div className="w-[28rem] flex-shrink-0">
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
                  isOpen={isChatbotOpen}
                  onClose={() => setIsChatbotOpen(false)}
              />
            </div>
          </div>
          )}

          {/* Floating Chat Button - Show when chatbot is closed */}
          {!isChatbotOpen && (
            <Button
              onClick={() => setIsChatbotOpen(true)}
              className="fixed bottom-8 right-8 h-14 w-14 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 shadow-2xl hover:shadow-purple-500/50 z-40 transition-all duration-300 hover:scale-110"
              size="icon"
            >
              <MessageSquare className="h-6 w-6" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

