"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Package, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SalesSnapshot() {
  const topRegions = [
    { region: "North America", revenue: "$850K", growth: "+15%", color: "bg-emerald-500/20 text-emerald-400" },
    { region: "Europe", revenue: "$620K", growth: "+8%", color: "bg-blue-500/20 text-blue-400" },
    { region: "Asia Pacific", revenue: "$480K", growth: "+22%", color: "bg-purple-500/20 text-purple-400" },
  ];

  const topProducts = [
    { product: "Premium Suite", sales: "1,247", revenue: "$312K", color: "bg-violet-500/20 text-violet-400" },
    { product: "Enterprise Plan", sales: "892", revenue: "$445K", color: "bg-pink-500/20 text-pink-400" },
    { product: "Starter Pack", sales: "2,156", revenue: "$215K", color: "bg-cyan-500/20 text-cyan-400" },
  ];

  const revenueTrend = [
    { period: "Week 1", value: 180, color: "bg-emerald-400" },
    { period: "Week 2", value: 220, color: "bg-blue-400" },
    { period: "Week 3", value: 195, color: "bg-purple-400" },
    { period: "Week 4", value: 250, color: "bg-violet-400" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Top Regions */}
      <Card className="bg-[#0a0a0a] border border-gray-800">
        <CardHeader className="border-b border-gray-800">
          <CardTitle className="text-lg font-semibold text-white flex items-center gap-2">
            <MapPin className="h-4 w-4 text-purple-400" />
            Top Sales Regions
          </CardTitle>
          <CardDescription className="text-gray-400 text-sm mt-1">Last period performance by region</CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          {topRegions.map((region, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-[#0a0a0a] border border-gray-800">
              <div className="flex-1">
                <p className="font-semibold text-white">{region.region}</p>
                <p className="text-sm text-gray-400">{region.revenue}</p>
              </div>
              <Badge variant="outline" className="border-gray-700 text-gray-300">{region.growth}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Best Selling Products */}
      <Card className="bg-[#0a0a0a] border border-gray-800">
        <CardHeader className="border-b border-gray-800">
          <CardTitle className="text-lg font-semibold text-white flex items-center gap-2">
            <Package className="h-4 w-4 text-purple-400" />
            Best Selling Products
          </CardTitle>
          <CardDescription className="text-gray-400 text-sm mt-1">Top performers this period</CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          {topProducts.map((product, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-[#0a0a0a] border border-gray-800">
              <div className="flex-1">
                <p className="font-semibold text-white">{product.product}</p>
                <p className="text-sm text-gray-400">{product.sales} sales • {product.revenue}</p>
              </div>
              <Badge variant="outline" className="border-gray-700 text-gray-300">Top</Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Revenue Trend */}
      <Card className="bg-[#0a0a0a] border border-gray-800">
        <CardHeader className="border-b border-gray-800">
          <CardTitle className="text-lg font-semibold text-white flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-purple-400" />
            Revenue Trend
          </CardTitle>
          <CardDescription className="text-gray-400 text-sm mt-1">4-week revenue progression</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-3">
            {revenueTrend.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">{item.period}</span>
                  <span className="font-semibold text-white">${item.value}K</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all duration-500`}
                    style={{ width: `${(item.value / 250) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

