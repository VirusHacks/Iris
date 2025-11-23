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
      <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 backdrop-blur-sm shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Top Sales Regions
          </CardTitle>
          <CardDescription>Last period performance by region</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {topRegions.map((region, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-muted/50">
              <div className="flex-1">
                <p className="font-semibold text-foreground">{region.region}</p>
                <p className="text-sm text-muted-foreground">{region.revenue}</p>
              </div>
              <Badge className={region.color}>{region.growth}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Best Selling Products */}
      <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 backdrop-blur-sm shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5 text-primary" />
            Best Selling Products
          </CardTitle>
          <CardDescription>Top performers this period</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {topProducts.map((product, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-muted/50">
              <div className="flex-1">
                <p className="font-semibold text-foreground">{product.product}</p>
                <p className="text-sm text-muted-foreground">{product.sales} sales • {product.revenue}</p>
              </div>
              <Badge className={product.color}>Top</Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Revenue Trend */}
      <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 backdrop-blur-sm shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Revenue Trend
          </CardTitle>
          <CardDescription>4-week revenue progression</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {revenueTrend.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{item.period}</span>
                  <span className="font-semibold">${item.value}K</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
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

