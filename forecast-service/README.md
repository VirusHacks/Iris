# Forecast Service Setup

This Python service uses Facebook Prophet for time series forecasting.

## Installation

1. Install Python dependencies:
```bash
cd forecast-service
pip install -r requirements.txt
```

Note: Prophet requires additional system dependencies on some platforms. If you encounter issues:

**macOS:**
```bash
brew install pkg-config
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt-get install pkg-config
```

## Running the Service

```bash
python app.py
```

The service will start on `http://localhost:5000`

## Environment Variables

Add to your `.env` file in the Pixro root directory:

```env
FORECAST_SERVICE_URL=http://localhost:5000
```

## API Endpoints

### Health Check
```
GET /health
```

### Forecast
```
POST /forecast
Content-Type: application/json

{
  "monthlyData": [
    { "month": "2024-01", "revenue": 10000, "aov": 50, "orders": 200 },
    ...
  ],
  "periods": 6,
  "type": "revenue"  // or "aov" or "orders"
}
```

## Docker (Optional)

If you prefer Docker:

```bash
docker build -t forecast-service .
docker run -p 5000:5000 forecast-service
```

