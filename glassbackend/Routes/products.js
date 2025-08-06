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

  const uploadPhoto = await cloudinary.uploader.upload(
    req.files.image.tempFilePath
  );
  console.log(uploadPhoto);
  
  const addProduct = await new Product({
    _id:new mongoose.Types.ObjectId,
    name:req.body.name,
    price:req.body.price,
    category:req.body.category,
    description:req.body.description,
    imageUrl:uploadPhoto.secure_url,
    imageId:uploadPhoto.public_id,

  })
  const uploadProduct = await addProduct.save();

  res.status(200).json({
    message: "Product added successfully",
    product:addProduct
  })
}
catch(err){
  console.error("Server Error")
  res.status(500).json({
    error:err
  })
  

}
});

module.exports = route;
