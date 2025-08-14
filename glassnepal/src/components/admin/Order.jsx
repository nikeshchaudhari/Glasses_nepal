import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useParams } from "react-router-dom";

const Order = () => {
  const [order, setOrder] = useState([]);
  // const { orderId } = useParams();
  const [status, setStatus] = useState("pending");
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
    };
    getOrder();
  }, []);

  const changeStatus = async (orderId,newStatus) => {
    // setStatus(newStatus);
    try {
      const res = await axios.put(`http://localhost:4080/status/order/${orderId}/status`,{
        status:newStatus
      },{
        headers:{
          Authorization:"Bearer "+localStorage.getItem("token")
        }
      });


      setOrder((prev)=>
      prev.map((order)=>(
       order._id===orderId ?{...order,newStatus}:order
       ) ));
    } catch (err) {
      onsole.error("Failed to update status", err);
    }
  };
  return (
    <>
      <Header />
      <div className="w-screen md:w-full px-3 md:px-[400px] md:py-5">
        <h1 className="text-center text-[24px] md:text-[30px] font-bold mt-5 mx-auto">
          User Order
        </h1>
        <table className="w-[50vw] ">
          <thead>
            <tr className="bg-slate-400 text-white border">
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
              <tr key={order._id} className="even:bg-gray-300 odd:bg-white">
                <td className="border p-2">{order.userInfo.fullName}</td>
                <td className="border p-2">{order.userInfo.email}</td>
                <td className="border p-2">
                  {order.products.map((p) => p.name).join(" , ")}
                </td>
                <td className="border p-2">{order.payment}</td>
                <td className="border p-2">
                  Rs.
                  {order.products.reduce((sum, item) => {
                    return sum + item.price * item.quantity;
                  }, 0)}
                </td>
                <td className="border p-2">{order.status}</td>
                <td className="border p-2">
                  <select
                    name=""
                    id=""
                    className="border p-2 rounded bg-slate-700 text-white cursor-pointer"
                    onChange={(e)=>changeStatus(order._id, e.target.value)}
                  >
                    <option value="">--select option--</option>
                    <option value="pending" className="cursor-pointer">
                      Pending
                    </option>
                    <option value="processing">Processing</option>
                    <option value="confirm">Confirm</option>
                    <option value="delivery">Delivered</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Order;
