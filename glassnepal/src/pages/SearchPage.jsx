import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import Navbar from "../components/Navbar";

const SearchPage = () => {
  const location = useLocation();
  console.log(location);

  const queryParms = new URLSearchParams(location.search);
  const query = queryParms.get("query");
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4080/product/search?query=${query}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        // const filterData = res.data.allProduct.filter((item) =>
        //   item.name.toLowerCase().includes(id.toLowerCase())
        // );

        setProduct(res.data.product);
      } catch (err) {}
    };
    fetchProduct();
  }, [query]);

  return (
    <div>
        <MainHeader/>
        <Navbar/>
      <h2 className="text-center mt-5 text-[30px] font-bold">Search Result for "{query}"</h2>
      {product.lenght == 0 ? (
        <p>Product Not Found</p>
      ) : (
        <>
          <div className="flex justify-center flex-wrap w-full px-4 bg-white p-4 mt-5 gap-5">
            {product.map((item) => (
              <div key={item._id} className="w-1/2 md:w-1/5   ">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full transform hover:-translate-y-2 cursor-pointer transition duration-500">
                  <div className="w-full h-[200px] overflow-hidden flex items-center justify-center ">
                    <img src={item.imageUrl} alt="" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-center font-bold text-[16px] mb-2">{item.name}</h3>
                  <h3 className="mt-4 font-bold text-[#f85606] mx-3 mb-5">Rs.{item.price}</h3>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchPage;
