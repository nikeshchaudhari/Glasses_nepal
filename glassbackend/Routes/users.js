const express = require("express");
const route = express.Router();
const User = require("../Module/Users");
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
route.post("/add-user", async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password,10)
    const addUser = await new User({
        _id : new mongoose.Types.ObjectId(),
      fullName: req.body.fullName,
      email: req.body.email,
      password:hash,
    });
    const userData = await addUser.save();
    res.status(200).json({
     message :"Data add sucessfully",
     fullName:userData.fullName,
     email:userData.email
    });
  } catch (err) {
    console.log("Something Wrong");
    res.status(400).json({
      error: err,
    });
  }
});

module.exports = route;
