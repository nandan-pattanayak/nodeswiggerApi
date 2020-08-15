// Load required packages
var mongoose = require("mongoose");

// Define our Campaign schema
var CampaignSchema = new mongoose.Schema({
  cmp_comp_id: Number,
});

// Export the Mongoose model
module.exports = mongoose.model("campaigns", CampaignSchema, "campaigns");
