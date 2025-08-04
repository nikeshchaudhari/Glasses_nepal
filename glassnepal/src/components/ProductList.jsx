import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [items, setItems] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowPage, serRowPage] = useState(12);

  const navigate = useNavigate();
  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products?limit=0");
        setItems(res.data.products);
        console.log(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    dataFetch();
  }, []);
  const filterItems = items.filter((item) => {
    const price = item.price;
    const min = minPrice === "" ? 0 : parseInt(minPrice);
    const max = maxPrice === "" ? Infinity : parseInt(maxPrice);
    return price >= min && price <= max;
  });

  // pagination

  const indexOfLastItem = currentPage * rowPage;
  const indexOfFirstItem = indexOfLastItem - rowPage;
  const currentItems = filterItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filterItems.length / rowPage);

  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        <h3 className="flex justify-center mt-5 py-5 font-bold text-[24px] mb-5">
          ALL PRODUCTS
        </h3>
        <div className="flex h-min-screen  px-10">
          <Sidebar setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
          <div className="flex justify-center flex-wrap w-full px-4 bg-white p-4 mt-5">
            {currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <div
                  key={index}
                  className="w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4"
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full transform hover:-translate-y-2 cursor-pointer transition duration-500">
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
            ) : (
              <p>NO product Found </p>
            )}
          </div>
        </div>
        <div className="flex justify-end mx-12 mb-5 gap-5 items-center">
          <button
            className="w-20 py-2 bg-green-700 text-white cursor-pointer disabled:opacity-50 rounded-sm "
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage===1}
          >
            Prev
          </button>
          <span>
            Page {currentPage} ... {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage===totalPages}
            
            className="w-20 py-2 bg-green-700 text-white cursor-pointer disabled:opacity-50 rounded-sm"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductList;
