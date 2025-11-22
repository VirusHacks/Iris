# Python Service Connection Check

## ✅ Verified Working
- Python service is running and responding to `/health`
- Python service accepts POST requests to `/forecast`
- Service returns valid JSON with forecast data

## 🔍 Debugging "Failed to fetch" Error

The error "Failed to fetch" typically means:
1. **Network error** - Can't reach the Python service
2. **CORS issue** - Service not allowing requests from Next.js
3. **Connection refused** - Service not running on port 4000

## ✅ What I Fixed

1. **Enhanced Error Handling**:
   - Better error messages showing actual error details
   - Logs include Python service URL and error codes
   - Frontend now shows helpful troubleshooting tips

2. **Improved Frontend Error Display**:
   - Shows actual error message instead of generic "Failed to fetch"
   - Displays troubleshooting steps if Python service error detected

3. **Better Logging**:
   - Server logs now show detailed error information
   - Includes error name, message, code, and stack trace

## 🧪 Test Python Service

```bash
# Check if service is running
curl http://localhost:4000/health

# Test forecast endpoint
curl -X POST http://localhost:4000/forecast \
  -H "Content-Type: application/json" \
  -d '{
    "monthlyData": [
      {"month": "2023-01", "revenue": 1000, "orders": 10, "aov": 100},
      {"month": "2023-02", "revenue": 1200, "orders": 12, "aov": 100},
      {"month": "2023-03", "revenue": 1500, "orders": 15, "aov": 100}
    ],
    "periods": 3,
    "type": "revenue"
  }'
```

## 🚀 Next Steps

1. **Check Next.js server logs** - Look for `[Forecast API]` messages
2. **Check browser console** - Look for detailed error messages
3. **Verify Python service** - Ensure it's running on port 4000
4. **Check environment variable** - `FORECAST_SERVICE_URL=http://localhost:4000`

## 📝 Common Issues

- **Port mismatch**: Python service on different port than expected
- **Service not running**: Python service crashed or not started
- **Network issue**: Firewall blocking localhost connections
- **CORS**: Python service CORS not configured (should be fixed with `flask_cors`)

