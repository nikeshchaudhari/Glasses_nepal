const express = require("express")
const route = express.Router();
const mongoose = require("mongoose")
const Order = require("../Module/Order")
const Auth = require("../middleware/Auth")
const jwt = require("jsonwebtoken")

// statusUpdate

  route.put("/order/:id/status", Auth, async (req, res) => {
    try {
      const user = await jwt.verify(
        req.headers.authorization.split(" ")[1],
        "jsonkey"
      );
      console.log(user);

      const orderId = req.params.id;
      const status = req.body.status;

      const updateStatus = await Order.findByIdAndUpdate(
        orderId,
        {
          status
        },
        {
          new: true,
        }
      );
      console.log(updateStatus);

      if (!updateStatus) {
        return res.status(404).json({ msg: "Order not found" });
      }

      res.status(200).json({
        msg: "sucessfully Update!",
        order: updateStatus,
      });
    } catch (err) {
      console.log("ERROR");
      res.status(500).json({
        error: err,
      });
    }
  });

  module.exports=route