/**
 * Test Script for SalesForecast Contract
 * 
 * Usage:
 * 1. Install: npm install ethers
 * 2. Update CONTRACT_ADDRESS and PRIVATE_KEY
 * 3. Run: node test-contract.js
 */

const { ethers } = require("ethers");

// ========== CONFIGURATION ==========
const CONTRACT_ADDRESS = "0x..."; // Your deployed contract address
const RPC_URL = "https://sepolia.infura.io/v3/YOUR_KEY"; // Or your RPC URL
const PRIVATE_KEY = "0x..."; // Your private key

// Contract ABI (minimal - only functions we need)
const CONTRACT_ABI = [
  "function storeForecast(string,string[],uint256[],string[],uint256[],uint256,uint256,uint256)",
  "function getForecastRecord(address,string) view returns (tuple(address user,string forecastType,uint256 timestamp,uint256 historicalCount,uint256 forecastCount,bool exists))",
  "function getHistoricalData(address,string) view returns (tuple(string month,uint256 value)[])",
  "function getForecastData(address,string) view returns (tuple(string month,uint256 value)[])",
  "function getMetrics(address,string) view returns (tuple(uint256 mape,uint256 mae,uint256 rmse))",
  "function getUserForecastTypes(address) view returns (string[])",
  "function forecastExists(address,string) view returns (bool)"
];

// ========== HELPER FUNCTIONS ==========

// Convert number to wei (multiply by 1e18)
function toWei(value) {
  return ethers.parseUnits(value.toString(), 18).toString();
}

// Convert MAPE percentage to stored format (multiply by 100)
function mapeToStored(mape) {
  return (mape * 100).toString();
}

// Convert wei back to number
function fromWei(value) {
  return parseFloat(ethers.formatUnits(value, 18));
}

// ========== TEST DATA ==========

const testData = {
  revenue: {
    forecastType: "revenue",
    historicalMonths: ["2024-01", "2024-02", "2024-03", "2024-04", "2024-05", "2024-06"],
    historicalValues: [
      toWei(10000),
      toWei(12000),
      toWei(15000),
      toWei(18000),
      toWei(20000),
      toWei(22000)
    ],
    forecastMonths: ["2024-07", "2024-08", "2024-09", "2024-10", "2024-11", "2024-12"],
    forecastValues: [
      toWei(25000),
      toWei(28000),
      toWei(30000),
      toWei(32000),
      toWei(35000),
      toWei(38000)
    ],
    mape: mapeToStored(5.2),  // 5.2%
    mae: toWei(500),
    rmse: toWei(750)
  },
  aov: {
    forecastType: "aov",
    historicalMonths: ["2024-01", "2024-02", "2024-03"],
    historicalValues: [toWei(50), toWei(55), toWei(60)],
    forecastMonths: ["2024-04", "2024-05", "2024-06"],
    forecastValues: [toWei(65), toWei(70), toWei(75)],
    mape: mapeToStored(3.2),
    mae: toWei(2),
    rmse: toWei(3)
  }
};

// ========== TEST FUNCTIONS ==========

async function testStoreForecast(contract, wallet, data) {
  console.log(`\n📝 Storing ${data.forecastType} forecast...`);
  
  try {
    const tx = await contract.storeForecast(
      data.forecastType,
      data.historicalMonths,
      data.historicalValues,
      data.forecastMonths,
      data.forecastValues,
      data.mape,
      data.mae,
      data.rmse
    );
    
    console.log(`   ⏳ Transaction sent: ${tx.hash}`);
    const receipt = await tx.wait();
    console.log(`   ✅ Confirmed in block: ${receipt.blockNumber}`);
    console.log(`   💰 Gas used: ${receipt.gasUsed.toString()}`);
    
    return true;
  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
    return false;
  }
}

async function testGetForecastRecord(contract, userAddress, forecastType) {
  console.log(`\n📖 Getting forecast record for ${forecastType}...`);
  
  try {
    const record = await contract.getForecastRecord(userAddress, forecastType);
    console.log(`   ✅ Record found:`);
    console.log(`      User: ${record.user}`);
    console.log(`      Type: ${record.forecastType}`);
    console.log(`      Timestamp: ${new Date(Number(record.timestamp) * 1000).toLocaleString()}`);
    console.log(`      Historical Count: ${record.historicalCount.toString()}`);
    console.log(`      Forecast Count: ${record.forecastCount.toString()}`);
    console.log(`      Exists: ${record.exists}`);
    return record;
  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
    return null;
  }
}

async function testGetHistoricalData(contract, userAddress, forecastType) {
  console.log(`\n📊 Getting historical data for ${forecastType}...`);
  
  try {
    const data = await contract.getHistoricalData(userAddress, forecastType);
    console.log(`   ✅ Found ${data.length} historical data points:`);
    data.forEach((point, i) => {
      const value = fromWei(point.value);
      console.log(`      ${i + 1}. ${point.month}: ${value.toLocaleString()}`);
    });
    return data;
  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
    return null;
  }
}

async function testGetForecastData(contract, userAddress, forecastType) {
  console.log(`\n🔮 Getting forecast data for ${forecastType}...`);
  
  try {
    const data = await contract.getForecastData(userAddress, forecastType);
    console.log(`   ✅ Found ${data.length} forecast data points:`);
    data.forEach((point, i) => {
      const value = fromWei(point.value);
      console.log(`      ${i + 1}. ${point.month}: ${value.toLocaleString()}`);
    });
    return data;
  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
    return null;
  }
}

async function testGetMetrics(contract, userAddress, forecastType) {
  console.log(`\n📈 Getting metrics for ${forecastType}...`);
  
  try {
    const metrics = await contract.getMetrics(userAddress, forecastType);
    const mape = Number(metrics.mape) / 100;
    const mae = fromWei(metrics.mae);
    const rmse = fromWei(metrics.rmse);
    
    console.log(`   ✅ Metrics:`);
    console.log(`      MAPE: ${mape}%`);
    console.log(`      MAE: ${mae.toLocaleString()}`);
    console.log(`      RMSE: ${rmse.toLocaleString()}`);
    return metrics;
  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
    return null;
  }
}

async function testGetUserForecastTypes(contract, userAddress) {
  console.log(`\n📋 Getting all forecast types for user...`);
  
  try {
    const types = await contract.getUserForecastTypes(userAddress);
    console.log(`   ✅ Found ${types.length} forecast types: ${types.join(", ")}`);
    return types;
  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
    return null;
  }
}

async function testForecastExists(contract, userAddress, forecastType) {
  console.log(`\n🔍 Checking if ${forecastType} forecast exists...`);
  
  try {
    const exists = await contract.forecastExists(userAddress, forecastType);
    console.log(`   ✅ Forecast exists: ${exists}`);
    return exists;
  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
    return false;
  }
}

// ========== MAIN TEST FUNCTION ==========

async function runTests() {
  console.log("🚀 Starting SalesForecast Contract Tests\n");
  console.log("=" .repeat(50));
  
  // Connect to provider and wallet
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
  const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, wallet);
  
  const userAddress = wallet.address;
  console.log(`📍 Using wallet: ${userAddress}\n`);
  
  // Test 1: Store Revenue Forecast
  await testStoreForecast(contract, wallet, testData.revenue);
  
  // Wait a bit for transaction to be mined
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Test 2: Check if exists
  await testForecastExists(contract, userAddress, "revenue");
  
  // Test 3: Get forecast record
  await testGetForecastRecord(contract, userAddress, "revenue");
  
  // Test 4: Get historical data
  await testGetHistoricalData(contract, userAddress, "revenue");
  
  // Test 5: Get forecast data
  await testGetForecastData(contract, userAddress, "revenue");
  
  // Test 6: Get metrics
  await testGetMetrics(contract, userAddress, "revenue");
  
  // Test 7: Get all forecast types
  await testGetUserForecastTypes(contract, userAddress);
  
  // Test 8: Store AOV forecast
  await testStoreForecast(contract, wallet, testData.aov);
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Test 9: Get all types again
  await testGetUserForecastTypes(contract, userAddress);
  
  console.log("\n" + "=".repeat(50));
  console.log("✅ All tests completed!");
}

// Run tests
if (require.main === module) {
  runTests().catch(console.error);
}

module.exports = {
  testData,
  toWei,
  mapeToStored,
  fromWei
};

