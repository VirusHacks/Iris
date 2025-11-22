/**
 * Blockchain service for interacting with SalesForecast smart contract
 * Following best practices with network validation and error handling
 */

import { ethers } from "ethers";
import { convertForecastToContractParams, weiToFloat, storedToMape } from "./forecastContract";
import SalesForecastABI from "../../../artifacts/SalesForecast.json";

// Extend Window interface to include ethereum
declare global {
  interface Window {
    ethereum?: ethers.Eip1193Provider & {
      on: (event: string, callback: (accounts: string[]) => void) => void;
      removeListener: (event: string, callback: (accounts: string[]) => void) => void;
    };
  }
}

// Contract configuration
const RAW_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "0xe268f249b7e77347627476df35036a2b53a0bf21";

// Normalize to checksum address format
export const CONTRACT_ADDRESS = ethers.isAddress(RAW_CONTRACT_ADDRESS)
  ? ethers.getAddress(RAW_CONTRACT_ADDRESS)
  : RAW_CONTRACT_ADDRESS;

// Sepolia network configuration
export const SEPOLIA_NETWORK = {
  chainId: "0xaa36a7", // 11155111
  chainName: "Sepolia",
  nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  rpcUrls: [
    "https://ethereum-sepolia-rpc.publicnode.com", // PublicNode - most reliable
    "https://eth-sepolia.public.blastapi.io", // BlastAPI
    "https://rpc.sepolia.org", // Official Sepolia RPC
  ],
  blockExplorerUrls: ["https://sepolia.etherscan.io"],
};

// Get RPC URL - use env var if valid, otherwise use public Sepolia endpoints
function getRpcUrl(): string {
  const envRpc = process.env.NEXT_PUBLIC_RPC_URL || process.env.RPC_URL;

  // Check if env RPC is valid (not a placeholder)
  if (envRpc && !envRpc.includes("YOUR_KEY") && envRpc !== "http://localhost:8545") {
    return envRpc;
  }

  // Use most reliable public Sepolia RPC as fallback
  return SEPOLIA_NETWORK.rpcUrls[0]; // PublicNode - most reliable
}

// Export RPC URL for error messages
export const CURRENT_RPC_URL = getRpcUrl();

// Singleton RPC provider to prevent multiple instances and retry loops
let rpcProviderInstance: ethers.JsonRpcProvider | null = null;
let rpcProviderInitializing = false;

// Suppress JsonRpcProvider retry warnings on server-side (globally)
// These warnings occur asynchronously after provider creation, so we need global suppression
if (typeof window === "undefined") {
  const originalWarn = console.warn;
  console.warn = (...args: any[]) => {
    const message = args[0]?.toString() || "";
    // Suppress only the JsonRpcProvider network detection retry messages
    if (message.includes("JsonRpcProvider failed to detect network")) {
      return; // Suppress this specific warning
    }
    originalWarn.apply(console, args);
  };
}

// Get wallet provider (client-side only)
export async function getWalletProvider(): Promise<ethers.BrowserProvider> {
  if (typeof window === "undefined") {
    throw new Error("getWalletProvider can only be called on client-side");
  }

  if (!window.ethereum) {
    throw new Error("MetaMask not installed. Please install MetaMask to interact with the blockchain.");
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  return provider;
}

// Get RPC provider (server-side or fallback) - lazy singleton pattern
export function getRpcProvider(): ethers.JsonRpcProvider {
  // Return existing instance if available
  if (rpcProviderInstance) {
    return rpcProviderInstance;
  }

  // Prevent concurrent initialization
  if (rpcProviderInitializing) {
    // Wait a bit and retry (shouldn't happen in practice)
    throw new Error("RPC provider is being initialized, please retry");
  }

  rpcProviderInitializing = true;
  
  try {
    const rpcUrl = getRpcUrl();

    // Create a static network configuration to prevent network detection retries
    const staticNetwork = {
      name: "sepolia",
      chainId: 11155111n,
    };

    // Create provider with static network - this prevents auto-detection
    // Using Network.from() creates a proper network object
    const network = ethers.Network.from(staticNetwork);
    rpcProviderInstance = new ethers.JsonRpcProvider(rpcUrl, network);
    
    return rpcProviderInstance;
  } catch (error) {
    rpcProviderInitializing = false;
    throw error;
  } finally {
    rpcProviderInitializing = false;
  }
}

// Get provider (for read operations) - prefers wallet, falls back to RPC
export function getProvider(): ethers.Provider {
  if (typeof window !== "undefined") {
    // Client-side: use window.ethereum if available, otherwise use RPC
    if (window.ethereum) {
      return new ethers.BrowserProvider(window.ethereum);
    }
  }

  // Server-side or fallback: use RPC URL
  return getRpcProvider();
}

// Helper to check contract and network (non-blocking, just for info)
async function checkContract(provider: ethers.Provider) {
  try {
    const network = await provider.getNetwork();
    const code = await provider.getCode(CONTRACT_ADDRESS);

    if (!code || code === "0x" || code === "0x0" || code.length <= 2) {
      const networkName = network.name !== "unknown" ? network.name : `Chain ID ${network.chainId}`;
      console.warn(
        `[Blockchain] Warning: No contract code found at ${CONTRACT_ADDRESS} on ${networkName}. ` +
          `This might be a network mismatch. The contract call will be attempted anyway.`
      );
      return { network, hasCode: false };
    }

    console.log(`[Blockchain] Contract validated on ${network.name} (Chain ID: ${network.chainId})`);
    return { network, hasCode: true };
  } catch (err) {
    // Don't block on validation errors
    console.warn("[Blockchain] Contract validation check failed:", err);
    return { network: null, hasCode: null };
  }
}

// Get contract instance (read-only)
export async function getContract(): Promise<ethers.Contract> {
  const provider = getProvider();

  // Check contract (non-blocking)
  await checkContract(provider);

  return new ethers.Contract(CONTRACT_ADDRESS, SalesForecastABI.abi, provider);
}

// Get contract instance with signer (for write operations) - client-side only
export async function getContractWithSigner(): Promise<ethers.Contract> {
  if (typeof window === "undefined") {
    throw new Error("getContractWithSigner can only be called on client-side");
  }

  if (!window.ethereum) {
    throw new Error("MetaMask not installed. Please install MetaMask to store forecasts on blockchain.");
  }

  const provider = await getWalletProvider();

  // Check contract (non-blocking)
  await checkContract(provider);

  // Request account access
  await provider.send("eth_requestAccounts", []);
  const signer = await provider.getSigner();

  return new ethers.Contract(CONTRACT_ADDRESS, SalesForecastABI.abi, signer);
}

// Get network info
export async function getNetworkInfo() {
  try {
    const provider = getProvider();
    const network = await provider.getNetwork();

    return {
      name: network.name !== "unknown" ? network.name : `Chain ID ${network.chainId}`,
      chainId: Number(network.chainId),
      address: CONTRACT_ADDRESS,
    };
  } catch (error) {
    console.error("[Blockchain] Error getting network info:", error);
    return {
      name: "Unknown",
      chainId: 0,
      address: CONTRACT_ADDRESS,
    };
  }
}

// Switch to Sepolia testnet
export async function switchToSepolia() {
  if (typeof window === "undefined" || !window.ethereum) {
    throw new Error("MetaMask is not installed");
  }

  try {
    // Try to switch to Sepolia
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: SEPOLIA_NETWORK.chainId }],
    });
    console.log("[Blockchain] Switched to Sepolia network");
  } catch (switchError: any) {
    // This error code indicates that the chain has not been added to MetaMask
    if (switchError.code === 4902) {
      try {
        // Add the Sepolia network to MetaMask
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [SEPOLIA_NETWORK],
        });
        console.log("[Blockchain] Added Sepolia network to MetaMask");
      } catch (addError: any) {
        throw new Error(`Failed to add Sepolia network: ${addError.message}`);
      }
    } else {
      throw switchError;
    }
  }
}

/**
 * Store forecast data to blockchain (client-side only)
 */
export async function storeForecastOnChain(
  forecastData: any,
  forecastType: "revenue" | "aov" | "orders",
  periods: number = 6
) {
  try {
    // Ensure we're on Sepolia
    await switchToSepolia();

    const contract = await getContractWithSigner();
    const params = convertForecastToContractParams(forecastData, forecastType, periods);

    console.log(`[Blockchain] Storing ${forecastType} forecast to blockchain...`);
    console.log(`[Blockchain] Contract: ${CONTRACT_ADDRESS}`);
    console.log(`[Blockchain] Data points: ${params.historicalMonths.length} historical, ${params.forecastMonths.length} forecast`);

    const tx = await contract.storeForecast(
      params.forecastType,
      params.historicalMonths,
      params.historicalValues,
      params.forecastMonths,
      params.forecastValues,
      params.mape,
      params.mae,
      params.rmse
    );

    console.log(`[Blockchain] Transaction sent: ${tx.hash}`);
    const receipt = await tx.wait();
    console.log(`[Blockchain] Transaction confirmed in block: ${receipt.blockNumber}`);

    return {
      success: true,
      txHash: tx.hash,
      blockNumber: receipt.blockNumber,
    };
  } catch (error: any) {
    console.error("[Blockchain] Error storing forecast:", error);

    // Provide helpful error messages
    if (error.code === "ACTION_REJECTED" || error.message?.includes("User rejected")) {
      throw new Error("Transaction was rejected. Please approve the transaction in MetaMask.");
    }

    if (error.message?.includes("network") || error.code === "NETWORK_ERROR") {
      throw new Error("Network error. Please ensure you're connected to Sepolia testnet.");
    }

    throw new Error(`Failed to store forecast on blockchain: ${error.message || error}`);
  }
}

/**
 * Store all forecasts (revenue, aov, orders) to blockchain at once
 */
export async function storeAllForecastsOnChain(
  revenueForecast: any,
  aovForecast: any,
  ordersForecast: any,
  periods: number = 6
) {
  try {
    // Ensure we're on Sepolia
    await switchToSepolia();

    const contract = await getContractWithSigner();
    const results: Array<{ type: string; txHash: string; blockNumber: number }> = [];

    // Store revenue forecast
    if (revenueForecast && revenueForecast.historical && revenueForecast.forecast) {
      console.log("[Blockchain] Storing revenue forecast...");
      const revenueParams = convertForecastToContractParams(revenueForecast, "revenue", periods);
      
      const revenueTx = await contract.storeForecast(
        revenueParams.forecastType,
        revenueParams.historicalMonths,
        revenueParams.historicalValues,
        revenueParams.forecastMonths,
        revenueParams.forecastValues,
        revenueParams.mape,
        revenueParams.mae,
        revenueParams.rmse
      );
      
      const revenueReceipt = await revenueTx.wait();
      results.push({
        type: "revenue",
        txHash: revenueTx.hash,
        blockNumber: revenueReceipt.blockNumber,
      });
      console.log(`[Blockchain] ✅ Revenue stored: ${revenueTx.hash}`);
    }

    // Store AOV forecast
    if (aovForecast && aovForecast.historical && aovForecast.forecast) {
      console.log("[Blockchain] Storing AOV forecast...");
      const aovParams = convertForecastToContractParams(aovForecast, "aov", periods);
      
      const aovTx = await contract.storeForecast(
        aovParams.forecastType,
        aovParams.historicalMonths,
        aovParams.historicalValues,
        aovParams.forecastMonths,
        aovParams.forecastValues,
        aovParams.mape,
        aovParams.mae,
        aovParams.rmse
      );
      
      const aovReceipt = await aovTx.wait();
      results.push({
        type: "aov",
        txHash: aovTx.hash,
        blockNumber: aovReceipt.blockNumber,
      });
      console.log(`[Blockchain] ✅ AOV stored: ${aovTx.hash}`);
    }

    // Store orders forecast
    if (ordersForecast && ordersForecast.historical && ordersForecast.forecast) {
      console.log("[Blockchain] Storing orders forecast...");
      const ordersParams = convertForecastToContractParams(ordersForecast, "orders", periods);
      
      const ordersTx = await contract.storeForecast(
        ordersParams.forecastType,
        ordersParams.historicalMonths,
        ordersParams.historicalValues,
        ordersParams.forecastMonths,
        ordersParams.forecastValues,
        ordersParams.mape,
        ordersParams.mae,
        ordersParams.rmse
      );
      
      const ordersReceipt = await ordersTx.wait();
      results.push({
        type: "orders",
        txHash: ordersTx.hash,
        blockNumber: ordersReceipt.blockNumber,
      });
      console.log(`[Blockchain] ✅ Orders stored: ${ordersTx.hash}`);
    }

    return {
      success: true,
      results,
      totalStored: results.length,
    };
  } catch (error: any) {
    console.error("[Blockchain] Error storing all forecasts:", error);

    // Provide helpful error messages
    if (error.code === "ACTION_REJECTED" || error.message?.includes("User rejected")) {
      throw new Error("Transaction was rejected. Please approve the transaction in MetaMask.");
    }

    if (error.message?.includes("network") || error.code === "NETWORK_ERROR") {
      throw new Error("Network error. Please ensure you're connected to Sepolia testnet.");
    }

    throw new Error(`Failed to store forecasts on blockchain: ${error.message || error}`);
  }
}

/**
 * Fetch forecast data from blockchain
 */
export async function getForecastFromChain(
  userAddress: string,
  forecastType: "revenue" | "aov" | "orders"
) {
  try {
    const contract = await getContract();

    // Check if forecast exists with timeout
    const exists = await Promise.race([
      contract.forecastExists(userAddress, forecastType),
      new Promise((_, reject) => setTimeout(() => reject(new Error("RPC timeout")), 10000)),
    ]) as boolean;

    if (!exists) {
      return null;
    }

    // Fetch all data in parallel with timeout
    const [historicalData, forecastData, metrics, record] = await Promise.race([
      Promise.all([
        contract.getHistoricalData(userAddress, forecastType),
        contract.getForecastData(userAddress, forecastType),
        contract.getMetrics(userAddress, forecastType),
        contract.getForecastRecord(userAddress, forecastType),
      ]),
      new Promise((_, reject) => setTimeout(() => reject(new Error("RPC timeout")), 15000)),
    ]) as [any, any, any, any];

    // Convert blockchain data to frontend format
    const historical = historicalData.map((item: any) => ({
      month: item.month,
      value: weiToFloat(item.value.toString()),
      type: "historical" as const,
      trend: 0, // Not stored in contract
      yhat_lower: 0, // Not stored in contract
      yhat_upper: 0, // Not stored in contract
    }));

    const forecast = forecastData.map((item: any) => ({
      month: item.month,
      value: weiToFloat(item.value.toString()),
      type: "forecast" as const,
      trend: 0, // Not stored in contract
      yhat_lower: 0, // Not stored in contract
      yhat_upper: 0, // Not stored in contract
    }));

    const convertedMetrics = {
      mape: storedToMape(metrics.mape.toString()),
      mae: weiToFloat(metrics.mae.toString()),
      rmse: weiToFloat(metrics.rmse.toString()),
    };

    return {
      historical,
      forecast,
      metrics: convertedMetrics,
      components: {
        trend: "multiplicative", // Default
        seasonality: "yearly", // Default
      },
      timestamp: Number(record.timestamp),
      source: "blockchain",
    };
  } catch (error: any) {
    console.error("[Blockchain] Error fetching forecast:", error);

    // Provide helpful error messages
    const errorMessage = error?.message || String(error);
    
    if (errorMessage.includes("timeout") || errorMessage.includes("RPC timeout")) {
      console.warn(`[Blockchain] RPC timeout - this is expected if RPC is slow. Data will fallback to API.`);
      throw new Error(
        `RPC connection timeout. The public RPC endpoint may be slow. Try using MetaMask on the frontend for better reliability.`
      );
    }

    if (errorMessage.includes("network") || errorMessage.includes("connection") || errorMessage.includes("ECONNREFUSED")) {
      console.warn(`[Blockchain] RPC connection failed - data will fallback to API.`);
      throw new Error(`RPC connection failed. Please check your network connection or try using MetaMask.`);
    }

    if (errorMessage.includes("YOUR_KEY")) {
      throw new Error("Invalid RPC URL. Please update RPC_URL in .env file.");
    }

    // For other errors, provide a generic message
    console.warn(`[Blockchain] Forecast fetch error: ${errorMessage} - data will fallback to API.`);
    throw new Error(`Failed to fetch forecast from blockchain: ${errorMessage}`);
  }
}

/**
 * Check if user has any forecasts stored on blockchain
 */
export async function getUserForecastTypes(userAddress: string): Promise<string[]> {
  try {
    const contract = await getContract();
    const types = await Promise.race([
      contract.getUserForecastTypes(userAddress),
      new Promise((_, reject) => setTimeout(() => reject(new Error("RPC timeout")), 10000)),
    ]) as string[];
    return types;
  } catch (error: any) {
    console.error("[Blockchain] Error fetching user forecast types:", error);
    // Return empty array on error instead of throwing
    return [];
  }
}

/**
 * Check if a specific forecast exists on blockchain
 */
export async function checkForecastExists(
  userAddress: string,
  forecastType: "revenue" | "aov" | "orders"
): Promise<boolean> {
  try {
    const contract = await getContract();
    return (await Promise.race([
      contract.forecastExists(userAddress, forecastType),
      new Promise((_, reject) => setTimeout(() => reject(new Error("RPC timeout")), 10000)),
    ])) as boolean;
  } catch (error: any) {
    console.error("[Blockchain] Error checking forecast existence:", error);
    return false;
  }
}
