import React, { useEffect, useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

const Cart = ({ cartOpen, cartClose }) => {
  const [cartItem, setCartItem] = useState([]);

  const cartHandle = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartValid = cart.filter((i) => i && i.images);
    setCartItem(cartValid);
  };

  useEffect(() => {
    cartHandle();
    window.addEventListener("cart", cartHandle);
    return () => window.removeEventListener("cart", cartHandle);
  }, []);

  // Update Cart

  const updateCart = (id, change) => {
    const update = cartItem
      .map((item) => {
        if (item.id === id) {
          const currentQty = Number(item.quantity) || 1;
          const newQty = currentQty + change;
          if (newQty <= 0) return null;

          const qty = Math.min(10, newQty);
          return { ...item, quantity: qty };
        }
        return item;
      })
      .filter(Boolean);

    localStorage.setItem("cart", JSON.stringify(update));
    setCartItem(update);
    window.dispatchEvent(new Event("cart"));
  };
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
            <p className="text-center mt-50">No Cart ADD</p>
          ) : (
            cartItem.map((item) => (
              <div key={item.id} className="flex mt-2 ml-5">
                <div className=" w-20 md:w-25 mx-3 border rounded-lg">
                  <img src={item.images?.[0]} alt="" className=" md:w-20 " />
                </div>
                <div>
                  <h3 className="md:text-[15px] text-[12px] mt-3">
                    {item.title}
                  </h3>

                  <div className="flex gap-5 mt-5 ml-4 w-full items-center  ">
                    <div
                      className="bg-black/35 text-white cursor-pointer p-3"
                      onClick={() => updateCart(item.id, -1)}
                    >
                      <FaMinus />
                    </div>
                    <span className="text-black">{item.quantity}</span>
                    <div
                      className="bg-black/35 text-white cursor-pointer p-3 "
                      onClick={() => updateCart(item.id, 1)}
                    >
                      <FaPlus />
                    </div>
                    <p className=" md:ml-30 ">
                      Price :{(Number(item.price || 0) * Number(item.quantity || 1)).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default Cart;
