"use client";

import { useDashboardDataContext } from "./DashboardDataProvider";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import ForecastMetricsCards from "./charts/prediction/ForecastMetricsCards";
import RevenueForecastAreaChart from "./charts/prediction/RevenueForecastAreaChart";
import AOVForecastLineChart from "./charts/prediction/AOVForecastLineChart";
import OrdersForecastAreaChart from "./charts/prediction/OrdersForecastAreaChart";
import ForecastConfidenceRadial from "./charts/prediction/ForecastConfidenceRadial";
import ForecastComparisonBar from "./charts/prediction/ForecastComparisonBar";

export default function PredictionDashboard() {
  const { loading } = useDashboardDataContext();

  if (loading) {
    return (
      <div className="w-full space-y-6">
        {/* Metrics Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="bg-gradient-to-br from-card to-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="h-24 animate-pulse bg-muted rounded" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Skeleton */}
        {[1, 2, 3].map((row) => (
          <div key={row} className={row === 3 ? "grid grid-cols-1 gap-6" : "grid grid-cols-1 lg:grid-cols-2 gap-6"}>
            {row === 3 ? (
              <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 backdrop-blur-sm shadow-xl">
                <CardContent className="p-6">
                  <div className="h-[450px] flex items-center justify-center">
                    <Loader2 className="h-8 w-8 animate-spin text-purple-400" />
                  </div>
                </CardContent>
              </Card>
            ) : (
              [1, 2].map((col) => (
                <Card key={col} className="bg-gradient-to-br from-card to-card/80 border-border/50 backdrop-blur-sm shadow-xl">
                  <CardContent className="p-6">
                    <div className="h-[450px] flex items-center justify-center">
                      <Loader2 className="h-8 w-8 animate-spin text-purple-400" />
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      {/* Forecast Metrics Cards */}
      <ForecastMetricsCards />

      {/* Main Forecast Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueForecastAreaChart periods={6} />
        <AOVForecastLineChart periods={6} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <OrdersForecastAreaChart periods={6} />
        <ForecastConfidenceRadial />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ForecastComparisonBar />
      </div>
    </div>
  );
}

