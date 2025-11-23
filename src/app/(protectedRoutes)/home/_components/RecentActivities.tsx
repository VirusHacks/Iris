"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Sparkles, CheckCircle, AlertCircle, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ActivityItem {
  id: string;
  type: "automated" | "ai_suggestion" | "campaign" | "alert";
  title: string;
  description: string;
  timestamp: string;
  status?: "completed" | "pending" | "warning";
}

const activities: ActivityItem[] = [
  {
    id: "1",
    type: "automated",
    title: "Automated follow-up emails sent",
    description: "Sent to 45 at-risk customers",
    timestamp: "2 minutes ago",
    status: "completed",
  },
  {
    id: "2",
    type: "ai_suggestion",
    title: "AI suggests campaign optimization",
    description: "Increase engagement by 23% with personalized messaging",
    timestamp: "15 minutes ago",
    status: "pending",
  },
  {
    id: "3",
    type: "campaign",
    title: "Summer Promotion Campaign completed",
    description: "Reached 1,247 customers with 12.5% conversion rate",
    timestamp: "1 hour ago",
    status: "completed",
  },
  {
    id: "4",
    type: "alert",
    title: "High-value customer interaction detected",
    description: "Customer #247 viewed premium products",
    timestamp: "2 hours ago",
    status: "warning",
  },
  {
    id: "5",
    type: "ai_suggestion",
    title: "Upsell opportunity identified",
    description: "89 customers ready for premium tier upgrade",
    timestamp: "3 hours ago",
    status: "pending",
  },
];

const getActivityIcon = (type: string) => {
  switch (type) {
    case "automated":
      return Activity;
    case "ai_suggestion":
      return Sparkles;
    case "campaign":
      return TrendingUp;
    case "alert":
      return AlertCircle;
    default:
      return Activity;
  }
};

const getStatusBadge = (status?: string) => {
  switch (status) {
    case "completed":
      return <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/50">Completed</Badge>;
    case "pending":
      return <Badge variant="outline" className="bg-amber-500/10 text-amber-400 border-amber-500/50">Pending</Badge>;
    case "warning":
      return <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/50">Action Required</Badge>;
    default:
      return null;
  }
};

export default function RecentActivities() {
  return (
    <Card className="bg-[#0a0a0a] border border-gray-800">
      <CardHeader className="border-b border-gray-800">
        <CardTitle className="text-lg font-semibold text-white flex items-center gap-2">
          <Activity className="h-4 w-4 text-purple-400" />
          Recent Activities
        </CardTitle>
        <CardDescription className="text-gray-400 text-sm mt-1">Latest automated actions and AI suggestions</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = getActivityIcon(activity.type);
            return (
              <div
                key={activity.id}
                className="flex items-start gap-4 p-4 rounded-lg bg-[#0a0a0a] border border-gray-800 hover:border-gray-700 transition-colors"
              >
                <div className="p-2 rounded-lg bg-[#0a0a0a] border border-gray-800">
                  <Icon className="h-4 w-4 text-purple-400" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-white text-sm">{activity.title}</h4>
                    {getStatusBadge(activity.status)}
                  </div>
                  <p className="text-sm text-gray-400">{activity.description}</p>
                  <p className="text-xs text-gray-500">{activity.timestamp}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

