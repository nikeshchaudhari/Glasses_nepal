import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MainHeader from "../components/MainHeader";
import { useNavigate, useParams } from "react-router-dom";
const Categorys = () => {
  const [men, setMen] = useState([]);
  const { id } = useParams();
  const{categoryName}=useParams()
  const navigate = useNavigate();
  console.log("Category ID",id);
  
 useEffect(() => {
    if (!id) return; 

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4080/product/category/${id}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setMen(res.data.categoryProduct);
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    };

    fetchData();
  }, [id]); 

  return (
    <>
      <MainHeader />
      <Navbar />
      <div className="min-h-screen  overflow-x-hidden ">
        <h3 className="flex justify-center mt-5 py-5 font-bold text-[24px] mb-5">
        {categoryName}
        
        </h3>
        <div className="flex p-10 justify-start flex-wrap">
          {men.length > 0 ? (
            men.map((item, index) => (
              <div
                key={index}
                className="w-1/2 md:w-1/3 lg:w-1/5"
                onClick={() => navigate(`/product/${item._id}`)}
              >
                <div className="bg-white shadow-2xl m-2 rounded-2xl cursor-pointer transform transition hover:-translate-y-2 hover:duration-500">
                  <div className=" ">
                    <img src={item.imageUrl} alt="" />
                  </div>
                  <h3 className="md:font-semibold text-center">{item.name}</h3>
                  <h3 className="p-5">Rs.{item.price}</h3>
                </div>
              </div>
            ))
          ) : (
            <p>Not Found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Categorys;
