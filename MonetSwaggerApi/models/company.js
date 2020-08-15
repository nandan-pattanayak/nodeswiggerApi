// Load required packages
var mongoose = require("mongoose");

// Define our Company schema
var CompanySchema = new mongoose.Schema({
  comp_id: Number,
  comp_name: String,
  comp_contant: Number,
  email: String,
});

// Export the Mongoose model
module.exports = mongoose.model("companies", CompanySchema, "companies");
