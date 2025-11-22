// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title SalesForecast
 * @dev Simple smart contract to store and retrieve sales forecasting data
 *
 * Simplified structure:
 * - Store historical and forecast data as simple arrays
 * - Store metrics separately
 * - Easy to integrate with frontend
 */
contract SalesForecast {
    // Simple data point structure
    struct ForecastData {
        string month;      // Format: "YYYY-MM"
        uint256 value;     // Value multiplied by 1e18 (to handle decimals)
    }

    // Forecast record structure
    struct ForecastRecord {
        address user;              // User address
        string forecastType;      // "revenue", "aov", "orders"
        uint256 timestamp;         // When stored
        uint256 historicalCount;  // Number of historical points
        uint256 forecastCount;     // Number of forecast points
        bool exists;               // Whether record exists
    }

    // Metrics structure
    struct Metrics {
        uint256 mape;  // MAPE * 100 (e.g., 5.2% = 520)
        uint256 mae;   // MAE * 1e18
        uint256 rmse;  // RMSE * 1e18
    }

    // Storage mappings
    mapping(address => mapping(string => ForecastRecord)) public records;
    mapping(address => mapping(string => ForecastData[])) public historicalData;
    mapping(address => mapping(string => ForecastData[])) public forecastData;
    mapping(address => mapping(string => Metrics)) public metrics;
    mapping(address => string[]) public userForecastTypes;

    // Events
    event ForecastStored(
        address indexed user,
        string indexed forecastType,
        uint256 timestamp
    );

    /**
     * @dev Store forecast data (simplified - stores in batches to avoid stack issues)
     * @param forecastType Type: "revenue", "aov", or "orders"
     * @param historicalMonths Array of historical month strings
     * @param historicalValues Array of historical values (multiply by 1e18)
     * @param forecastMonths Array of forecast month strings
     * @param forecastValues Array of forecast values (multiply by 1e18)
     * @param mape MAPE * 100
     * @param mae MAE * 1e18
     * @param rmse RMSE * 1e18
     */
    function storeForecast(
        string memory forecastType,
        string[] memory historicalMonths,
        uint256[] memory historicalValues,
        string[] memory forecastMonths,
        uint256[] memory forecastValues,
        uint256 mape,
        uint256 mae,
        uint256 rmse
    ) public {
        require(
            historicalMonths.length == historicalValues.length,
            "Historical arrays length mismatch"
        );
        require(
            forecastMonths.length == forecastValues.length,
            "Forecast arrays length mismatch"
        );

        address user = msg.sender;

        // Check if new forecast type
        if (!records[user][forecastType].exists) {
            userForecastTypes[user].push(forecastType);
        }

        // Store record metadata
        records[user][forecastType] = ForecastRecord({
            user: user,
            forecastType: forecastType,
            timestamp: block.timestamp,
            historicalCount: historicalMonths.length,
            forecastCount: forecastMonths.length,
            exists: true
        });

        // Clear existing data
        delete historicalData[user][forecastType];
        delete forecastData[user][forecastType];

        // Store historical data
        for (uint256 i = 0; i < historicalMonths.length; i++) {
            historicalData[user][forecastType].push(ForecastData({
                month: historicalMonths[i],
                value: historicalValues[i]
            }));
        }

        // Store forecast data
        for (uint256 i = 0; i < forecastMonths.length; i++) {
            forecastData[user][forecastType].push(ForecastData({
                month: forecastMonths[i],
                value: forecastValues[i]
            }));
        }

        // Store metrics
        metrics[user][forecastType] = Metrics({
            mape: mape,
            mae: mae,
            rmse: rmse
        });

        emit ForecastStored(user, forecastType, block.timestamp);
    }

    /**
     * @dev Get forecast record metadata
     * @param userAddress User address
     * @param forecastType Forecast type
     * @return ForecastRecord metadata
     */
    function getForecastRecord(
        address userAddress,
        string memory forecastType
    ) public view returns (ForecastRecord memory) {
        require(
            records[userAddress][forecastType].exists,
            "Forecast does not exist"
        );
        return records[userAddress][forecastType];
    }

    /**
     * @dev Get historical data
     * @param userAddress User address
     * @param forecastType Forecast type
     * @return Array of ForecastData
     */
    function getHistoricalData(
        address userAddress,
        string memory forecastType
    ) public view returns (ForecastData[] memory) {
        require(
            records[userAddress][forecastType].exists,
            "Forecast does not exist"
        );
        return historicalData[userAddress][forecastType];
    }

    /**
     * @dev Get forecast data
     * @param userAddress User address
     * @param forecastType Forecast type
     * @return Array of ForecastData
     */
    function getForecastData(
        address userAddress,
        string memory forecastType
    ) public view returns (ForecastData[] memory) {
        require(
            records[userAddress][forecastType].exists,
            "Forecast does not exist"
        );
        return forecastData[userAddress][forecastType];
    }

    /**
     * @dev Get forecast metrics
     * @param userAddress User address
     * @param forecastType Forecast type
     * @return Metrics struct
     */
    function getMetrics(
        address userAddress,
        string memory forecastType
    ) public view returns (Metrics memory) {
        require(
            records[userAddress][forecastType].exists,
            "Forecast does not exist"
        );
        return metrics[userAddress][forecastType];
    }

    /**
     * @dev Get all forecast types for a user
     * @param userAddress User address
     * @return Array of forecast type strings
     */
    function getUserForecastTypes(
        address userAddress
    ) public view returns (string[] memory) {
        return userForecastTypes[userAddress];
    }

    /**
     * @dev Check if forecast exists
     * @param userAddress User address
     * @param forecastType Forecast type
     * @return bool True if exists
     */
    function forecastExists(
        address userAddress,
        string memory forecastType
    ) public view returns (bool) {
        return records[userAddress][forecastType].exists;
    }
}
