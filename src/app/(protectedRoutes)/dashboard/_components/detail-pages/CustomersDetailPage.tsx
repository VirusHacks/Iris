"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Users, Plus, Upload, Loader2, DollarSign, Calendar, Target, TrendingUp, User, MessageSquare, CheckSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import WhatsAppMessageModal from "./WhatsAppMessageModal";

interface Customer {
  id: string;
  customerId: string | null;
  customerName?: string | null;
  phone?: string | null;
  totalSpent: number;
  intentScore: number;
  touchpointsCount: number;
  recency: number;
  promotionalSegmentScore: number | null;
  promotionalSegmentCategory: string;
  clusterLabel: number;
  lastPurchaseDate: Date | null;
  customerData: any;
}

interface ClusterStats {
  count: number;
  totalSpent: number;
  avgSpent: number;
  avgRecency: number;
  segments: Record<string, number>;
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const formatDate = (date: Date | null) => {
  if (!date) return "N/A";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default function CustomersDetailPage() {
  const router = useRouter();
  const [customers, setCustomers] = useState<Record<number, Customer[]>>({});
  const [clusterStats, setClusterStats] = useState<Record<number, ClusterStats>>({});
  const [clusters, setClusters] = useState<number[]>([]);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedCustomers, setSelectedCustomers] = useState<Set<string>>(new Set());
  const [whatsappModalOpen, setWhatsappModalOpen] = useState(false);

  // Fetch customers data
  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/dashboard/segmentation/customers");
      if (!response.ok) {
        throw new Error("Failed to fetch customers");
      }
      const data = await response.json();
      
      console.log("[Customers Page] Fetched data:", {
        success: data.success,
        totalCustomers: data.totalCustomers,
        clusters: data.clusters,
        customersCount: Object.keys(data.customers || {}).length,
        statsCount: Object.keys(data.stats || {}).length,
      });
      
      if (data.success) {
        setCustomers(data.customers || {});
        setClusterStats(data.stats || {});
        setClusters(data.clusters || []);
        setTotalCustomers(data.totalCustomers || 0);
        
        console.log("[Customers Page] State updated:", {
          customers: Object.keys(data.customers || {}).length,
          clusters: data.clusters?.length || 0,
          totalCustomers: data.totalCustomers || 0,
        });
      } else {
        console.warn("[Customers Page] API returned success: false");
      }
    } catch (error: any) {
      console.error("Error fetching customers:", error);
      toast.error("Failed to load customers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith(".csv")) {
      toast.error("Please upload a CSV file");
      return;
    }

    setUploading(true);
    setUploadDialogOpen(false);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/dashboard/segmentation", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to process segmentation");
      }

      toast.success(`Successfully segmented ${result.count} customers!`);
      
      // Small delay to ensure cache is set
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Refresh customer data
      await fetchCustomers();
      
      // Scroll to top to show the data
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error: any) {
      console.error("Upload error:", error);
      toast.error(error.message || "Failed to upload and segment CSV");
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  // Calculate overall metrics
  const overallStats = {
    totalCustomers,
    totalSpent: Object.values(clusterStats).reduce((sum, stats) => sum + stats.totalSpent, 0),
    avgSpent: totalCustomers > 0 
      ? Object.values(clusterStats).reduce((sum, stats) => sum + stats.totalSpent, 0) / totalCustomers 
      : 0,
    clusters: clusters.length,
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-purple-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="w-full">
        {/* Header */}
        <div className="border-b border-border/50 bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-transparent px-6 py-4">
          <div className="max-w-[1920px] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => router.push("/dashboard")}
                className="hover:bg-purple-500/10"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
                  <Users className="h-8 w-8 text-purple-400" />
                  Customer Segmentation
                </h1>
                <p className="text-muted-foreground mt-1">AI-powered customer clustering and segmentation</p>
              </div>
            </div>
            <Button
              onClick={handleUploadClick}
              disabled={uploading}
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg"
            >
              {uploading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4 mr-2" />
                  Upload CSV
                </>
              )}
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="hidden"
              disabled={uploading}
            />
          </div>
        </div>

        <div className="p-6">
          {totalCustomers === 0 ? (
            <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 backdrop-blur-sm shadow-xl">
              <CardContent className="flex flex-col items-center justify-center py-16">
                <Upload className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-bold mb-2">No Customer Data</h3>
                <p className="text-muted-foreground text-center mb-6 max-w-md">
                  Upload a CSV file to segment your customers using AI-powered fuzzy logic and K-means clustering.
                </p>
                <Button
                  onClick={handleUploadClick}
                  disabled={uploading}
                  className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
                >
                  {uploading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Upload className="h-4 w-4 mr-2" />
                      Upload CSV File
                    </>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  CSV should include: last_purchase_date, total_spent, intent_score (optional), touchpoints_count (optional)
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {/* Overall Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border-purple-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Total Customers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{overallStats.totalCustomers.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground mt-1">Segmented customers</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-blue-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      Total Revenue
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{formatCurrency(overallStats.totalSpent)}</div>
                    <p className="text-xs text-muted-foreground mt-1">From all customers</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border-emerald-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Avg Customer Value
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{formatCurrency(overallStats.avgSpent)}</div>
                    <p className="text-xs text-muted-foreground mt-1">Per customer</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 border-amber-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Clusters
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{overallStats.clusters}</div>
                    <p className="text-xs text-muted-foreground mt-1">Customer groups</p>
                  </CardContent>
                </Card>
              </div>

              {/* Cluster Tabs */}
              <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Customer Clusters</CardTitle>
                  <CardDescription>Customers grouped by behavioral patterns using K-means clustering</CardDescription>
                </CardHeader>
                <CardContent>
                  {clusters.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      No clusters found. Please upload a CSV file to segment customers.
                    </div>
                  ) : (
                    <Tabs defaultValue={clusters.length > 0 ? `cluster-${clusters[0]}` : undefined} className="w-full">
                      <TabsList 
                        className="grid w-full mb-6"
                        style={{ 
                          gridTemplateColumns: `repeat(${Math.min(clusters.length, 4)}, 1fr)` 
                        }}
                      >
                        {clusters.map((cluster) => {
                          const stats = clusterStats[cluster] || { count: 0, totalSpent: 0, avgSpent: 0, avgRecency: 0, segments: {} };
                          return (
                            <TabsTrigger
                              key={cluster}
                              value={`cluster-${cluster}`}
                              className="flex flex-col items-start gap-1 p-4 data-[state=active]:bg-purple-500/20"
                            >
                              <div className="flex items-center gap-2 w-full">
                                <span className="font-bold text-lg">Cluster {cluster}</span>
                                <Badge variant="outline" className="ml-auto">
                                  {stats.count}
                                </Badge>
                              </div>
                              <div className="text-xs text-muted-foreground text-left w-full">
                                Avg: {formatCurrency(stats.avgSpent)} • Recency: {Math.round(stats.avgRecency)} days
                              </div>
                            </TabsTrigger>
                          );
                        })}
                      </TabsList>

                    {clusters.map((cluster) => {
                      const clusterCustomers = customers[cluster] || [];
                      const stats = clusterStats[cluster] || { count: 0, totalSpent: 0, avgSpent: 0, avgRecency: 0, segments: {} };
                      
                      return (
                        <TabsContent key={cluster} value={`cluster-${cluster}`} className="space-y-4">
                          {/* Cluster Stats - Horizontal Layout */}
                          <Card className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 border-purple-500/20">
                            <CardContent className="p-4">
                              <div className="flex flex-wrap items-center justify-between gap-6">
                                <div className="flex items-center gap-3">
                                  <div className="p-2 rounded-lg bg-purple-500/20">
                                    <Users className="h-5 w-5 text-purple-400" />
                                  </div>
                                  <div>
                                    <p className="text-xs text-muted-foreground">Customers</p>
                                    <p className="text-2xl font-bold">{stats.count}</p>
                                  </div>
                                </div>
                                <div className="h-12 w-px bg-border/50" />
                                <div className="flex items-center gap-3">
                                  <div className="p-2 rounded-lg bg-emerald-500/20">
                                    <DollarSign className="h-5 w-5 text-emerald-400" />
                                  </div>
                                  <div>
                                    <p className="text-xs text-muted-foreground">Total Revenue</p>
                                    <p className="text-2xl font-bold text-emerald-400">{formatCurrency(stats.totalSpent)}</p>
                                  </div>
                                </div>
                                <div className="h-12 w-px bg-border/50" />
                                <div className="flex items-center gap-3">
                                  <div className="p-2 rounded-lg bg-blue-500/20">
                                    <TrendingUp className="h-5 w-5 text-blue-400" />
                                  </div>
                                  <div>
                                    <p className="text-xs text-muted-foreground">Avg Revenue</p>
                                    <p className="text-2xl font-bold text-blue-400">{formatCurrency(stats.avgSpent)}</p>
                                  </div>
                                </div>
                                <div className="h-12 w-px bg-border/50" />
                                <div className="flex items-center gap-3">
                                  <div className="p-2 rounded-lg bg-amber-500/20">
                                    <Calendar className="h-5 w-5 text-amber-400" />
                                  </div>
                                  <div>
                                    <p className="text-xs text-muted-foreground">Avg Recency</p>
                                    <p className="text-2xl font-bold text-amber-400">{Math.round(stats.avgRecency)} days</p>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Segments in Cluster */}
                          {Object.keys(stats.segments).length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {Object.entries(stats.segments).map(([segment, count]) => (
                                <Badge key={segment} variant="outline" className="px-3 py-1">
                                  {segment}: {count}
                                </Badge>
                              ))}
                            </div>
                          )}

                          {/* Action Bar - Always Visible */}
                          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border/50 mb-4">
                            <div className="flex items-center gap-4">
                              <div className="text-sm font-medium">
                                {selectedCustomers.size > 0 ? (
                                  <span className="text-foreground">
                                    {selectedCustomers.size} customer{selectedCustomers.size !== 1 ? "s" : ""} selected
                                  </span>
                                ) : (
                                  <span className="text-muted-foreground">Select customers to send WhatsApp messages</span>
                                )}
                              </div>
                            </div>
                            <Button
                              onClick={() => {
                                const selected = clusterCustomers.filter((c) => selectedCustomers.has(c.id));
                                if (selected.length === 0) {
                                  toast.error("Please select at least one customer");
                                  return;
                                }
                                setWhatsappModalOpen(true);
                              }}
                              disabled={selectedCustomers.size === 0}
                              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                              size="lg"
                            >
                              <MessageSquare className="h-5 w-5 mr-2" />
                              Send WhatsApp {selectedCustomers.size > 0 && `(${selectedCustomers.size})`}
                            </Button>
                          </div>

                          {/* Customer Table */}
                          <div className="border rounded-lg overflow-hidden bg-card/50">
                            <Table>
                              <TableHeader>
                                <TableRow className="bg-muted/30">
                                  <TableHead className="w-12">
                                    <Checkbox
                                      checked={clusterCustomers.length > 0 && clusterCustomers.every((c) => selectedCustomers.has(c.id))}
                                      onCheckedChange={(checked) => {
                                        if (checked) {
                                          const newSelected = new Set(selectedCustomers);
                                          clusterCustomers.forEach((c) => newSelected.add(c.id));
                                          setSelectedCustomers(newSelected);
                                        } else {
                                          const newSelected = new Set(selectedCustomers);
                                          clusterCustomers.forEach((c) => newSelected.delete(c.id));
                                          setSelectedCustomers(newSelected);
                                        }
                                      }}
                                    />
                                  </TableHead>
                                  <TableHead className="font-semibold">Customer Name</TableHead>
                                  <TableHead className="font-semibold">ID</TableHead>
                                  <TableHead className="font-semibold">Total Spent</TableHead>
                                  <TableHead className="font-semibold">Intent Score</TableHead>
                                  <TableHead className="font-semibold">Touchpoints</TableHead>
                                  <TableHead className="font-semibold">Recency</TableHead>
                                  <TableHead className="font-semibold">Last Purchase</TableHead>
                                  <TableHead className="font-semibold">Segment</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {clusterCustomers.length === 0 ? (
                                  <TableRow>
                                    <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                                      No customers in this cluster
                                    </TableCell>
                                  </TableRow>
                                ) : (
                                  clusterCustomers.map((customer) => {
                                    // Extract customer name from customerData or use a default
                                    const customerName = customer.customerName || 
                                                       customer.customerData?.name || 
                                                       customer.customerData?.customer_name ||
                                                       customer.customerData?.customerName ||
                                                       `Customer ${customer.customerId || customer.id}`;
                                    
                                    // Extract phone number from customerData
                                    const phone = customer.phone || 
                                                customer.customerData?.phone ||
                                                customer.customerData?.phone_number ||
                                                customer.customerData?.mobile ||
                                                customer.customerData?.whatsapp ||
                                                null;
                                    
                                    const isSelected = selectedCustomers.has(customer.id);
                                    
                                    return (
                                      <TableRow 
                                        key={customer.id} 
                                        className={`hover:bg-muted/20 transition-colors cursor-pointer ${isSelected ? 'bg-muted/40' : ''}`}
                                        onClick={(e) => {
                                          // Don't navigate if clicking checkbox
                                          if ((e.target as HTMLElement).closest('button, [role="checkbox"]')) {
                                            return;
                                          }
                                          router.push(`/dashboard/customers/${customer.customerId || customer.id}`);
                                        }}
                                      >
                                        <TableCell onClick={(e) => e.stopPropagation()}>
                                          <Checkbox
                                            checked={isSelected}
                                            onCheckedChange={(checked) => {
                                              const newSelected = new Set(selectedCustomers);
                                              if (checked) {
                                                newSelected.add(customer.id);
                                              } else {
                                                newSelected.delete(customer.id);
                                              }
                                              setSelectedCustomers(newSelected);
                                            }}
                                          />
                                        </TableCell>
                                        <TableCell className="font-medium">
                                          <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-xs font-bold text-purple-400">
                                              {customerName.charAt(0).toUpperCase()}
                                            </div>
                                            <span>{customerName}</span>
                                          </div>
                                        </TableCell>
                                        <TableCell className="text-muted-foreground font-mono text-sm">
                                          {customer.customerId || "N/A"}
                                        </TableCell>
                                        <TableCell className="font-semibold text-emerald-400">
                                          {formatCurrency(customer.totalSpent)}
                                        </TableCell>
                                        <TableCell>
                                          <Badge 
                                            variant="outline"
                                            className={
                                              customer.intentScore > 0.7 
                                                ? "border-emerald-500 text-emerald-400"
                                                : customer.intentScore > 0.4
                                                ? "border-amber-500 text-amber-400"
                                                : "border-red-500 text-red-400"
                                            }
                                          >
                                            {(customer.intentScore * 100).toFixed(0)}%
                                          </Badge>
                                        </TableCell>
                                        <TableCell>
                                          <div className="flex items-center gap-1">
                                            <Target className="h-3 w-3 text-muted-foreground" />
                                            <span>{customer.touchpointsCount}</span>
                                          </div>
                                        </TableCell>
                                        <TableCell>
                                          <span className={
                                            customer.recency < 90 
                                              ? "text-emerald-400 font-medium" 
                                              : customer.recency < 180
                                              ? "text-amber-400 font-medium"
                                              : "text-red-400 font-medium"
                                          }>
                                            {customer.recency} days
                                          </span>
                                        </TableCell>
                                        <TableCell className="text-muted-foreground text-sm">
                                          {formatDate(customer.lastPurchaseDate)}
                                        </TableCell>
                                        <TableCell>
                                          <Badge
                                            variant="outline"
                                            className={
                                              customer.promotionalSegmentCategory === "High Value Engagement"
                                                ? "border-emerald-500 text-emerald-400 bg-emerald-500/10"
                                                : customer.promotionalSegmentCategory === "Re-engagement"
                                                ? "border-orange-500 text-orange-400 bg-orange-500/10"
                                                : "border-blue-500 text-blue-400 bg-blue-500/10"
                                            }
                                          >
                                            {customer.promotionalSegmentCategory}
                                          </Badge>
                                        </TableCell>
                                      </TableRow>
                                    );
                                  })
                                )}
                              </TableBody>
                            </Table>
                          </div>
                        </TabsContent>
                      );
                    })}
                    </Tabs>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* WhatsApp Message Modal */}
        {whatsappModalOpen && (
          <WhatsAppMessageModal
            isOpen={whatsappModalOpen}
            onClose={() => {
              setWhatsappModalOpen(false);
              setSelectedCustomers(new Set());
            }}
            customers={Object.values(customers)
              .flat()
              .filter((c) => selectedCustomers.has(c.id))
              .map((customer) => {
                // Extract phone number
                const phone = customer.phone || 
                            customer.customerData?.phone ||
                            customer.customerData?.phone_number ||
                            customer.customerData?.mobile ||
                            customer.customerData?.whatsapp ||
                            null;
                
                return {
                  ...customer,
                  phone,
                };
              })}
            clusterInfo={Object.values(clusterStats)[0]}
          />
        )}
      </div>
    </div>
  );
}
