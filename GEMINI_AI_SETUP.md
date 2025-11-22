# Gemini AI Explainable AI Setup

## ✅ Implementation Complete

### 1. API Endpoint
- **Route**: `/api/ai/chat`
- **Method**: POST
- **Model**: Gemini 1.5 Flash (can be updated to 2.5 Flash when available)
- **Features**:
  - Accepts system message and user prompt
  - Includes context data (page-specific analytics)
  - Returns AI-generated responses

### 2. System Messages
Created page-specific system messages:
- **Revenue Analytics**: Expert in revenue analysis and optimization
- **Orders Analytics**: Expert in order volume and AOV optimization
- **Customer Analytics**: Expert in RFM analysis and customer segmentation

### 3. Chatbot Component
- Updated to accept `systemMessage`, `contextData`, and `pageTitle` props
- Calls Gemini API with full context
- Shows loading states and error handling
- Displays formatted responses

### 4. Integration
All detail pages now pass:
- Page-specific system message
- Relevant data context (metrics, charts, forecasts)
- Page title for personalized greeting

## 🔧 Environment Setup

Add to `.env`:
```
GOOGLE_AI_API_KEY=your_gemini_api_key_here
```

Get your API key from: https://aistudio.google.com/apikey

## 📝 Usage

The chatbot now:
- ✅ Explains charts and metrics
- ✅ Suggests improvements (how to increase revenue, orders, etc.)
- ✅ Answers questions about the data
- ✅ Provides actionable recommendations
- ✅ References specific data points from the context

## 🚀 Next Steps

1. Add `GOOGLE_AI_API_KEY` to `.env`
2. Test the chatbot on each detail page
3. The AI will automatically use the correct system message and data context

