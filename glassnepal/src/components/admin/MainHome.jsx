import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { RiUser6Fill } from "react-icons/ri";
import { FaUserShield } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";



import axios from "axios";
import Header from "./Header";

const MainHome = () => {
  const [adminCount, setAdminCount] = useState(0);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:4080/user/admin");
        setAdminCount(response.data.admin);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);
  return (
    <>
      <Header/>
      <div className="mt-20 flex flex-wrap gap-2 justify-center md:justify-start md:ml-[300px]  overflow-x-auto">
        <div className="w-[200px] md:w-60  bg-white shadow-2xl cursor-pointer md:h-40 flex justify-center flex-col items-center transition transform hover:-translate-y-1 hover:duration-700  ">
          <FaUserShield className="md:text-[80px] text-center" />
          <span className="md:text-[30px] font-bold">{adminCount}</span>
          <h4 className="md:text-[20px] opacity-50">ADMIN</h4>
        </div>
        <div className="w-[200px] md:w-60  bg-white shadow-2xl cursor-pointer h-40 flex justify-center flex-col items-center transition transform hover:-translate-y-1 hover:duration-700">
          <FaRegUser className="md:text-[80px] text-center" />
          <span className="md:text-[30px] font-bold">{adminCount}</span>
          <h4 className="md:text-[20px] opacity-50">USERS</h4>
        </div>
        <div  className="w-[200px] md:w-60  bg-white shadow-2xl cursor-pointer h-40 flex justify-center flex-col items-center transition transform hover:-translate-y-1 hover:duration-700">
          <MdLocalShipping className="md:text-[80px] text-center" />
          <span className="md:text-[30px] font-bold">{adminCount}</span>
          <h4 className="md:text-[20px] opacity-50">ORDERS</h4>
        </div>
         <div  className="w-[200px] md:w-60 bg-white shadow-2xl cursor-pointer h-40 flex justify-center flex-col items-center transition transform hover:-translate-y-1 hover:duration-700">
          <AiFillProduct className="md:text-[80px] text-center" />
          <span className="md:text-[30px] font-bold">{adminCount}</span>
          <h4 className="md:text-[20px] opacity-50">ALL PRODUCTS</h4>
        </div>
      </div>
    </>
  );
};

export default MainHome;
