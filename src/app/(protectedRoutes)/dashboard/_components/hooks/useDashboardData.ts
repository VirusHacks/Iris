"use client";

import { useState, useEffect, useCallback } from "react";

interface DashboardData {
  // Analysis data
  monthlySales: any[];
  aovTrend: any[];
  topCountries: any[];
  topProducts: any[];
  topCustomers: any[];
  rfmDistribution: any[];
  revenueByDay: any[];
  revenueByHour: any[];
  
  // Forecast data
  revenueForecast: any;
  aovForecast: any;
  ordersForecast: any;
  
  // Loading states
  loading: boolean;
  error: string | null;
}

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const CACHE_KEY = "dashboard_data_cache";

// Client-side only cache using localStorage
function getCache(): { data: DashboardData; timestamp: number } | null {
  if (typeof window === "undefined") return null;
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Date.now() - parsed.timestamp < CACHE_DURATION) {
        return parsed;
      }
    }
  } catch (e) {
    // Ignore cache errors
  }
  return null;
}

function setCache(data: DashboardData): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      data,
      timestamp: Date.now(),
    }));
  } catch (e) {
    // Ignore cache errors
  }
}

function clearCache(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(CACHE_KEY);
  } catch (e) {
    // Ignore cache errors
  }
}

export function useDashboardData() {
  const [data, setData] = useState<DashboardData>({
    monthlySales: [],
    aovTrend: [],
    topCountries: [],
    topProducts: [],
    topCustomers: [],
    rfmDistribution: [],
    revenueByDay: [],
    revenueByHour: [],
    revenueForecast: null,
    aovForecast: null,
    ordersForecast: null,
    loading: true,
    error: null,
  });

  const [mounted, setMounted] = useState(false);

  // Ensure we only run on client
  useEffect(() => {
    setMounted(true);
  }, []);

  const fetchAllData = useCallback(async () => {
    // Only fetch on client
    if (typeof window === "undefined") return;

    // Check cache first
    const cached = getCache();
    if (cached) {
      setData({ ...cached.data, loading: false });
      return;
    }

    setData((prev) => ({ ...prev, loading: true, error: null }));

    try {
      // First check if analytics data exists (single lightweight call)
      const checkRes = await fetch("/api/dashboard/analytics?type=monthly-sales");
      
      if (!checkRes.ok || checkRes.status === 404) {
        // No data available, set empty state
        setData({
          monthlySales: [],
          aovTrend: [],
          topCountries: [],
          topProducts: [],
          topCustomers: [],
          rfmDistribution: [],
          revenueByDay: [],
          revenueByHour: [],
          revenueForecast: null,
          aovForecast: null,
          ordersForecast: null,
          loading: false,
          error: null,
        });
        return;
      }

      // Data exists, fetch all analysis data in parallel
      const [
        monthlySalesRes,
        aovTrendRes,
        topCountriesRes,
        topProductsRes,
        topCustomersRes,
        rfmDistributionRes,
        revenueByDayRes,
        revenueByHourRes,
      ] = await Promise.all([
        fetch("/api/dashboard/analytics?type=monthly-sales"),
        fetch("/api/dashboard/analytics?type=aov-trend"),
        fetch("/api/dashboard/analytics?type=top-countries"),
        fetch("/api/dashboard/analytics?type=top-products"),
        fetch("/api/dashboard/analytics?type=top-customers"),
        fetch("/api/dashboard/analytics?type=rfm-distribution"),
        fetch("/api/dashboard/analytics?type=revenue-by-day"),
        fetch("/api/dashboard/analytics?type=revenue-by-hour"),
      ]);

      // Parse all responses
      const [
        monthlySales,
        aovTrend,
        topCountries,
        topProducts,
        topCustomers,
        rfmDistribution,
        revenueByDay,
        revenueByHour,
      ] = await Promise.all([
        monthlySalesRes.json(),
        aovTrendRes.json(),
        topCountriesRes.json(),
        topProductsRes.json(),
        topCustomersRes.json(),
        rfmDistributionRes.json(),
        revenueByDayRes.json(),
        revenueByHourRes.json(),
      ]);

      // Fetch forecast data in parallel (only if we have historical data)
      // Try blockchain first, then fall back to API
      let revenueForecast = null;
      let aovForecast = null;
      let ordersForecast = null;

      if (monthlySales && monthlySales.length >= 3) {
        try {
          // Try to get wallet address for blockchain fetch
          let walletAddress: string | null = null;
          if (typeof window !== "undefined" && window.ethereum) {
            try {
              const { getUserWalletAddress } = await import("@/lib/blockchain/clientBlockchain");
              walletAddress = await getUserWalletAddress();
              if (walletAddress) {
                console.log("[useDashboardData] Wallet connected, trying blockchain first:", walletAddress);
              }
            } catch (err) {
              console.log("[useDashboardData] Could not get wallet address:", err);
            }
          }

          // Try blockchain first if wallet is connected
          if (walletAddress) {
            try {
              const { fetchForecastFromBlockchain } = await import("@/lib/blockchain/clientBlockchain");
              console.log("[useDashboardData] Attempting to fetch forecasts from blockchain...");
              
              const [blockchainRevenue, blockchainAOV, blockchainOrders] = await Promise.allSettled([
                fetchForecastFromBlockchain(walletAddress, "revenue").catch(() => null),
                fetchForecastFromBlockchain(walletAddress, "aov").catch(() => null),
                fetchForecastFromBlockchain(walletAddress, "orders").catch(() => null),
              ]);

              if (blockchainRevenue.status === "fulfilled" && blockchainRevenue.value) {
                revenueForecast = blockchainRevenue.value;
                console.log("[useDashboardData] ✅ Revenue forecast loaded from blockchain");
              } else if (blockchainRevenue.status === "fulfilled" && blockchainRevenue.value === null) {
                console.log("[useDashboardData] ℹ️ No revenue forecast on blockchain, will use API");
              }
              
              if (blockchainAOV.status === "fulfilled" && blockchainAOV.value) {
                aovForecast = blockchainAOV.value;
                console.log("[useDashboardData] ✅ AOV forecast loaded from blockchain");
              } else if (blockchainAOV.status === "fulfilled" && blockchainAOV.value === null) {
                console.log("[useDashboardData] ℹ️ No AOV forecast on blockchain, will use API");
              }
              
              if (blockchainOrders.status === "fulfilled" && blockchainOrders.value) {
                ordersForecast = blockchainOrders.value;
                console.log("[useDashboardData] ✅ Orders forecast loaded from blockchain");
              } else if (blockchainOrders.status === "fulfilled" && blockchainOrders.value === null) {
                console.log("[useDashboardData] ℹ️ No orders forecast on blockchain, will use API");
              }
            } catch (blockchainError) {
              console.log("[useDashboardData] Blockchain fetch failed, falling back to API:", blockchainError);
            }
          }

          // Fetch from API for any missing forecasts
          const apiPromises: { type: string; promise: Promise<any> }[] = [];
          if (!revenueForecast) {
            apiPromises.push({ type: "revenue", promise: fetch("/api/dashboard/forecast?type=revenue&periods=6").then(r => r.ok ? r.json() : null) });
          }
          if (!aovForecast) {
            apiPromises.push({ type: "aov", promise: fetch("/api/dashboard/forecast?type=aov&periods=6").then(r => r.ok ? r.json() : null) });
          }
          if (!ordersForecast) {
            apiPromises.push({ type: "orders", promise: fetch("/api/dashboard/forecast?type=orders&periods=6").then(r => r.ok ? r.json() : null) });
          }

          if (apiPromises.length > 0) {
            const apiResults = await Promise.allSettled(apiPromises.map(p => p.promise));
            
            // Map results back to forecast types
            let revenueIdx = -1, aovIdx = -1, ordersIdx = -1;
            if (!revenueForecast) revenueIdx = apiPromises.findIndex(p => p.type === "revenue");
            if (!aovForecast) aovIdx = apiPromises.findIndex(p => p.type === "aov");
            if (!ordersForecast) ordersIdx = apiPromises.findIndex(p => p.type === "orders");
            
            const revenueForecastRes = revenueIdx >= 0 ? apiResults[revenueIdx] : { status: "fulfilled" as const, value: null };
            const aovForecastRes = aovIdx >= 0 ? apiResults[aovIdx] : { status: "fulfilled" as const, value: null };
            const ordersForecastRes = ordersIdx >= 0 ? apiResults[ordersIdx] : { status: "fulfilled" as const, value: null };

          // Handle revenue forecast from API (if not from blockchain)
          if (!revenueForecast && revenueForecastRes.status === "fulfilled" && revenueForecastRes.value) {
            try {
              const data = revenueForecastRes.value;
              if (data && !data.error && data.historical && data.forecast) {
                revenueForecast = data;
                console.log("[useDashboardData] 📡 Revenue forecast loaded from API");
              } else if (data?.error) {
                console.warn("[useDashboardData] Revenue forecast error:", data.error);
              }
            } catch (e) {
              console.warn("[useDashboardData] Failed to parse revenue forecast:", e);
            }
          } else if (revenueForecastRes.status === "rejected") {
            console.warn("[useDashboardData] Revenue forecast request rejected:", revenueForecastRes.reason);
          }

          // Handle AOV forecast from API (if not from blockchain)
          if (!aovForecast && aovForecastRes.status === "fulfilled" && aovForecastRes.value) {
            try {
              const data = aovForecastRes.value;
              if (data && !data.error && data.historical && data.forecast) {
                aovForecast = data;
                console.log("[useDashboardData] 📡 AOV forecast loaded from API");
              } else if (data?.error) {
                console.warn("[useDashboardData] AOV forecast error:", data.error);
              }
            } catch (e) {
              console.warn("[useDashboardData] Failed to parse AOV forecast:", e);
            }
          } else if (aovForecastRes.status === "rejected") {
            console.warn("[useDashboardData] AOV forecast request rejected:", aovForecastRes.reason);
          }

          // Handle orders forecast from API (if not from blockchain)
          if (!ordersForecast && ordersForecastRes.status === "fulfilled" && ordersForecastRes.value) {
            try {
              const data = ordersForecastRes.value;
              if (data && !data.error && data.historical && data.forecast) {
                ordersForecast = data;
                console.log("[useDashboardData] 📡 Orders forecast loaded from API");
              } else if (data?.error) {
                console.warn("[useDashboardData] Orders forecast error:", data.error);
              }
            } catch (e) {
              console.warn("[useDashboardData] Failed to parse orders forecast:", e);
            }
          } else if (ordersForecastRes.status === "rejected") {
            console.warn("[useDashboardData] Orders forecast request rejected:", ordersForecastRes.reason);
          }
          }
        } catch (forecastError) {
          console.warn("Forecast data unavailable:", forecastError);
          // Continue without forecast data
        }
      }

      const newData: DashboardData = {
        monthlySales,
        aovTrend,
        topCountries,
        topProducts,
        topCustomers,
        rfmDistribution,
        revenueByDay,
        revenueByHour,
        revenueForecast,
        aovForecast,
        ordersForecast,
        loading: false,
        error: null,
      };

      // Update cache
      setCache(newData);

      setData(newData);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      setData((prev) => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : "Failed to load dashboard data",
      }));
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      fetchAllData();
    }
  }, [mounted, fetchAllData]);

  const refreshData = useCallback(() => {
    clearCache(); // Clear client-side cache
    // Force refetch by setting loading state
    setData((prev) => ({ ...prev, loading: true }));
    fetchAllData();
  }, [fetchAllData]);

  // Function to update data directly (for upload response)
  const updateDataDirectly = useCallback((analytics: any) => {
    const newData: DashboardData = {
      monthlySales: analytics.monthlySales || [],
      aovTrend: analytics.aovTrend || [],
      topCountries: analytics.topCountries || [],
      topProducts: analytics.topProducts || [],
      topCustomers: analytics.topCustomers || [],
      rfmDistribution: analytics.rfmDistribution || [],
      revenueByDay: analytics.revenueByDay || [],
      revenueByHour: analytics.revenueByHour || [],
      revenueForecast: null, // Will be fetched separately if needed
      aovForecast: null,
      ordersForecast: null,
      loading: false,
      error: null,
    };
    
    // Update cache
    setCache(newData);
    setData(newData);
  }, []);

  return { ...data, refreshData, updateDataDirectly };
}

