import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import img from "../../assets/5.jpg";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

const MainHome = () => {
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

      <div className="mt-20">
        <div className="w-60 ml-5 bg-white shadow-2xl cursor-pointer h-40 flex justify-center flex-col items-center">
          <FaRegUser  className="text-[80px] text-center"/>

          <h4 className="text-[20px] mt-3" >WELCOME</h4>
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default MainHome;
