const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  productName: String,
  price: Number,
  quantity: Number,
  customerName: String
});

module.exports = mongoose.model("Order", orderSchema);