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
    },
    {
      label: "Send WhatsApp Promotion",
      icon: MessageSquare,
      onClick: () => console.log("Send WhatsApp"),
    },
    {
      label: "Create Follow-Up Task",
      icon: Calendar,
      onClick: () => console.log("Create Task"),
    },
  ];

  return (
    <Card className="bg-[#0a0a0a] border border-gray-800">
      <CardHeader className="border-b border-gray-800">
        <CardTitle className="text-lg font-semibold text-white flex items-center gap-2">
          <Zap className="h-4 w-4 text-purple-400" />
          Quick Actions
        </CardTitle>
        <CardDescription className="text-gray-400 text-sm mt-1">Common tasks and AI-powered assistance</CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {/* Quick Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto py-4 px-4 flex flex-col items-center gap-2 bg-[#0a0a0a] border-gray-700 text-white hover:bg-gray-900 hover:border-purple-500/50 transition-all"
              onClick={action.onClick}
            >
              <action.icon className="h-5 w-5" />
              <span className="text-sm font-medium">{action.label}</span>
            </Button>
          ))}
        </div>

        {/* AI Chat Query */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">AI Chat Query</label>
          <div className="flex gap-2">
            <Input
              placeholder="Ask AI about sales, customers, or campaigns…"
              value={aiQuery}
              onChange={(e) => setAiQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendQuery()}
              className="flex-1 bg-[#0a0a0a] border-gray-700 text-white placeholder:text-gray-500"
            />
            <Button
              onClick={handleSendQuery}
              className="bg-[#0a0a0a] border-gray-700 text-white hover:bg-gray-900 hover:border-purple-500/50"
              size="icon"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-gray-400">
            Get instant insights, generate reports, or ask questions about your CRM data
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

