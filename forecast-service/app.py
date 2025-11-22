from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from prophet import Prophet
import json
from datetime import datetime, timedelta
import numpy as np
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)

# Suppress Prophet warnings
import warnings
warnings.filterwarnings('ignore')

@app.route('/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({
        "status": "healthy",
        "service": "forecast-service",
        "version": "1.0.0"
    })

@app.route('/forecast', methods=['POST'])
def forecast():
    """Generate forecast using Prophet model"""
    try:
        data = request.json
        if not data:
            return jsonify({
                "error": "No data provided",
                "historical": [],
                "forecast": []
            }), 400
            
        monthly_data = data.get('monthlyData', [])
        periods = int(data.get('periods', 6))
        forecast_type = data.get('type', 'revenue')  # revenue, aov, orders
        
        logger.info(f"Forecast request: type={forecast_type}, periods={periods}, data_points={len(monthly_data)}")
        
        if len(monthly_data) < 3:
            logger.warning(f"Insufficient data: {len(monthly_data)} months provided, need at least 3")
            return jsonify({
                "error": "Insufficient data. Need at least 3 months of historical data.",
                "historical": monthly_data,
                "forecast": []
            }), 400
        
        # Convert to DataFrame
        df = pd.DataFrame(monthly_data)
        df['ds'] = pd.to_datetime(df['month'] + '-01')
        df = df.sort_values('ds')
        
        # Prepare Prophet data
        prophet_df = pd.DataFrame({
            'ds': df['ds'],
            'y': df[forecast_type]
        })
        
        # Initialize and fit Prophet model
        model = Prophet(
            yearly_seasonality=True,
            weekly_seasonality=False,
            daily_seasonality=False,
            seasonality_mode='multiplicative',
            changepoint_prior_scale=0.05
        )
        
        model.fit(prophet_df)
        
        # Create future dataframe
        future = model.make_future_dataframe(periods=periods, freq='MS')  # MS = Month Start
        
        # Generate forecast
        forecast = model.predict(future)
        
        # Split into historical and forecast
        historical_count = len(prophet_df)
        historical_forecast = forecast.iloc[:historical_count]
        future_forecast = forecast.iloc[historical_count:]
        
        # Format historical data
        historical = []
        for idx, row in df.iterrows():
            hist_forecast = historical_forecast[historical_forecast['ds'] == row['ds']]
            if not hist_forecast.empty:
                historical.append({
                    'month': row['month'],
                    'value': float(row[forecast_type]),
                    'type': 'historical',
                    'trend': float(hist_forecast.iloc[0]['trend']),
                    'yhat_lower': float(hist_forecast.iloc[0]['yhat_lower']),
                    'yhat_upper': float(hist_forecast.iloc[0]['yhat_upper'])
                })
        
        # Format forecast data
        forecast_data = []
        for _, row in future_forecast.iterrows():
            month_str = row['ds'].strftime('%Y-%m')
            forecast_data.append({
                'month': month_str,
                'value': float(row['yhat']),
                'type': 'forecast',
                'trend': float(row['trend']),
                'yhat_lower': float(row['yhat_lower']),
                'yhat_upper': float(row['yhat_upper'])
            })
        
        # Calculate model metrics
        actuals = df[forecast_type].values
        predictions = historical_forecast['yhat'].values
        
        mape = np.mean(np.abs((actuals - predictions) / actuals)) * 100 if np.any(actuals != 0) else 0
        mae = np.mean(np.abs(actuals - predictions))
        
        logger.info(f"Forecast successful: {len(forecast_data)} periods forecasted")
        
        return jsonify({
            'historical': historical,
            'forecast': forecast_data,
            'metrics': {
                'mape': float(mape),
                'mae': float(mae),
                'rmse': float(np.sqrt(np.mean((actuals - predictions) ** 2)))
            },
            'components': {
                'trend': 'multiplicative',
                'seasonality': 'yearly'
            }
        })
        
    except Exception as e:
        logger.error(f"Forecast error: {str(e)}", exc_info=True)
        return jsonify({
            "error": str(e),
            "historical": [],
            "forecast": []
        }), 500

if __name__ == '__main__':
    logger.info("Starting Forecast Service on http://0.0.0.0:4000")
    logger.info("Health check: http://localhost:4000/health")
    app.run(host='0.0.0.0', port=4000, debug=True)

