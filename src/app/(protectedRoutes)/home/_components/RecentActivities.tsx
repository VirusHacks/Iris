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
      return <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">Completed</Badge>;
    case "pending":
      return <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">Pending</Badge>;
    case "warning":
      return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Action Required</Badge>;
    default:
      return null;
  }
};

export default function RecentActivities() {
  return (
    <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 backdrop-blur-sm shadow-xl rounded-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-primary" />
          Recent Activities
        </CardTitle>
        <CardDescription>Latest automated actions and AI suggestions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = getActivityIcon(activity.type);
            return (
              <div
                key={activity.id}
                className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="p-2 rounded-lg bg-background/50">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground text-sm">{activity.title}</h4>
                    {getStatusBadge(activity.status)}
                  </div>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                  <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

