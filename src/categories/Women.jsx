import axios from "axios";
import React, { useEffect, useState } from "react";
import MainHeader from "../components/MainHeader";
import Navbar from "../components/Navbar";

const Women = () => {
  const [women, setWomen] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios(
        "https://dummyjson.com/products/category/groceries  "
      );
      console.log(res.data.products);

      setWomen(res.data.products);
    } catch (err) {
      console.log("Something error", err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <MainHeader />
      <Navbar />
      <div className="min-h-screen  overflow-x-hidden">
        <h3 className="text-center p-10 text-[24px] font-extrabold">Women</h3>
        <div className="flex flex-wrap p-10">
          {women.length > 0 ? (
            women.map((item, index) => (
              <div key={index} className="w-1/2 md:w-1/3 lg:w-1/5">
               <div className="bg-white shadow-2xl rounded-2xl m-2 cursor-pointer">
                 <img
                  src={
                    item.images && item.images.length > 0 ? item.images[0] : ""
                  }
                  alt=""
                  className=""
                />
               
               <div>
                <h3>{item.title}</h3>
               </div>
               </div>
              </div>
            ))
          ) : (
            <p>Loading....</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Women;
