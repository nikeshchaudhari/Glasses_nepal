import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainHeader from "./MainHeader";
import Navbar from "./Navbar";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [cartItem, setCartItem] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        console.log(res.data);

        setItem(res.data);
      } catch (err) {
        console.log("Something error", err);
      }
    };
    fetchData();
  }, [id]);

  if (!item)
    return (
      <p className="text-center flex justify-center items-center h-screen">
        Loading.......
      </p>
    );
  const handleCart = () => {
    const cart = localStorage.getItem("cart") || [];
    const findItem = cart.findIndex((pro) => pro.id === item.id);
    if (findItem !== -1) {
      cart[findItem].cartItem += 1;
    } else {
      cart.push({ ...item, cartItem: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cart"));
    console.log("Add to cart");
  };

  return (
    <>
      <MainHeader />
      <Navbar />
      <div className="md:flex lg:mt-15 w-full overflow-hidden">
        <div className="flex justify-center w-[400px] md:w-[700px] h-[250px] md:h-[450px] shadow-2xl lg:mx-[50px] sm:mx-[190px] md:mx-[5px] mx-1 mt-10 md:mt-0">
          <img src={item.images} alt="" className="lg:w-[500px]  " />
        </div>
        <div className="flex flex-col md:justify-start gap-3 md:w-[500px] mx-10 md:mx-5 lg:mx-0 w-[400px] mt-10">
          <h1 className="text-2xl font-bold">{item.title}</h1>

          <p className="font-bold">Rs. {item.price}</p>
          <p className=" pr-10 ">{item.description}</p>
          <div className="flex md:justify-around items-center w-120 md:gap-5">
            <div className="flex gap-5 items-center">
              <div
                className=" shadow-2xl p-5 cursor-pointer hover:bg-slate-50 hover:shadow-lg transition hover:duration-500"
                onClick={() => setCartItem((prev) => Math.max(prev - 1, 1))}
              >
                <FaMinus />
              </div>
              <div>
                <span>{cartItem}</span>{" "}
              </div>
              <div
                className=" shadow-2xl p-5 cursor-pointer hover:bg-slate-50 hover:shadow-lg transition hover:duration-500"
                onClick={() => setCartItem((add) => Math.min(add + 1, 10))}
              >
                {" "}
                <FaPlus />
              </div>
            </div>
            <button
              className="bg-black text-white text-[10px] md:text-[15px] w-20 md:w-[20vw] py-3 md:p-3 cursor-pointer"
              onClick={() => {
          

                const cart = JSON.parse(localStorage.getItem("cart")) || [];

                // Check if product already exists in cart
                const alreadyInCart = cart.find((prod) => prod.id === item.id);

                if (!alreadyInCart) {
                  // If not already 
                  cart.push({...item,quantity:cartItem});
                  localStorage.setItem("cart", JSON.stringify(cart));
                  window.dispatchEvent(new Event("cart"));
                  console.log("Added to cart");
                } else {
                  // Already in cart
                  alert("This product is already in your cart.");
                }
              }}
            >
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
