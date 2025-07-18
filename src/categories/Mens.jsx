import axios from "axios";
import React, { useEffect, useState } from "react";

const Mens = () => {
  const [men, setMen] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        console.log(res.data.products);
        const menProduct =  res.data.products.filter(item=>{
          item.category.include("beauty")
        })

        setMen(menProduct);
      } catch (err) {
        console.log("Something Wrong", err);
      }
    };
    fetchProduct();
  }, []);
  return (
    <>
    <div>
      
    </div>
    </>
  )
}

export default Mens;
