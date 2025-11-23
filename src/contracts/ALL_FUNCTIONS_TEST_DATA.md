# All Functions Test Data - Remix Ready

**Your Address:** `0x5B38Da6a701c568545dCfcB03FcB875f56beddC4`  
**Forecast Type:** `"revenue"` (already stored)

---

## 1. forecastExists (Blue Button - View Function)

**Function:** `forecastExists`

**Parameters:**
```
userAddress: 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
forecastType: "revenue"
```

**Expected Result:** `true` (since you've already stored revenue forecast)

**Alternative Test (non-existent):**
```
userAddress: 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
forecastType: "aov"
```
**Expected Result:** `false` (if you haven't stored aov yet)

---

## 2. getForecastRecord (Blue Button - View Function)

**Function:** `getForecastRecord`

**Parameters:**
```
userAddress: 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
forecastType: "revenue"
```

**Expected Result:** Returns a tuple with:
- `user`: 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
- `forecastType`: "revenue"
- `timestamp`: (block timestamp when stored)
- `historicalCount`: 6 (or however many you stored)
- `forecastCount`: 6 (or however many you stored)
- `exists`: true

---

## 3. getHistoricalData (Blue Button - View Function)

**Function:** `getHistoricalData`

**Parameters:**
```
userAddress: 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
forecastType: "revenue"
```

**Expected Result:** Returns an array of ForecastData structs:
- Each element has `month` (string) and `value` (uint256)
- Should return all historical data points you stored

---

## 4. getForecastData (Blue Button - View Function)

**Function:** `getForecastData`

**Parameters:**
```
userAddress: 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
forecastType: "revenue"
```

**Expected Result:** Returns an array of ForecastData structs:
- Each element has `month` (string) and `value` (uint256)
- Should return all forecast data points you stored

---

## 5. getMetrics (Blue Button - View Function)

**Function:** `getMetrics`

**Parameters:**
```
userAddress: 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
forecastType: "revenue"
```

**Expected Result:** Returns a Metrics struct with:
- `mape`: 520 (or whatever you stored)
- `mae`: 500000000000000000000 (or whatever you stored)
- `rmse`: 750000000000000000000 (or whatever you stored)

---

## 6. getUserForecastTypes (Blue Button - View Function)

**Function:** `getUserForecastTypes`

**Parameters:**
```
userAddress: 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
```

**Expected Result:** Returns a string array: `["revenue"]` (or more if you've stored other types)

---

## 7. historicalData (Blue Button - Public Mapping)

**Function:** `historicalData` (public mapping)

**Parameters:**
```
address: 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
string: "revenue"
uint256: 0
```

**Expected Result:** Returns the first historical data point (index 0):
- `month`: "2024-01" (or your first month)
- `value`: (your first historical value)

**Try different indices:**
- Index `0`: First historical data point
- Index `1`: Second historical data point
- Index `2`: Third historical data point
- etc. (up to your historicalCount - 1)

---

## 8. forecastData (Blue Button - Public Mapping)

**Function:** `forecastData` (public mapping)

**Parameters:**
```
address: 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
string: "revenue"
uint256: 0
```

**Expected Result:** Returns the first forecast data point (index 0):
- `month`: "2024-07" (or your first forecast month)
- `value`: (your first forecast value)

**Try different indices:**
- Index `0`: First forecast data point
- Index `1`: Second forecast data point
- Index `2`: Third forecast data point
- etc. (up to your forecastCount - 1)

---

## 9. metrics (Blue Button - Public Mapping)

**Function:** `metrics` (public mapping)

**Parameters:**
```
address: 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
string: "revenue"
```

**Expected Result:** Returns a Metrics struct with:
- `mape`: 520 (or whatever you stored)
- `mae`: 500000000000000000000 (or whatever you stored)
- `rmse`: 750000000000000000000 (or whatever you stored)

---

## 10. records (Blue Button - Public Mapping)

**Function:** `records` (public mapping)

**Parameters:**
```
address: 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
string: "revenue"
```

**Expected Result:** Returns a ForecastRecord struct with:
- `user`: 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
- `forecastType`: "revenue"
- `timestamp`: (block timestamp)
- `historicalCount`: 6 (or your count)
- `forecastCount`: 6 (or your count)
- `exists`: true

---

## 11. userForecastTypes (Blue Button - Public Mapping)

**Function:** `userForecastTypes` (public mapping)

**Parameters:**
```
address: 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
uint256: 0
```

**Expected Result:** Returns the first forecast type: `"revenue"`

**Try different indices:**
- Index `0`: First forecast type (should be "revenue")
- Index `1`: Second forecast type (if you store more types like "aov" or "orders")

---

## Quick Copy-Paste Reference

### View Functions (Blue Buttons):

1. **forecastExists:**
   ```
   0x5B38Da6a701c568545dCfcB03FcB875f56beddC4, "revenue"
   ```

2. **getForecastRecord:**
   ```
   0x5B38Da6a701c568545dCfcB03FcB875f56beddC4, "revenue"
   ```

3. **getHistoricalData:**
   ```
   0x5B38Da6a701c568545dCfcB03FcB875f56beddC4, "revenue"
   ```

4. **getForecastData:**
   ```
   0x5B38Da6a701c568545dCfcB03FcB875f56beddC4, "revenue"
   ```

5. **getMetrics:**
   ```
   0x5B38Da6a701c568545dCfcB03FcB875f56beddC4, "revenue"
   ```

6. **getUserForecastTypes:**
   ```
   0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
   ```

### Public Mappings (Blue Buttons):

7. **historicalData:**
   ```
   0x5B38Da6a701c568545dCfcB03FcB875f56beddC4, "revenue", 0
   ```

8. **forecastData:**
   ```
   0x5B38Da6a701c568545dCfcB03FcB875f56beddC4, "revenue", 0
   ```

9. **metrics:**
   ```
   0x5B38Da6a701c568545dCfcB03FcB875f56beddC4, "revenue"
   ```

10. **records:**
    ```
    0x5B38Da6a701c568545dCfcB03FcB875f56beddC4, "revenue"
    ```

11. **userForecastTypes:**
    ```
    0x5B38Da6a701c568545dCfcB03FcB875f56beddC4, 0
    ```

---

## Testing Tips

1. **Start with `forecastExists`** to verify your data is stored
2. **Use `getUserForecastTypes`** to see all forecast types you've stored
3. **Use `getForecastRecord`** to see metadata about your forecast
4. **Use `getHistoricalData` and `getForecastData`** to see all data arrays
5. **Use `getMetrics`** to see your forecast accuracy metrics
6. **Use the public mappings** (`historicalData`, `forecastData`) with different indices to access individual data points

---

## After Storing More Forecast Types

If you store "aov" or "orders" forecasts, you can test with:
- `forecastType: "aov"`
- `forecastType: "orders"`

And `getUserForecastTypes` should return: `["revenue", "aov", "orders"]`

