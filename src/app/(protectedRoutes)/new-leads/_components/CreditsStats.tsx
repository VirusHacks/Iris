"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Coins, Users, TrendingUp, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  creditsEarned: number;
  clientsConverted: number;
  conversionRate: number;
};

export default function CreditsStats({
  creditsEarned,
  clientsConverted,
  conversionRate,
}: Props) {
  const [animatedCredits, setAnimatedCredits] = useState(0);
  const [animatedClients, setAnimatedClients] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = creditsEarned / steps;
    const clientIncrement = clientsConverted / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setAnimatedCredits(Math.min(increment * currentStep, creditsEarned));
      setAnimatedClients(
        Math.min(clientIncrement * currentStep, clientsConverted)
      );

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedCredits(creditsEarned);
        setAnimatedClients(clientsConverted);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [creditsEarned, clientsConverted]);

  const stats = [
    {
      label: "Credits Earned",
      value: Math.floor(animatedCredits),
      icon: Coins,
      color: "text-blue-400",
      bgGradient: "from-blue-500/20 via-blue-600/15 to-purple-500/20",
      borderColor: "border-blue-500/30",
      iconBg: "bg-gradient-to-br from-blue-500/30 to-blue-600/20",
      description: "Total credits from conversions",
      trend: "+12.5%",
    },
    {
      label: "Clients Converted",
      value: Math.floor(animatedClients),
      icon: Users,
      color: "text-purple-400",
      bgGradient: "from-purple-500/20 via-purple-600/15 to-blue-500/20",
      borderColor: "border-purple-500/30",
      iconBg: "bg-gradient-to-br from-purple-500/30 to-purple-600/20",
      description: "Successful conversions",
      trend: "+8.2%",
    },
    {
      label: "Conversion Rate",
      value: conversionRate.toFixed(1),
      icon: TrendingUp,
      color: "text-cyan-400",
      bgGradient: "from-cyan-500/20 via-blue-500/15 to-purple-500/20",
      borderColor: "border-cyan-500/30",
      iconBg: "bg-gradient-to-br from-cyan-500/30 to-blue-600/20",
      description: "Overall success rate",
      suffix: "%",
      trend: "+5.1%",
    },
  ];

  return (
    <div className="flex items-center gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -4, scale: 1.02 }}
          className="cursor-pointer flex-1"
        >
          <Card
            className={`relative overflow-hidden bg-gradient-to-br ${stat.bgGradient} border ${stat.borderColor} hover:border-opacity-60 transition-all duration-300 group`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="p-4 relative z-10">
              <div className="flex items-start justify-between mb-3">
                <div
                  className={`${stat.iconBg} p-2.5 rounded-xl border border-white/10`}
                >
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  className="flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/20"
                >
                  <ArrowUpRight className="h-3 w-3" />
                  {stat.trend}
                </motion.div>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </p>
                <motion.div
                  key={stat.value}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex items-baseline gap-1"
                >
                  <span
                    className={`text-2xl font-bold ${stat.color} tracking-tight`}
                  >
                    {stat.value.toLocaleString()}
                  </span>
                  {stat.suffix && (
                    <span
                      className={`text-sm font-semibold ${stat.color} opacity-80`}
                    >
                      {stat.suffix}
                    </span>
                  )}
                </motion.div>
                <p className="text-[10px] text-gray-500 mt-2 leading-tight">
                  {stat.description}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
