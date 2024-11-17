require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const transactionRoutes = require('./routes/transactionRoutes');
const listTransactions = require('./controller/listTransactions')
const cors=require('cors')

const app = express();
app.use(express.json());
app.use(cors())

mongoose.connect(process.env.MONGODB_URI)
   .then(() => console.log("Connected to MongoDB"))
   .catch(err => console.error("MongoDB connection error:", err));

app.use('/api', transactionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
