import React, { useState } from "react";

const Cart = ({ cartOpen, cartClose }) => {
  const [cartItem, setCartItem] = useState([]);
  return (
    <>
    <div
      className={`fixed top-0 right-0 h-full w-full bg-black opacity-50 z-100 ${cartOpen ?"block":"hidden"} `}
      onClick={cartClose}
    ></div>
    {/* Drawer Cart */}
    <div className="fixed top-0 right-0 w-[40%] bg-white h-full">
        <div>
            <h2>My cart</h2>
            <button onClick={cartClose}>&times;</button>
        </div>
    </div>

    </>
  );
};

export default Cart;
