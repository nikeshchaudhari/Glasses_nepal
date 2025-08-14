import React from "react";
import { Link } from "react-router-dom";



const SideNav = () => {
    
  return (
    <>
    <div className="hidden md:block w-[20px] md:w-[250px] bg-slate-900 text-white h-[100vh] fixed top-0 left-0">
      <div>
        <h2 className="md:text-[30px] p-5 text-center font-semibold">ADMIN</h2>
      </div>
      <hr className="opacity-10" />
      <div className="flex mt-5">
        <ul className="w-full">
          <div className="mb-2 hover:bg-slate-300 md:w-full cursor-pointer transition hover:duration-700 hover:text-black ">
            <li className="ml-5  md:text-[20px]"><Link to="/dashboard/home">
            DASHBOARD</Link></li>
          </div>
          <div className="mb-2 hover:bg-slate-300 md:w-full cursor-pointer transition hover:duration-700 hover:text-black "><li className="ml-5 md:text-[20px]"><Link to="/dashboard/order">ALL ORDERS</Link></li></div>
         <div className="mb-2 hover:text-black hover:bg-slate-300 md:w-full cursor-pointer transition hover:duration-700 "> <li className="ml-5  md:text-[20px]"><Link to="/dashboard/products">ADD PRODUCTS</Link></li></div>
         <div className="mb-2 md:text-[20px]"> <li className="ml-5 bg-red-700 md:w-25 p-1 text-center rounded-sm cursor-pointer hover:bg-red-950 transition hover:duration-500">LOGOUT</li></div>
        </ul>
      </div>
     
    </div>
   
    </>
  );
};

export default SideNav;
