const { default: mongoose } = require("mongoose")
const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    _id : mongoose.Types.ObjectId,
    fullName:{type:String,require:true},
    email :{type:String,require:true},
    password:{type:String,require:true},

})

module.exports=  mongoose.model("user",userSchema);