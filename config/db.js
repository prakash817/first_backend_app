const mongoose = require("mongoose")
require('dotenv').config()

const connection = mongoose.connect("mongodb+srv://priya:priya@cluster0.0hv6poq.mongodb.net/?retryWrites=true&w=majority")

module.exports = connection;
