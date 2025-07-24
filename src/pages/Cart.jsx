import React, { useEffect, useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

const Cart = ({ cartOpen, cartClose }) => {
  const [cartItem, setCartItem] = useState([]);

  const handleCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    //  console.log(cart);

    // setCartItem(cart);
    const validCart = cart.filter((item) => item && item.images);
    setCartItem(validCart);
  };
  useEffect(() => {
    handleCart();
    window.addEventListener("cart", handleCart);
    return () => window.removeEventListener("cart", handleCart);
  }, []);

  const quantityUpdate = (id, change) => {
    const update = cartItem.map((item) => {
    if(item===id){
      const qty = Math.max(1,item.quantity+change)
      return{...item,quantity:qty}
    }
    });
    localStorage.setItem("cart", JSON.stringify(update));
    setCartItem(update);
    window.dispatchEvent(new Event("cart"));
  };

  const getTotal = () => {
    return cartItem.reduce((sum, item) => sum + item.price * item.quantity, 0);
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
                <div className=" mx-3 border rounded-lg">
                  <img src={item.images?.[0]} alt="" className="w-20 " />
                </div>
                <div>
                  <h3 className="md:text-[15px] text-[12px] mt-3">
                    {item.title}
                  </h3>

                  <div className="flex gap-5 mt-5 ml-4 w-full items-center  ">
                    <div
                      className="bg-black/35 text-white cursor-pointer p-3"
                      onClick={() => quantityUpdate(item.id, -1)}
                    >
                      <FaMinus />
                    </div>
                    <span className="text-black bg-red-700">{item.quantity}</span>
                    <div
                      className="bg-black/35 text-white cursor-pointer p-3"
                      onClick={() => quantityUpdate(item.id, 1)}
                    >
                      <FaPlus />
                    </div>
                    <p className="ml-30">Price : {item.price}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
         {cartItem.length > 0 && (
          <div className="p-4 text-right font-semibold">
            Subtotal: Rs. {getTotal()}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
