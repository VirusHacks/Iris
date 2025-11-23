#!/bin/bash

# GCP Deployment Script for Forecast Service
# This script helps deploy to Google Cloud Run

set -e

echo "🚀 GCP Cloud Run Deployment Script"
echo "===================================="
echo ""

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo "❌ gcloud CLI not found. Please install it:"
    echo "   macOS: brew install google-cloud-sdk"
    echo "   Or visit: https://cloud.google.com/sdk/docs/install"
    exit 1
fi

echo "✅ gcloud CLI found"
echo ""

# Get project ID
PROJECT_ID=$(gcloud config get-value project 2>/dev/null)
if [ -z "$PROJECT_ID" ]; then
    echo "❌ No GCP project set. Please set it:"
    echo "   gcloud config set project YOUR_PROJECT_ID"
    exit 1
fi

echo "📋 Project ID: $PROJECT_ID"
echo ""

# Check if user wants to proceed
read -p "Do you want to deploy to project '$PROJECT_ID'? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Deployment cancelled."
    exit 0
fi

# Enable required APIs
echo ""
echo "🔧 Enabling required APIs..."
gcloud services enable cloudbuild.googleapis.com --quiet || true
gcloud services enable run.googleapis.com --quiet || true
gcloud services enable containerregistry.googleapis.com --quiet || true
echo "✅ APIs enabled"
echo ""

# Build and push image
echo "🏗️  Building and pushing Docker image..."
gcloud builds submit --tag gcr.io/$PROJECT_ID/forecast-service
echo "✅ Image built and pushed"
echo ""

# Ask about environment variables
echo "🔑 Environment Variables"
echo "Set these in Cloud Run after deployment, or provide them now:"
read -p "TWILIO_ACCOUNT_SID: " TWILIO_SID
read -p "TWILIO_AUTH_TOKEN: " TWILIO_TOKEN
read -p "TWILIO_WHATSAPP_FROM (e.g., whatsapp:+14155238886): " TWILIO_FROM

# Deploy to Cloud Run
echo ""
echo "🚀 Deploying to Cloud Run..."
DEPLOY_CMD="gcloud run deploy forecast-service \
  --image gcr.io/$PROJECT_ID/forecast-service \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --memory 2Gi \
  --cpu 2 \
  --timeout 300 \
  --max-instances 10"

if [ ! -z "$TWILIO_SID" ] && [ ! -z "$TWILIO_TOKEN" ] && [ ! -z "$TWILIO_FROM" ]; then
    DEPLOY_CMD="$DEPLOY_CMD --set-env-vars TWILIO_ACCOUNT_SID=$TWILIO_SID,TWILIO_AUTH_TOKEN=$TWILIO_TOKEN,TWILIO_WHATSAPP_FROM=$TWILIO_FROM"
fi

eval $DEPLOY_CMD

# Get service URL
echo ""
echo "✅ Deployment complete!"
echo ""
SERVICE_URL=$(gcloud run services describe forecast-service --region us-central1 --format 'value(status.url)')
echo "🌐 Service URL: $SERVICE_URL"
echo ""
echo "🧪 Testing health endpoint..."
curl -s $SERVICE_URL/health | jq . || curl -s $SERVICE_URL/health
echo ""
echo ""
echo "📝 Next steps:"
echo "1. Update FORECAST_SERVICE_URL in your main app .env:"
echo "   FORECAST_SERVICE_URL=$SERVICE_URL"
echo ""
echo "2. If you didn't set env vars, set them now:"
echo "   gcloud run services update forecast-service \\"
echo "     --set-env-vars TWILIO_ACCOUNT_SID=your_sid \\"
echo "     --set-env-vars TWILIO_AUTH_TOKEN=your_token \\"
echo "     --set-env-vars TWILIO_WHATSAPP_FROM=whatsapp:+14155238886 \\"
echo "     --region us-central1"
echo ""

