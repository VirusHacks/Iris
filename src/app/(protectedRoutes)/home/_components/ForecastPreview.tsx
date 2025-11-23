"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const forecastData = [
  { week: "W1", predicted: 180, actual: 175 },
  { week: "W2", predicted: 220, actual: 215 },
  { week: "W3", predicted: 195, actual: 200 },
  { week: "W4", predicted: 250, actual: null },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-3">
        <p className="text-sm font-semibold mb-2 text-white">{payload[0].payload.week}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm text-gray-300">
            {entry.name === "predicted" ? "Predicted" : "Actual"}: ${entry.value}K
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function ForecastPreview() {
  const router = useRouter();

  return (
    <Card className="bg-[#0a0a0a] border border-gray-800">
      <CardHeader className="border-b border-gray-800">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-white flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-purple-400" />
              4-Week Sales Forecast
            </CardTitle>
            <CardDescription className="text-gray-400 text-sm mt-1">AI-powered prediction trends</CardDescription>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push("/dashboard")}
            className="text-gray-400 hover:text-white hover:bg-gray-900"
          >
            View Full <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={forecastData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" opacity={0.3} />
              <XAxis
                dataKey="week"
                stroke="#4b5563"
                tick={{ fill: "#9ca3af", fontSize: 11, fontWeight: 500 }}
                tickLine={{ stroke: "#374151" }}
                axisLine={{ stroke: "#374151" }}
              />
              <YAxis
                stroke="#4b5563"
                tick={{ fill: "#9ca3af", fontSize: 11, fontWeight: 500 }}
                tickLine={{ stroke: "#374151" }}
                axisLine={{ stroke: "#374151" }}
                tickFormatter={(value) => `$${value}K`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="predicted"
                stroke="#8b5cf6"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorPredicted)"
              />
              <Area
                type="monotone"
                dataKey="actual"
                stroke="#3b82f6"
                strokeWidth={2}
                strokeDasharray="5 5"
                fillOpacity={1}
                fill="url(#colorActual)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#8b5cf6]" />
            <span className="text-gray-400">Predicted</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#3b82f6]" />
            <span className="text-gray-400">Actual</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

