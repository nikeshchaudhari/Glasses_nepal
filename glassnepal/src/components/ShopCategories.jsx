import React from "react";
import { Link } from "react-router-dom";

const image = [
  {
    id: 0,
    name:"Mens",
    image:
      "https://images.pexels.com/photos/19719795/pexels-photo-19719795.jpeg",
    link: "/categories/men",
  },
  {
    id: 1,
    name:"Womens",
    image:
      "https://t4.ftcdn.net/jpg/05/30/66/13/360_F_530661385_Suo3ujSOX6nTDDc6QWYLZrbz7Dk0nW1W.jpg",
    link: "/categories/women",
  },
  {
    id: 2,
    name:"Sunglasses",
    image:
      "https://images.pexels.com/photos/29538710/pexels-photo-29538710.jpeg",
    link: "/categories/sunglass",
  },
  {
    id: 3,
    name:"Sportglasses",
    image: "https://images.pexels.com/photos/5807795/pexels-photo-5807795.jpeg",
    link: "/categories/sportglass",
  },
];

const ShopCategories = () => {
  return (
    <div className="bg-[#e8e8e8] min-h-screen ">
      <h1 className="text-center p-10  text-[20px] lg:text-[30px] font-bold ">
        SHOP BY CATEGORY
      </h1>
      <div className="w-full grid gap-3 grid-cols-2 lg:grid-cols-4 px-10 ">
        {image.map((items, index) => (
          <div key={index} className=" rounded-xl">
            <Link to={items.link}>
            <div className="relative  w-full h-[150px] lg:w-[300px]">
              <h2 className=" hidden lg:block absolute lg:top-40 lg:left-25 lg:bg-black bg-black lg:p-2 lg:opacity-60 lg:rounded-br-4xl  top-16 text-[10px] lg:text-[20px] text-white font-extrabold opacity-50 transition transform hover:translate-y-5 duration-1000">{items.name}</h2>
           
              <img
                src={items.image}
                alt={items.id}
                className=" opacity-100 rounded-xl w-full h-[150px] lg:h-[400px] transform transition  "
              />
               </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCategories;
