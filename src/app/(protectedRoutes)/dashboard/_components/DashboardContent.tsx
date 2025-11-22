"use client";

import { useState, useEffect } from "react";
import { Upload, FileText, Loader2, BarChart3, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { DashboardDataProvider, useDashboardDataContext } from "./DashboardDataProvider";
import AnalysisDashboard from "./AnalysisDashboard";
import PredictionDashboard from "./PredictionDashboard";

function DashboardContentInner() {
  const { loading, refreshData, updateDataDirectly, monthlySales } = useDashboardDataContext();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStats, setUploadStats] = useState<any>(null);
  const [hasData, setHasData] = useState(false);

  // Check if data exists on mount
  useEffect(() => {
    if (!loading && monthlySales && monthlySales.length > 0) {
      setHasData(true);
    } else if (!loading) {
      setHasData(false);
    }
  }, [loading, monthlySales]);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith(".csv")) {
      toast.error("Please upload a CSV file");
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/dashboard/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to upload CSV");
      }

      setUploadStats(data.stats);
      
      // If analytics are returned, update the data context directly (no API call needed)
      if (data.analytics) {
        updateDataDirectly(data.analytics);
        setHasData(true);
        toast.success("CSV uploaded and processed successfully!");
      } else {
        // Fallback: refresh data from API
        refreshData();
        setHasData(true);
        toast.success("CSV uploaded and processed successfully!");
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to upload CSV");
    } finally {
      setIsUploading(false);
    }
  };


  return (
    <div className="w-full min-h-screen space-y-8 pb-12">
      {/* Luxury Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-8 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="relative z-10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-2">
                Retail Sales Analytics & Forecasting
              </h1>
              <p className="text-muted-foreground text-lg">
                Comprehensive insights and AI-powered predictions for your business
              </p>
            </div>
            <Sparkles className="h-12 w-12 text-primary/50" />
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 backdrop-blur-sm shadow-xl">
        <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <Upload className="h-5 w-5 text-primary" />
            Upload Sales Data
          </CardTitle>
          <CardDescription className="text-base">
            Upload a CSV file with sales transactions to begin analysis and forecasting
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex items-center gap-4 flex-wrap">
            <label htmlFor="csv-upload">
              <Button
                asChild
                variant="outline"
                className="cursor-pointer h-12 px-6 text-base font-semibold hover:bg-primary/10 hover:border-primary/50 transition-all"
                disabled={isUploading}
              >
                <span>
                  {isUploading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 h-5 w-5" />
                      Choose CSV File
                    </>
                  )}
                </span>
              </Button>
            </label>
            <input
              id="csv-upload"
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="hidden"
              disabled={isUploading}
            />
            {uploadStats && (
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground bg-muted/50 px-4 py-2 rounded-lg">
                <FileText className="h-4 w-4" />
                <span>
                  Processed: <span className="font-bold text-foreground">{uploadStats.processed}</span> rows
                  {uploadStats.returns > 0 && (
                    <span className="ml-2">
                      • <span className="text-orange-400">{uploadStats.returns}</span> returns
                    </span>
                  )}
                  {uploadStats.creditNotes > 0 && (
                    <span className="ml-2">
                      • <span className="text-red-400">{uploadStats.creditNotes}</span> credit notes
                    </span>
                  )}
                </span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {hasData ? (
        <Tabs defaultValue="analysis" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-2xl grid-cols-2 h-14 bg-gradient-to-r from-muted/80 to-muted/60 backdrop-blur-md border-2 border-border/50 shadow-xl rounded-xl p-1.5">
              <TabsTrigger 
                value="analysis" 
                className="flex items-center justify-center gap-3 text-lg font-bold data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/20 data-[state=active]:to-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-xl data-[state=active]:border data-[state=active]:border-primary/30 transition-all duration-300 rounded-lg"
              >
                <BarChart3 className="h-6 w-6" />
                <span>Analysis</span>
              </TabsTrigger>
              <TabsTrigger 
                value="prediction" 
                className="flex items-center justify-center gap-3 text-lg font-bold data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-purple-500/10 data-[state=active]:text-purple-400 data-[state=active]:shadow-xl data-[state=active]:border data-[state=active]:border-purple-500/30 transition-all duration-300 rounded-lg"
              >
                <TrendingUp className="h-6 w-6" />
                <span>Prediction</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="analysis" className="mt-0 space-y-6">
            <AnalysisDashboard />
          </TabsContent>

          <TabsContent value="prediction" className="mt-0 space-y-6">
            <PredictionDashboard />
          </TabsContent>
        </Tabs>
      ) : (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <FileText className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground text-center">
              No data available. Please upload a CSV file to view analytics.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default function DashboardContent() {
  return (
    <DashboardDataProvider>
      <DashboardContentInner />
    </DashboardDataProvider>
  );
}

