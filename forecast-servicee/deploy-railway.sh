#!/bin/bash

# Railway Deployment Script for Forecast Service
# This script helps you deploy the forecast service to Railway

echo "🚂 Railway Deployment Script for Forecast Service"
echo "=================================================="
echo ""

# Check if Railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "❌ Railway CLI not found. Installing..."
    npm install -g @railway/cli
    echo "✅ Railway CLI installed"
else
    echo "✅ Railway CLI found"
fi

echo ""
echo "📋 Steps to deploy:"
echo "1. Run: railway login"
echo "2. Run: railway init"
echo "3. Run: railway up"
echo ""
echo "🔑 Don't forget to set these environment variables in Railway:"
echo "   - TWILIO_ACCOUNT_SID"
echo "   - TWILIO_AUTH_TOKEN"
echo "   - TWILIO_WHATSAPP_FROM"
echo ""
echo "📝 After deployment, update FORECAST_SERVICE_URL in your main app .env"
echo ""

# Optional: Auto-deploy if user wants
read -p "Do you want to proceed with Railway login now? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    railway login
    echo ""
    read -p "Do you want to initialize a new Railway project? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        railway init
    fi
    echo ""
    read -p "Do you want to deploy now? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        railway up
    fi
fi

echo ""
echo "✅ Setup complete!"

