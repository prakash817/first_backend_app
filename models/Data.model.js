const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: { type: String, required: true }
  
});

const DataModel = mongoose.model("datacollection", dataSchema);

module.exports = DataModel;
