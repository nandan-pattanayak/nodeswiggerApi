// Load required packages
var mongoose = require("mongoose");

// Define our Content schema
var ContentSchema = new mongoose.Schema({
  cnt_comp_id: Number,
});

// Export the Mongoose model
module.exports = mongoose.model("contents", ContentSchema, "contents");
