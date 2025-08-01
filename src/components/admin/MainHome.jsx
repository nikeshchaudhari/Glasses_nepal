import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import img from "../../assets/5.jpg";
import { Link } from "react-router-dom";

const MainHome = () => {
  return (
    <>
      <div className="w-[79vw] bg-slate-700  h-20 overflow-x-hidden">
        <div className="flex justify-between items-centers w-full   ">
          <div className="ml-5 mt-5 text-white text-[25px] font-semibold"><Link to="/dashboard/main-home">Glasses Nepal</Link></div>
          <div className="flex justify-end items-center gap-5 text-white cursor-pointer">
            <IoIosNotificationsOutline className="text-[30px]" />
            <img src={img} alt="" className="w-[10%] rounded-[50%]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHome;
