"use client";

import { useState } from "react";
import { Upload, FileText, Loader2, CheckCircle2, FileUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function CSVUploadBar({ onUploadSuccess }: { onUploadSuccess?: () => void }) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStats, setUploadStats] = useState<any>(null);
  const router = useRouter();

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
      const response = await fetch("/api/leads/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to upload CSV");
      }

      setUploadStats({
        processed: data.stats?.processed || 0,
        newLeads: data.stats?.newLeads || 0,
        updated: data.stats?.updated || 0,
      });

      toast.success(
        `CSV processed successfully! ${data.stats?.newLeads || 0} new leads added, ${data.stats?.updated || 0} updated.`
      );

      router.refresh();
      
      if (onUploadSuccess) {
        onUploadSuccess();
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to upload CSV");
    } finally {
      setIsUploading(false);
      event.target.value = '';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.01 }}
    >
      <Card className="bg-gradient-to-br from-[#0a0a0a] via-blue-500/5 to-purple-500/5 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 h-full overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <CardHeader className="border-b border-gray-800/50 relative z-10">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: isUploading ? 360 : 0 }}
              transition={{ duration: 2, repeat: isUploading ? Infinity : 0, ease: "linear" }}
              className="p-2.5 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30"
            >
              <Upload className="h-5 w-5 text-blue-400" />
            </motion.div>
            <div>
              <CardTitle className="text-base font-bold text-white">Upload New Leads CSV</CardTitle>
              <p className="text-xs text-gray-400 mt-0.5">Import leads from a CSV file</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 h-full flex flex-col relative z-10">
          <div className="space-y-3 flex-1">
            <AnimatePresence>
              {uploadStats && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-lg p-3 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span className="text-sm font-bold text-emerald-400">{uploadStats.processed}</span>
                    <span className="text-xs text-gray-300">processed</span>
                  </div>
                  {uploadStats.newLeads > 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-2 text-xs text-blue-400 ml-6"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span className="font-semibold">+{uploadStats.newLeads}</span>
                      <span>new leads</span>
                    </motion.div>
                  )}
                  {uploadStats.updated > 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="flex items-center gap-2 text-xs text-purple-400 ml-6"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span className="font-semibold">{uploadStats.updated}</span>
                      <span>updated</span>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="mt-auto pt-4">
            <label htmlFor="leads-csv-upload" className="w-full block">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  variant="outline"
                  className="cursor-pointer w-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/50 text-white hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-400 transition-all duration-300 font-semibold"
                  disabled={isUploading}
                >
                  <span>
                    {isUploading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <FileUp className="mr-2 h-4 w-4" />
                        Choose CSV File
                      </>
                    )}
                  </span>
                </Button>
              </motion.div>
            </label>
            <input
              id="leads-csv-upload"
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="hidden"
              disabled={isUploading}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

