import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Cart from "../pages/Cart";
const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isArrow, setIsArrow] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);

    const handleCartUpdate = () => {
      const updateCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(updateCart.length);
    };

    window.addEventListener("cart", handleCartUpdate);

    return () => {
      window.removeEventListener("cart", handleCartUpdate);
    };
  }, []);
  return (
    <>
      <div className="flex justify-between items-center px-4  md:px-15 py-5 bg-white sticky z-10 top-0 transition animation-fade">
        <div>
          <SearchIcon
            onClick={() => setShowSearch(!showSearch)}
            className="flex items-center cursor-pointer"
          />
        </div>
        {showSearch && (
          <div className="fixed top-0 left-0 w-full bg-white shadow-md  md:p-1 z-50 flex flex-col items-center transition duration-1000 ">
            <div className="flex items-center gap-3 mt-10">
              <SearchInput className="mt-5" />

              <div
                className="mb-12 cursor-pointer"
                onClick={() => setShowSearch(false)}
              >
                <CloseOutlinedIcon />
              </div>
            </div>
          </div>
        )}
        <div>
         <h1 className="md:w-[250px]   text-[30px] font-semibold  rounded-lg p-2 text-black">GLASSES NEPAL</h1>
        </div>
        <div className="flex gap-5 relative">
          <LocalMallOutlinedIcon className="cursor-pointer" onClick={()=>setCartOpen(true)}/>
            <Cart cartOpen={cartOpen} cartClose={()=>setCartOpen(false)}/>
          {cartCount > 0 && (
            <span className="absolute -top-2 left-5">{cartCount}</span>
          )}
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
              className="fixed top-0 right-0 w-[300px] h-full  bg-white shadow-lg z-40 transform transition duration-1000"
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
                  <li
                    className="mb-2 inline"
                    onClick={() => setIsArrow(!isArrow)}
                  >
                    <div className="flex justify-between mb-2">
                      Categories
                      {isArrow ? (
                        <ExpandMoreRoundedIcon />
                      ) : (
                        <ChevronRightRoundedIcon />
                      )}
                    </div>

                    {isArrow && (
                      <div className="mx-5 mt-2 mb-2">
                        <ul>
                          <li className="mb-1 text-[15px]">
                            <Link to="/categories/men">Mens</Link>
                          </li>
                          <li className="mb-1 text-[15px]">Womens</li>
                          <li className="mb-1 text-[15px]">Sunglasses</li>
                          <li className="mb-1 text-[15px]">Sport Glasses</li>
                        </ul>
                      </div>
                    )}
                  </li>
                  <li className="mb-2">
                    <Link to="/about-us">About Us</Link>
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
