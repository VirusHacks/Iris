#!/bin/bash

echo "🔍 Testing Forecast Flow End-to-End"
echo "===================================="
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test 1: Python Service Health
echo "1. Testing Python Service Health..."
if curl -s http://localhost:4000/health > /dev/null; then
    echo -e "${GREEN}✅ Python service is running${NC}"
    curl -s http://localhost:4000/health | jq .
else
    echo -e "${RED}❌ Python service is NOT running${NC}"
    echo "   Start it with: cd forecast-service && ./start_service.sh"
    exit 1
fi

echo ""

# Test 2: Python Service Forecast
echo "2. Testing Python Service Forecast Endpoint..."
RESPONSE=$(curl -s -X POST http://localhost:4000/forecast \
  -H "Content-Type: application/json" \
  -d '{
    "monthlyData": [
      {"month": "2024-01", "revenue": 10000, "aov": 50, "orders": 200},
      {"month": "2024-02", "revenue": 12000, "aov": 55, "orders": 220},
      {"month": "2024-03", "revenue": 11000, "aov": 52, "orders": 210},
      {"month": "2024-04", "revenue": 13000, "aov": 58, "orders": 225}
    ],
    "periods": 3,
    "type": "revenue"
  }')

if echo "$RESPONSE" | jq -e '.forecast' > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Python forecast endpoint works${NC}"
    HISTORICAL=$(echo "$RESPONSE" | jq '.historical | length')
    FORECAST=$(echo "$RESPONSE" | jq '.forecast | length')
    echo "   Historical points: $HISTORICAL"
    echo "   Forecast points: $FORECAST"
else
    echo -e "${RED}❌ Python forecast endpoint failed${NC}"
    echo "$RESPONSE" | jq .
    exit 1
fi

echo ""

# Test 3: Environment Variable
echo "3. Checking Environment Variable..."
if grep -q "FORECAST_SERVICE_URL=http://localhost:4000" .env 2>/dev/null; then
    echo -e "${GREEN}✅ FORECAST_SERVICE_URL is correctly set to port 4000${NC}"
else
    echo -e "${YELLOW}⚠️  FORECAST_SERVICE_URL might be incorrect${NC}"
    echo "   Current value:"
    grep "FORECAST_SERVICE_URL" .env 2>/dev/null || echo "   Not found in .env"
fi

echo ""

# Test 4: Next.js API Route (if app is running)
echo "4. Testing Next.js API Route..."
if curl -s http://localhost:3000/api/dashboard/forecast?type=revenue&periods=3 > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Next.js API route is accessible${NC}"
    echo -e "${YELLOW}   Note: This requires authentication, so it may return 401${NC}"
else
    echo -e "${YELLOW}⚠️  Next.js app might not be running on port 3000${NC}"
    echo "   Or the route requires authentication"
fi

echo ""
echo "===================================="
echo -e "${GREEN}✅ All basic tests passed!${NC}"
echo ""
echo "Next steps:"
echo "1. Make sure Next.js app is running: npm run dev"
echo "2. Upload a CSV with at least 3 months of data"
echo "3. Check browser console for [Forecast API] and [RevenueForecast] logs"
echo "4. Check Network tab for /api/dashboard/forecast requests"

