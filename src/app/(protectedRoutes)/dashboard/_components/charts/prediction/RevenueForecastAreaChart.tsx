"use client";

import { useDashboardDataContext } from "../../DashboardDataProvider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Line } from "recharts";
import { TrendingUp } from "lucide-react";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-background/95 backdrop-blur-md border-2 border-purple-500/50 rounded-xl p-4 shadow-2xl">
        <p className="font-bold text-lg text-foreground mb-3 border-b border-border pb-2">{`Month: ${label}`}</p>
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-medium text-muted-foreground">Revenue:</span>
            <span className={`text-lg font-bold ${data.type === 'forecast' ? 'text-purple-400' : 'text-primary'}`}>
              {formatCurrency(data.value)}
            </span>
          </div>
          {data.type === "forecast" && (
            <>
              <div className="flex items-center justify-between gap-4 pt-2 border-t border-border">
                <span className="text-xs text-muted-foreground">Upper Bound:</span>
                <span className="text-sm font-semibold text-emerald-400">
                  {formatCurrency(data.yhat_upper || data.value)}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs text-muted-foreground">Lower Bound:</span>
                <span className="text-sm font-semibold text-red-400">
                  {formatCurrency(data.yhat_lower || data.value)}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
  return null;
};

export default function RevenueForecastAreaChart({ periods }: { periods: number }) {
  const { revenueForecast } = useDashboardDataContext();
  const data = revenueForecast;
  const error = revenueForecast?.error || null;

  if (!data || data.error) {
    return (
      <Card className="bg-gradient-to-br from-card to-card/80 border-purple-500/30 backdrop-blur-sm shadow-xl">
        <CardHeader className="border-b border-border/50 bg-gradient-to-r from-purple-500/10 to-transparent">
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-purple-400" />
            Revenue Forecast (Prophet AI)
          </CardTitle>
          <CardDescription>AI-powered revenue predictions</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="h-[450px] flex items-center justify-center">
            <p className="text-muted-foreground text-center px-4">
              {error || data?.error || "No forecast available. Ensure Python forecast service is running."}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!data.historical || data.historical.length === 0) {
    return (
      <Card className="bg-gradient-to-br from-card to-card/80 border-purple-500/30 backdrop-blur-sm shadow-xl">
        <CardHeader className="border-b border-border/50">
          <CardTitle className="text-xl font-bold">Revenue Forecast (Prophet AI)</CardTitle>
          <CardDescription>AI-powered revenue predictions</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="h-[450px] flex items-center justify-center">
            <p className="text-muted-foreground text-center px-4">
              No historical data available for forecasting
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const chartData = [...(data.historical || []), ...(data.forecast || [])];
  const lastHistoricalIndex = data.historical?.length || 0;

  return (
    <Card className="bg-gradient-to-br from-card to-card/80 border-purple-500/30 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
      <CardHeader className="border-b border-border/50 bg-gradient-to-r from-purple-500/10 to-transparent">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-purple-400" />
              Revenue Forecast (Prophet AI)
            </CardTitle>
            <CardDescription className="mt-2">
              {periods}-month projection • MAPE: {data.metrics?.mape?.toFixed(2) || "N/A"}% • 
              RMSE: {formatCurrency(data.metrics?.rmse || 0)}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="bg-gradient-to-br from-background/50 to-background/30 rounded-xl p-4 border border-purple-500/20">
          <ResponsiveContainer width="100%" height={450}>
            <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#a78bfa" stopOpacity={0.05}/>
                </linearGradient>
                <linearGradient id="colorHistorical" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground))" opacity={0.2} />
              <XAxis 
                dataKey="month" 
                stroke="hsl(var(--foreground))"
                tick={{ fill: "hsl(var(--foreground))", fontSize: 12, fontWeight: 600 }}
                angle={-45}
                textAnchor="end"
                height={80}
                tickLine={{ stroke: "hsl(var(--muted-foreground))" }}
              />
              <YAxis 
                stroke="hsl(var(--foreground))"
                tick={{ fill: "hsl(var(--foreground))", fontSize: 12, fontWeight: 600 }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                tickLine={{ stroke: "hsl(var(--muted-foreground))" }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ color: "hsl(var(--foreground))", fontWeight: 600 }}
                iconType="circle"
              />
              {/* Confidence interval area */}
              {data.forecast && data.forecast.length > 0 && (
                <Area
                  type="monotone"
                  dataKey="yhat_upper"
                  stroke="none"
                  fill="url(#colorForecast)"
                  data={chartData.slice(lastHistoricalIndex)}
                  connectNulls
                />
              )}
              {/* Historical area */}
              <Area
                type="monotone"
                dataKey="value"
                stroke="#8b5cf6"
                strokeWidth={3}
                fill="url(#colorHistorical)"
                name="Historical Revenue"
                data={data.historical}
                dot={{ fill: "#8b5cf6", r: 5, strokeWidth: 2, stroke: "#fff" }}
                activeDot={{ r: 8, fill: "#8b5cf6", stroke: "#fff", strokeWidth: 2 }}
              />
              {/* Forecast line (dashed) */}
              <Line
                type="monotone"
                dataKey="value"
                stroke="#a78bfa"
                strokeWidth={3}
                strokeDasharray="8 4"
                dot={{ fill: "#a78bfa", r: 5, strokeWidth: 2, stroke: "#fff" }}
                activeDot={{ r: 8, fill: "#a78bfa", stroke: "#fff", strokeWidth: 2 }}
                name="Forecasted Revenue"
                data={chartData.slice(lastHistoricalIndex)}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

