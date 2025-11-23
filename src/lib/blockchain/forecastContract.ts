/**
 * TypeScript interface for interacting with SalesForecast smart contract
 * 
 * This file provides helper functions to convert Python forecast data
 * to Solidity-compatible format and interact with the smart contract.
 */

// Types matching Solidity contract
export interface DataPoint {
  month: string;
  value: string; // BigNumber string (value * 1e18)
  dataType: 0 | 1; // 0 = historical, 1 = forecast
  trend: string; // BigNumber string
  yhatLower: string; // BigNumber string
  yhatUpper: string; // BigNumber string
}

export interface ForecastMetrics {
  mape: string; // BigNumber string (percentage * 100, e.g., 5.2% = "520")
  mae: string; // BigNumber string (value * 1e18)
  rmse: string; // BigNumber string (value * 1e18)
}

export interface ModelComponents {
  trend: string; // "multiplicative" | "additive"
  seasonality: string; // "yearly" | "monthly" | etc.
}

export interface PythonForecastResponse {
  historical: Array<{
    month: string;
    value: number;
    type: "historical";
    trend: number;
    yhat_lower: number;
    yhat_upper: number;
  }>;
  forecast: Array<{
    month: string;
    value: number;
    type: "forecast";
    trend: number;
    yhat_lower: number;
    yhat_upper: number;
  }>;
  metrics: {
    mape: number; // Percentage (e.g., 5.2)
    mae: number;
    rmse: number;
  };
  components: {
    trend: string;
    seasonality: string;
  };
}

/**
 * Convert Python float to Solidity uint256 (multiply by 1e18)
 * Ensures value is non-negative (uint256 cannot be negative)
 */
export function floatToWei(value: number): string {
  // Ensure value is non-negative (uint256 cannot be negative)
  if (value < 0) {
    console.warn(`[Blockchain] Negative value detected: ${value}, converting to 0`);
    return "0";
  }
  // Use Math.floor to avoid rounding issues with large numbers
  const weiValue = BigInt(Math.floor(value * 1e18));
  // Double-check it's not negative
  if (weiValue < BigInt(0)) {
    console.warn(`[Blockchain] Negative BigInt detected, using 0`);
    return "0";
  }
  return weiValue.toString();
}

/**
 * Convert Solidity uint256 back to float (divide by 1e18)
 */
export function weiToFloat(weiValue: string): number {
  const bigIntValue = BigInt(weiValue);
  return Number(bigIntValue) / 1e18;
}

/**
 * Convert MAPE percentage to stored value (multiply by 100)
 * Example: 5.2% → 520
 */
export function mapeToStored(mape: number): string {
  return Math.round(mape * 100).toString();
}

/**
 * Convert stored MAPE back to percentage (divide by 100)
 * Example: 520 → 5.2
 */
export function storedToMape(stored: string): number {
  return Number(stored) / 100;
}

/**
 * Convert Python forecast response to Solidity contract parameters
 */
export function convertForecastToContractParams(
  forecastData: PythonForecastResponse,
  forecastType: "revenue" | "aov" | "orders",
  periods: number
) {
  // Extract arrays
  const historicalMonths = forecastData.historical.map((h) => h.month);
  const historicalValues = forecastData.historical.map((h) => floatToWei(h.value));
  const historicalTrends = forecastData.historical.map((h) => floatToWei(h.trend));
  const historicalLower = forecastData.historical.map((h) => floatToWei(h.yhat_lower));
  const historicalUpper = forecastData.historical.map((h) => floatToWei(h.yhat_upper));

  const forecastMonths = forecastData.forecast.map((f) => f.month);
  const forecastValues = forecastData.forecast.map((f) => floatToWei(f.value));
  const forecastTrends = forecastData.forecast.map((f) => floatToWei(f.trend));
  const forecastLower = forecastData.forecast.map((f) => floatToWei(f.yhat_lower));
  const forecastUpper = forecastData.forecast.map((f) => floatToWei(f.yhat_upper));

  // Convert metrics
  const mape = mapeToStored(forecastData.metrics.mape);
  const mae = floatToWei(forecastData.metrics.mae);
  const rmse = floatToWei(forecastData.metrics.rmse);

  return {
    forecastType,
    periods,
    historicalMonths,
    historicalValues,
    historicalTrends,
    historicalLower,
    historicalUpper,
    forecastMonths,
    forecastValues,
    forecastTrends,
    forecastLower,
    forecastUpper,
    mape,
    mae,
    rmse,
    trendType: forecastData.components.trend,
    seasonalityType: forecastData.components.seasonality,
  };
}

/**
 * Example contract interaction (requires ethers.js or viem)
 * 
 * import { ethers } from "ethers";
 * import SalesForecastABI from "./SalesForecast.json";
 * 
 * const provider = new ethers.JsonRpcProvider(RPC_URL);
 * const signer = await provider.getSigner();
 * const contract = new ethers.Contract(CONTRACT_ADDRESS, SalesForecastABI, signer);
 * 
 * const params = convertForecastToContractParams(forecastData, "revenue", 6);
 * 
 * const tx = await contract.storeForecast(
 *   params.forecastType,
 *   params.historicalMonths,
 *   params.historicalValues,
 *   params.forecastMonths,
 *   params.forecastValues,
 *   params.mape,
 *   params.mae,
 *   params.rmse
 * );
 * 
 * await tx.wait();
 */

