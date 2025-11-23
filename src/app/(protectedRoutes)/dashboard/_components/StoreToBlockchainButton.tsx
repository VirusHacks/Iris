"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2, AlertCircle, ExternalLink, Copy } from "lucide-react";
import { storeForecastToBlockchain, getUserWalletAddress } from "@/lib/blockchain/clientBlockchain";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface StoreToBlockchainButtonProps {
  forecastData: any;
  forecastType: "revenue" | "aov" | "orders";
  periods?: number;
  onStored?: (txHash: string, blockNumber: number) => void;
}

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "0xe268f249b7e77347627476df35036a2b53a0bf21";

export default function StoreToBlockchainButton({
  forecastData,
  forecastType,
  periods = 6,
  onStored,
}: StoreToBlockchainButtonProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [txDetails, setTxDetails] = useState<{ txHash: string; blockNumber: number; userAddress: string } | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string, type: "info" | "success" | "error" = "info") => {
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = `[${timestamp}] ${type.toUpperCase()}: ${message}`;
    setLogs((prev) => [logEntry, ...prev].slice(0, 20));
    console.log(`[StoreToBlockchain] ${logEntry}`);
  };

  const handleStore = async () => {
    if (!forecastData || !forecastData.historical || !forecastData.forecast) {
      toast.error("No forecast data available to store");
      addLog("No forecast data available", "error");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);
    setLogs([]);
    addLog("Starting blockchain storage process...");

    try {
      // Log forecast data summary
      const historicalCount = forecastData.historical?.length || 0;
      const forecastCount = forecastData.forecast?.length || 0;
      const mape = forecastData.metrics?.mape?.toFixed(2) || "N/A";
      
      addLog(`Forecast Type: ${forecastType}`);
      addLog(`Historical Data Points: ${historicalCount}`);
      addLog(`Forecast Data Points: ${forecastCount}`);
      addLog(`MAPE: ${mape}%`);
      addLog(`Periods: ${periods}`);

      // Check if wallet is connected
      addLog("Checking wallet connection...");
      const walletAddress = await getUserWalletAddress();
      
      if (!walletAddress) {
        addLog("Wallet not connected, requesting connection...");
        // Request connection
        if (typeof window !== "undefined" && window.ethereum) {
          try {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            const newAddress = await getUserWalletAddress();
            if (!newAddress) {
              throw new Error("Please connect your wallet");
            }
            addLog(`Wallet connected: ${newAddress}`, "success");
          } catch (err: any) {
            addLog(`Wallet connection failed: ${err.message}`, "error");
            throw new Error("Please connect your MetaMask wallet to store forecast on blockchain");
          }
        } else {
          addLog("MetaMask not found", "error");
          throw new Error("MetaMask or another Web3 wallet is required. Please install MetaMask.");
        }
      } else {
        addLog(`Wallet address: ${walletAddress}`, "success");
      }

      // Log contract address
      addLog(`Contract Address: ${CONTRACT_ADDRESS}`);
      addLog(`Network: ${typeof window !== "undefined" && window.ethereum ? "Detecting..." : "Unknown"}`);

      // Get network info
      if (typeof window !== "undefined" && window.ethereum) {
        try {
          const chainId = await window.ethereum.request({ method: "eth_chainId" });
          const chainIdNum = parseInt(chainId, 16);
          const network = chainIdNum === 11155111 ? "Sepolia" : chainIdNum === 1 ? "Mainnet" : `Chain ${chainIdNum}`;
          addLog(`Network: ${network} (Chain ID: ${chainIdNum})`);
        } catch (err) {
          addLog("Could not detect network", "error");
        }
      }

      // Log data being stored
      addLog("Preparing data for blockchain storage...");
      const firstHistorical = forecastData.historical[0];
      const lastHistorical = forecastData.historical[forecastData.historical.length - 1];
      const firstForecast = forecastData.forecast[0];
      const lastForecast = forecastData.forecast[forecastData.forecast.length - 1];
      
      addLog(`Historical Range: ${firstHistorical?.month} to ${lastHistorical?.month}`);
      addLog(`Forecast Range: ${firstForecast?.month} to ${lastForecast?.month}`);
      addLog(`First Historical Value: ${firstHistorical?.value?.toFixed(2) || "N/A"}`);
      addLog(`Last Historical Value: ${lastHistorical?.value?.toFixed(2) || "N/A"}`);
      addLog(`First Forecast Value: ${firstForecast?.value?.toFixed(2) || "N/A"}`);
      addLog(`Last Forecast Value: ${lastForecast?.value?.toFixed(2) || "N/A"}`);

      toast.info(`Storing ${forecastType} forecast to blockchain...`);
      addLog("Sending transaction to blockchain...");
      
      const result = await storeForecastToBlockchain(forecastData, forecastType, periods);
      
      addLog(`Transaction Hash: ${result.txHash}`, "success");
      addLog(`Block Number: ${result.blockNumber}`, "success");
      addLog("Transaction confirmed on blockchain!", "success");
      
      setTxDetails({
        txHash: result.txHash,
        blockNumber: result.blockNumber,
        userAddress: walletAddress || "",
      });
      
      setSuccess(true);
      setShowDetails(true);
      
      toast.success(
        `Forecast stored on blockchain! Transaction: ${result.txHash.substring(0, 10)}...`
      );

      if (onStored) {
        onStored(result.txHash, result.blockNumber);
      }
      
      // Dispatch custom event to refresh blockchain info panel
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("forecastStored", {
          detail: { forecastType, txHash: result.txHash, blockNumber: result.blockNumber }
        }));
      }
      
      // Reset success state after 10 seconds
      setTimeout(() => setSuccess(false), 10000);
    } catch (err: any) {
      const errorMessage = err.message || "Failed to store forecast on blockchain";
      addLog(`Error: ${errorMessage}`, "error");
      setError(errorMessage);
      toast.error(errorMessage);
      
      // Reset error state after 5 seconds
      setTimeout(() => setError(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  const getExplorerUrl = (txHash: string) => {
    // Try to detect network
    const network = "sepolia"; // Default to sepolia
    if (network === "sepolia") {
      return `https://sepolia.etherscan.io/tx/${txHash}`;
    }
    return `https://etherscan.io/tx/${txHash}`;
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard`);
  };

  return (
    <>
      {success ? (
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setShowDetails(true)}
          className="gap-2"
        >
          <CheckCircle2 className="h-4 w-4 text-green-500" />
          View Details
        </Button>
      ) : error ? (
        <Button variant="outline" size="sm" onClick={handleStore} className="gap-2">
          <AlertCircle className="h-4 w-4 text-red-500" />
          Retry Store
        </Button>
      ) : (
        <Button
          variant="outline"
          size="sm"
          onClick={handleStore}
          disabled={loading || !forecastData}
          className="gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Storing...
            </>
          ) : (
            <>
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Store on Blockchain
            </>
          )}
        </Button>
      )}

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Blockchain Transaction Details</DialogTitle>
            <DialogDescription>
              Details of the forecast data stored on blockchain
            </DialogDescription>
          </DialogHeader>
          
          {txDetails && (
            <div className="space-y-4">
              {/* Transaction Info */}
              <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Status</span>
                  <Badge variant="outline" className="gap-1 text-green-500">
                    <CheckCircle2 className="h-3 w-3" />
                    Confirmed
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Transaction Hash</span>
                    <div className="flex items-center gap-2 mt-1">
                      <code className="text-xs font-mono flex-1 bg-background p-2 rounded">
                        {txDetails.txHash}
                      </code>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(txDetails.txHash, "Transaction hash")}
                        className="h-8 w-8 p-0"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(getExplorerUrl(txDetails.txHash), "_blank")}
                        className="h-8 w-8 p-0"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Block Number</span>
                    <div className="mt-1">
                      <code className="text-xs font-mono bg-background p-2 rounded">
                        {txDetails.blockNumber}
                      </code>
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">User Address</span>
                    <div className="flex items-center gap-2 mt-1">
                      <code className="text-xs font-mono flex-1 bg-background p-2 rounded">
                        {txDetails.userAddress}
                      </code>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(txDetails.userAddress, "User address")}
                        className="h-8 w-8 p-0"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Contract Address</span>
                    <div className="flex items-center gap-2 mt-1">
                      <code className="text-xs font-mono flex-1 bg-background p-2 rounded">
                        {CONTRACT_ADDRESS}
                      </code>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(CONTRACT_ADDRESS, "Contract address")}
                        className="h-8 w-8 p-0"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Forecast Data Summary */}
              <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
                <span className="text-sm font-medium">Forecast Data Stored</span>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Type:</span>
                    <Badge className="ml-2 capitalize">{forecastType}</Badge>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Periods:</span>
                    <span className="ml-2 font-medium">{periods}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Historical Points:</span>
                    <span className="ml-2 font-medium">{forecastData.historical?.length || 0}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Forecast Points:</span>
                    <span className="ml-2 font-medium">{forecastData.forecast?.length || 0}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">MAPE:</span>
                    <span className="ml-2 font-medium">{forecastData.metrics?.mape?.toFixed(2) || "N/A"}%</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">MAE:</span>
                    <span className="ml-2 font-medium">{forecastData.metrics?.mae?.toFixed(2) || "N/A"}</span>
                  </div>
                </div>
              </div>

              {/* Logs */}
              <div className="space-y-2">
                <span className="text-sm font-medium">Transaction Logs</span>
                <div className="max-h-48 overflow-y-auto p-3 bg-background border rounded-md font-mono text-xs space-y-1">
                  {logs.length === 0 ? (
                    <p className="text-muted-foreground text-center py-4">No logs available</p>
                  ) : (
                    logs.map((log, idx) => (
                      <div
                        key={idx}
                        className={`${
                          log.includes("ERROR") ? "text-red-400" :
                          log.includes("SUCCESS") ? "text-green-400" :
                          "text-muted-foreground"
                        }`}
                      >
                        {log}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

