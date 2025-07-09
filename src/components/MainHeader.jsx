import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import SearchInput from "./SearchInput";

const MainHeader = () => {
  const [showSearch, setShowSearch] = useState(false);

  const showHandle = () => {
    setShowSearch((e) => !e);
    console.log("show");
  };
  return (
    <div className="flex justify-between items-center w-full pt-10 pb-5 px-6 sm:px-20 flex-wrap shadow sticky">
      <div className="cursor-pointer text-2xl" onClick={showHandle}>
        <FaSearch />
      </div>
      <SearchInput search={showSearch}/>
      <div className="font-bold text-3xl">Glasses Nepal</div>
      <div className="cursor-pointer text-2xl">
        <IoCartOutline />
      </div>
    </div>
  );
};

export default MainHeader;
