"use client";

import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { useDashboardData } from "./hooks/useDashboardData";

interface DashboardDataContextType {
  monthlySales: any[];
  aovTrend: any[];
  topCountries: any[];
  topProducts: any[];
  topCustomers: any[];
  rfmDistribution: any[];
  revenueByDay: any[];
  revenueByHour: any[];
  revenueForecast: any;
  aovForecast: any;
  ordersForecast: any;
  loading: boolean;
  error: string | null;
  refreshData: () => void;
  updateDataDirectly: (analytics: any) => void;
}

const DashboardDataContext = createContext<DashboardDataContextType | undefined>(undefined);

export function DashboardDataProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const data = useDashboardData();

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Return loading state during SSR
  if (!mounted) {
    return (
      <DashboardDataContext.Provider
        value={{
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
          refreshData: () => {},
          updateDataDirectly: () => {},
        }}
      >
        {children}
      </DashboardDataContext.Provider>
    );
  }

  return (
    <DashboardDataContext.Provider value={data}>
      {children}
    </DashboardDataContext.Provider>
  );
}

export function useDashboardDataContext() {
  const context = useContext(DashboardDataContext);
  if (context === undefined) {
    throw new Error("useDashboardDataContext must be used within DashboardDataProvider");
  }
  return context;
}

