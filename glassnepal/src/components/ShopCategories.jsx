import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const defaultImages   = [
  {
    id: 0,
    name:"Mens",
    image:
      "https://images.pexels.com/photos/19719795/pexels-photo-19719795.jpeg",
    
  },
  {
    id: 1,
    name:"Womens",
    image:
         "https://cdn.pixabay.com/photo/2025/04/25/12/13/nature-9558835_640.jpg",

  },
  {
    id: 2,
    name:"Sunglasses",
    image:
      "https://images.pexels.com/photos/29538710/pexels-photo-29538710.jpeg",

  },
  {
    id: 3,
    name:"Sportglasses",
    image: "https://images.pexels.com/photos/5807795/pexels-photo-5807795.jpeg",

  },
];

const ShopCategories = () => {

const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:4080/product/category", {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") }
        });
        setCategories(res.data.category);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="bg-[#e8e8e8] min-h-screen p-10">
      <h1 className="text-center text-[20px] lg:text-[30px] font-bold mb-8">SHOP BY CATEGORY</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map(cat => {
          // Find default image if backend image missing
          const defaultImg = defaultImages.find(d => d.name.toLowerCase() === cat.name.toLowerCase());
          const imageUrl = cat.image || (defaultImg ? defaultImg.image : "");

          return (
            <Link key={cat._id} to={`/categories/${cat.name.toLowerCase()}/${cat._id}`}>
              <div className="relative rounded-lg overflow-hidden">
                <img src={imageUrl} alt={cat.name} className="w-full h-40 lg:h-60 object-cover" />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full text-center">
                  {cat.name}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ShopCategories;
