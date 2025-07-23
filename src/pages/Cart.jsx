import React, { useEffect, useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";

const Cart = ({ cartOpen, cartClose }) => {
  const [cartItem, setCartItem] = useState([]);

  const handleCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    //  console.log(cart);

    setCartItem(cart);
  };
  useEffect(() => {
    handleCart();
    window.addEventListener("cart", handleCart);
    return () => window.removeEventListener("cart", handleCart);
  }, []);
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
            ? "transition duration-500"
            : "translate-y-full md:translate-x-full transition duration-500"
        }`}
      >
        <div className="p-4 flex justify-between border-b  border-black/10 ">
          <TbTruckDelivery className=" text-5xl" />
          <button onClick={cartClose} className="text-4xl cursor-pointer">
            &times;
          </button>
        </div>
        <div>
          {cartItem.length === 0 ? (
            <p>No Cart ADD</p>
          ) : (
            cartItem.map((item, index) => (
              <div key={index} className="flex mt-2 ml-5">
                <div className=" mx-3 border rounded-lg">
                  <img src={item.images} alt="" className="w-20 " />
                </div>
                <h3 className="md:text-[15px] text-[12px] mt-3">{item.title}</h3>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
