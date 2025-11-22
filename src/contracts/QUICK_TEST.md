# Quick Test Data - Copy & Paste Ready

## Minimal Test Data (3 months each)

### storeForecast() - Minimal Test

```javascript
// Copy this into Remix or your test script:

forecastType: "revenue"
historicalMonths: ["2024-01", "2024-02", "2024-03"]
historicalValues: [
  "10000000000000000000000",  // 10,000
  "12000000000000000000000",  // 12,000
  "15000000000000000000000"   // 15,000
]
forecastMonths: ["2024-04", "2024-05", "2024-06"]
forecastValues: [
  "18000000000000000000000",  // 18,000
  "20000000000000000000000",  // 20,000
  "22000000000000000000000"   // 22,000
]
mape: "520"  // 5.2%
mae: "500000000000000000000"  // 500
rmse: "750000000000000000000" // 750
```

## Remix IDE Format

### Step 1: Deploy Contract
1. Copy contract code to Remix
2. Compile (0.8.20)
3. Deploy

### Step 2: Store Forecast
In Remix, call `storeForecast` with:

```
"revenue"
["2024-01", "2024-02", "2024-03"]
["10000000000000000000000", "12000000000000000000000", "15000000000000000000000"]
["2024-04", "2024-05", "2024-06"]
["18000000000000000000000", "20000000000000000000000", "22000000000000000000000"]
520
500000000000000000000
750000000000000000000
```

### Step 3: Test Getters
Use your wallet address (from Remix accounts):

```
// getForecastRecord
["0x5B38Da6a701c568545dCfcB03FcB875f56beddC4", "revenue"]

// getHistoricalData
["0x5B38Da6a701c568545dCfcB03FcB875f56beddC4", "revenue"]

// getForecastData
["0x5B38Da6a701c568545dCfcB03FcB875f56beddC4", "revenue"]

// getMetrics
["0x5B38Da6a701c568545dCfcB03FcB875f56beddC4", "revenue"]

// getUserForecastTypes
["0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"]

// forecastExists
["0x5B38Da6a701c568545dCfcB03FcB875f56beddC4", "revenue"]
```

## JavaScript Helper Functions

```javascript
// Convert number to wei string
function toWei(num) {
  return (BigInt(Math.floor(num * 1e18))).toString();
}

// Convert MAPE to stored format
function mapeToStored(mape) {
  return Math.floor(mape * 100).toString();
}

// Example usage:
const testData = {
  forecastType: "revenue",
  historicalMonths: ["2024-01", "2024-02", "2024-03"],
  historicalValues: [toWei(10000), toWei(12000), toWei(15000)],
  forecastMonths: ["2024-04", "2024-05", "2024-06"],
  forecastValues: [toWei(18000), toWei(20000), toWei(22000)],
  mape: mapeToStored(5.2),
  mae: toWei(500),
  rmse: toWei(750)
};
```

## Expected Results

After storing, you should see:

### getForecastRecord returns:
```
user: 0xYourAddress
forecastType: "revenue"
timestamp: [block timestamp]
historicalCount: 3
forecastCount: 3
exists: true
```

### getHistoricalData returns:
```
[
  { month: "2024-01", value: "10000000000000000000000" },
  { month: "2024-02", value: "12000000000000000000000" },
  { month: "2024-03", value: "15000000000000000000000" }
]
```

### getForecastData returns:
```
[
  { month: "2024-04", value: "18000000000000000000000" },
  { month: "2024-05", value: "20000000000000000000000" },
  { month: "2024-06", value: "22000000000000000000000" }
]
```

### getMetrics returns:
```
{
  mape: "520",  // 5.2%
  mae: "500000000000000000000",  // 500
  rmse: "750000000000000000000"  // 750
}
```

