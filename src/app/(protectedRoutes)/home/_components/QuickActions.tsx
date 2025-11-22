"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, MessageSquare, Send, Zap, Calendar } from "lucide-react";
import { useState } from "react";

export default function QuickActions() {
  const [aiQuery, setAiQuery] = useState("");

  const handleSendQuery = () => {
    if (aiQuery.trim()) {
      // TODO: Implement AI chat functionality
      console.log("AI Query:", aiQuery);
      setAiQuery("");
    }
  };

  const quickActions = [
    {
      label: "Generate Campaign",
      icon: Sparkles,
      onClick: () => console.log("Generate Campaign"),
      gradient: "from-purple-500/20 to-pink-500/10",
      borderColor: "border-purple-500/30",
    },
    {
      label: "Send WhatsApp Promotion",
      icon: MessageSquare,
      onClick: () => console.log("Send WhatsApp"),
      gradient: "from-emerald-500/20 to-teal-500/10",
      borderColor: "border-emerald-500/30",
    },
    {
      label: "Create Follow-Up Task",
      icon: Calendar,
      onClick: () => console.log("Create Task"),
      gradient: "from-blue-500/20 to-cyan-500/10",
      borderColor: "border-blue-500/30",
    },
  ];

  return (
    <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 backdrop-blur-sm shadow-xl rounded-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary" />
          Quick Actions
        </CardTitle>
        <CardDescription>Common tasks and AI-powered assistance</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Quick Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className={`h-auto py-4 px-4 flex flex-col items-center gap-2 bg-gradient-to-br ${action.gradient} border ${action.borderColor} hover:shadow-lg transition-all rounded-xl`}
              onClick={action.onClick}
            >
              <action.icon className="h-5 w-5" />
              <span className="text-sm font-medium">{action.label}</span>
            </Button>
          ))}
        </div>

        {/* AI Chat Query */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">AI Chat Query</label>
          <div className="flex gap-2">
            <Input
              placeholder="Ask AI about sales, customers, or campaigns…"
              value={aiQuery}
              onChange={(e) => setAiQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendQuery()}
              className="flex-1"
            />
            <Button
              onClick={handleSendQuery}
              className="bg-purple-500 hover:bg-purple-600 text-white"
              size="icon"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Get instant insights, generate reports, or ask questions about your CRM data
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

