import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Link } from "react-router-dom";

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isArrow, setIsArrow] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center px-4  md:px-15 py-5 ">
        <div>
          <SearchIcon className="flex items-center" />
        </div>
        <div>
          <img
            src="https://cdn2.blanxer.com/brand_logo/63e45741f1328721d34d41e8/660043f51786c9bc24ea2fb0.webp"
            alt="image"
            className="md:w-[250px] w-[150px] "
          />
        </div>
        <div className="flex gap-5">
          <LocalMallOutlinedIcon />
          <div className="md:hidden block">
            <MenuOutlinedIcon onClick={() => setIsOpen(true)} />
          </div>
        </div>

        {isOpen && (
          <>
            <div onClick={() => setIsOpen(false)} className="bg-black"></div>
            {/* Drawer */}
            
            <div
              // onClick={() => setIsOpen(false)}
              className="fixed top-0 right-0 w-[300px] h-full  bg-white shadow-lg z-40 transform transition duration-1000  animate-slide"
            >

              <div className="w-full flex justify-end px-5 pt-5">
                <CloseOutlinedIcon
                  onClick={() => setIsOpen(false)}
                  className="text-8xl"
                />
              </div>
              <div className="mx-5">
                <div className="flex justify-center mb-5">
                  <img
                    src="https://cdn2.blanxer.com/brand_logo/63e45741f1328721d34d41e8/660043f51786c9bc24ea2fb0.webp"
                    alt=""
                    className="w-[200px]"
                  />
                </div>
                <ul>
                  <li className="mb-2">
                    <Link to="/home">HOME</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/product">All Product</Link>
                  </li>
                  <li className="mb-2" onClick={() => setIsArrow(true)}>
                    Categories
                    {isArrow && (
                      <div className="mx-5 mt-2">
                        <ul>
                          <li className="mb-1 text-[15px]">Mens</li>
                          <li className="mb-1 text-[15px]">Womens</li>
                          <li className="mb-1 text-[15px]">Sunglasses</li>
                          <li className="mb-1 text-[15px]">Sport Glasses</li>
                        </ul>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
              </div>
          
          </>
        )}
      </div>
    </>
  );
};

export default MainHeader;
