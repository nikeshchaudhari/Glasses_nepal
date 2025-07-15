import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
const MainHeader = () => {
  return (
    <div className="flex justify-between items-center px-15 py-5 ">
      <div>
        <SearchIcon className="flex items-center" />
      </div>
      <div>
        <img
          src="https://cdn2.blanxer.com/brand_logo/63e45741f1328721d34d41e8/660043f51786c9bc24ea2fb0.webp"
          alt="image"
          className="w-[250px] "
        />
      </div>
      <div>
        <LocalMallOutlinedIcon />
      </div>
    </div>
  );
};

export default MainHeader;
