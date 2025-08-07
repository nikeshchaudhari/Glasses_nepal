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
// Add Products
route.post("/add-product",Auth, async (req, res) => {
try{
  const user = await jwt.verify(req.headers.authorization.split(" ")[1],"jsonkey")
  console.log(user);
  
  const uploadPhoto = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,{
      folder:`products/${req.body.category}`
    }
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

// Get All Products

route.get("/all-product",Auth,async(req,res)=>{
  try{
    const user = await jwt.verify(req.headers.authorization.split(" ")[1],"jsonkey");
    console.log(user);
    const allProduct = await Product.find().sort({createdAt:-1});
    
    res.status(200).json({
      allProduct:allProduct
    })

  }
  catch(err){
    console.log("Somethinng wrong..");
    res.status(500).json({
      error:err
    })
    
  }
})

// delete product

route.delete("/delete/:id",Auth,async(req,res)=>{

  try{
    const user = await jwt.verify(req.headers.authorization.split(" ")[1],"jsonkey")
    const data = await Product.find({_id:req.params.id})
    console.log(data[0]);
    
    if(data[0].uId !=user._id){
      return res.status(401).json({
        error:"Invalid user...."
      })
    }

  }
  catch(err){
    console.log("Something Wrong..");
    res.status(500).json({
      error:err
    })
    

  }
})

module.exports = route;
