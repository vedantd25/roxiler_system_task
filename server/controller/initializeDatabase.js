const axios = require('axios');
const Transaction = require('../models/transaction');
require('dotenv').config();

async function fetchData(){
   try{
      
      const response = await axios.get(process.env.THIRD_PARTY_API_URL);
      return response.data;

   }catch (error) {
       console.error("Error during database initialization:", error.message);
    }
}

exports.initializeDatabase = async (req, res) => {
    try {
       console.log("Fetching data from third-party API...");
       const data = await fetchData();
 
       console.log(`Fetched ${data.length} records from the API.`);
 
       // Clear existing records in the database
       await Transaction.deleteMany({});
       console.log("Existing database records cleared.");
 
       // Insert new data into the database
       const insertedRecords = await Transaction.insertMany(data);
       console.log(`${insertedRecords.length} records successfully inserted into the database.`);
 
       res.status(200).json({ message: "Database initialized with seed data" });
    } catch (error) {
       console.error("Error during database initialization:", error.message);
       res.status(500).json({ error: "An error occurred while initializing the database." });
    }
 };