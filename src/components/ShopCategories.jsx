import React from "react";
import { Link } from "react-router-dom";

const image = [
  {
    id: 0,
    image:
      "https://images.pexels.com/photos/19719795/pexels-photo-19719795.jpeg",
    link: "/categories/men",
  },
  {
    id: 1,
    image:
      "https://t4.ftcdn.net/jpg/05/30/66/13/360_F_530661385_Suo3ujSOX6nTDDc6QWYLZrbz7Dk0nW1W.jpg",
    link: "/categories/women",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/29538710/pexels-photo-29538710.jpeg",
    link: "/categories/sunglass",
  },
  {
    id: 3,
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
          <div key={index} className="bg-slate-950 rounded-xl">
            <Link to={items.link}>
              <img
                src={items.image}
                alt={items.id}
                className="bg-slate-400 opacity-60 rounded-xl w-full h-[150px] lg:h-[400px] hover:opacity-100 transition duration-700 cursor-pointer object-cover"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCategories;
