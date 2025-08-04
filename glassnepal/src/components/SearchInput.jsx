import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = () => {
  return (
    <div className="h-[100px] relative  flex-col items-center justify-center">
      <div className="relative w-full md:w-[700px]">
        <input
          type="text"
          placeholder="Type here to search..."
          className="md:w-full p-3 pl-12 border border-gray-300 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <SearchIcon
          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
        />
      </div>
    </div>
  );
};

export default SearchInput;
