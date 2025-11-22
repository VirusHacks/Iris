import { VapiClient } from '@vapi-ai/server-sdk'
import jwt from 'jsonwebtoken'

// Get environment variables
const orgId = process.env.VAPI_ORG_ID
const privateKey = process.env.VAPI_PRIVATE_KEY || process.env.VAPI_SECRET_KEY

// Validate required environment variables
if (!orgId) {
  throw new Error('VAPI_ORG_ID environment variable is required. Please add it to your .env file.')
}

if (!privateKey) {
  throw new Error('VAPI_PRIVATE_KEY or VAPI_SECRET_KEY environment variable is required. Please add it to your .env file.')
}

// Define the payload
const payload = {
  orgId: orgId,
  token: {
    // This is the scope of the token
    tag: 'private',
  },
}

// Define token options
const options = {
  expiresIn: 2800, // 1 hour in seconds
}

// Generate the token using a JWT library or built-in functionality
const token = jwt.sign(payload, privateKey, options)

export const vapiServer = new VapiClient({ token: token })
