const mongoose = require("mongoose")
require('dotenv').config()

const connection = mongoose.connect(procss.env.MONGO_URL)

module.exports = connection;
