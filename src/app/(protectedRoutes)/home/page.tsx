"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, BarChart3, TrendingUp, Users, Megaphone, Sparkles, Settings, Target, MessageSquare } from "lucide-react";
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
  { id: "dashboard", label: "Dashboard", icon: BarChart3, route: "/dashboard" },
  { id: "customers", label: "Customers", icon: Users, route: "/dashboard/customers" },
  { id: "lead-generation", label: "Lead Generation", icon: Target, route: "/dashboard/new-leads" },
  { id: "assistant", label: "Assistant", icon: MessageSquare, route: "/assistant" },
  { id: "ai-agents", label: "AI Agents", icon: Sparkles, route: "/ai-agents" },
  { id: "webinars", label: "Webinars", icon: Megaphone, route: "/webinars" },
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
    <div className="w-full min-h-screen bg-black space-y-8 pb-12">
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-20 bg-black border-b border-gray-800 p-2">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full h-12 bg-[#0a0a0a] border border-gray-800 rounded-lg p-1 flex overflow-x-auto scrollbar-hide">
            {navigationTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  onClick={() => handleTabClick(tab.route)}
                  className="flex items-center justify-center gap-2 text-sm font-medium data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400 data-[state=active]:border data-[state=active]:border-purple-500/30 text-gray-400 transition-all rounded-md whitespace-nowrap flex-shrink-0 min-w-fit px-4"
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
            <h1 className="text-3xl font-bold text-white mb-2">Executive Overview</h1>
            <p className="text-gray-400 text-sm mb-6">Key performance indicators and business metrics</p>
            <ExecutiveOverview />
          </div>

          {/* Sales Snapshot Cards */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Sales Snapshot</h2>
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
