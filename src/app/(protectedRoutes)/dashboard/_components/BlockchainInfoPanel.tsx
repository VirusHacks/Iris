"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink, CheckCircle2, XCircle, Loader2, RefreshCw } from "lucide-react";
import { getUserWalletAddress, fetchForecastFromBlockchain, switchToSepoliaNetwork, getCurrentNetworkInfo } from "@/lib/blockchain/clientBlockchain";
import { toast } from "sonner";

interface BlockchainInfo {
  userAddress: string | null;
  contractAddress: string;
  network: string;
  forecastTypes: {
    type: string;
    exists: boolean;
    timestamp?: number;
    txHash?: string;
  }[];
}

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "0xe268f249b7e77347627476df35036a2b53a0bf21";

export default function BlockchainInfoPanel() {
  const [info, setInfo] = useState<BlockchainInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [switchingNetwork, setSwitchingNetwork] = useState(false);

  const addLog = (message: string, type: "info" | "success" | "error" = "info") => {
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = `[${timestamp}] ${type.toUpperCase()}: ${message}`;
    setLogs((prev) => [logEntry, ...prev].slice(0, 50)); // Keep last 50 logs
    console.log(`[BlockchainInfoPanel] ${logEntry}`);
  };

  const fetchBlockchainInfo = async () => {
    setRefreshing(true);
    addLog("Fetching blockchain information...");
    
    try {
      const userAddress = await getUserWalletAddress();
      addLog(`User wallet address: ${userAddress || "Not connected"}`);

      if (!userAddress) {
        setInfo({
          userAddress: null,
          contractAddress: CONTRACT_ADDRESS,
          network: "Unknown",
          forecastTypes: [],
        });
        addLog("No wallet connected - connect MetaMask to view blockchain data", "info");
        setLoading(false);
        setRefreshing(false);
        return;
      }

      // Check which forecast types exist on blockchain
      const types: BlockchainInfo["forecastTypes"] = [];
      
      for (const forecastType of ["revenue", "aov", "orders"]) {
        try {
          addLog(`Checking ${forecastType} forecast on blockchain...`);
          const data = await fetchForecastFromBlockchain(userAddress, forecastType as any);
          
          if (data && data.timestamp) {
            types.push({
              type: forecastType,
              exists: true,
              timestamp: data.timestamp,
            });
            addLog(`${forecastType} forecast found on blockchain (timestamp: ${new Date(data.timestamp * 1000).toLocaleString()})`, "success");
          } else {
            types.push({
              type: forecastType,
              exists: false,
            });
            addLog(`${forecastType} forecast not found on blockchain`, "info");
          }
        } catch (error: any) {
          types.push({
            type: forecastType,
            exists: false,
          });
          addLog(`Error checking ${forecastType}: ${error.message}`, "error");
        }
      }

      // Get network info using the new function
      let network = "Unknown";
      let chainId = 0;
      try {
        const networkInfo = await getCurrentNetworkInfo();
        network = networkInfo.name;
        chainId = networkInfo.chainId;
        addLog(`Network detected: ${network} (Chain ID: ${chainId})`);
        
        // Warn if not on Sepolia
        if (chainId !== 11155111 && chainId !== 0) {
          addLog(`Warning: Not on Sepolia network. Current: ${network}`, "error");
        }
      } catch (err: any) {
        addLog(`Could not detect network: ${err.message}`, "error");
      }

      setInfo({
        userAddress,
        contractAddress: CONTRACT_ADDRESS,
        network,
        forecastTypes: types,
      });

      addLog("Blockchain information fetched successfully", "success");
    } catch (error: any) {
      addLog(`Error fetching blockchain info: ${error.message}`, "error");
      toast.error("Failed to fetch blockchain information");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchBlockchainInfo();
    
    // Refresh when wallet changes
    if (typeof window !== "undefined" && window.ethereum) {
      const handleAccountsChanged = () => {
        addLog("Wallet accounts changed, refreshing...");
        fetchBlockchainInfo();
      };
      
      window.ethereum.on?.("accountsChanged", handleAccountsChanged);
      
      // Listen for forecast stored events
      const handleForecastStored = (event: CustomEvent) => {
        addLog(`Forecast stored: ${event.detail.forecastType} (TX: ${event.detail.txHash.substring(0, 10)}...)`, "success");
        // Refresh after a short delay to allow blockchain to update
        setTimeout(() => {
          addLog("Refreshing blockchain info after storage...");
          fetchBlockchainInfo();
        }, 3000); // 3 second delay
      };
      
      window.addEventListener("forecastStored", handleForecastStored as EventListener);
      
      return () => {
        window.ethereum.removeListener?.("accountsChanged", handleAccountsChanged);
        window.removeEventListener("forecastStored", handleForecastStored as EventListener);
      };
    }
  }, []);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard`);
    addLog(`Copied ${label} to clipboard`);
  };

  const getExplorerUrl = (address: string) => {
    const network = info?.network.toLowerCase() || "sepolia";
    if (network === "sepolia") {
      return `https://sepolia.etherscan.io/address/${address}`;
    } else if (network === "mainnet") {
      return `https://etherscan.io/address/${address}`;
    }
    return `https://etherscan.io/address/${address}`;
  };

  if (loading && !info) {
    return (
      <Card className="bg-gradient-to-br from-card to-card/80 border-purple-500/30">
        <CardHeader>
          <CardTitle>Blockchain Information</CardTitle>
          <CardDescription>Loading blockchain data...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-32">
            <Loader2 className="h-6 w-6 animate-spin text-purple-400" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-card to-card/80 border-purple-500/30">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Blockchain Information</CardTitle>
            <CardDescription className="flex items-center gap-2">
              View your forecast data stored on the blockchain
            </CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={fetchBlockchainInfo}
            disabled={refreshing}
            className="gap-2"
          >
            <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Wallet Address */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">Your Wallet Address</span>
            {info?.userAddress ? (
              <Badge variant="outline" className="gap-1">
                <CheckCircle2 className="h-3 w-3 text-green-500" />
                Connected
              </Badge>
            ) : (
              <Badge variant="outline" className="gap-1">
                <XCircle className="h-3 w-3 text-red-500" />
                Not Connected
              </Badge>
            )}
          </div>
          {info?.userAddress ? (
            <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-md">
              <code className="text-xs flex-1 font-mono">{info.userAddress}</code>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(info.userAddress!, "Wallet address")}
                className="h-6 w-6 p-0"
              >
                <Copy className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(getExplorerUrl(info.userAddress!), "_blank")}
                className="h-6 w-6 p-0"
              >
                <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              Connect your wallet to view blockchain data
            </p>
          )}
        </div>

        {/* Contract Address */}
        <div className="space-y-2">
          <span className="text-sm font-medium text-muted-foreground">Contract Address</span>
          <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-md">
            <code className="text-xs flex-1 font-mono">{info?.contractAddress}</code>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard(info?.contractAddress || "", "Contract address")}
              className="h-6 w-6 p-0"
            >
              <Copy className="h-3 w-3" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open(getExplorerUrl(info?.contractAddress || ""), "_blank")}
              className="h-6 w-6 p-0"
            >
              <ExternalLink className="h-3 w-3" />
            </Button>
          </div>
        </div>

        {/* Network */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">Network</span>
            {info?.network && info.network !== "Sepolia" && info.network !== "Unknown" && (
              <Button
                variant="outline"
                size="sm"
                onClick={async () => {
                  setSwitchingNetwork(true);
                  addLog("Switching to Sepolia network...");
                  try {
                    await switchToSepoliaNetwork();
                    addLog("Successfully switched to Sepolia", "success");
                    toast.success("Switched to Sepolia network");
                    // Refresh network info
                    fetchBlockchainInfo();
                  } catch (error: any) {
                    addLog(`Failed to switch network: ${error.message}`, "error");
                    toast.error(`Failed to switch network: ${error.message}`);
                  } finally {
                    setSwitchingNetwork(false);
                  }
                }}
                disabled={switchingNetwork}
                className="h-7 text-xs"
              >
                {switchingNetwork ? (
                  <>
                    <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                    Switching...
                  </>
                ) : (
                  "Switch to Sepolia"
                )}
              </Button>
            )}
          </div>
          <Badge variant="outline" className={info?.network === "Sepolia" ? "text-green-500" : ""}>
            {info?.network || "Unknown"}
          </Badge>
        </div>

        {/* Forecast Types */}
        <div className="space-y-2">
          <span className="text-sm font-medium text-muted-foreground">Stored Forecasts</span>
          <div className="space-y-2">
            {info?.forecastTypes.map((ft) => (
              <div
                key={ft.type}
                className="flex items-center justify-between p-2 bg-muted/50 rounded-md"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium capitalize">{ft.type}</span>
                  {ft.exists ? (
                    <Badge variant="outline" className="gap-1 text-green-500">
                      <CheckCircle2 className="h-3 w-3" />
                      On-Chain
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="gap-1 text-muted-foreground">
                      <XCircle className="h-3 w-3" />
                      Not Stored
                    </Badge>
                  )}
                </div>
                {ft.exists && ft.timestamp && (
                  <span className="text-xs text-muted-foreground">
                    {new Date(ft.timestamp * 1000).toLocaleDateString()}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Logs */}
        <div className="space-y-2 border-t pt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">Activity Logs</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLogs([])}
              className="h-6 text-xs"
            >
              Clear
            </Button>
          </div>
          <div className="max-h-48 overflow-y-auto p-2 bg-muted/30 rounded-md font-mono text-xs space-y-1">
            {logs.length === 0 ? (
              <p className="text-muted-foreground text-center py-4">No logs yet</p>
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
      </CardContent>
    </Card>
  );
}

