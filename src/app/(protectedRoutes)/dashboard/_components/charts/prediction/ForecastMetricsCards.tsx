"use client";

import { useDashboardDataContext } from "../../DashboardDataProvider";
import { Card, CardContent } from "@/components/ui/card";
import { Target, BarChart3, TrendingUp, Sparkles } from "lucide-react";
import { Loader2 } from "lucide-react";

export default function ForecastMetricsCards() {
  const { revenueForecast, loading } = useDashboardDataContext();
  const metrics = revenueForecast?.metrics || null;

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="bg-gradient-to-br from-card to-card/50 border-border/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="h-24 animate-pulse bg-muted rounded" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (!metrics) {
    return null;
  }

  const cards = [
    {
      title: "Forecast Accuracy (MAPE)",
      value: `${metrics.mape?.toFixed(2) || "N/A"}%`,
      description: "Lower is better",
      icon: Target,
      gradient: "from-emerald-500/20 to-teal-500/10",
      iconColor: "text-emerald-400",
      borderColor: "border-emerald-500/30",
    },
    {
      title: "Mean Absolute Error",
      value: `$${metrics.mae?.toFixed(0) || "N/A"}`,
      description: "Average prediction error",
      icon: BarChart3,
      gradient: "from-blue-500/20 to-cyan-500/10",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/30",
    },
    {
      title: "Root Mean Squared Error",
      value: `$${metrics.rmse?.toFixed(0) || "N/A"}`,
      description: "Prediction variance",
      icon: TrendingUp,
      gradient: "from-purple-500/20 to-pink-500/10",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/30",
    },
    {
      title: "Model Status",
      value: metrics.mape ? (metrics.mape < 10 ? "Excellent" : metrics.mape < 20 ? "Good" : "Fair") : "N/A",
      description: "Prophet AI Model",
      icon: Sparkles,
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
                <p className="text-xs text-muted-foreground mt-2">{card.description}</p>
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

