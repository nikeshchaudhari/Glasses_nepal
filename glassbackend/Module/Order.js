const mongoose = require("mongoose");
const OrderSchema = new mongoose(
  {
    fullName: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: Number, require: true },
    address: { type: String, require: true },
    paymentMethos: {
      type: mongoose.Types.ObjectId,
      ref: "payment",
      require: true,
    },
  },
  { timestamps: true }
);
