const express = require("express")
const route = express.Router()
const mongoose = require("mongoose")
const Product = require("../Module/Product")
const cloudinary = require("cloudinary").v2
require("dotenv").config()
cloudinary.config({
    cloud_name :process.env.CLOUD_NAME,
    api_key :process.env.API_KEY,
    api_secret:process.env.SECRET
});

route.post("/add-product",async(req,res)=>{
    
})



module.exports = route;