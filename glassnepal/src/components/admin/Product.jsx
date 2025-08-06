import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { toast } from "react-toastify";

const Product = () => {
 const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log("Add Product");

    const formData = new FormData();
    formData.append("name",name),
    formData.append("price",price),
    formData.append("category",category),
    formData.append("image",image),
    formData.append("description",description)
    try{
      const response = await axios.post("http://localhost:4080/product/add-product",formData,{
        headers:{
          Authorization:"Bearer "+localStorage.getItem("token")
        },

      })
      console.log(response.data);
      toast.success("Product Add Sucessfully!")
      

    }
    catch(err){
      toast.error("Error")

    }
  };
  return (
    <>
      <Header />
      <div>
        <h1 className="text-center text-[30px] font-bold mt-5">
          Add New Products
        </h1>
        <div className="flex justify-start p-3 mt-2 w-[800px] m-auto h-full border rounded">
          <form onSubmit={handleSubmit}>
            <label htmlFor="productname" className=" block text-[22px] mb-2 ">
              Product Name
            </label>
            <input
              type="text"
              name="productname"
              id=""
              placeholder="Enter product name"
              className="block mb-2 p-2 max-w-full w-195 border border-black/50 outline-0 rounded-lg "
              // value={addProduct}
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor="productname" className=" block text-[22px] mb-2 ">
              Category
            </label>
            <select
              name="category"
              // required
              className="mb-2 p-2 max-w-full w-195 border border-black/50 outline-0 rounded-lg "
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">--Select Category --</option>
              <option value="men">MEN</option>
              <option value="women">WOMEN</option>
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
              onChange={(e) => setImage(e.target.files[0])}
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
              onChange={(e) => setDescription(e.target.value)}
            />
            <button
              type="submit"
              className="mt-2 p-2 w-full text-center rounded  cursor-pointer bg-green-500 text-white"
            >
              ADD PRODUCT
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Product;
