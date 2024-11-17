const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
   transactionId: String,
   title: String,
   description: String,
   price: Number,
   category: String,
   dateOfSale: Date,
   sold: Boolean
});

module.exports = mongoose.model('Transaction', transactionSchema);
