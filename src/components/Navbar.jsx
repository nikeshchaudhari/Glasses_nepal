import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import Carasole from "./Carasole";

const Navbar = () => {
  return (
    <div className="">
      <div className=" shadow-xl w-full ">
        <ul className=" hidden md:flex justify-center gap-10 mt-3 py-3 items-center sticky ">
          <li>
            <Link
              to="/home"
              className="hover:font-bold transition-all duration-2000"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              className="hover:font-bold transition-all duration-2000"
            >
              All Product
            </Link>
          </li>
          <li>
            <Link
              to="/categories"
              className="hover:font-bold transition-all duration-2000"
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className="hover:font-bold transition-all duration-2000"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
