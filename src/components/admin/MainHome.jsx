import React, { useEffect, useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import img from "../../assets/5.jpg";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { RiUser6Fill } from "react-icons/ri";
import { FaUserShield } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";



import axios from "axios";

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
      <div className="w-[79vw] bg-slate-700  h-12 overflow-x-hidden">
        <div className="flex justify-between items-center  ">
          <div className=" text-white text-[25px] font-semibold ml-5">
            <Link to="/dashboard/main-home">Glasses Nepal</Link>
          </div>
          <div className="flex justify-end items-center  text-white cursor-pointer -40">
            <IoIosNotificationsOutline className="text-[30px]" />
            <img src={img} alt="" className="w-[5%] rounded-[50%] mt-2 ml-3" />
            <span className="mx-3">Nikesh</span>
          </div>
        </div>
      </div>

      <div className="mt-20 flex ">
        <div className="w-60 ml-5 bg-white shadow-2xl cursor-pointer h-40 flex justify-center flex-col items-center transition transform hover:-translate-y-1 hover:duration-700">
          <FaUserShield className="text-[80px] text-center" />
          <span className="text-[30px] font-bold">{adminCount}</span>
          <h4 className="text-[20px] opacity-50">ADMIN</h4>
        </div>
        <div className="w-60 ml-5 bg-white shadow-2xl cursor-pointer h-40 flex justify-center flex-col items-center transition transform hover:-translate-y-1 hover:duration-700">
          <FaRegUser className="text-[80px] text-center" />
          <span className="text-[30px] font-bold">{adminCount}</span>
          <h4 className="text-[20px] opacity-50">USERS</h4>
        </div>
        <div  className="w-60 ml-5 bg-white shadow-2xl cursor-pointer h-40 flex justify-center flex-col items-center transition transform hover:-translate-y-1 hover:duration-700">
          <MdLocalShipping className="text-[80px] text-center" />
          <span className="text-[30px] font-bold">{adminCount}</span>
          <h4 className="text-[20px] opacity-50">ORDERS</h4>
        </div>
         <div  className="w-60 ml-5 bg-white shadow-2xl cursor-pointer h-40 flex justify-center flex-col items-center transition transform hover:-translate-y-1 hover:duration-700">
          <AiFillProduct className="text-[80px] text-center" />
          <span className="text-[30px] font-bold">{adminCount}</span>
          <h4 className="text-[20px] opacity-50">ALL PRODUCTS</h4>
        </div>
      </div>
    </>
  );
};

export default MainHome;
