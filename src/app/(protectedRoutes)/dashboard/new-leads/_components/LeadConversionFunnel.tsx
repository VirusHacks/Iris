"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts";
import { Target, TrendingDown, Funnel } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  totalLeads: number;
  contactedLeads: number;
  qualifiedLeads: number;
  convertedLeads: number;
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-blue-500/30 rounded-xl p-4 shadow-2xl backdrop-blur-sm min-w-[180px]"
      >
        <p className="font-bold text-sm text-white mb-2 flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: data.color }} />
          {data.name}
        </p>
        <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {data.value.toLocaleString()}
        </p>
        <p className="text-xs text-gray-400 mt-1">leads</p>
        {data.percentage && (
          <p className="text-xs text-blue-400 mt-2 font-semibold">{data.percentage} of total</p>
        )}
      </motion.div>
    );
  }
  return null;
};

export default function LeadConversionFunnel({
  totalLeads,
  contactedLeads,
  qualifiedLeads,
  convertedLeads,
}: Props) {
  const contactedPct = totalLeads > 0 ? ((contactedLeads / totalLeads) * 100).toFixed(1) : "0";
  const qualifiedPct = totalLeads > 0 ? ((qualifiedLeads / totalLeads) * 100).toFixed(1) : "0";
  const convertedPct = totalLeads > 0 ? ((convertedLeads / totalLeads) * 100).toFixed(1) : "0";

  const data = [
    {
      name: "Total Leads",
      value: totalLeads,
      color: "#3b82f6",
      gradient: "url(#totalGradient)",
      percentage: "100%",
    },
    {
      name: "Contacted",
      value: contactedLeads,
      color: "#6366f1",
      gradient: "url(#contactedGradient)",
      percentage: `${contactedPct}%`,
    },
    {
      name: "Qualified",
      value: qualifiedLeads,
      color: "#8b5cf6",
      gradient: "url(#qualifiedGradient)",
      percentage: `${qualifiedPct}%`,
    },
    {
      name: "Converted",
      value: convertedLeads,
      color: "#10b981",
      gradient: "url(#convertedGradient)",
      percentage: `${convertedPct}%`,
    },
  ];

  const contactDropOff = totalLeads > 0 ? ((1 - contactedLeads / totalLeads) * 100).toFixed(1) : "0";
  const qualifyDropOff = contactedLeads > 0 ? ((1 - qualifiedLeads / contactedLeads) * 100).toFixed(1) : "0";
  const convertDropOff = qualifiedLeads > 0 ? ((1 - convertedLeads / qualifiedLeads) * 100).toFixed(1) : "0";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.01 }}
    >
      <Card className="bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
        <CardHeader className="border-b border-gray-800/50 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30">
                <Funnel className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <CardTitle className="text-lg font-bold text-white flex items-center gap-2">
                  Lead Conversion Funnel
                </CardTitle>
                <CardDescription className="mt-1 text-gray-400 text-sm">
                  Track your lead progression through each stage
                </CardDescription>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 relative z-10">
          <div className="bg-gradient-to-br from-black/40 to-black/20 rounded-xl p-4 border border-gray-800/30">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <defs>
                  <linearGradient id="totalGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.9} />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity={0.7} />
                  </linearGradient>
                  <linearGradient id="contactedGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity={0.9} />
                    <stop offset="100%" stopColor="#4f46e5" stopOpacity={0.7} />
                  </linearGradient>
                  <linearGradient id="qualifiedGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.9} />
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity={0.7} />
                  </linearGradient>
                  <linearGradient id="convertedGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity={0.9} />
                    <stop offset="100%" stopColor="#059669" stopOpacity={0.7} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" opacity={0.3} />
                <XAxis
                  dataKey="name"
                  stroke="#4b5563"
                  tick={{ fill: "#d1d5db", fontSize: 11, fontWeight: 600 }}
                  tickLine={{ stroke: "#374151" }}
                  axisLine={{ stroke: "#374151" }}
                />
                <YAxis
                  stroke="#4b5563"
                  tick={{ fill: "#9ca3af", fontSize: 11, fontWeight: 500 }}
                  tickLine={{ stroke: "#374151" }}
                  axisLine={{ stroke: "#374151" }}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(59, 130, 246, 0.1)" }} />
                <Bar dataKey="value" radius={[8, 8, 0, 0]} animationDuration={1000}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.gradient} />
                  ))}
                  <LabelList
                    dataKey="value"
                    position="top"
                    formatter={(value: number) => `${value.toLocaleString()}`}
                    style={{ fill: "#d1d5db", fontSize: 11, fontWeight: 600 }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 pt-4 border-t border-gray-800/50">
            {[
              { label: "Contact Drop-off", value: contactDropOff, color: "text-red-400", bg: "from-red-500/10 to-orange-500/10", border: "border-red-500/20" },
              { label: "Qualify Drop-off", value: qualifyDropOff, color: "text-orange-400", bg: "from-orange-500/10 to-yellow-500/10", border: "border-orange-500/20" },
              { label: "Convert Drop-off", value: convertDropOff, color: "text-yellow-400", bg: "from-yellow-500/10 to-amber-500/10", border: "border-yellow-500/20" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`text-center p-3 rounded-lg bg-gradient-to-br ${item.bg} border ${item.border}`}
              >
                <div className="flex items-center justify-center gap-1 mb-2">
                  <TrendingDown className="h-3 w-3" />
                  <span className={`text-xs font-semibold ${item.color}`}>{item.label}</span>
                </div>
                <p className="text-xl font-bold text-white">{item.value}%</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

