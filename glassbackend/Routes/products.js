const express = require("express");
const route = express.Router();
const mongoose = require("mongoose");
const Product = require("../Module/Product");
const Category = require("../Module/Category");
const Order = require("../Module/Order");
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
route.post("/add-product", Auth, async (req, res) => {
  try {
    const user = await jwt.verify(
      req.headers.authorization.split(" ")[1],
      "jsonkey"
    );
    console.log(user);


    const category = await Category.findById(req.body.category)
    if(!category){
      return res.status(404).json({
        msg:"Not found category"
      })
    }
    const uploadPhoto = await cloudinary.uploader.upload(
      req.files.image.tempFilePath,
      {
        folder: `products/${category.name}`,
      }
    );
    console.log(uploadPhoto);
    const addProduct = await new Product({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      description: req.body.description,
      imageUrl: uploadPhoto.secure_url,
      imageId: uploadPhoto.public_id,
    });
    const uploadProduct = await addProduct.save();

    res.status(200).json({
      message: "Product added successfully",
      product: addProduct,
    });
  } catch (err) {
    console.error("Server Error");
    res.status(500).json({
      error: err,
    });
  }
});

// Get All Products

route.get("/all-product", Auth, async (req, res) => {
  try {
    const user = await jwt.verify(
      req.headers.authorization.split(" ")[1],
      "jsonkey"
    );
    console.log(user);
    const allProduct = await Product.find()
      .populate("category", "name")
      .sort({ createdAt: -1 });

    res.status(200).json({
      allProduct: allProduct,
    });
  } catch (err) {
    console.log("Somethinng wrong..");
    res.status(500).json({
      error: err,
    });
  }
});
// get Product by id

route.get("/all-product/:id", Auth, async (req, res) => {
  try {
    const user = await jwt.verify(
      req.headers.authorization.split(" ")[1],
      "jsonkey"
    );

    const findProduct = await Product.findById(req.params.id);

    if (!findProduct) {
      return res.status(404).json({
        msg: "Product not found",
      });
    }
    console.log(findProduct);

    res.status(200).json({
      findData: findProduct,
    });
  } catch (err) {
    console.log("Error");
    res.status(500).json({
      error: err,
    });
  }
});

// CategoryPost

route.post("/category", Auth, async (req, res) => {
  try {
    const user = await jwt.verify(
      req.headers.authorization.split(" ")[1],
      "jsonkey"
    );

    const addCategory = await new Category({
      name: req.body.name,
    });
    await addCategory.save();
    res.status(200).json({
      category: "name",
    });
  } catch (err) {
    console.log("Not add Category");
    res.status(500).json({
      error: err,
    });
  }
});

// Find Category

route.get("/category", Auth, async (req, res) => {
  try {
    const user = await jwt.verify(
      req.headers.authorization.split(" ")[1],
      "jsonkey"
    );

    const findCategory = await Category.find();
    console.log(findCategory);

    res.status(200).json({
      category: findCategory,
    });
  } catch (err) {
    console.log("Not find Category");
    res.status(500).json({
      error: err,
    });
  }
});
// delete product

route.delete("/delete/:id", Auth, async (req, res) => {
  try {
    const user = await jwt.verify(
      req.headers.authorization.split(" ")[1],
      "jsonkey"
    );
    const data = await Product.find({ _id: req.params.id });
    console.log(data[0]);

    if (data[0].uId != user._id) {
      return res.status(401).json({
        error: "Invalid user....",
      });
    }

    await cloudinary.uploader.destroy(data[0].imageId);
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      deleteData: "dataDelete ",
    });
  } catch (err) {
    console.log("Something Wrong..");
    res.status(500).json({
      error: err,
    });
  }
});
// userOrder
route.post("/order", Auth, async (req, res) => {
  try {
    const user = await jwt.verify(
      req.headers.authorization.split(" ")[1],
      "jsonkey"
    );

    const orderAdd = await new Order({
      userInfo: req.body.userInfo,
      products: req.body.products,
      payment: req.body.payment,
      totalAmount: req.body.totalAmount,
    });
    const dataSave = await orderAdd.save();
    res.status(200).json({
      message: "Order placed successfully",
      dataSave,
    });
  } catch (err) {
    console.log("Somethin is wrong");
    res.status(500).json({
      error: err,
    });
  }
});

// Order Find
route.get("/all-orders",Auth,async(req,res)=>{
  try{
    const user = await jwt.verify(req.headers.authorization.split(" ")[1],"jsonkey")
    const order = await Order.find().populate("products.prodictId","name price").sort({createdAt:-1})

    res.status(200).json({
      order:order
    })

  }
  catch(err){
    console.log("Error");
    res.status(500).json({
      error:err
    })
    

  }
})
module.exports = route;
