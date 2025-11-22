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
  gradient: string;
  iconColor: string;
  borderColor: string;
  riskLevel?: "low" | "medium" | "high";
  onClick?: () => void;
}

const SegmentCard = ({ title, count, value, icon: Icon, gradient, iconColor, borderColor, riskLevel, onClick }: SegmentCardProps) => {
  const riskColors = {
    low: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    medium: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    high: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  return (
    <Card
      onClick={onClick}
      className={`bg-gradient-to-br ${gradient} border ${borderColor} backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer rounded-2xl`}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`${iconColor} bg-background/50 p-3 rounded-xl`}>
            <Icon className="h-5 w-5" />
          </div>
          {riskLevel && (
            <Badge className={riskColors[riskLevel]} variant="outline">
              {riskLevel === "high" ? "High Risk" : riskLevel === "medium" ? "Medium" : "Low Risk"}
            </Badge>
          )}
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <div className="space-y-1">
          <p className="text-2xl font-bold text-foreground">{count}</p>
          <p className="text-sm text-muted-foreground">{value}</p>
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
      gradient: "from-emerald-500/20 to-teal-500/10",
      iconColor: "text-emerald-400",
      borderColor: "border-emerald-500/30",
      riskLevel: "low" as const,
      onClick: () => router.push("/lead"),
    },
    {
      title: "At-Risk Customers",
      count: 23,
      value: "Requires attention",
      icon: AlertCircle,
      gradient: "from-red-500/20 to-orange-500/10",
      iconColor: "text-red-400",
      borderColor: "border-red-500/30",
      riskLevel: "high" as const,
      onClick: () => router.push("/lead"),
    },
    {
      title: "New Leads",
      count: 127,
      value: "+32 this week",
      icon: UserPlus,
      gradient: "from-blue-500/20 to-cyan-500/10",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/30",
      onClick: () => router.push("/lead"),
    },
    {
      title: "Growth Potential",
      count: 89,
      value: "Upsell opportunities",
      icon: TrendingUp,
      gradient: "from-purple-500/20 to-pink-500/10",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/30",
      riskLevel: "low" as const,
      onClick: () => router.push("/lead"),
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-6">Customer Segment Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {segments.map((segment, index) => (
          <SegmentCard key={index} {...segment} />
        ))}
      </div>
    </div>
  );
}

