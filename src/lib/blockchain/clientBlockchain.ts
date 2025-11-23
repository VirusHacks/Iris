/**
 * Client-side blockchain utilities for storing and fetching forecast data
 */

import { storeForecastOnChain, getForecastFromChain, switchToSepolia, getNetworkInfo, storeAllForecastsOnChain } from "./contractService";
import { ethers } from "ethers";

/**
 * Store forecast to blockchain (requires user's wallet)
 */
export async function storeForecastToBlockchain(
  forecastData: any,
  forecastType: "revenue" | "aov" | "orders",
  periods: number = 6
) {
  try {
    const result = await storeForecastOnChain(forecastData, forecastType, periods);
    return result;
  } catch (error: any) {
    console.error("[Client Blockchain] Error storing forecast:", error);
    throw error;
  }
}

/**
 * Store all forecasts to blockchain at once (requires user's wallet)
 */
export async function storeAllForecastsToBlockchain(
  revenueForecast: any,
  aovForecast: any,
  ordersForecast: any,
  periods: number = 6
) {
  try {
    const result = await storeAllForecastsOnChain(revenueForecast, aovForecast, ordersForecast, periods);
    return result;
  } catch (error: any) {
    console.error("[Client Blockchain] Error storing all forecasts:", error);
    throw error;
  }
}

/**
 * Fetch forecast from blockchain via API
 */
export async function fetchForecastFromBlockchain(
  userAddress: string,
  forecastType: "revenue" | "aov" | "orders"
) {
  try {
    const response = await fetch(
      `/api/dashboard/forecast/blockchain?type=${forecastType}&userAddress=${userAddress}`
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to fetch from blockchain");
    }

    const data = await response.json();
    
    // Check if forecast exists on blockchain
    // If exists is false, return null to trigger API fallback
    if (data.exists === false || (!data.historical?.length && !data.forecast?.length)) {
      console.log(`[Client Blockchain] No ${forecastType} forecast on blockchain, will use API fallback`);
      return null;
    }

    return data;
  } catch (error: any) {
    console.error("[Client Blockchain] Error fetching forecast:", error);
    // Return null on error to trigger API fallback
    return null;
  }
}

/**
 * Get user's wallet address (if connected)
 */
export async function getUserWalletAddress(): Promise<string | null> {
  if (typeof window === "undefined" || !window.ethereum) {
    return null;
  }

  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    return address;
  } catch (error) {
    console.error("[Client Blockchain] Error getting wallet address:", error);
    return null;
  }
}

/**
 * Switch to Sepolia network
 */
export async function switchToSepoliaNetwork(): Promise<void> {
  try {
    await switchToSepolia();
  } catch (error: any) {
    console.error("[Client Blockchain] Error switching to Sepolia:", error);
    throw error;
  }
}

/**
 * Get current network information
 */
export async function getCurrentNetworkInfo() {
  try {
    return await getNetworkInfo();
  } catch (error: any) {
    console.error("[Client Blockchain] Error getting network info:", error);
    return {
      name: "Unknown",
      chainId: 0,
      address: "",
    };
  }
}

