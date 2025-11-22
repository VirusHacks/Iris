# Debugging Forecast Dashboard

## How to Debug

### 1. Check Browser Console
Open browser DevTools (F12) and check the Console tab for:
- `[Forecast API]` logs - Shows API calls
- `[RevenueForecast]` logs - Shows chart component state
- `[AOVForecast]` logs - Shows AOV chart state
- `[OrdersForecast]` logs - Shows orders chart state
- `[ForecastMetrics]` logs - Shows metrics component state

### 2. Check Network Tab
In DevTools → Network tab:
- Look for requests to `/api/dashboard/forecast`
- Check the response status and body
- Verify the response has `historical` and `forecast` arrays

### 3. Check Python Service Logs
In the terminal where Python service is running, look for:
- `INFO:__main__:Forecast request: ...` - Shows incoming requests
- `INFO:__main__:Forecast successful: ...` - Shows successful forecasts
- `ERROR:__main__:Forecast error: ...` - Shows errors

### 4. Test API Directly

```bash
# Test health
curl http://localhost:4000/health

# Test forecast (replace with your actual data)
curl -X POST http://localhost:4000/forecast \
  -H "Content-Type: application/json" \
  -d '{
    "monthlyData": [
      {"month": "2024-01", "revenue": 10000, "aov": 50, "orders": 200},
      {"month": "2024-02", "revenue": 12000, "aov": 55, "orders": 220},
      {"month": "2024-03", "revenue": 11000, "aov": 52, "orders": 210}
    ],
    "periods": 3,
    "type": "revenue"
  }'
```

### 5. Test Next.js API Route

```bash
# From your Next.js app (after authentication)
curl http://localhost:3000/api/dashboard/forecast?type=revenue&periods=6
```

## Common Issues

### Issue: "Forecast service unavailable"
**Solution:**
1. Check Python service is running: `curl http://localhost:4000/health`
2. Check `.env` has: `FORECAST_SERVICE_URL=http://localhost:4000`
3. Restart Next.js app after changing `.env`

### Issue: "Insufficient data"
**Solution:**
- Need at least 3 months of data in CSV
- Check that CSV has valid dates spanning at least 3 months

### Issue: Charts show loading forever
**Solution:**
1. Check browser console for errors
2. Check Network tab - is the API call completing?
3. Check Python service logs for errors
4. Verify data format matches expected structure

### Issue: Charts show error but Python service works
**Solution:**
1. Check response format from Python matches what charts expect
2. Verify `historical` and `forecast` arrays exist in response
3. Check that values are numbers, not strings

## Expected Data Format

### Python Service Response:
```json
{
  "historical": [
    {
      "month": "2024-01",
      "value": 10000,
      "type": "historical",
      "trend": 10000,
      "yhat_lower": 9500,
      "yhat_upper": 10500
    }
  ],
  "forecast": [
    {
      "month": "2024-04",
      "value": 12000,
      "type": "forecast",
      "trend": 12000,
      "yhat_lower": 11000,
      "yhat_upper": 13000
    }
  ],
  "metrics": {
    "mape": 5.2,
    "mae": 500,
    "rmse": 600
  }
}
```

## Debug Checklist

- [ ] Python service running on port 4000
- [ ] Health endpoint returns `{"status": "healthy"}`
- [ ] `.env` has `FORECAST_SERVICE_URL=http://localhost:4000`
- [ ] CSV uploaded with at least 3 months of data
- [ ] Browser console shows no errors
- [ ] Network tab shows successful API calls
- [ ] Python service logs show successful forecasts
- [ ] Response has `historical` and `forecast` arrays
- [ ] Chart components receive valid data

