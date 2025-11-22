# Dashboard Testing Guide

## How It Works

**YES!** When you upload a CSV file, **both dashboards will automatically populate**:

1. **Historical Analytics Dashboard** (Left Side) - Shows immediately after CSV upload
2. **Forecast Dashboard** (Right Side) - Automatically generates Prophet AI forecasts

## Step-by-Step Testing

### Step 1: Start the Python Forecast Service

Open a **new terminal tab** and run:

```bash
cd Pixro/forecast-service
./start_service.sh
```

**Expected Output:**
```
🚀 Starting Forecast Service...
✅ Virtual environment activated
🌐 Starting Flask service on http://localhost:4000
 * Running on http://0.0.0.0:4000
```

**Keep this terminal open!** The service must keep running.

### Step 2: Verify Service is Running

In another terminal, test:

```bash
curl http://localhost:4000/health
```

Should return: `{"status":"healthy"}`

### Step 3: Start Next.js App (if not running)

```bash
cd Pixro
npm run dev
```

### Step 4: Test the Complete Flow

1. **Navigate to Dashboard**
   - Go to `http://localhost:3000/dashboard` (or your Next.js port)
   - You should see the upload section at the top

2. **Upload CSV File**
   - Click "Choose CSV File"
   - Select a CSV file with sales data
   - **Important**: Your CSV needs at least **3 months** of data for forecasts to work
   - Wait for "CSV uploaded and processed successfully!" message

3. **What Happens Automatically:**
   
   **Left Side (Historical Analytics):**
   - ✅ Monthly Sales Trend chart
   - ✅ AOV Trend chart
   - ✅ Top Countries chart
   - ✅ Top Products chart
   - ✅ Top Customers chart
   - ✅ RFM Distribution chart
   - ✅ Revenue by Day of Week chart
   - ✅ Revenue by Hour chart
   
   **Right Side (Forecast Dashboard):**
   - ✅ Forecast Metrics (MAPE, MAE, RMSE)
   - ✅ Revenue Forecast (Prophet AI)
   - ✅ AOV Forecast (Prophet AI)
   - ✅ Orders Forecast (Prophet AI)

4. **Check Both Sides**
   - Scroll down to see all charts
   - Left side shows historical data
   - Right side shows future predictions with confidence intervals

## What to Expect

### If Everything Works:
- ✅ All historical charts populate immediately
- ✅ Forecast charts show loading, then display predictions
- ✅ Forecast metrics appear at the top of the right column
- ✅ Charts have proper styling and are readable

### If Forecast Service is Not Running:
- ✅ Historical charts still work
- ⚠️ Forecast charts show: "Forecast service unavailable. Please ensure the Python service is running."
- This is expected - just start the Python service!

### If You Have Less Than 3 Months of Data:
- ✅ Historical charts work fine
- ⚠️ Forecast charts show: "Insufficient data. Need at least 3 months of historical data."

## CSV Format Requirements

Your CSV should have these columns:
```csv
Invoice,StockCode,Description,Quantity,InvoiceDate,Price,CustomerID,Country
536365,85123A,WHITE HANGING HEART T-LIGHT HOLDER,6,12/1/2010 8:26,2.55,17850,United Kingdom
```

**Minimum Requirements:**
- At least 3 months of data (for forecasts)
- Valid dates in InvoiceDate column
- At least some rows with Quantity > 0 and Price > 0

## Quick Test Script

You can test the forecast service directly:

```bash
cd Pixro/forecast-service
source venv/bin/activate
python test_forecast.py
```

This will test:
- Health endpoint
- Forecast endpoint with sample data

## Troubleshooting

### Historical Charts Not Showing
- Check browser console for errors
- Verify CSV was uploaded successfully
- Check that data was processed (look for upload stats)

### Forecast Charts Not Showing
1. **Check Python service is running:**
   ```bash
   curl http://localhost:4000/health
   ```

2. **Check .env file:**
   ```bash
   grep FORECAST_SERVICE_URL .env
   ```
   Should show: `FORECAST_SERVICE_URL=http://localhost:4000`

3. **Check browser console** for API errors

4. **Check Python service logs** in the terminal where it's running

### Port Conflicts
- If port 4000 is in use, you can change it in `app.py` (line 120)
- Update `.env` with the new port
- Restart both services

## Visual Layout

```
┌─────────────────────────────────────────────────────────┐
│              Upload Sales Data Section                   │
└─────────────────────────────────────────────────────────┘

┌──────────────────────────┬──────────────────────────────┐
│  Historical Analytics    │   Forecast Dashboard         │
│  (Left Side)             │   (Right Side)               │
├──────────────────────────┼──────────────────────────────┤
│ • Monthly Sales Trend    │ • Forecast Metrics            │
│ • AOV Trend              │ • Revenue Forecast            │
│ • Top Countries         │ • AOV Forecast                │
│ • Top Products          │ • Orders Forecast             │
│ • Top Customers         │                               │
│ • RFM Distribution       │                               │
│ • Revenue by Day        │                               │
│ • Revenue by Hour       │                               │
└──────────────────────────┴──────────────────────────────┘
```

## Success Indicators

✅ **Everything is working if you see:**
- Upload button processes CSV successfully
- All 8 historical charts display with data
- Forecast metrics show numbers (MAPE, MAE, RMSE)
- All 3 forecast charts show predictions with dashed lines
- No error messages in charts

🎉 **You're all set!** Both dashboards will automatically update whenever you upload new CSV data.

