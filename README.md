# Pixro - AI-Powered Sales CRM & Analytics Platform

A comprehensive, AI-driven Customer Relationship Management (CRM) platform that combines sales analytics, customer segmentation, revenue forecasting, live webinars, AI voice assistants, and lead generation into a single, powerful solution.

## 🚀 Features

### 📊 **Sales Analytics & Forecasting**
- **Revenue Analytics**: Comprehensive revenue tracking with monthly trends, growth rates, and peak performance analysis
- **Orders Analytics**: Order volume tracking, average order value (AOV) trends, and conversion metrics
- **AI-Powered Forecasting**: Facebook Prophet-based time series forecasting for revenue, orders, and AOV with confidence intervals
- **Interactive Charts**: Beautiful, responsive charts using Recharts with dark theme support
- **Real-time Dashboard**: Executive overview with KPIs, sales snapshots, and performance metrics

### 👥 **Customer Management**
- **Customer Segmentation**: Advanced RFM (Recency, Frequency, Monetary) analysis with fuzzy logic and K-means clustering
- **Customer 360 View**: Complete customer profile with purchase history, segmentation data, and behavioral insights
- **Customer Analytics**: Deep insights into customer behavior, lifetime value, and engagement patterns
- **Promotional Segmentation**: AI-powered customer categorization for targeted marketing campaigns

### 🎯 **Lead Generation & Management**
- **AI Lead Generation**: Generate qualified leads based on best customer profiles using AI analysis
- **CSV Import/Export**: Bulk lead management with CSV upload and export functionality
- **Lead Scoring**: Automated lead scoring system with conversion probability estimation
- **Conversion Funnel**: Visual representation of lead conversion stages
- **WhatsApp Integration**: Send personalized messages to leads via Twilio WhatsApp API

### 🎥 **Live Webinars & Streaming**
- **Live Webinar Hosting**: Create and host live webinars with Stream.io integration
- **Real-time Chat**: Interactive chat during webinars for audience engagement
- **Breakout Rooms**: AI-powered breakout room feature for one-on-one calls
- **Recording & Playback**: Automatic recording of webinars with playback functionality
- **Waiting Room**: Pre-webinar waiting room with countdown timer
- **OBS Integration**: RTMP streaming support for professional broadcasting

### 🤖 **AI Voice Assistants**
- **Vapi.ai Integration**: Create and manage AI voice assistants for sales calls
- **Breakout Room Calls**: Automated AI calls when attendees join breakout rooms
- **Customizable Prompts**: Configure AI agent behavior and conversation flows
- **Call Analytics**: Track call status, duration, and outcomes

### 💬 **AI Chat Assistant**
- **Context-Aware Chatbot**: AI-powered chatbot with Google Gemini integration
- **Page-Specific Context**: Chatbot adapts to different pages (Revenue, Orders, Customers) with relevant data
- **Natural Language Queries**: Ask questions about your data in natural language
- **Actionable Insights**: Get AI-generated recommendations based on your analytics

### 💰 **Payment Integration**
- **Stripe Connect**: Multi-vendor payment processing with Stripe Connect
- **Webinar Monetization**: Sell webinar access with integrated checkout
- **Subscription Management**: Handle user subscriptions and billing
- **Payment Analytics**: Track revenue from webinars and subscriptions

### 🔗 **Blockchain Integration**
- **Forecast Storage**: Store sales forecasts on blockchain (Ethereum/Sepolia)
- **Smart Contracts**: Solidity-based smart contracts for immutable forecast records
- **Web3 Wallet Integration**: Connect MetaMask and other Web3 wallets
- **Transaction Tracking**: Monitor blockchain transactions and gas fees

### 📱 **Communication**
- **WhatsApp Messaging**: Send bulk WhatsApp messages via Twilio
- **Email Notifications**: Automated email notifications via Resend
- **Bulk Email Campaigns**: Send webinar invitations and updates to multiple recipients

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.2.4 (React 19)
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI, shadcn/ui
- **Charts**: Recharts
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js
- **API**: Next.js API Routes
- **Database**: PostgreSQL (Prisma ORM)
- **Authentication**: Clerk
- **File Storage**: Local/Cloud storage

### AI & ML
- **AI Chat**: Google Gemini (gemini-2.5-flash)
- **Forecasting**: Facebook Prophet (Python Flask service)
- **Voice AI**: Vapi.ai
- **Video AI**: Tavus (optional)

### Third-Party Services
- **Video Streaming**: Stream.io (Video & Chat)
- **Payments**: Stripe
- **Messaging**: Twilio (WhatsApp)
- **Email**: Resend
- **Blockchain**: Ethers.js (Ethereum)

### Python Service
- **Framework**: Flask
- **ML Libraries**: Prophet, scikit-learn, pandas, numpy
- **Phone Numbers**: phonenumbers library

## 📁 Project Structure

```
Pixro/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── (auth)/            # Authentication routes
│   │   ├── (protectedRoutes)/ # Protected dashboard routes
│   │   ├── (publicRoutes)/    # Public routes (webinars)
│   │   └── api/               # API routes
│   ├── components/            # React components
│   ├── lib/                   # Utilities and helpers
│   ├── action/                # Server actions
│   ├── store/                 # Zustand stores
│   └── contracts/             # Solidity smart contracts
├── forecast-service/          # Python Flask service
│   ├── app.py                # Main Flask application
│   └── requirements.txt      # Python dependencies
├── prisma/
│   └── schema.prisma         # Database schema
└── public/                   # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Python 3.8+ (for forecast service)
- PostgreSQL database
- Clerk account (for authentication)
- Stripe account (for payments)
- Twilio account (for WhatsApp)
- Stream.io account (for video)
- Vapi.ai account (for voice AI)
- Google AI API key (for chatbot)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd Pixro
```

2. **Install Node.js dependencies**
```bash
npm install
```

3. **Install Python dependencies**
```bash
cd forecast-service
pip install -r requirements.txt
cd ..
```

4. **Set up environment variables**
Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/pixro"

# Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# AI Services
GOOGLE_AI_API_KEY=your_google_ai_api_key
VAPI_API_KEY=your_vapi_api_key
TAVUS_API_KEY=your_tavus_api_key (optional)

# Stream.io
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Twilio
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886

# Email
RESEND_API_KEY=your_resend_api_key

# Forecast Service
FORECAST_SERVICE_URL=http://localhost:4000

# Blockchain (Optional)
PRIVATE_KEY=your_ethereum_private_key
RPC_URL=your_ethereum_rpc_url
CONTRACT_ADDRESS=your_contract_address

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

5. **Set up the database**
```bash
npx prisma generate
npx prisma migrate dev
```

6. **Start the forecast service**
```bash
cd forecast-service
python app.py
# Service runs on http://localhost:4000
```

7. **Start the Next.js development server**
```bash
npm run dev
# App runs on http://localhost:3000
```

## 📊 Database Schema

### Key Models

- **User**: User accounts with Clerk integration
- **Webinar**: Live webinar sessions with Stream.io integration
- **Attendee**: Webinar attendees and participants
- **SalesTransaction**: Sales transaction data for analytics
- **RFMAnalysis**: Customer RFM segmentation data
- **CustomerSegmentation**: Advanced customer clustering
- **DashboardAnalytics**: Aggregated analytics cache
- **ForecastAnalytics**: Forecast results cache
- **AiAgents**: AI voice assistant configurations

## 🔌 API Endpoints

### Forecast Service (Python Flask)

- `POST /forecast` - Generate revenue/orders/AOV forecasts
- `POST /whatsapp/send` - Send WhatsApp messages
- `GET /health` - Health check

### Next.js API Routes

- `POST /api/dashboard/upload` - Upload sales CSV data
- `POST /api/dashboard/analytics` - Get dashboard analytics
- `POST /api/dashboard/forecast` - Generate forecasts
- `POST /api/dashboard/segmentation` - Customer segmentation
- `POST /api/ai/chat` - AI chatbot endpoint
- `POST /api/leads/generate` - Generate leads
- `POST /api/whatsapp/send` - Send WhatsApp messages
- `POST /api/stripe-webhook` - Stripe webhook handler

## 🎨 UI/UX Features

- **Dark Theme**: Professional black theme with purple accents
- **Responsive Design**: Mobile-first, fully responsive layout
- **Interactive Charts**: Real-time data visualization
- **Clean Interface**: Minimal, professional design
- **Accessibility**: WCAG compliant components

## 🔐 Security Features

- **CSRF Protection**: Built-in CSRF token validation
- **Content Security Policy**: CSP headers for XSS protection
- **Authentication**: Clerk-based authentication
- **API Security**: Protected API routes with authentication
- **Input Validation**: Zod schema validation

## 📈 Key Features in Detail

### Sales Forecasting
- Uses Facebook Prophet for time series forecasting
- Supports revenue, orders, and AOV forecasting
- Provides confidence intervals and uncertainty estimates
- Caches forecast results for performance

### Customer Segmentation
- RFM Analysis: Recency, Frequency, Monetary scoring
- K-means Clustering: Automated customer grouping
- Fuzzy Logic: Advanced segmentation algorithms
- Promotional Categories: Marketing-ready segments

### Lead Generation
- AI-powered lead generation based on customer profiles
- CSV-based bulk lead import
- Lead scoring and qualification
- Conversion funnel tracking

### Live Webinars
- Stream.io integration for HD video streaming
- Real-time chat during webinars
- Breakout rooms for one-on-one interactions
- Automatic recording and playback
- OBS integration for professional streaming

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Forecast Service Deployment

The forecast service can be deployed separately:
- Vercel (serverless functions)
- Railway
- Render
- Docker container

### Database

Recommended PostgreSQL providers:
- Neon
- Supabase
- Railway
- AWS RDS

## 🧪 Testing

```bash
# Run TypeScript type checking
npm run build

# Run ESLint
npm run lint

# Test forecast service
cd forecast-service
pytest tests/
```

## 📝 Environment Variables Reference

See the `.env.example` file for all required environment variables.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 🆘 Support

For support, please open an issue in the repository or contact the development team.

## 🎯 Roadmap

- [ ] Mobile app (React Native)
- [ ] Advanced AI analytics
- [ ] Multi-language support
- [ ] Advanced reporting
- [ ] API rate limiting
- [ ] Webhook integrations
- [ ] Advanced automation workflows

## 🙏 Acknowledgments

- Stream.io for video infrastructure
- Vapi.ai for voice AI
- Clerk for authentication
- Stripe for payments
- Twilio for messaging
- Facebook Prophet for forecasting

---

Built with ❤️ using Next.js, React, and AI

