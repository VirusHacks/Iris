"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, AlertCircle, UserPlus, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

interface SegmentCardProps {
  title: string;
  count: number;
  value: string;
  icon: React.ElementType;
  iconColor: string;
  riskLevel?: "low" | "medium" | "high";
  onClick?: () => void;
}

const SegmentCard = ({ title, count, value, icon: Icon, iconColor, riskLevel, onClick }: SegmentCardProps) => {
  const riskColors = {
    low: "bg-emerald-500/10 text-emerald-400 border-emerald-500/50",
    medium: "bg-amber-500/10 text-amber-400 border-amber-500/50",
    high: "bg-red-500/10 text-red-400 border-red-500/50",
  };

  return (
    <Card
      onClick={onClick}
      className="bg-[#0a0a0a] border border-gray-800 cursor-pointer hover:border-purple-500/50 transition-all"
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`${iconColor} p-3 rounded-xl bg-[#0a0a0a] border border-gray-800`}>
            <Icon className="h-5 w-5" />
          </div>
          {riskLevel && (
            <Badge className={riskColors[riskLevel]} variant="outline">
              {riskLevel === "high" ? "High Risk" : riskLevel === "medium" ? "Medium" : "Low Risk"}
            </Badge>
          )}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <div className="space-y-1">
          <p className="text-2xl font-bold text-white">{count}</p>
          <p className="text-sm text-gray-400">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default function CustomerSegments() {
  const router = useRouter();

  const segments = [
    {
      title: "Top Spenders",
      count: 45,
      value: "$1.2M total value",
      icon: Users,
      iconColor: "text-emerald-400",
      riskLevel: "low" as const,
      onClick: () => router.push("/lead"),
    },
    {
      title: "At-Risk Customers",
      count: 23,
      value: "Requires attention",
      icon: AlertCircle,
      iconColor: "text-red-400",
      riskLevel: "high" as const,
      onClick: () => router.push("/lead"),
    },
    {
      title: "New Leads",
      count: 127,
      value: "+32 this week",
      icon: UserPlus,
      iconColor: "text-purple-400",
      onClick: () => router.push("/lead"),
    },
    {
      title: "Growth Potential",
      count: 89,
      value: "Upsell opportunities",
      icon: TrendingUp,
      iconColor: "text-purple-400",
      riskLevel: "low" as const,
      onClick: () => router.push("/lead"),
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Customer Segment Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {segments.map((segment, index) => (
          <SegmentCard key={index} {...segment} />
        ))}
      </div>
    </div>
  );
}

