import React, { useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";

const Cart = ({ cartOpen, cartClose }) => {
  const [cartItem, setCartItem] = useState([]);
  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-full bg-black opacity-50 z-40 ${
          cartOpen ? "block" : "hidden"
        } `}
        onClick={cartClose}
      ></div>
      {/* Drawer Cart */}
      <div
        className={`fixed top-50 right-0 w-full md:top-0 md:right-0 md:w-[40%] bg-white h-full z-50 ${
          cartOpen
            ? "transition duration-700"
            : "sm:translate-y-full md:translate-x-full transition duration-500"
        }`}
      >
        <div className="p-4 flex justify-between border-b  border-black/10 ">
          <TbTruckDelivery className=" text-5xl" />
          <button onClick={cartClose} className="text-4xl cursor-pointer">
            &times;
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
