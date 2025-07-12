import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import SearchInput from "./SearchInput";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

import { Link } from "react-router-dom";

const MainHeader = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [arrow, setArrow] = useState(false);

  const showHandle = () => {
    setShowSearch((e) => !e);
    console.log("show");
  };
  return (
    <>
      <div className="flex justify-between items-center w-full pt-10 pb-5 px-6 sm:px-30 flex-wrap shadow sticky">
        <div className="cursor-pointer text-2xl" onClick={showHandle}>
          <FaSearch />
        </div>
        {/* <SearchInput search={showSearch} /> */}
        <div className="font-bold text-3xl">Glasses Nepal</div>
        <div className="cursor-pointer text-2xl flex gap-5">
          <IoCartOutline />
          {/* Mobile View Logo */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(true)}
          >
            <RxHamburgerMenu className="text-2xl " />
          </button>
        </div>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 opacity-50  z-[9998] "
              onClick={() => setIsOpen(false)}
            />
            {/* Drawer */}
            <div
              className="fixed top-0 right-0 min-h-screen bg-white w-[80vw]  z-[9999]"
              // onClick={() => setIsOpen(false)}
            >
              <div
                className="flex justify-center p-8"
                onClick={() => setIsOpen(false)}
              >
                <h2 className="font-bold text-2xl">Glasses Nepal</h2>
              </div>
              <ul className="space-y-4 tex-lg ">
                <li>
                  <Link
                    to="/home"
                    // onClick={() => setIsOpen(false)}
                    className="text-[18px] flex justify-start ms-10"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product"
                    // onClick={() => setIsOpen(false)}
                    className="text-[18px] flex justify-start ms-10"
                  >
                    All Products
                  </Link>
                </li>
                <li className="">
                  <div>
                    <button
                      onClick={() => setArrow(!arrow)}
                      className=" flex justify-between w-[70vw] text-[18px] ms-10"
                    >
                      Categories
                      <div>
                        {arrow ? (
                          <MdKeyboardArrowDown />
                        ) : (
                          <IoIosArrowForward />
                        )}
                      </div>
                    </button>
                    {arrow && (
                      <ul className="w-full flex flex-col text-[18px] ms-14 gap-3 p-5">
                        <li className="transform hover:translate-x-5">Men</li>
                        <li className="transform hover:translate-x-5">Women</li>
                        <li className="transform hover:translate-x-5">
                          SunGlasses
                        </li>
                        <li className="transform hover:translate-x-5">
                          Sportglasses
                        </li>
                      </ul>
                    )}
                  </div>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    // onClick={() => setIsOpen(false)}
                    className="text-[18px] flex justify-start ms-10"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MainHeader;
