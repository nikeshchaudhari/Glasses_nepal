const express = require("express");
const route = express.Router();
const User = require("../Module/Users");
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
route.post("/add-user", async (req, res) => {
  try {
    // email check
    const user = await User.find({email:req.body.email})
    console.log(user);
    
    if(user.length >0){
        return res.status(500).json({
            msg:"Email already register... "
        })
    }
    // hash 
    const hash = await bcrypt.hash(req.body.password,10)
    const addUser = await new User({
        _id : new mongoose.Types.ObjectId(),
      fullName: req.body.fullName,
      email: req.body.email,
      password:hash,
    });
    // user Add & Save
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

// User View or Get
route.post("/login",async(req,res)=>{
    try{
        // find email
const user = User.find({email:req.body.email})
if(user === 0){
    return res.status(401).json({
        msg:"Email not register..."
    })
}

    }
    catch(err){
        console.log(err);
        res.status(400).json({
            error:err
        })
        
    }
})
module.exports = route;
