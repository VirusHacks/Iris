# Sepolia Network Integration - Complete Guide

## ✅ What's Been Improved

Following best practices from your example code, the blockchain service has been completely refactored with:

### 1. **Better Type Safety**
- Extended `Window.ethereum` interface with `ethers.Eip1193Provider`
- Proper TypeScript types for all blockchain interactions
- Checksum address validation

### 2. **Network Validation & Contract Checking**
- **Contract Code Validation**: Checks if contract exists at address before operations
- **Network Detection**: Automatically detects current network
- **Network Mismatch Warnings**: Warns if contract not found (likely wrong network)

### 3. **Automatic Network Switching**
- **Switch to Sepolia**: Automatically switches/adds Sepolia network when storing forecasts
- **Network Info Panel**: Shows current network with "Switch to Sepolia" button if needed
- **Seamless UX**: Users don't need to manually switch networks

### 4. **Improved RPC Endpoints**
- **PublicNode** (most reliable): `https://ethereum-sepolia-rpc.publicnode.com`
- **BlastAPI**: `https://eth-sepolia.public.blastapi.io`
- **Official Sepolia**: `https://rpc.sepolia.org` (fallback)
- Automatic fallback if env RPC is invalid

### 5. **Better Error Handling**
- Clear error messages for common issues
- Network-specific error handling
- Transaction rejection handling
- RPC timeout handling with helpful messages

### 6. **Sepolia Network Configuration**
```typescript
export const SEPOLIA_NETWORK = {
  chainId: "0xaa36a7", // 11155111
  chainName: "Sepolia",
  nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  rpcUrls: [
    "https://ethereum-sepolia-rpc.publicnode.com",
    "https://eth-sepolia.public.blastapi.io",
    "https://rpc.sepolia.org",
  ],
  blockExplorerUrls: ["https://sepolia.etherscan.io"],
};
```

## 🔧 Key Functions

### Network Management
```typescript
// Switch to Sepolia (automatically called when storing)
await switchToSepolia();

// Get current network info
const networkInfo = await getNetworkInfo();
// Returns: { name, chainId, address }
```

### Contract Operations
```typescript
// Get contract with validation
const contract = await getContract();

// Get contract with signer (for writes)
const contract = await getContractWithSigner();

// Check contract exists (non-blocking)
await checkContract(provider);
```

### Client-Side Helpers
```typescript
// Switch to Sepolia network
await switchToSepoliaNetwork();

// Get current network info
const info = await getCurrentNetworkInfo();
```

## 🎯 How It Works

### When Storing Forecasts:
1. **Auto-Switch**: Automatically switches to Sepolia if not already on it
2. **Contract Validation**: Checks contract exists before storing
3. **Network Check**: Validates network matches contract
4. **Transaction**: Sends transaction with proper error handling

### When Fetching Forecasts:
1. **Provider Selection**: Uses MetaMask if available, falls back to RPC
2. **Contract Check**: Validates contract exists
3. **Network Detection**: Detects current network
4. **Timeout Handling**: 10-15 second timeouts with helpful errors

### Network Info Panel:
- Shows current network
- **"Switch to Sepolia" button** if not on Sepolia
- Real-time network detection
- Contract address validation

## 📝 Environment Variables

### Recommended Setup:
```bash
# Option 1: Use default (PublicNode - most reliable)
# Just don't set RPC_URL or comment it out

# Option 2: Use reliable public RPC
RPC_URL=https://ethereum-sepolia-rpc.publicnode.com

# Option 3: Use your own Infura key
RPC_URL=https://sepolia.infura.io/v3/YOUR_ACTUAL_KEY
```

### Contract Address:
```bash
NEXT_PUBLIC_CONTRACT_ADDRESS=0xe268f249b7e77347627476df35036a2b53a0bf21
```

## 🚀 Usage Examples

### Store Forecast (Auto-Switches Network):
```typescript
import { storeForecastToBlockchain } from "@/lib/blockchain/clientBlockchain";

// Automatically switches to Sepolia if needed
await storeForecastToBlockchain(forecastData, "revenue", 6);
```

### Fetch Forecast:
```typescript
import { fetchForecastFromBlockchain } from "@/lib/blockchain/clientBlockchain";

const data = await fetchForecastFromBlockchain(userAddress, "revenue");
```

### Manual Network Switch:
```typescript
import { switchToSepoliaNetwork } from "@/lib/blockchain/clientBlockchain";

await switchToSepoliaNetwork();
```

## 🎨 UI Features

### Blockchain Info Panel:
- **Network Badge**: Shows current network (green if Sepolia)
- **Switch Button**: Appears if not on Sepolia
- **Real-time Updates**: Refreshes network info
- **Contract Validation**: Shows warnings if contract not found

### Store Button:
- **Auto-Network Switch**: Automatically switches before storing
- **Network Validation**: Checks network before transaction
- **Clear Errors**: Helpful error messages for network issues

## 🔍 Validation Features

### Contract Validation:
- Checks contract code exists at address
- Warns if contract not found (network mismatch)
- Non-blocking (doesn't stop operations)

### Network Validation:
- Detects current network automatically
- Compares with expected network (Sepolia)
- Provides switch option if wrong network

### Address Validation:
- Normalizes addresses to checksum format
- Validates address format
- Uses ethers.js validation

## 🐛 Error Handling

### Common Errors & Solutions:

1. **"MetaMask not installed"**
   - Solution: Install MetaMask extension

2. **"Network error"**
   - Solution: Check internet connection or use MetaMask

3. **"RPC timeout"**
   - Solution: Try using MetaMask (more reliable than public RPC)

4. **"Transaction rejected"**
   - Solution: User needs to approve in MetaMask

5. **"Contract not found"**
   - Solution: Switch to Sepolia network

## ✅ Benefits

1. **Better UX**: Auto-switches network, no manual steps
2. **More Reliable**: Uses best RPC endpoints
3. **Better Errors**: Clear, actionable error messages
4. **Type Safe**: Full TypeScript support
5. **Validated**: Contract and network validation
6. **Robust**: Handles edge cases gracefully

## 📊 Network Flow

```
User Action → Check Network → Not Sepolia? → Switch/Add Network
                ↓
            Sepolia ✓ → Validate Contract → Execute Operation
                ↓
            Error? → Show Helpful Message → Retry Option
```

## 🎯 Summary

The blockchain integration now:
- ✅ Automatically switches to Sepolia
- ✅ Validates contract exists
- ✅ Uses reliable RPC endpoints
- ✅ Provides clear error messages
- ✅ Has better type safety
- ✅ Follows best practices from your example

**Sepolia integration is now production-ready!** 🚀

