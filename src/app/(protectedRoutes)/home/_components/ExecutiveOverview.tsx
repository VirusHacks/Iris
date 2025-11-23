"use client";

import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, TrendingUp, Users, AlertTriangle, Award } from "lucide-react";
import { useRouter } from "next/navigation";

interface KPICardProps {
  title: string;
  value: string;
  change?: string;
  icon: React.ElementType;
  iconColor: string;
  onClick?: () => void;
}

const KPICard = ({ title, value, change, icon: Icon, iconColor, onClick }: KPICardProps) => {
  return (
    <Card
      onClick={onClick}
      className="bg-[#0a0a0a] border border-gray-800 cursor-pointer hover:border-purple-500/50 transition-all"
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-400 mb-2">{title}</p>
            <p className="text-3xl font-bold text-white mb-1">{value}</p>
            {change && (
              <p className={`text-xs font-medium ${change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                {change}
              </p>
            )}
          </div>
          <div className={`${iconColor} p-3 rounded-xl bg-[#0a0a0a] border border-gray-800`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function ExecutiveOverview() {
  const router = useRouter();

  const kpis = [
    {
      title: "Total Revenue",
      value: "$2.4M",
      change: "+12.5% vs last month",
      icon: DollarSign,
      iconColor: "text-emerald-400",
      onClick: () => router.push("/dashboard"),
    },
    {
      title: "Monthly Forecast",
      value: "$2.8M",
      change: "+8.2% projected",
      icon: TrendingUp,
      iconColor: "text-purple-400",
      onClick: () => router.push("/dashboard"),
    },
    {
      title: "Top Customers",
      value: "247",
      change: "+18 new",
      icon: Users,
      iconColor: "text-purple-400",
      onClick: () => router.push("/lead"),
    },
    {
      title: "Churn Risk",
      value: "12%",
      change: "-3.2% improved",
      icon: AlertTriangle,
      iconColor: "text-amber-400",
      onClick: () => router.push("/dashboard"),
    },
    {
      title: "Loyalty Score",
      value: "8.7/10",
      change: "+0.3 points",
      icon: Award,
      iconColor: "text-purple-400",
      onClick: () => router.push("/dashboard"),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {kpis.map((kpi, index) => (
        <KPICard key={index} {...kpi} />
      ))}
    </div>
  );
}

