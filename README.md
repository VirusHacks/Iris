# Pixro

Pixro is a sophisticated, all-in-one platform for creating, hosting, and monetizing live webinars and virtual events. It leverages a modern tech stack to provide presenters with tools for audience engagement, lead tracking, automated follow-ups, and AI-powered interactions.

## 🚀 Features

Based on the application's structure and data models, Pixro includes the following core functionalities:

* **Webinar Management:** Create, schedule, and manage webinars with statuses like `SCHEDULED`, `WAITING_ROOM`, `LIVE`, `ENDED`, and `CANCELLED`.
* **Live Streaming:** Utilize Stream.io for real-time video and chat capabilities to host live events.
* **Monetization & Payments:** Integrate Stripe for payment processing, including support for product pricing, coupons, and tracking Stripe Customer and Connect IDs for presenters.
* **Lead & Attendance Pipeline:** Track attendees through various stages of the sales pipeline: `REGISTERED`, `ATTENDED`, `ADDED_TO_CART`, `FOLLOW_UP`, `BREAKOUT_ROOM`, and `CONVERTED`.
* **AI Agent Integration:** Create and configure dedicated AI agents using Vapi.ai for voice-based interactions, customized with a `prompt`, `model`, and `firstMessage`.
* **User & Authentication:** Secure authentication and user management powered by Clerk.js, tracking user subscriptions and profile information.
* **Email Communication:** Integrated with Resend for sending transactional emails, such as webinar start notifications.

## 🛠️ Tech Stack

This project is built using a modern JavaScript ecosystem:

### Framework & Runtime
* **Next.js** (v15.2.4)
* **React** (v19.0.0)
* **TypeScript**

### Database & ORM
* **Prisma** (v6.3.1)
* **PostgreSQL** (via Prisma datasource)

### Authentication & Authorization
* **Clerk** (`@clerk/nextjs`)

### Services & APIs
* **Stream.io:** For live video streaming (`@stream-io/video-react-sdk`) and chat (`stream-chat-react`).
* **Stripe:** For payment processing (`stripe`, `@stripe/react-stripe-js`).
* **Vapi.ai:** For voice/AI assistant capabilities (`@vapi-ai/server-sdk`, `@vapi-ai/web`).
* **Resend:** For email delivery.

### Styling & UI
* **Tailwind CSS**
* **Shadcn/ui** (utilizing various Radix UI primitives)
* **Framer Motion:** For animations

### State Management & Utilities
* **Zustand:** For flexible state management
* **Zod** & **React Hook Form:** For form validation and handling
* **Lucide React** & **React Icons:** For icons

## 💻 Getting Started

### 1. Setup Environment Variables

The application requires several environment variables for its third-party integrations and database. Create a `.env` file in the root directory and populate it.

```bash
# Database (Prisma/PostgreSQL)
DATABASE_URL="postgresql://..."

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_live_..."
CLERK_SECRET_KEY="sk_live_..."
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/home
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/callback

# Stream.io
NEXT_PUBLIC_STREAM_API_KEY="..."
STREAM_SECRET="..."

# Stripe
STRIPE_SECRET_KEY="..."
STRIPE_WEBHOOK_SECRET="..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="..."
NEXT_PUBLIC_STRIPE_CLIENT_ID="..."  # Stripe Connect Client ID (from Stripe Dashboard > Settings > Connect > OAuth)
# OR use STRIPE_CONNECT_CLIENT_ID as alternative
STRIPE_CONNECT_CLIENT_ID="..."  # Alternative name for Stripe Connect Client ID

# Vapi.ai
VAPI_ORG_ID="..."  # Your VAPI organization ID
VAPI_PRIVATE_KEY="..."  # Your VAPI private key (or use VAPI_SECRET_KEY as fallback)
# OR use VAPI_SECRET_KEY instead of VAPI_PRIVATE_KEY
VAPI_SECRET_KEY="..."  # Alternative to VAPI_PRIVATE_KEY
NEXT_PUBLIC_VAPI_API_KEY="..."  # Your VAPI public API key for client-side

# Resend
RESEND_API_KEY="..."

# Application Settings
NEXT_PUBLIC_SERVER_URL="http://localhost:3000"
