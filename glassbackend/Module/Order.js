const mongoose = require("mongoose");
const OrderSchema = new mongoose(
  {
   userInfo:{
     fullName: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: Number, require: true },
    address: { type: String, require: true },

   },
   products:{
      productId:{type:mongoose.Types.ObjectId,ref:"Product"},
      name:String,
      price:Number,
      quantity:Number
   },
    paymentMethos: {
    },
    totalAmount:{type:String,require:true},
    orderDate:{type:Date,default:Date.now},
    status:{type:String,default:"Pending"}
  },
  { timestamps: true }
);
