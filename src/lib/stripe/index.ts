import Stripe from "stripe";

const stripeSecret = process.env.STRIPE_SECRET_KEY;
if (!stripeSecret) {
  throw new Error(
    'Missing STRIPE_SECRET_KEY environment variable. Set `STRIPE_SECRET_KEY` in your environment (e.g. `env.local`) and restart the dev server.'
  );
}

export const stripe = new Stripe(stripeSecret, {
  // apiVersion: '2025-02-24.acacia',
  apiVersion: '2025-04-30.basil',
  appInfo: {
    name: 'Leaderboard Saas',
    version: '0.1.0',
  },
});