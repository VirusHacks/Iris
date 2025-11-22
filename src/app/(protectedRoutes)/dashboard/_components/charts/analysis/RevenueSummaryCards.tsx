"use client";

import { useDashboardDataContext } from "../../DashboardDataProvider";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, DollarSign, ShoppingCart, Users } from "lucide-react";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export default function RevenueSummaryCards() {
  const { monthlySales, aovTrend, topCustomers, loading } = useDashboardDataContext();

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="bg-gradient-to-br from-card to-card/50 border-border/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="h-20 animate-pulse bg-muted rounded" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  const totalRevenue = (monthlySales || []).reduce((sum: number, item: any) => sum + item.revenue, 0);
  const avgAOV = (aovTrend || []).length > 0 
    ? (aovTrend || []).reduce((sum: number, item: any) => sum + item.aov, 0) / (aovTrend || []).length 
    : 0;
  const totalOrders = Math.round(totalRevenue / (avgAOV || 1));
  const totalCustomers = (topCustomers || []).length;

  const stats = { totalRevenue, totalOrders, avgAOV, totalCustomers };

  const cards = [
    {
      title: "Total Revenue",
      value: formatCurrency(stats.totalRevenue),
      icon: DollarSign,
      gradient: "from-emerald-500/20 to-teal-500/10",
      iconColor: "text-emerald-400",
      borderColor: "border-emerald-500/30",
    },
    {
      title: "Total Orders",
      value: stats.totalOrders.toLocaleString(),
      icon: ShoppingCart,
      gradient: "from-blue-500/20 to-cyan-500/10",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/30",
    },
    {
      title: "Average Order Value",
      value: formatCurrency(stats.avgAOV),
      icon: TrendingUp,
      gradient: "from-purple-500/20 to-pink-500/10",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/30",
    },
    {
      title: "Total Customers",
      value: stats.totalCustomers.toLocaleString(),
      icon: Users,
      gradient: "from-amber-500/20 to-orange-500/10",
      iconColor: "text-amber-400",
      borderColor: "border-amber-500/30",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <Card
          key={index}
          className={`bg-gradient-to-br ${card.gradient} border ${card.borderColor} backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]`}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground mb-2">{card.title}</p>
                <p className="text-3xl font-bold text-foreground">{card.value}</p>
              </div>
              <div className={`${card.iconColor} bg-background/50 p-3 rounded-lg`}>
                <card.icon className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

