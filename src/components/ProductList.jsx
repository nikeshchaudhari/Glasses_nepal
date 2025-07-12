import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setItems(res.data.products);
        console.log(res);
      } catch (err) {
        console.error("error fetch data".err);
      }
    };
    dataFetch();
  }, []);
  return (
    <>

      <div>
        <h3 className="flex justify-center mt-5 font-bold text-[20px] mb-5">ALL PRODUCTS</h3>
      </div>
      <div className=" flex justify-center flex-wrap w-full m-4 bg-white p-2 ">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-1/2 sm:w-1/2 md:w-1/4 rounded p-4 shadow-xl "
          >
            <div className=" ">
              <img
                src={item.images}
                alt={item.title}
                className="w-full h-auto mb-2"
              />
            </div>
            <div>
              <h3 className="text-center font-bold">{item.title}</h3>
              <h4 className="text-justify">{item.description}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
