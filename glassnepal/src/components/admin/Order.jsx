import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

const Order = () => {
  const [order, setOrder] = useState([]);
  // const [cart, setCart] = useState([]);
  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4080/product/all-orders",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setOrder(res.data.order);
      } catch (err) {
        console.log("Error");
      }

      // try {
      //   const storeCart = await JSON.parse(localStorage.getItem("cart") || []);
      //   setCart(storeCart);
      // } catch (err) {
      //   console.log("error");
      // }
    };
    getOrder();
  }, []);

  const totalAmount = cart.reduce((sum,item)=>{
    return sum+(item.price*item.quantity)
  },0 )
  return (
    <>
      <Header />
      <div className="w-screen md:w-full px-3 md:px-[400px] md:py-5">
        <h1 className="text-center text-[24px] md:text-[30px] font-bold mt-5 mx-auto">
          User Order
        </h1>
        <table className="w-[50vw] border border-gray-300">
          <thead>
            <tr>
              <th className="border p-2">Customer Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Product Name</th>
              <th className="border p-2">Payment</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Change Status</th>
            </tr>
          </thead>
          <tbody>
            {order.map((order) => (
              <tr key={order._id}>
                <td className="border p-2">{order.userInfo.fullName}</td>
                <td className="border p-2">{order.userInfo.email}</td>
                <td className="border p-2">
                  {order.products.map((p) => p.name).join(" , ")}
                </td>
                <td className="border p-2">{order.payment}</td>
                <td className="border p-2">Rs.{order.products.reduce((sum,item)=>{
                  return sum+(item.price*item.quantity)
                },0)}</td>
                <td className="border p-2">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Order;
