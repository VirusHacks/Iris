# RPC URL Setup Guide

## Current Configuration

The application now uses **public Sepolia RPC endpoints** by default, so you don't need to configure an Infura key unless you want to use your own.

## Default RPC URLs (in order of preference)

1. **PublicNode:** `https://ethereum-sepolia-rpc.publicnode.com` (used by default - most reliable)
2. **BlastAPI:** `https://eth-sepolia.public.blastapi.io` (backup)
3. **Official Sepolia RPC:** `https://rpc.sepolia.org` (may be slower)
4. **Public Infura:** `https://sepolia.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`
5. **Public Alchemy:** `https://eth-sepolia.g.alchemy.com/v2/demo`

## Environment Variables

### Option 1: Use Public RPC (Recommended - No setup needed)
Just leave `RPC_URL` unset or remove it from `.env`. The app will automatically use `https://ethereum-sepolia-rpc.publicnode.com` (PublicNode - most reliable).

### Option 2: Use Your Own Infura Key
If you want to use your own Infura key, update `.env`:

```bash
# Replace YOUR_KEY with your actual Infura API key
RPC_URL=https://sepolia.infura.io/v3/YOUR_ACTUAL_INFURA_KEY
```

### Option 3: Use Public Sepolia RPC Explicitly
```bash
# Recommended: PublicNode (most reliable)
RPC_URL=https://ethereum-sepolia-rpc.publicnode.com

# Or use BlastAPI (also reliable)
RPC_URL=https://eth-sepolia.public.blastapi.io

# Or official Sepolia (may be slower)
RPC_URL=https://rpc.sepolia.org
```

## How It Works

The code automatically:
1. Checks if `RPC_URL` is set and valid (not a placeholder)
2. If invalid or contains "YOUR_KEY", uses public Sepolia RPC
3. Falls back to public endpoints if connection fails

## Network Configuration

The app is configured for **Sepolia Testnet**:
- **Chain ID:** 11155111 (0xaa36a7)
- **Network Name:** Sepolia
- **Block Explorer:** https://sepolia.etherscan.io
- **Contract Address:** 0xe268f249b7e77347627476df35036a2b53a0bf21

## Troubleshooting

### "JsonRpcProvider failed to detect network"
This means the RPC URL is invalid or unreachable. The app will:
- Automatically retry with public Sepolia RPC
- Show helpful error messages
- Continue working with public endpoints

### To Fix:
1. **Remove or comment out** the `RPC_URL` line in `.env` if it has `YOUR_KEY`
2. Or set it to a reliable endpoint: `RPC_URL=https://ethereum-sepolia-rpc.publicnode.com`
3. If `rpc.sepolia.org` is slow, try: `RPC_URL=https://eth-sepolia.public.blastapi.io`
4. Restart your dev server

### Current Status
✅ **No configuration needed** - The app works with PublicNode Sepolia RPC by default!

**Note:** If you're experiencing timeouts with `rpc.sepolia.org`, the app will automatically use `https://ethereum-sepolia-rpc.publicnode.com` which is more reliable. You can also manually set it in your `.env` file.

