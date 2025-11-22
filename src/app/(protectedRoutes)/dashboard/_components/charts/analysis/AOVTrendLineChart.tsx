"use client";

import { useDashboardDataContext } from "../../DashboardDataProvider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background/95 backdrop-blur-md border-2 border-primary/50 rounded-xl p-4 shadow-2xl">
        <p className="font-bold text-lg text-foreground mb-3 border-b border-border pb-2">{`Month: ${label}`}</p>
        <div className="space-y-2">
          {payload.map((item: any, index: number) => (
            <div key={index} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-sm font-medium text-muted-foreground">{item.name}</span>
              </div>
              <span className="text-lg font-bold text-primary">{formatCurrency(item.value)}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default function AOVTrendLineChart() {
  const { aovTrend } = useDashboardDataContext();
  const data = aovTrend || [];

  if (data.length === 0) {
    return (
      <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 backdrop-blur-sm shadow-xl">
        <CardHeader className="border-b border-border/50">
          <CardTitle className="text-xl font-bold">Average Order Value Trend</CardTitle>
          <CardDescription>Customer spending patterns</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="h-[400px] flex items-center justify-center">
            <p className="text-muted-foreground">No data available</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const avgAOV = data.reduce((sum, item) => sum + item.aov, 0) / data.length;
  const maxAOV = Math.max(...data.map(item => item.aov));
  const minAOV = Math.min(...data.map(item => item.aov));

  return (
    <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
      <CardHeader className="border-b border-border/50 bg-gradient-to-r from-blue-500/5 to-transparent">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Average Order Value Trend
            </CardTitle>
            <CardDescription className="mt-2">
              Average: {formatCurrency(avgAOV)} • Range: {formatCurrency(minAOV)} - {formatCurrency(maxAOV)}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="bg-gradient-to-br from-background/50 to-background/30 rounded-xl p-4 border border-border/30">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground))" opacity={0.2} />
              <XAxis 
                dataKey="month" 
                stroke="hsl(var(--foreground))"
                tick={{ fill: "hsl(var(--foreground))", fontSize: 12, fontWeight: 600 }}
                tickLine={{ stroke: "hsl(var(--muted-foreground))" }}
              />
              <YAxis 
                stroke="hsl(var(--foreground))"
                tick={{ fill: "hsl(var(--foreground))", fontSize: 12, fontWeight: 600 }}
                tickFormatter={(value) => `$${value.toFixed(0)}`}
                tickLine={{ stroke: "hsl(var(--muted-foreground))" }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ color: "hsl(var(--foreground))", fontWeight: 600 }}
                iconType="circle"
              />
              <Line
                type="monotone"
                dataKey="aov"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ fill: "#3b82f6", r: 5, strokeWidth: 2, stroke: "#fff" }}
                activeDot={{ r: 8, fill: "#3b82f6", stroke: "#fff", strokeWidth: 2 }}
                name="Average Order Value"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

