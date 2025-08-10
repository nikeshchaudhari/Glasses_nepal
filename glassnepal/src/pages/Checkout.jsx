import axios from "axios";
import React, { useState } from "react";

const Checkout = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userinfo = {
      name: fullName,
      email: email,
      phone: phone,
    };

    const products = cart.map((item) => ({
      productId: item._id,
      name: item.name,
      price: item.price,
      qantity: item.quantity,
    }));

    const totalAmount = products.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    try {
      const orderData = {
        userinfo,
        products,
        payment,
        totalAmount,
      };
      const res = await axios.post(
        "http://localhost:4080/product/order",
        orderData,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
    } catch (err) {}
  };
  return (
    <>
      <div className=" w-full h-full">
        <div className="flex w-120 border rounded-lg mx-auto items-center  m-4">
          <form
            className="flex flex-col  w-120  p-10  gap-2  "
            onSubmit={handleSubmit}
          >
            <h3 className="text-center text-[20px] font-bold">Checkout</h3>
            <label htmlFor="fullname" className="">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter Your name"
              className="border border-black/30 outline-none p-1 rounded"
              value={fullName}
              onChange={(e) => setFullName(e.target.fullName)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-black/30 outline-none p-1 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              placeholder="Enter your phonenumber"
              maxLength="10"
              className="border border-black/30 outline-none p-1 rounded"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="address">Address</label>
            <input
              type="text"
              placeholder="Enter full address"
              className="border border-black/30 outline-none p-1 rounded"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label htmlFor="address">Payment Method</label>
            <select
              name=""
              id=""
              className="border border-black/30 outline-none p-1 rounded"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
            >
              <option value="">--Select Option--</option>
              <option value="cash on delivery">Cash On Deleivery</option>
              <option value="onlinepay">Online Pay</option>
            </select>
            <button
              type="submit"
              className="bg-green-800 p-2 text-white rounded cursor-pointer hover:bg-green-950 transition  hover:duration-700"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
