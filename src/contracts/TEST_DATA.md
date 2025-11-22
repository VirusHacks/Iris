# Test Data for SalesForecast Contract

## Sample Data for Testing

### 1. storeForecast() Function

```javascript
// Function signature:
// storeForecast(
//   string forecastType,
//   string[] historicalMonths,
//   uint256[] historicalValues,
//   string[] forecastMonths,
//   uint256[] forecastValues,
//   uint256 mape,
//   uint256 mae,
//   uint256 rmse
// )

// Example 1: Revenue Forecast
const revenueForecast = {
  forecastType: "revenue",
  historicalMonths: [
    "2024-01",
    "2024-02",
    "2024-03",
    "2024-04",
    "2024-05",
    "2024-06"
  ],
  historicalValues: [
    "10000000000000000000000",  
    "12000000000000000000000",  
    "15000000000000000000000",  
    "18000000000000000000000",  
    "20000000000000000000000",  
    "22000000000000000000000"   
  ],
  forecastMonths: [
    "2024-07",
    "2024-08",
    "2024-09",
    "2024-10",
    "2024-11",
    "2024-12"
  ],
  forecastValues: [
    "25000000000000000000000",  
    "28000000000000000000000",  
    "30000000000000000000000",  
    "32000000000000000000000",  
    "35000000000000000000000", 
    "38000000000000000000000"   
  ],
  mape: "520",      // 5.2% * 100
  mae: "500000000000000000000",   // 500 * 1e18
  rmse: "750000000000000000000"   // 750 * 1e18
};

// Example 2: AOV (Average Order Value) Forecast
const aovForecast = {
  forecastType: "aov",
  historicalMonths: [
    "2024-01",
    "2024-02",
    "2024-03"
  ],
  historicalValues: [
    "50000000000000000000",   // 50 * 1e18
    "55000000000000000000",   // 55 * 1e18
    "60000000000000000000"    // 60 * 1e18
  ],
  forecastMonths: [
    "2024-04",
    "2024-05",
    "2024-06"
  ],
  forecastValues: [
    "65000000000000000000",   // 65 * 1e18
    "70000000000000000000",   // 70 * 1e18
    "75000000000000000000"    // 75 * 1e18
  ],
  mape: "320",      // 3.2% * 100
  mae: "2000000000000000000",    // 2 * 1e18
  rmse: "3000000000000000000"    // 3 * 1e18
};

// Example 3: Orders Forecast
const ordersForecast = {
  forecastType: "orders",
  historicalMonths: [
    "2024-01",
    "2024-02",
    "2024-03",
    "2024-04"
  ],
  historicalValues: [
    "2000000000000000000000",   // 2,000 * 1e18
    "2200000000000000000000",   // 2,200 * 1e18
    "2500000000000000000000",   // 2,500 * 1e18
    "2800000000000000000000"    // 2,800 * 1e18
  ],
  forecastMonths: [
    "2024-05",
    "2024-06"
  ],
  forecastValues: [
    "3000000000000000000000",   // 3,000 * 1e18
    "3200000000000000000000"    // 3,200 * 1e18
  ],
  mape: "450",      // 4.5% * 100
  mae: "100000000000000000000",  // 100 * 1e18
  rmse: "150000000000000000000"  // 150 * 1e18
};
```

### 2. Getter Functions Test Data

```javascript
// Replace with your deployed contract address
const CONTRACT_ADDRESS = "0x..."; // Your contract address
const USER_ADDRESS = "0x...";     // Your wallet address

// getForecastRecord(address userAddress, string forecastType)
const getRecordParams = {
  userAddress: USER_ADDRESS,
  forecastType: "revenue"
};

// getHistoricalData(address userAddress, string forecastType)
const getHistoricalParams = {
  userAddress: USER_ADDRESS,
  forecastType: "revenue"
};

// getForecastData(address userAddress, string forecastType)
const getForecastParams = {
  userAddress: USER_ADDRESS,
  forecastType: "revenue"
};

// getMetrics(address userAddress, string forecastType)
const getMetricsParams = {
  userAddress: USER_ADDRESS,
  forecastType: "revenue"
};

// getUserForecastTypes(address userAddress)
const getUserTypesParams = {
  userAddress: USER_ADDRESS
};

// forecastExists(address userAddress, string forecastType)
const existsParams = {
  userAddress: USER_ADDRESS,
  forecastType: "revenue"
};
```

## Complete Test Script (JavaScript/TypeScript)

```typescript
import { ethers } from "ethers";

// Contract ABI (simplified - include all functions)
const CONTRACT_ABI = [
  "function storeForecast(string,string[],uint256[],string[],uint256[],uint256,uint256,uint256)",
  "function getForecastRecord(address,string) view returns (tuple(address,string,uint256,uint256,uint256,bool))",
  "function getHistoricalData(address,string) view returns (tuple(string,uint256)[])",
  "function getForecastData(address,string) view returns (tuple(string,uint256)[])",
  "function getMetrics(address,string) view returns (tuple(uint256,uint256,uint256))",
  "function getUserForecastTypes(address) view returns (string[])",
  "function forecastExists(address,string) view returns (bool)"
];

// Helper function to convert float to wei
function floatToWei(value: number): string {
  return ethers.parseUnits(value.toString(), 18).toString();
}

// Helper function to convert MAPE percentage to stored format
function mapeToStored(mape: number): string {
  return (mape * 100).toString();
}

async function testContract() {
  // Connect to contract
  const provider = new ethers.JsonRpcProvider("YOUR_RPC_URL");
  const wallet = new ethers.Wallet("YOUR_PRIVATE_KEY", provider);
  const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, wallet);

  console.log("Testing SalesForecast Contract...\n");

  // 1. Store Revenue Forecast
  console.log("1. Storing revenue forecast...");
  const revenueTx = await contract.storeForecast(
    "revenue",
    ["2024-01", "2024-02", "2024-03", "2024-04", "2024-05", "2024-06"],
    [
      floatToWei(10000),
      floatToWei(12000),
      floatToWei(15000),
      floatToWei(18000),
      floatToWei(20000),
      floatToWei(22000)
    ],
    ["2024-07", "2024-08", "2024-09", "2024-10", "2024-11", "2024-12"],
    [
      floatToWei(25000),
      floatToWei(28000),
      floatToWei(30000),
      floatToWei(32000),
      floatToWei(35000),
      floatToWei(38000)
    ],
    mapeToStored(5.2),  // 5.2% = 520
    floatToWei(500),   // MAE
    floatToWei(750)    // RMSE
  );
  await revenueTx.wait();
  console.log("✅ Revenue forecast stored! Tx:", revenueTx.hash);

  // 2. Check if forecast exists
  console.log("\n2. Checking if forecast exists...");
  const exists = await contract.forecastExists(wallet.address, "revenue");
  console.log("✅ Forecast exists:", exists);

  // 3. Get forecast record
  console.log("\n3. Getting forecast record...");
  const record = await contract.getForecastRecord(wallet.address, "revenue");
  console.log("✅ Record:", {
    user: record.user,
    forecastType: record.forecastType,
    timestamp: record.timestamp.toString(),
    historicalCount: record.historicalCount.toString(),
    forecastCount: record.forecastCount.toString(),
    exists: record.exists
  });

  // 4. Get historical data
  console.log("\n4. Getting historical data...");
  const historical = await contract.getHistoricalData(wallet.address, "revenue");
  console.log("✅ Historical data points:", historical.length);
  historical.forEach((point: any, i: number) => {
    const value = ethers.formatUnits(point.value, 18);
    console.log(`   ${i + 1}. ${point.month}: ${value}`);
  });

  // 5. Get forecast data
  console.log("\n5. Getting forecast data...");
  const forecast = await contract.getForecastData(wallet.address, "revenue");
  console.log("✅ Forecast data points:", forecast.length);
  forecast.forEach((point: any, i: number) => {
    const value = ethers.formatUnits(point.value, 18);
    console.log(`   ${i + 1}. ${point.month}: ${value}`);
  });

  // 6. Get metrics
  console.log("\n6. Getting metrics...");
  const metrics = await contract.getMetrics(wallet.address, "revenue");
  const mape = Number(metrics.mape) / 100;
  const mae = ethers.formatUnits(metrics.mae, 18);
  const rmse = ethers.formatUnits(metrics.rmse, 18);
  console.log("✅ Metrics:", {
    mape: `${mape}%`,
    mae: mae,
    rmse: rmse
  });

  // 7. Get all forecast types for user
  console.log("\n7. Getting all forecast types...");
  const types = await contract.getUserForecastTypes(wallet.address);
  console.log("✅ Forecast types:", types);

  console.log("\n✅ All tests completed!");
}

// Run tests
testContract().catch(console.error);
```

## Remix IDE Test Data

### For Remix IDE (copy-paste ready):

```solidity
// storeForecast parameters:
"revenue",
["2024-01", "2024-02", "2024-03"],
["10000000000000000000000", "12000000000000000000000", "15000000000000000000000"],
["2024-04", "2024-05", "2024-06"],
["18000000000000000000000", "20000000000000000000000", "22000000000000000000000"],
520,  // MAPE 5.2%
500000000000000000000,  // MAE 500
750000000000000000000   // RMSE 750
```

### Getter function calls in Remix:

```solidity
// getForecastRecord
"0xYourAddress", "revenue"

// getHistoricalData
"0xYourAddress", "revenue"

// getForecastData
"0xYourAddress", "revenue"

// getMetrics
"0xYourAddress", "revenue"

// getUserForecastTypes
"0xYourAddress"

// forecastExists
"0xYourAddress", "revenue"
```

## Quick Reference: Value Conversions

```javascript
// Convert regular number to wei (for Solidity)
function toWei(value) {
  return (value * 1e18).toString();
}

// Examples:
toWei(10000)   // "10000000000000000000000"
toWei(50.5)    // "50500000000000000000"
toWei(0.1)     // "100000000000000000"

// Convert MAPE percentage
function mapeToStored(mape) {
  return (mape * 100).toString();
}

// Examples:
mapeToStored(5.2)   // "520" (5.2%)
mapeToStored(3.5)   // "350" (3.5%)
mapeToStored(10.0)  // "1000" (10.0%)
```

## Test Scenarios

### Scenario 1: Small Dataset
- 3 historical months
- 3 forecast months
- Simple values

### Scenario 2: Medium Dataset
- 6 historical months
- 6 forecast months
- Realistic values

### Scenario 3: Large Dataset
- 12 historical months
- 12 forecast months
- Complex values

Use the small dataset first to test basic functionality, then scale up!

