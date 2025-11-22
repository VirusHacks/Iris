export const getStripeOAuthLink = (url: string, data: string) => {
  // Use STRIPE_CONNECT_CLIENT_ID (from README) or fallback to NEXT_PUBLIC_STRIPE_CLIENT_ID
  const clientId = process.env.NEXT_PUBLIC_STRIPE_CLIENT_ID || process.env.STRIPE_CONNECT_CLIENT_ID;
  
  // Use NEXT_PUBLIC_SERVER_URL (from README) or fallback to NEXT_PUBLIC_BASE_URL
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  if (!clientId) {
    console.error('Stripe Connect Client ID is missing. Please set NEXT_PUBLIC_STRIPE_CLIENT_ID or STRIPE_CONNECT_CLIENT_ID in your .env file');
    throw new Error('Stripe Connect Client ID is not configured');
  }
  
  const redirectUri = `${baseUrl}/${url}`;
  
  console.log('Stripe OAuth Link:', {
    clientId: clientId.substring(0, 10) + '...', // Log partial for security
    redirectUri,
    baseUrl
  });
  
  return `https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${clientId}&scope=read_write&redirect_uri=${encodeURIComponent(redirectUri)}&state=${data}`;
};
