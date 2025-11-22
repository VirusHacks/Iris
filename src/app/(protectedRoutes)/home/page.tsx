"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, BarChart3, TrendingUp, Users, Megaphone, Sparkles, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import ExecutiveOverview from "./_components/ExecutiveOverview";
import SalesSnapshot from "./_components/SalesSnapshot";
import CustomerSegments from "./_components/CustomerSegments";
import ForecastPreview from "./_components/ForecastPreview";
import QuickActions from "./_components/QuickActions";
import RecentActivities from "./_components/RecentActivities";
import LoyaltyUpsell from "./_components/LoyaltyUpsell";
import NotificationsAlerts from "./_components/NotificationsAlerts";
import PageFooter from "./_components/PageFooter";

const navigationTabs = [
  { id: "home", label: "Home", icon: Home, route: "/home" },
  { id: "analytics", label: "Analytics", icon: BarChart3, route: "/dashboard" },
  { id: "forecast", label: "Forecast", icon: TrendingUp, route: "/dashboard" },
  { id: "customers", label: "Customers", icon: Users, route: "/lead" },
  { id: "campaigns", label: "Campaigns", icon: Megaphone, route: "/webinars" },
  { id: "ai-workspace", label: "AI Workspace", icon: Sparkles, route: "/ai-agents" },
  { id: "settings", label: "Settings", icon: Settings, route: "/settings" },
];

export default function HomePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (route: string) => {
    if (route !== "/home") {
      router.push(route);
    }
  };

  return (
    <div className="w-full min-h-screen space-y-8 pb-12">
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-xl border-b border-border/50 rounded-2xl p-2 shadow-lg">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full h-14 bg-gradient-to-r from-muted/80 to-muted/60 backdrop-blur-md border-2 border-border/50 shadow-xl rounded-xl p-1.5 flex overflow-x-auto scrollbar-hide">
            {navigationTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  onClick={() => handleTabClick(tab.route)}
                  className="flex items-center justify-center gap-2 text-sm font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-pink-500/20 data-[state=active]:text-purple-400 data-[state=active]:shadow-xl data-[state=active]:border data-[state=active]:border-purple-500/30 transition-all duration-300 rounded-lg whitespace-nowrap flex-shrink-0 min-w-fit px-4"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsContent value="home" className="mt-0 space-y-8">
          {/* Executive Overview Panel */}
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Executive Overview</h1>
            <p className="text-muted-foreground mb-6">Key performance indicators and business metrics</p>
            <ExecutiveOverview />
          </div>

          {/* Sales Snapshot Cards */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Sales Snapshot</h2>
            <SalesSnapshot />
          </div>

          {/* Customer Segment Overview */}
          <CustomerSegments />

          {/* Forecast Preview and Quick Actions Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ForecastPreview />
            <QuickActions />
          </div>

          {/* Recent Activities and Notifications Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecentActivities />
            <NotificationsAlerts />
          </div>

          {/* Loyalty & Upsell Highlight */}
          <div>
            <LoyaltyUpsell />
          </div>

          {/* Footer */}
          <PageFooter />
        </TabsContent>
      </Tabs>
    </div>
  );
}
