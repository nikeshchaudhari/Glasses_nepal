const express = require("express");
const route = express.Router();
const mongoose = require("mongoose");
const Product = require("../Module/Product");
const cloudinary = require("cloudinary").v2;
const Auth = require("../middleware/Auth");
const jwt = require("jsonwebtoken");
require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.SECRET,
});

route.post("/add-product",Auth, async (req, res) => {
try{
  const user = await jwt.verify(req.headers.authorization.split(" ")[1],"jsonkey")
  console.log(user);
  
}
catch(err){

}
});

module.exports = route;
