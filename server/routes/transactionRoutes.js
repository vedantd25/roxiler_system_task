const express = require('express');
const router = express.Router();
const {initializeDatabase} = require ('../controller/initializeDatabase')
const {listTransactions}=require('../controller/listTransactions')
const {
    getStatisticsHelper,
    getPriceRangeDataHelper,
    getCategoryCountHelper,
  } = require("../controller/saleStats");
const { getCombinedData } = require("../controller/combinedData");

router.get('/initialize', initializeDatabase);
router.get('/transactions',listTransactions);

router.get("/statistics/:month", async (req, res) => {
    try {
      const { month } = req.params;
      const monthNumber = getMonthNumber(month);
  
      if (monthNumber === -1) {
        return res.status(400).json({ error: "Invalid month" });
      }
  
      const statistics = await getStatisticsHelper(monthNumber);
      res.json(statistics);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
  router.get("/sales/price-range/:month", async (req, res) => {
    try {
      const { month } = req.params;
      const monthNumber = getMonthNumber(month);
  
      if (monthNumber === -1) {
        return res.status(400).json({ error: "Invalid month" });
      }
  
      const priceRangeData = await getPriceRangeDataHelper(monthNumber);
      res.json(priceRangeData);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
  router.get("/sales/category-items/:month", async (req, res) => {
    try {
      const { month } = req.params;
      const monthNumber = getMonthNumber(month);
  
      if (monthNumber === -1) {
        return res.status(400).json({ error: "Invalid month" });
      }
  
      const categoryCount = await getCategoryCountHelper(monthNumber);
      res.json(categoryCount);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
  router.get("/sales/combined-data/:month", getCombinedData);
  
module.exports = router;

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