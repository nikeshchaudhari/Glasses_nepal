import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { IoIosNotificationsOutline } from "react-icons/io";
import img from "../../assets/5.jpg";

const Header = () => {
  return (
    <div>
        <div className="md:w-[100vw] w-screen bg-slate-800 md:h-12 overflow-auto ">
                <div className="flex justify-between items-center  ">
                    {/* Mobile view */}
              <div>
                <GiHamburgerMenu className=" text-[20px] text-white md:hidden ml-2 " />
        
        
              </div>
                  <div className=" text-white md:text-[25px] md:font-semibold ml-5">
                    <Link to="/dashboard/home" >Glasses Nepal</Link>
                  </div>
                  <div className="flex justify-end items-center  text-white cursor-pointer -40">
                    <IoIosNotificationsOutline className="text-[30px]" />
                    <img src={img} alt="" className="w-[5%] rounded-[50%] mt-2 ml-3" />
                    <span className="mx-3">Nikesh</span>
                  </div>
                </div>
              </div>
        
    </div>
  )
}

export default Header