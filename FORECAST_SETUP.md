# Forecasting Dashboard Implementation

## Overview

The dashboard now features a **side-by-side layout** with:
- **Left Side**: Historical Analytics (existing charts)
- **Right Side**: Forecast Dashboard (Prophet AI predictions)

## What's Been Implemented

### 1. Python Forecasting Service
- Location: `forecast-service/app.py`
- Uses Facebook Prophet for time series forecasting
- Supports forecasting: Revenue, AOV (Average Order Value), and Orders

### 2. API Integration
- Route: `/api/dashboard/forecast`
- Connects Next.js app to Python service
- Handles data aggregation and forecast requests

### 3. Forecast Components
- **RevenueForecast**: Revenue predictions with confidence intervals
- **AOVForecast**: Average Order Value predictions
- **OrdersForecast**: Order volume predictions
- **ForecastMetrics**: Model accuracy metrics (MAPE, MAE, RMSE)

### 4. Dashboard Layout
- Two-column layout on large screens
- Historical analytics on the left
- Forecast dashboard on the right
- Responsive design for mobile

## Setup Instructions

### Step 1: Install Python Dependencies

```bash
cd forecast-service
pip install -r requirements.txt
```

**Note**: If you encounter installation issues with Prophet, you may need:

**macOS:**
```bash
brew install pkg-config
```

**Linux:**
```bash
sudo apt-get install pkg-config
```

### Step 2: Start Python Service

```bash
cd forecast-service
python app.py
```

Or use the startup script:
```bash
./start.sh
```

The service will run on `http://localhost:5000`

### Step 3: Configure Environment Variable

Add to your `.env` file in the Pixro root:

```env
FORECAST_SERVICE_URL=http://localhost:5000
```

### Step 4: Start Next.js App

```bash
npm run dev
```

## Usage

1. **Upload CSV Data**: Use the upload section to add your sales data
2. **View Historical Analytics**: Left side shows all historical charts
3. **View Forecasts**: Right side shows Prophet AI forecasts with:
   - 6-month revenue predictions
   - AOV forecasts
   - Order volume forecasts
   - Model accuracy metrics

## Forecast Features

- **Confidence Intervals**: Shows upper and lower bounds for predictions
- **Historical vs Forecast**: Clear visual distinction (solid vs dashed lines)
- **Model Metrics**: 
  - MAPE (Mean Absolute Percentage Error)
  - MAE (Mean Absolute Error)
  - RMSE (Root Mean Squared Error)

## Troubleshooting

### Forecast Service Not Available
If you see "Forecast service unavailable" errors:
1. Ensure Python service is running on port 5000
2. Check `FORECAST_SERVICE_URL` in `.env`
3. Verify Python dependencies are installed

### Insufficient Data
Prophet requires at least 3 months of historical data. If you have less, forecasts won't be generated.

### Installation Issues
If Prophet installation fails:
- Ensure you have Python 3.8+
- Install system dependencies (pkg-config)
- Try: `pip install --upgrade prophet`

## Architecture

```
Next.js Dashboard
    ↓
API Route (/api/dashboard/forecast)
    ↓
Python Service (Prophet)
    ↓
Forecast Results
    ↓
Chart Components
```

## Next Steps

- Adjust forecast periods (currently 6 months)
- Add seasonal adjustments
- Implement multiple forecast models
- Export forecast data to CSV

