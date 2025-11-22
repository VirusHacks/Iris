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
      return "bg-red-500/20 text-red-400 border-red-500/30";
    case "medium":
      return "bg-amber-500/20 text-amber-400 border-amber-500/30";
    case "low":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export default function NotificationsAlerts() {
  return (
    <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 backdrop-blur-sm shadow-xl rounded-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-primary" />
          Notifications & Alerts
        </CardTitle>
        <CardDescription>Important actions requiring attention</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.map((alert) => {
            const Icon = getAlertIcon(alert.type);
            return (
              <div
                key={alert.id}
                className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors border border-border/50"
              >
                <div className={`p-2 rounded-lg ${getSeverityColor(alert.severity)}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground text-sm">{alert.title}</h4>
                    <Badge className={getSeverityColor(alert.severity)} variant="outline">
                      {alert.severity}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{alert.description}</p>
                  {alert.count && (
                    <p className="text-xs font-medium text-primary">{alert.count} items need attention</p>
                  )}
                </div>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
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

