"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, TrendingUp, Gift, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface Customer {
  id: string;
  name: string;
  value: string;
  loyaltyScore: number;
  upsellPotential: string;
}

const highValueCustomers: Customer[] = [
  { id: "1", name: "Acme Corp", value: "$125K", loyaltyScore: 9.2, upsellPotential: "Premium Tier" },
  { id: "2", name: "TechStart Inc", value: "$98K", loyaltyScore: 8.8, upsellPotential: "Enterprise Plan" },
  { id: "3", name: "Global Solutions", value: "$156K", loyaltyScore: 9.5, upsellPotential: "Custom Package" },
  { id: "4", name: "Innovation Labs", value: "$87K", loyaltyScore: 8.5, upsellPotential: "Premium Tier" },
];

export default function LoyaltyUpsell() {
  const router = useRouter();

  return (
    <Card className="bg-[#0a0a0a] border border-gray-800">
      <CardHeader className="border-b border-gray-800">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-white flex items-center gap-2">
              <Award className="h-4 w-4 text-purple-400" />
              Loyalty & Upsell Opportunities
            </CardTitle>
            <CardDescription className="text-gray-400 text-sm mt-1">High-value customers eligible for rewards and upgrades</CardDescription>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push("/lead")}
            className="text-gray-400 hover:text-white hover:bg-gray-900"
          >
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {highValueCustomers.map((customer) => (
            <div
              key={customer.id}
              className="flex items-center justify-between p-4 rounded-lg bg-[#0a0a0a] border border-gray-800 hover:border-purple-500/50 transition-all"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="p-3 rounded-xl bg-[#0a0a0a] border border-gray-800">
                  <Star className="h-5 w-5 text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-white">{customer.name}</h4>
                    <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/50">
                      {customer.loyaltyScore}/10
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-400">Value: {customer.value}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-purple-400 font-medium flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      {customer.upsellPotential}
                    </span>
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="bg-[#0a0a0a] border-gray-700 text-white hover:bg-gray-900 hover:border-purple-500/50"
              >
                <Gift className="h-4 w-4 mr-2" />
                Offer
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

