import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MainHeader from "../components/MainHeader";
const Mens = () => {
  const [men, setMen] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          "https://dummyjson.com/products/category/beauty"
        );
        console.log(res.data.products);
        // const menProduct =  res.data.products.filter(item=>{
        //   item.category.include("beauty")
        // })

        setMen(res.data.products);
      } catch (err) {
        console.log("Something Wrong", err);
      }
    };
    fetchProduct();
  }, []);
  return (
    <>
      <MainHeader />
      <Navbar />
      <div className="min-h-screen  overflow-x-hidden ">
        <h3 className="flex justify-center mt-5 py-5 font-bold text-[24px] mb-5">
          Mens
        </h3>
        <div className="flex p-10 justify-start flex-wrap">
          {men.length > 0 ? (
            men.map((item, index) => (
              <div key={index} className="w-1/2 md:w-1/3 lg:w-1/5">
                <div  className="bg-white shadow-2xl m-2 rounded-2xl">
                <div className="">
                <img src={item.images} alt="" />

                </div>
                <h3 className="font-semibold text-center">{item.title}</h3>
              </div>
              </div>
            ))
          ) : (
            <p>Not Found</p>
          )}
          
        </div>
      </div>
    </>
  );
};

export default Mens;
