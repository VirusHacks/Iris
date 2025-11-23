"use client";

import { useState } from "react";
import { useDashboardDataContext } from "../DashboardDataProvider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart, TrendingUp, Package, BarChart3, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, AreaChart, Area } from "recharts";
import Chatbot from "./Chatbot";
import { Loader2 } from "lucide-react";
import { ORDERS_SYSTEM_MESSAGE } from "@/lib/ai/systemMessages";

export default function OrdersDetailPage() {
  const router = useRouter();
  const { monthlySales, aovTrend, ordersForecast, loading } = useDashboardDataContext();
  const [isChatbotOpen, setIsChatbotOpen] = useState(true);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-purple-400" />
      </div>
    );
  }

  // Calculate order metrics from revenue and AOV
  const orderData = monthlySales?.map((sales: any, index: number) => {
    const aov = aovTrend?.[index]?.aov || 0;
    const orders = aov > 0 ? Math.round(sales.revenue / aov) : 0;
    return {
      month: sales.month,
      orders,
      revenue: sales.revenue,
      aov,
    };
  }) || [];

  const totalOrders = orderData.reduce((sum, item) => sum + item.orders, 0);
  const avgOrdersPerMonth = orderData.length > 0 ? totalOrders / orderData.length : 0;
  const peakOrders = orderData.reduce((max, item) => 
    item.orders > max.orders ? item : max, orderData[0] || { orders: 0, month: "" }
  );
  const avgAOV = aovTrend && aovTrend.length > 0
    ? aovTrend.reduce((sum: number, item: any) => sum + (item.aov || 0), 0) / aovTrend.length
    : 0;

  // Combine historical and forecast data for orders
  const forecastData = ordersForecast ? [
    ...(ordersForecast.historical || []).map((item: any) => ({
      month: item.month,
      orders: item.value,
      type: "Historical",
    })),
    ...(ordersForecast.forecast || []).map((item: any) => ({
      month: item.month,
      orders: item.value,
      type: "Forecast",
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
                  <ShoppingCart className="h-8 w-8 text-purple-400" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-foreground flex items-center gap-2 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Orders Analytics
                </h1>
                  <p className="text-muted-foreground mt-1.5 text-sm font-medium">Comprehensive order volume insights and trends</p>
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
                      <ShoppingCart className="h-4 w-4 text-purple-400" />
                    </div>
                    Total Orders
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-400 mb-1">{totalOrders.toLocaleString()}</div>
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
                  <div className="text-3xl font-bold text-blue-400 mb-1">{Math.round(avgOrdersPerMonth).toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground font-medium">Per month</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-emerald-500/20">
                      <TrendingUp className="h-4 w-4 text-emerald-400" />
                    </div>
                    Peak Orders
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-emerald-400 mb-1">{peakOrders.orders.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground font-medium">{peakOrders.month || "N/A"}</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-amber-500/20">
                      <Package className="h-4 w-4 text-amber-400" />
                    </div>
                    Avg Order Value
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-amber-400 mb-1">
                    ${aovTrend && aovTrend.length > 0
                      ? (aovTrend.reduce((sum: number, item: any) => sum + (item.aov || 0), 0) / aovTrend.length).toFixed(0)
                      : 0}
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">Per order</p>
                </CardContent>
              </Card>
            </div>

            {/* Monthly Orders Trend */}
            <Card className="bg-gradient-to-br from-card to-card/80 border-purple-500/30 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                  <BarChart3 className="h-5 w-5 text-purple-400" />
                  </div>
                  Monthly Orders Trend
                </CardTitle>
                <CardDescription className="mt-1.5 font-medium">Historical order volume over time</CardDescription>
              </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={450}>
                    <AreaChart data={orderData}>
                    <defs>
                      <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
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
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        border: "2px solid hsl(var(--purple-500))",
                        borderRadius: "12px",
                        padding: "12px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      }}
                      formatter={(value: number) => [value.toLocaleString(), "Orders"]}
                      labelStyle={{ fontWeight: 600, marginBottom: "8px" }}
                    />
                    <Area
                      type="monotone"
                      dataKey="orders"
                      stroke="#a78bfa"
                      fillOpacity={1}
                      fill="url(#colorOrders)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Orders Forecast */}
            {forecastData.length > 0 && (
              <Card className="bg-gradient-to-br from-card to-card/80 border-purple-500/30 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/20">
                    <TrendingUp className="h-5 w-5 text-purple-400" />
                    </div>
                    Orders Forecast (Prophet AI)
                  </CardTitle>
                  <CardDescription className="mt-1.5 font-medium">AI-powered order volume predictions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={450}>
                    <AreaChart data={forecastData}>
                      <defs>
                        <linearGradient id="colorOrdersForecast" x1="0" y1="0" x2="0" y2="1">
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
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--background))",
                          border: "2px solid hsl(var(--purple-500))",
                          borderRadius: "12px",
                          padding: "12px",
                          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                        formatter={(value: number) => [value.toLocaleString(), "Orders"]}
                        labelStyle={{ fontWeight: 600, marginBottom: "8px" }}
                      />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="orders"
                        stroke="#a78bfa"
                        fillOpacity={1}
                        fill="url(#colorOrdersForecast)"
                        name="Orders"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            )}

            {/* Orders vs Revenue Correlation */}
            <Card className="bg-gradient-to-br from-card to-card/80 border-purple-500/30 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                  <Package className="h-5 w-5 text-purple-400" />
                  </div>
                  Orders vs Revenue Correlation
                </CardTitle>
                <CardDescription className="mt-1.5 font-medium">Relationship between order volume and revenue</CardDescription>
              </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={450}>
                    <LineChart data={orderData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground))" opacity={0.2} />
                    <XAxis
                      dataKey="month"
                      stroke="hsl(var(--foreground))"
                      tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
                    />
                    <YAxis
                      yAxisId="left"
                      stroke="hsl(var(--foreground))"
                      tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
                    />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
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
                      labelStyle={{ fontWeight: 600, marginBottom: "8px" }}
                    />
                    <Legend />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="orders"
                      stroke="#a78bfa"
                      name="Orders"
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="revenue"
                      stroke="#10b981"
                      name="Revenue"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Chatbot Sidebar - Fixed to Right */}
          {isChatbotOpen && (
            <div className="w-[28rem] flex-shrink-0">
            <div className="fixed right-0 top-0 h-screen z-50">
              <Chatbot
                systemMessage={ORDERS_SYSTEM_MESSAGE}
                contextData={{
                  orderData,
                  monthlySales,
                  aovTrend,
                  ordersForecast,
                  totalOrders,
                  avgOrdersPerMonth,
                  peakOrders,
                  avgAOV,
                }}
                pageTitle="Orders Analytics"
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

