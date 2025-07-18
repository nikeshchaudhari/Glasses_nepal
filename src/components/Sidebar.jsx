import React from "react";

const Sidebar = ({ setMinPrice, setMaxPrice }) => {
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
          <input
            type="number"
            className="w-30 border-1 px-2 py-1"
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="0"
            min={0}
            max={2500}
          />
          <span className=" mx-4 flx items-center">-</span>
          <input
            type="number"
            placeholder="2500"
            min={0}
            max={2500}
            name=""
            id=""
            className="w-30 border-1 px-2 py-1"
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
        <hr className="mt-10 opacity-15" />
        <div className="mt-5">
          <h5>Category</h5>
          <input type="checkbox" name="men" id="men" className="mx-5 mt-5 " />
          <label htmlFor="men">Men</label>
          <br />
          <input type="checkbox" name="women" id="women" className="mx-5 mt-5 " />
          <label htmlFor="women">Women</label><br />
          <input type="checkbox" name="sunglass" id="sunglasses" className="mx-5 mt-5 " />
          <label htmlFor="sunglass">Sunglasses</label><br />  
          <input type="checkbox" name="sportglass" id="sportglasses" className="mx-5 mt-5 " />
          <label htmlFor="sportglasses">Sportglasses</label><br /> 
          <br />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
