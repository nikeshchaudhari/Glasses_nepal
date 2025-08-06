const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./Routes/users");
const addProduct = require("./Routes/products");
const fileUpload = require("express-fileupload");
const cors = require("cors");
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
app.use(cors());

app.use(bodyParser.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/user", userRoute);
app.use("/product", addProduct);
module.exports = app;
