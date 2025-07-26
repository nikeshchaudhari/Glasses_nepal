const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./Module/Users")
require("dotenv").config();
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected....");
  } catch (err) {
    console.log("Not connected Database...", err);
  }
};
dbConnect();

app.use(bodyParser.json());

app.use('/user',User);
module.exports = app;
