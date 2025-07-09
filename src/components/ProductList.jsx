import axios from "axios";
import React, { useEffect, useState } from "react";
import img1 from "../assets/1.jpg";

const localData = [
  {
    id: 1,
    title: "Himalaya Hairzone Solution - 60ml",
    description:
      "Prevents hair fall and promotes hair growth: hairzone prevents follicle degeneration and stimulates hair growth. It also enhances hair tensile strength, promotes hair follicular density and hair follicle count. Hairzone inhibits chemotherapy-induced dystrophic changes in growing follicles and premature regression of severely damaged hair follicles.",
    price: 595,
    image: img1,
  },
  {
    id: 2,
    title: "Silicone Hair Scalp Massager Random Colours",
    description:
      "Soothing Relief: Gently massage away stress and tension with flexible silicone fingers that knead and stimulate the scalp.",
    price: 79,
    image: img1,
  },
];
const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [isApi, setIsApi] = useState(false);
  useEffect(() => {
    const productImg = async () => {
      try {
        const data = await axios.get("https://dummyjson.com/products");
        // console.log(data);

        setProduct(data.data.products);
        setIsApi(false);
        // console.log(data.data.products);
      } catch (err) {
        console.log("Something wrong..");
        setProduct(isApi);
        setIsApi(true);
      }
    };
    productImg();
  }, [setProduct, product]);

  // const viewList = product.slice();

  return (
    <div>
      <h1 className="text-center font-bold text-2xl mt-4 p-6">All Product</h1>
      <div className="flex flex-wrap justify-center gap-4 p-6 ">
        {isApi && {

        }}
        {product.map((products) => (
          <div
            key={products.id}
            className=" mb-5 bg-white bg-opacity-30 backdrop-blur-md shadow-xl p-6 rounded-lg transition transform duration-300 hover:translate-y-3 hover:scale-105"
          >
            <div className="w-[250px] ms-4  mb-4 mt-5 cursor-pointer ">
              <img
                src={
                  products.images && Array.isArray(products.images)
                    ? products.images[0]
                    : img1
                }
                alt={products.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = img1;
                }}
                style={{ borderRadius: "8px" }}
                className=""
              />
              <h4 className="font-bold mb-3 text-center">{products.title}</h4>
              <p className="text-justify">{products.description}</p>
              <h4 className="mt-5 text-[#f57224] font-bold">
                Rs.{products.price}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
