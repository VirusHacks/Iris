# Testing the Forecasting Dashboard

## Quick Start

### Step 1: Start the Python Forecast Service

Open a **new terminal tab** and run:

```bash
cd Pixro/forecast-service
./start_service.sh
```

You should see:
```
🚀 Starting Forecast Service...
✅ Virtual environment activated
🌐 Starting Flask service on http://localhost:5000
 * Running on http://0.0.0.0:5000
```

**Keep this terminal open** - the service needs to keep running.

### Step 2: Verify Service is Running

In another terminal, test the service:

```bash
curl http://localhost:5000/health
```

Should return: `{"status":"healthy"}`

### Step 3: Start Next.js App (if not already running)

```bash
cd Pixro
npm run dev
```

### Step 4: Test the Dashboard

1. Navigate to `http://localhost:3000/dashboard` (or your Next.js port)
2. Upload a CSV file with sales data (needs at least 3 months of data)
3. You should see:
   - **Left side**: Historical Analytics charts
   - **Right side**: Forecast Dashboard with Prophet AI predictions

## Testing the Forecast API Directly

You can test the forecast service directly:

```bash
cd Pixro/forecast-service
source venv/bin/activate
python test_forecast.py
```

## Troubleshooting

### Service Not Starting
- Check if port 5000 is already in use: `lsof -ti:5000`
- Kill existing process: `pkill -f "python.*app.py"`
- Check Python version: `python3 --version` (should be 3.8+)

### "Forecast service unavailable" Error
- Ensure Python service is running on port 5000
- Check `.env` file has: `FORECAST_SERVICE_URL=http://localhost:5000`
- Restart Next.js app after adding env variable

### No Forecast Data Showing
- Need at least 3 months of historical data in CSV
- Check browser console for errors
- Verify Python service logs for errors

### CORS Errors
- The service has CORS enabled, but if issues persist, check Flask-CORS is installed

## Environment Variables

Make sure your `.env` file includes:

```env
FORECAST_SERVICE_URL=http://localhost:5000
```

## Service Logs

The service will show logs in the terminal where it's running. Look for:
- Successful forecast requests
- Any error messages
- Prophet model training progress

