#!/bin/bash

# Test script for Railway deployment
# Usage: ./test-deployment.sh <your-railway-url>

if [ -z "$1" ]; then
    echo "❌ Error: Please provide your Railway service URL"
    echo "Usage: ./test-deployment.sh https://your-service.up.railway.app"
    exit 1
fi

SERVICE_URL=$1

echo "🧪 Testing Railway Deployment"
echo "=============================="
echo "Service URL: $SERVICE_URL"
echo ""

# Test Health Endpoint
echo "1️⃣  Testing Health Endpoint..."
HEALTH_RESPONSE=$(curl -s "$SERVICE_URL/health")
if [ $? -eq 0 ]; then
    echo "✅ Health check passed"
    echo "Response: $HEALTH_RESPONSE"
else
    echo "❌ Health check failed"
    exit 1
fi

echo ""
echo "2️⃣  Testing Forecast Endpoint..."
FORECAST_RESPONSE=$(curl -s -X POST "$SERVICE_URL/forecast" \
  -H "Content-Type: application/json" \
  -d '{
    "monthlyData": [
      {"month": "2024-01", "revenue": 10000, "aov": 50, "orders": 200},
      {"month": "2024-02", "revenue": 12000, "aov": 55, "orders": 220},
      {"month": "2024-03", "revenue": 15000, "aov": 60, "orders": 250}
    ],
    "periods": 3,
    "type": "revenue"
  }')

if [ $? -eq 0 ]; then
    echo "✅ Forecast endpoint working"
    echo "Response preview: ${FORECAST_RESPONSE:0:200}..."
else
    echo "❌ Forecast endpoint failed"
    exit 1
fi

echo ""
echo "✅ All tests passed!"
echo ""
echo "📝 Next step: Update FORECAST_SERVICE_URL in your main app .env file:"
echo "   FORECAST_SERVICE_URL=$SERVICE_URL"

