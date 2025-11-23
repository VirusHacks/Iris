#!/bin/bash

cd "$(dirname "$0")"

echo "🚀 Starting Forecast Service..."
echo "📍 Location: $(pwd)"
echo ""

# Activate virtual environment
if [ ! -d "venv" ]; then
    echo "❌ Virtual environment not found. Creating..."
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    pip install requests
else
    source venv/bin/activate
fi

echo "✅ Virtual environment activated"
echo "🌐 Starting Flask service on http://localhost:5000"
echo ""
echo "Press Ctrl+C to stop the service"
echo ""

# Start the service
python app.py

