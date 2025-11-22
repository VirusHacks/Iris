"use client";

import { useDashboardDataContext } from "../../DashboardDataProvider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Clock } from "lucide-react";

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
    const value = payload[0].value as number;
    return (
      <div className="bg-background/95 backdrop-blur-md border-2 border-primary/50 rounded-xl p-4 shadow-2xl">
        <p className="font-bold text-lg text-foreground mb-2">{label}</p>
        <p className="text-xl font-bold text-primary">{formatCurrency(value)}</p>
      </div>
    );
  }
  return null;
};

export default function RevenueByHourAreaChart() {
  const { revenueByHour } = useDashboardDataContext();
  const data = revenueByHour || [];

  if (data.length === 0) {
    return (
      <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 backdrop-blur-sm shadow-xl">
        <CardHeader className="border-b border-border/50">
          <CardTitle className="text-xl font-bold">Revenue by Hour of Day</CardTitle>
          <CardDescription>Peak shopping hours</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="h-[400px] flex items-center justify-center">
            <p className="text-muted-foreground">No data available</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const chartData = data.map((item) => ({
    hour: `${String(item.hour).padStart(2, "0")}:00`,
    revenue: item.revenue,
    hourNum: item.hour,
  }));

  const bestHour = data.reduce((max, item) => item.revenue > max.revenue ? item : max, data[0]);
  const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0);

  return (
    <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
      <CardHeader className="border-b border-border/50 bg-gradient-to-r from-indigo-500/5 to-transparent">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <Clock className="h-5 w-5 text-indigo-400" />
              Revenue by Hour of Day
            </CardTitle>
            <CardDescription className="mt-2">
              Best hour: {String(bestHour.hour).padStart(2, "0")}:00 ({formatCurrency(bestHour.revenue)}) • Total: {formatCurrency(totalRevenue)}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="bg-gradient-to-br from-background/50 to-background/30 rounded-xl p-4 border border-border/30">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 80 }}>
              <defs>
                <linearGradient id="colorHour" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground))" opacity={0.2} />
              <XAxis 
                dataKey="hour" 
                angle={-45} 
                textAnchor="end" 
                height={100}
                stroke="hsl(var(--foreground))"
                tick={{ fill: "hsl(var(--foreground))", fontSize: 10, fontWeight: 600 }}
                tickLine={{ stroke: "hsl(var(--muted-foreground))" }}
                interval={1}
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
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#6366f1"
                strokeWidth={3}
                fill="url(#colorHour)"
                name="Revenue"
                dot={{ fill: "#6366f1", r: 4, strokeWidth: 2, stroke: "#fff" }}
                activeDot={{ r: 6, fill: "#6366f1", stroke: "#fff", strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

