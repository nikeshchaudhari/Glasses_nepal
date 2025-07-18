import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const ProductList = () => {
  const [items, setItems] = useState([]);
  const [minPrice,setMinPrice]= useState("")
  const [maxPrice,setMaxPrice]= useState("")

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setItems(res.data.products);
        console.log(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    dataFetch();
  }, []);
  const filterItems = minPrice === "" && maxPrice ==="" ? items : items.filter(item=>{
    const price = item.price;
    const min = minPrice ===""?0:parseInt(minPrice)
    const max = maxPrice ===""?Infinity:parseInt(maxPrice)
    return price >= min && price <=max 
  })

  return (
    <div className="min-h-screen overflow-x-hidden">
      <h3 className="flex justify-center mt-5 py-5 font-bold text-[24px] mb-5">
        ALL PRODUCTS
      </h3>
      <div className="flex h-min-screen  px-10">
        <Sidebar setMinPrice={setMinPrice} setMaxPrice={setMaxPrice}/>
        <div className="flex justify-center flex-wrap w-full px-4 bg-white p-4 mt-5">
          {filterItems.length > 0 ?(
            filterItems.map((item,index)=>(
                <div
              key={index}
              className="w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full trasnform hover:-translate-y-2 cursor-pointer transition duration-500">
                <div className="w-full h-[200px] overflow-hidden flex items-center justify-center ">
                  <img
                    src={
                      item.images && item.images.length > 0
                        ? item.images[0]
                        : ""
                    }
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-center font-bold text-[16px] mb-2">
                    {item.title}
                  </h3>
                  {/* <p className="text-justify text-sm text-gray-600">
                    {item.description}
                  </p> */}
                  <p className="mt-4 font-bold text-[#f85606]">
                    Rs.{item.price}
                  </p>
                </div>
              </div>
            </div>

            ))
          ):(
            <p>NO product Found </p>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default ProductList;
