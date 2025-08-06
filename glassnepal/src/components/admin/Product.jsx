import React from "react";
import Header from "./Header";

const Product = () => {
  return (
    <>
      <Header />
      <div>
        <h1 className="text-center text-[30px] font-bold mt-5">
          Add New Products
        </h1>
        <div className="flex justify-start p-3 mt-2 w-[800px] m-auto h-full border rounded">
          <form>
            <label htmlFor="productname" className=" block text-[22px] mb-2 ">
              Product Name
            </label>
            <input
              type="text"
              name="productname"
              id=""
              placeholder="Enter product name"
              className="block mb-2 p-2 max-w-full w-195 border border-black/50 outline-0 rounded-lg "
            />
            <label htmlFor="productname" className=" block text-[22px] mb-2 ">
              Price{" "}
            </label>
            <input
              type="number"
              name="productname"
              id=""
              placeholder="Enter Price"
              className="block mb-2 p-2 max-w-full w-195 border border-black/50 outline-0 rounded-lg "
            />
            <label htmlFor="productname" className=" block text-[22px] mb-2 ">
              Category
            </label>
            <select
              name="category"
              required
              className="mb-2 p-2 max-w-full w-195 border border-black/50 outline-0 rounded-lg "
            >
              <option value="">--Select Category --</option>
              <option value="men">MEN</option>
              <option value="womenmen">WOMEN</option>
              <option value="sunglass">SUNGLASS</option>
              <option value="sportglass">SPORTGLASS</option>
            </select>
            <label htmlFor="photo" className=" block text-[22px] mb-2 ">
              Product Photo
            </label>
             <input
              type="file"
              name="productname"
              id=""
              placeholder="Enter short description"
              className="block mb-2 p-2 max-w-full w-195 border border-black/50 outline-0 rounded-lg "
            />
            <label htmlFor="productname" className=" block text-[22px] mb-2 ">
              Description
            </label>
            <input
              type="text"
              name="productname"
              id=""
              placeholder="Enter short description"
              className="block mb-2 p-2 w-full border border-black/50 outline-0 rounded-lg "
            />
            <button type="submit" className="mt-2 p-2 w-full text-center rounded-lg  cursor-pointer bg-green-500 text-white">ADD PRODUCT</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Product;
