"use client";

import { useDashboardDataContext } from "./DashboardDataProvider";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, RefreshCw, Database } from "lucide-react";
import { useState, useEffect } from "react";
import ForecastMetricsCards from "./charts/prediction/ForecastMetricsCards";
import RevenueForecastAreaChart from "./charts/prediction/RevenueForecastAreaChart";
import AOVForecastLineChart from "./charts/prediction/AOVForecastLineChart";
import OrdersForecastAreaChart from "./charts/prediction/OrdersForecastAreaChart";
import ForecastConfidenceRadial from "./charts/prediction/ForecastConfidenceRadial";
import ForecastComparisonBar from "./charts/prediction/ForecastComparisonBar";
import BlockchainInfoPanel from "./BlockchainInfoPanel";
import { storeAllForecastsToBlockchain, getUserWalletAddress } from "@/lib/blockchain/clientBlockchain";
import { toast } from "sonner";

export default function PredictionDashboard() {
  const { loading, refreshData, revenueForecast, aovForecast, ordersForecast } = useDashboardDataContext();
  const [refreshing, setRefreshing] = useState(false);
  const [storing, setStoring] = useState(false);
  const [showStoreButton, setShowStoreButton] = useState(false);

  // Check if forecasts are available and not from blockchain
  useEffect(() => {
    const hasApiData = 
      (revenueForecast && revenueForecast.source !== "blockchain") ||
      (aovForecast && aovForecast.source !== "blockchain") ||
      (ordersForecast && ordersForecast.source !== "blockchain");
    
    const hasAllData = revenueForecast && aovForecast && ordersForecast;
    setShowStoreButton(hasApiData && hasAllData && !loading);
  }, [revenueForecast, aovForecast, ordersForecast, loading]);

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      // Clear forecast cache
      await fetch("/api/dashboard/forecast/refresh", { method: "POST" });
      // Refresh all data (this will trigger new forecast calculations)
      await refreshData();
      setShowStoreButton(true); // Show store button after refresh
    } catch (error) {
      console.error("Error refreshing forecasts:", error);
    } finally {
      setRefreshing(false);
    }
  };

  const handleStoreAll = async () => {
    if (!revenueForecast || !aovForecast || !ordersForecast) {
      toast.error("Please refresh forecasts first to get all data");
      return;
    }

    setStoring(true);
    try {
      // Check wallet connection
      const walletAddress = await getUserWalletAddress();
      if (!walletAddress) {
        if (typeof window !== "undefined" && window.ethereum) {
          await window.ethereum.request({ method: "eth_requestAccounts" });
        } else {
          throw new Error("MetaMask not installed");
        }
      }

      toast.info("Storing all forecasts to blockchain... This may take a few moments.");
      
      const result = await storeAllForecastsToBlockchain(
        revenueForecast,
        aovForecast,
        ordersForecast,
        6
      );

      toast.success(
        `Successfully stored ${result.totalStored} forecast(s) on blockchain!`
      );

      // Refresh blockchain info and data
      setTimeout(() => {
        refreshData();
        window.dispatchEvent(new CustomEvent("forecastStored", {
          detail: { forecastType: "all", txHash: result.results[0]?.txHash }
        }));
      }, 3000);

      setShowStoreButton(false);
    } catch (error: any) {
      console.error("[PredictionDashboard] Error storing forecasts:", error);
      toast.error(error.message || "Failed to store forecasts on blockchain");
    } finally {
      setStoring(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full space-y-6">
        {/* Metrics Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="bg-[#0a0a0a] border border-gray-800">
              <CardContent className="p-6">
                <div className="h-24 animate-pulse bg-gray-900 rounded" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Skeleton */}
        {[1, 2, 3].map((row) => (
          <div key={row} className={row === 3 ? "grid grid-cols-1 gap-6" : "grid grid-cols-1 lg:grid-cols-2 gap-6"}>
            {row === 3 ? (
              <Card className="bg-[#0a0a0a] border border-gray-800">
                <CardContent className="p-6">
                  <div className="h-[450px] flex items-center justify-center">
                    <Loader2 className="h-8 w-8 animate-spin text-purple-400" />
                  </div>
                </CardContent>
              </Card>
            ) : (
              [1, 2].map((col) => (
                <Card key={col} className="bg-[#0a0a0a] border border-gray-800">
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
      {/* Header with Refresh and Store Buttons */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">AI Forecast Dashboard</h2>
          <p className="text-gray-400 mt-1 text-sm">
            Prophet AI-powered predictions based on historical data
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={handleRefresh}
            disabled={refreshing || loading}
            variant="outline"
            className="gap-2 border-purple-500/30 hover:bg-purple-500/10"
          >
            <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
            {refreshing ? "Refreshing..." : "Refresh Forecasts"}
          </Button>
          {showStoreButton && (
            <Button
              onClick={handleStoreAll}
              disabled={storing || loading || refreshing}
              variant="default"
              className="gap-2 bg-green-600 hover:bg-green-700 text-white"
            >
              {storing ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Storing...
                </>
              ) : (
                <>
                  <Database className="h-4 w-4" />
                  Store All on Blockchain
                </>
              )}
            </Button>
          )}
        </div>
      </div>

      {/* Blockchain Information Panel */}
      <BlockchainInfoPanel />

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

