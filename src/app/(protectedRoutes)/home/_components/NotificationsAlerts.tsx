"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Users, TrendingDown, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Alert {
  id: string;
  type: "churn" | "performance" | "followup" | "opportunity";
  severity: "high" | "medium" | "low";
  title: string;
  description: string;
  count?: number;
}

const alerts: Alert[] = [
  {
    id: "1",
    type: "churn",
    severity: "high",
    title: "High Churn Risk Detected",
    description: "23 customers showing signs of churn",
    count: 23,
  },
  {
    id: "2",
    type: "performance",
    severity: "medium",
    title: "Low Performing Segment",
    description: "Asia Pacific region below target",
  },
  {
    id: "3",
    type: "followup",
    severity: "medium",
    title: "Pending Follow-ups",
    description: "12 high-priority follow-ups due today",
    count: 12,
  },
  {
    id: "4",
    type: "opportunity",
    severity: "low",
    title: "Upsell Opportunity",
    description: "89 customers ready for upgrade",
    count: 89,
  },
];

const getAlertIcon = (type: string) => {
  switch (type) {
    case "churn":
      return AlertTriangle;
    case "performance":
      return TrendingDown;
    case "followup":
      return Clock;
    case "opportunity":
      return Users;
    default:
      return AlertTriangle;
  }
};

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "high":
      return "bg-red-500/10 text-red-400 border-red-500/50";
    case "medium":
      return "bg-amber-500/10 text-amber-400 border-amber-500/50";
    case "low":
      return "bg-blue-500/10 text-blue-400 border-blue-500/50";
    default:
      return "bg-[#0a0a0a] text-gray-400 border-gray-800";
  }
};

export default function NotificationsAlerts() {
  return (
    <Card className="bg-[#0a0a0a] border border-gray-800">
      <CardHeader className="border-b border-gray-800">
        <CardTitle className="text-lg font-semibold text-white flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-purple-400" />
          Notifications & Alerts
        </CardTitle>
        <CardDescription className="text-gray-400 text-sm mt-1">Important actions requiring attention</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-3">
          {alerts.map((alert) => {
            const Icon = getAlertIcon(alert.type);
            return (
              <div
                key={alert.id}
                className="flex items-start gap-4 p-4 rounded-lg bg-[#0a0a0a] border border-gray-800 hover:border-gray-700 transition-colors"
              >
                <div className={`p-2 rounded-lg border ${getSeverityColor(alert.severity)}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-white text-sm">{alert.title}</h4>
                    <Badge className={getSeverityColor(alert.severity)} variant="outline">
                      {alert.severity}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-400">{alert.description}</p>
                  {alert.count && (
                    <p className="text-xs font-medium text-purple-400">{alert.count} items need attention</p>
                  )}
                </div>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-900">
                  View
                </Button>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

