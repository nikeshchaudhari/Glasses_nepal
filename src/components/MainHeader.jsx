import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const MainHeader = () => {
  return (
    <div className='flex justify-between items-center w-full pt-10 pb-5 px-6 sm:px-20 flex-wrap shadow'>
      <div className='cursor-pointer text-2xl'><FaSearch /></div>
      <div className='font-bold text-3xl'>Glasses Nepal</div>
      <div className='cursor-pointer text-2xl'><IoCartOutline /></div>
    
    </div>
  )
}

export default MainHeader;
