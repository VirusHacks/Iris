"use client";

import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, TrendingUp, Users, AlertTriangle, Award } from "lucide-react";
import { useRouter } from "next/navigation";

interface KPICardProps {
  title: string;
  value: string;
  change?: string;
  icon: React.ElementType;
  gradient: string;
  iconColor: string;
  borderColor: string;
  onClick?: () => void;
}

const KPICard = ({ title, value, change, icon: Icon, gradient, iconColor, borderColor, onClick }: KPICardProps) => {
  return (
    <Card
      onClick={onClick}
      className={`bg-gradient-to-br ${gradient} border ${borderColor} backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer rounded-2xl`}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground mb-2">{title}</p>
            <p className="text-3xl font-bold text-foreground mb-1">{value}</p>
            {change && (
              <p className={`text-xs font-medium ${change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                {change}
              </p>
            )}
          </div>
          <div className={`${iconColor} bg-background/50 p-3 rounded-xl`}>
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
      gradient: "from-emerald-500/20 to-teal-500/10",
      iconColor: "text-emerald-400",
      borderColor: "border-emerald-500/30",
      onClick: () => router.push("/dashboard"),
    },
    {
      title: "Monthly Forecast",
      value: "$2.8M",
      change: "+8.2% projected",
      icon: TrendingUp,
      gradient: "from-blue-500/20 to-cyan-500/10",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/30",
      onClick: () => router.push("/dashboard"),
    },
    {
      title: "Top Customers",
      value: "247",
      change: "+18 new",
      icon: Users,
      gradient: "from-purple-500/20 to-pink-500/10",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/30",
      onClick: () => router.push("/lead"),
    },
    {
      title: "Churn Risk",
      value: "12%",
      change: "-3.2% improved",
      icon: AlertTriangle,
      gradient: "from-amber-500/20 to-orange-500/10",
      iconColor: "text-amber-400",
      borderColor: "border-amber-500/30",
      onClick: () => router.push("/dashboard"),
    },
    {
      title: "Loyalty Score",
      value: "8.7/10",
      change: "+0.3 points",
      icon: Award,
      gradient: "from-violet-500/20 to-indigo-500/10",
      iconColor: "text-violet-400",
      borderColor: "border-violet-500/30",
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

