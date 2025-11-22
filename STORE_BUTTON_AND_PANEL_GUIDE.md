# Store Button & Blockchain Info Panel Guide

## ✅ Store Button - Now Visible!

The **"Store on Blockchain"** button is now added to all forecast charts:

### Where to Find It:
1. **Revenue Forecast Chart** - Top right corner of the chart header
2. **AOV Forecast Chart** - Top right corner of the chart header  
3. **Orders Forecast Chart** - Top right corner of the chart header

### When It Appears:
- ✅ **Shows**: When data is from API (not yet stored on blockchain)
- ❌ **Hides**: When data is from blockchain (already stored)
- ❌ **Hides**: When there's an error or no data

### Button States:
- **Default**: "Store on Blockchain" with blockchain icon
- **Loading**: "Storing..." with spinner (during transaction)
- **Success**: "View Details" button (after successful storage)
- **Error**: "Retry Store" button (if transaction fails)

## 🔄 Blockchain Info Panel - Fully Dynamic!

The **Blockchain Information Panel** is **100% dynamic** and updates automatically:

### Dynamic Features:

1. **Auto-Refresh on Mount**
   - Fetches blockchain info when component loads
   - Shows wallet address, contract, network, stored forecasts

2. **Auto-Refresh After Storage**
   - Listens for `forecastStored` events
   - Automatically refreshes 3 seconds after storing
   - Updates to show newly stored forecasts

3. **Auto-Refresh on Wallet Change**
   - Listens for MetaMask account changes
   - Refreshes when user switches wallets
   - Updates all information automatically

4. **Manual Refresh Button**
   - Refresh button in top right of panel
   - Click to manually refresh blockchain info
   - Shows spinner while refreshing

### What It Shows:

1. **Wallet Address**
   - Your connected MetaMask address
   - Copy & explorer links
   - "Connected" or "Not Connected" badge

2. **Contract Address**
   - `0xe268f249b7e77347627476df35036a2b53a0bf21`
   - Copy & explorer links

3. **Network Information**
   - Current network (Sepolia/Mainnet/etc.)
   - Chain ID
   - "Switch to Sepolia" button if not on Sepolia

4. **Stored Forecasts List**
   - Shows all forecast types (revenue, aov, orders)
   - "On-Chain" badge if stored
   - "Not Stored" badge if not stored
   - Timestamp if stored

5. **Activity Logs**
   - Real-time logs of all blockchain operations
   - Shows fetching, checking, storing operations
   - Color-coded (info/success/error)

## 📍 How to Use

### To Store Data:

1. **Navigate to Prediction Tab**
   - Go to Dashboard → Prediction tab

2. **Find Store Button**
   - Look for "Store on Blockchain" button on any chart
   - Button appears in top right of chart header

3. **Click Button**
   - MetaMask popup appears
   - Approve transaction
   - Wait for confirmation

4. **View Results**
   - Button changes to "View Details"
   - Click to see transaction details
   - Blockchain Info Panel auto-updates

### To View Blockchain Info:

1. **Blockchain Info Panel**
   - Located at top of Prediction tab
   - Shows all blockchain information

2. **Manual Refresh**
   - Click refresh button (top right)
   - Or wait for auto-refresh

3. **Check Stored Forecasts**
   - See which forecasts are "On-Chain"
   - View timestamps
   - Check activity logs

## 🔍 Verification Checklist

### Store Button:
- [ ] Button visible on Revenue chart (when data from API)
- [ ] Button visible on AOV chart (when data from API)
- [ ] Button visible on Orders chart (when data from API)
- [ ] Button disappears when data is from blockchain
- [ ] Button shows "Storing..." during transaction
- [ ] Button shows "View Details" after success

### Blockchain Info Panel:
- [ ] Panel loads on page load
- [ ] Shows wallet address (if connected)
- [ ] Shows contract address
- [ ] Shows network information
- [ ] Shows stored forecasts list
- [ ] Shows activity logs
- [ ] Refresh button works
- [ ] Auto-refreshes after storing
- [ ] Auto-refreshes on wallet change

## 🎯 Expected Behavior

### When Data is from API:
```
Chart Header:
├── Title: "Revenue Forecast (Prophet AI)"
├── Description: "6-month projection • MAPE: 5.20%"
└── [Store on Blockchain] ← Button visible here
```

### When Data is from Blockchain:
```
Chart Header:
├── Title: "Revenue Forecast (Prophet AI)"
├── Description: "6-month projection • MAPE: 5.20% • On-Chain" ← Badge here
└── (No button) ← Button hidden
```

### Blockchain Info Panel:
```
Blockchain Information
├── Wallet Address: 0x50E21BB1... [Connected] [Copy] [Explorer]
├── Contract Address: 0xe268f249... [Copy] [Explorer]
├── Network: Sepolia (Chain ID: 11155111) [Switch to Sepolia]
├── Stored Forecasts:
│   ├── revenue: [On-Chain] 1/15/2024
│   ├── aov: [Not Stored]
│   └── orders: [Not Stored]
├── Activity Logs:
│   ├── [1:52:38 AM] INFO: Fetching blockchain information...
│   ├── [1:52:38 AM] INFO: User wallet address: 0x50E21BB1...
│   ├── [1:52:38 AM] INFO: Checking revenue forecast on blockchain...
│   └── [1:52:38 AM] SUCCESS: revenue forecast found on blockchain
└── [Refresh Button] ← Top right
```

## 🐛 Troubleshooting

### Store Button Not Visible?

**Check:**
1. Is data from API? (Button only shows when `dataSource === "api"`)
2. Is there data? (Button hidden if no data or error)
3. Is data already from blockchain? (Button hidden if already stored)

**Solution:**
- If data is from blockchain, button won't show (this is correct!)
- If no data, check Python service is running
- If error, check console for details

### Blockchain Info Panel Not Updating?

**Check:**
1. Is wallet connected? (Panel needs wallet to fetch data)
2. Are there any errors in console?
3. Is network correct? (Should be Sepolia)

**Solution:**
- Click refresh button manually
- Check console for errors
- Verify wallet is connected
- Check network is Sepolia

## ✅ Summary

- **Store Button**: ✅ Added to all charts, shows when data from API
- **Blockchain Info Panel**: ✅ Fully dynamic, auto-refreshes
- **Auto-Refresh**: ✅ After storage, on wallet change, on mount
- **Manual Refresh**: ✅ Refresh button available
- **Activity Logs**: ✅ Real-time logging of all operations

**Everything is working!** 🎉

