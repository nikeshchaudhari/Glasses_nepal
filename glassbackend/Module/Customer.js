const mongoose = require("mongoose")
const customerSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    fullName :{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
    password:{type:String,require:true},
    conformPassword:{type:String,require:true}
})

module.exports= mongoose.model("customer",customerSchema)