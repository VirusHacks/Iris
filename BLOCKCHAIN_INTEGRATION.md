# Blockchain Integration Guide

This document explains how the SalesForecast smart contract is integrated with the frontend and backend.

## Overview

The application now supports storing and fetching sales forecast data on the blockchain using the deployed `SalesForecast` smart contract at:
- **Contract Address:** `0xe268f249b7e77347627476df35036a2b53a0bf21`

## Architecture

### Data Flow

1. **Python Service** → Generates forecast data using Prophet model
2. **Backend API** → Receives forecast from Python, caches in database
3. **Frontend** → Fetches forecast from API (or blockchain if available)
4. **User Action** → User can store forecast to blockchain using their wallet
5. **Blockchain** → Forecast data is stored on-chain and can be fetched later

### Components

#### Backend Services

1. **`/src/lib/blockchain/contractService.ts`**
   - Server-side blockchain interaction
   - Read operations (fetching data from blockchain)
   - Uses ethers.js v6

2. **`/src/lib/blockchain/forecastContract.ts`**
   - Data conversion utilities
   - Converts Python forecast format to Solidity-compatible format
   - Converts blockchain data back to frontend format

3. **`/src/app/api/dashboard/forecast/blockchain/route.ts`**
   - API endpoint to fetch forecast data from blockchain
   - `GET /api/dashboard/forecast/blockchain?type=revenue&userAddress=0x...`

#### Frontend Components

1. **`/src/lib/blockchain/clientBlockchain.ts`**
   - Client-side blockchain utilities
   - Wallet connection
   - Store forecast to blockchain (requires user's wallet)

2. **`/src/app/(protectedRoutes)/dashboard/_components/StoreToBlockchainButton.tsx`**
   - UI component to store forecast to blockchain
   - Handles wallet connection
   - Shows transaction status

3. **Updated Chart Components**
   - `RevenueForecast.tsx` - Now supports blockchain data with fallback
   - Automatically tries blockchain first, falls back to API

## Environment Variables

Add these to your `.env` file:

```bash
# Smart Contract Address
NEXT_PUBLIC_CONTRACT_ADDRESS=0xe268f249b7e77347627476df35036a2b53a0bf21

# RPC URL (for server-side reads)
RPC_URL=https://sepolia.infura.io/v3/YOUR_KEY
# OR for public RPC
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/YOUR_KEY
```

## Usage

### Storing Forecast to Blockchain

1. User generates a forecast (via Python service)
2. Forecast is displayed in the chart
3. User clicks "Store on Blockchain" button
4. MetaMask prompts for connection (if not connected)
5. User approves transaction
6. Forecast is stored on blockchain
7. Future loads will fetch from blockchain automatically

### Fetching Forecast from Blockchain

The chart components automatically:
1. Check if user has wallet connected
2. Try to fetch from blockchain first
3. Fall back to API if blockchain fetch fails or no wallet

### Manual Fetch

```typescript
import { fetchForecastFromBlockchain } from "@/lib/blockchain/clientBlockchain";

const data = await fetchForecastFromBlockchain(
  "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
  "revenue"
);
```

## Smart Contract Functions

### Write Functions (Client-side only)

- `storeForecast()` - Store forecast data (requires user's wallet)

### Read Functions (Server or Client)

- `getForecastRecord()` - Get forecast metadata
- `getHistoricalData()` - Get historical data points
- `getForecastData()` - Get forecast data points
- `getMetrics()` - Get forecast accuracy metrics
- `getUserForecastTypes()` - Get all forecast types for a user
- `forecastExists()` - Check if forecast exists

## Data Format

### Input (Python → Blockchain)

```typescript
{
  forecastType: "revenue" | "aov" | "orders",
  historicalMonths: ["2024-01", "2024-02", ...],
  historicalValues: ["10000000000000000000000", ...], // wei format
  forecastMonths: ["2024-07", "2024-08", ...],
  forecastValues: ["25000000000000000000000", ...], // wei format
  mape: "520", // percentage * 100
  mae: "500000000000000000000", // wei format
  rmse: "750000000000000000000" // wei format
}
```

### Output (Blockchain → Frontend)

```typescript
{
  historical: [
    { month: "2024-01", value: 10000, type: "historical", ... }
  ],
  forecast: [
    { month: "2024-07", value: 25000, type: "forecast", ... }
  ],
  metrics: {
    mape: 5.2, // percentage
    mae: 500,
    rmse: 750
  },
  source: "blockchain"
}
```

## Testing

### Test Contract Functions

Use the test data files:
- `/src/contracts/ALL_FUNCTIONS_TEST_DATA.md` - Test inputs for all functions
- `/src/contracts/REMIX_TEST_DATA.md` - Remix test data

### Test in Browser

1. Connect MetaMask to Sepolia testnet
2. Generate a forecast in the dashboard
3. Click "Store on Blockchain" button
4. Approve transaction
5. Refresh page - data should load from blockchain

## Troubleshooting

### "MetaMask not found"
- Install MetaMask browser extension
- Ensure it's enabled

### "Transaction failed"
- Check you have enough ETH for gas
- Verify contract address is correct
- Check network (should be Sepolia for testnet)

### "Failed to fetch from blockchain"
- Verify RPC URL is correct
- Check contract address
- Ensure forecast exists for that address/type

### "Wallet not connected"
- Click "Store on Blockchain" - it will prompt for connection
- Or manually connect MetaMask

## Future Enhancements

- [ ] Support for multiple networks (mainnet, testnets)
- [ ] Batch storage for multiple forecast types
- [ ] Transaction history tracking
- [ ] Gas estimation before transaction
- [ ] Support for other wallets (WalletConnect, Coinbase Wallet)
- [ ] Off-chain data storage with on-chain verification

