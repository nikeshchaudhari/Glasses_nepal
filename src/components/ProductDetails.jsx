import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainHeader from "./MainHeader";
import Navbar from "./Navbar";

const ProductDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        console.log(res.data);

        setItem(res.data);
      } catch (err) {
        console.log("Something errore", err);
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
  return (
    <>
      <MainHeader />
      <Navbar />
      <div className="flex mt-15">
        <div className=" w-[900px] lg:w-[800px] h-[250px] lg:h-[500px] shadow-2xl mx-10">
          <img src={item.images} alt="" className="w-[500px]" />
        </div>
        <div className="flex flex-col justify-start gap-3 w-[800px]">
          <h1 className="text-2xl font-bold">{item.title}</h1>
         
          <p className="font-bold">Rs. {item.price}</p>
           <p className="text-justify pr-10">{item.description}</p>
          <button className="bg-black text-white text-[10px] md:text-[15px] w-20 md:w-[20vw] py-3 md:p-3 cursor-pointer"
            onClick={() => {
            //   const cart = localStorage.getItem("cart") || [];
            //   cart.push(item);
            //   localStorage.setItem("cart", JSON.stringify(cart));
            //   alert("Add to cart")

            const cart = localStorage.getItem("cart") || []
            cart.push(item);
            localStorage.setItem("cart",JSON.stringify(cart))
            console.log("Add to cart");
            
            }}
          >
            Add Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
