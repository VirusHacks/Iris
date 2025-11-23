"use client";

import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PageFooter() {
  const currentDate = new Date().toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Card className="bg-[#0a0a0a] border border-gray-800">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2 text-gray-400">
              <span>System Version:</span>
              <span className="font-medium text-white">v2.1.0</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span>Last Refresh:</span>
              <span className="font-medium text-white">{currentDate}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-gray-400 hover:text-white hover:bg-gray-900"
            >
              <Link href="/ai-agents">
                <Sparkles className="h-4 w-4 mr-2" />
                AI Workspace
                <ExternalLink className="h-3 w-3 ml-1" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white hover:bg-gray-900"
            >
              <HelpCircle className="h-4 w-4 mr-2" />
              Help & Support
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

