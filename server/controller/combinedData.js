const {
    getStatisticsHelper,
    getPriceRangeDataHelper,
    getCategoryCountHelper,
  } = require("./saleStats.js");
  
  async function getCombinedData(req, res) {
    try {
      const { month } = req.params;
      const monthNumber = getMonthNumber(month);
  
      if (monthNumber === -1) {
        return res.status(400).json({ error: "Invalid month" });
      }
  
      
      const [priceRangeData, categoryItemCount, statisticsData] =
        await Promise.all([
          getPriceRangeDataHelper(monthNumber),
          getCategoryCountHelper(monthNumber),
          getStatisticsHelper(monthNumber),
        ]);
  
      const combinedData = {
        priceRangeData,
        categoryItemCount,
        statisticsData,
      };
  
      res.json(combinedData);
    } catch (error) {
      console.error("Error fetching combined data:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
  
  
  function getMonthNumber(month) {
    const monthNames = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];
    return monthNames.indexOf(month.toLowerCase());
  }
  
  module.exports = { getCombinedData };