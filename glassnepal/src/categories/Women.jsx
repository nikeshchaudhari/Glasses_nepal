import axios from "axios";
import React, { useEffect, useState } from "react";
import MainHeader from "../components/MainHeader";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Women = () => {
  const [women, setWomen] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowPage, setRowPage] = useState(10);
  const indexOfLastPage = currentPage * rowPage;
  const indexOfFirstPage = indexOfLastPage - rowPage;

  const currentItems = women?.slice(indexOfFirstPage, indexOfLastPage);
  const totalPage = Math.ceil(women?.length / rowPage);
  console.log(totalPage);

  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const res = await axios(
        "https://dummyjson.com/products/category/groceries  "
      );
      console.log(res.data);

      setWomen(res.data.products);
    } catch (err) {
      console.log("Something error", err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <MainHeader />
      <Navbar />
      <div className="min-h-screen  overflow-x-hidden">
        <h3 className="text-center p-10 text-[24px] font-extrabold">Women</h3>
        <div className="flex flex-wrap p-10">
          {currentItems.length > 0 ? (
            currentItems.map((item, index) => (
              <div
                key={index}
                className="w-1/2 md:w-1/3 lg:w-1/5"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <div className="bg-white shadow-2xl rounded-2xl m-2 cursor-pointer transform transition hover:-translate-y-2 hover:duration-500">
                  <img src={item.images[0]} alt="" className="" />

                  <div className="mx-5">
                    <h3 className="md:font-semibold text-center">
                      {item.title}
                    </h3>
                    <h3 className="p-5">Rs. {item.price}</h3>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading....</p>
          )}
        </div>
      </div>
      <div className="flex justify-end items-center mb-1 mx-8 gap-5 p-4 disabled:opacity-50 ">
        <button
          className="p-2 w-15 text-white bg-green-700 cursor-pointer rounded-sm disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage===1}
        >
          Prev
        </button>
        <span>
          Pages {currentPage} ... {totalPage}
        </span>
        <button
          className="p-2 w-15 text-white bg-green-700 rounded-sm cursor-pointer disabled:opacity-50"
          onClick={() =>
            setCurrentPage((next) => Math.min(next + 1, totalPage))
          }
          disabled={currentPage===totalPage}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Women;
