const mongoose = require ("mongoose")
const productSchema = new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    price:{type:Number,required:true},
    category:{
        type:mongoose.Types.ObjectId,
        ref:"Category",
        required:true
    },
    description:{type:String,required:true},
    imageId:{type:String},
    imageUrl:{type:String},
    
},{timestamps:true});

module.exports = mongoose.model("product",productSchema)