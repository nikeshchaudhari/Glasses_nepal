import axios from "axios";
import React, { useEffect, useState } from "react";

const Mens = () => {
  const [men, setMen] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products/category/beauty");
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
    <div>
      <h3>Mens</h3>
      <div>
        {men.length > 0 ?(
men.map((item,index)=>(
  <div key={index}>
    <img src={item.images} alt="" />
  </div>
))
          
        ):(
          <p>Not Found</p>
        )}
      </div>
    </div>
    </>
  )
}

export default Mens;
