const express = require("express");
const route = express.Router();
const User = require("../Module/Users");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
route.post("/add-user", async (req, res) => {
  try {
    // email check
    const user = await User.find({ email: req.body.email });
    // console.log(user[0]);

    if (user.length > 0) {
      return res.status(500).json({
        msg: "Email already register... ",
      });
    }
    // hash
    const hash = await bcrypt.hash(req.body.password, 10);
    const addUser = await new User({
      _id: new mongoose.Types.ObjectId(),
      fullName: req.body.fullName,
      email: req.body.email,
      password: hash,
    });
    // user Add & Save
    const userData = await addUser.save();
    res.status(200).json({
      message: "Data add sucessfully",
      fullName: userData.fullName,
      email: userData.email,
    });
    console.log(userData);
    
  } catch (err) {
    console.log("Something Wrong");
    res.status(400).json({
      error: err,
    });
  }
});

// User View or Get
route.post("/login", async (req, res) => {
  try {
    // find email
    const user = await User.find({ email: req.body.email });
    console.log(user[0]);

    if (user[0].length==0) {
      return res.status(401).json({
        msg: "User not found",
      });
    }

    // verify or conform password

    const isMatch = await bcrypt.compare(req.body.password, user[0].password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
   const token = await jwt.sign({
    uId:user[0]._id,
    fullName:user[0].fullName,
    email:user[0].email
   },"jsonkey",{
    expiresIn:"365d"
   })
   console.log(token);
   
   res.status(200).json({
    uId :user[0]._id,
    fullName:user[0].fullName,
    email:user[0].email,
    token:token
   })
  }
  catch (err) {
    console.log(err);
    res.status(400).json({
      error: err,
    });
  }
});

// Get Admin

route.get("/admin",async(req,res)=>{
  try{
    const admin = await User.countDocuments().select('fullName')
    // console.log(admin);
    res.status(200).json({
      admin:admin
    })
  }
  catch(err){
console.log("error");
res.status(500).json({
  error:err
})

  }
})



module.exports = route;
