import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[400px] hidden md:block ">
      <h5 className="mb-5 ">FILTER BY :</h5>
      <hr className="mb-5 opacity-15" />
      <div>
        <h5>Price</h5>
        <div className="flex justify-between w-[180px] mt-8">
          <h5>From</h5>
          <h5>To </h5>
        </div>
        <div className="flex  items-center">
          <input type="number" min="0" className="w-30 border-1 px-2 py-1" />
          <span className=" mx-4 flx items-center">-</span>
          <input
            type="number"
            min="5000"
            name=""
            id=""
            className="w-30 border-1 px-2 py-1"
          />
        </div>
        <hr className="mt-10 opacity-15" />
        <div className="mt-5">
          <h5>Category</h5>
        <input type="checkbox" name="men" id="men" className="mx-5 mt-5 "/>
          <label htmlFor="men">Men</label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
