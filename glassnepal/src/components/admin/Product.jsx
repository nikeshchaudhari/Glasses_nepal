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

  const [product,setProduct]= useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Add Product");

    const formData = new FormData();
    formData.append("name", name),
      formData.append("price", price),
      formData.append("category", category),
      formData.append("image", image),
      formData.append("description", description);
    try {
      const response = await axios.post(
        "http://localhost:4080/product/add-product",
        formData,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data);
      toast.success("Product Add Sucessfully!");
    } catch (err) {
      toast.error("Error");
    }
  };

  // get all Product 

 useEffect(()=>{
   const getProduct =async ()=>{
    try{
      const response = await axios.get("http://localhost:4080/product/all-product",{
        headers:{
          Authorization:"Bearer "+localStorage.getItem("token")
        }
      })
      setProduct(response.data.allProduct)
    }
    catch(err){
      
    }
    
  }
  getProduct();
 },[])
  return (
    <>
      <Header />
      <div className="w-screen md:w-full px-3 md:px-[400px] md:py-5">
        <h1 className="text-center text-[24px] md:text-[30px] font-bold mt-5">
          Add New Products
        </h1>
        <div className="mt-4 border border-black/20 rounded-lg p-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <label htmlFor="productname" className=" block text-[22px] mb-2 ">
              Product Name
            </label>
            <input
              type="text"
              name="productname"
              id=""
              placeholder="Enter product name"
              className="block mb-2 p-2 max-w-full w-full md:w-full border border-black/50 outline-0 rounded-lg "
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
              className="block mb-2 p-2 max-w-full w-full border border-black/50 outline-0 rounded-lg "
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
              className="mb-2 p-2 max-w-full w-full border border-black/50 outline-0 rounded-lg "
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
      <div className="w-full ">
        <table className=" w-full text-[12px] md:text-[14px]  bg-white border border-gray-300 rounded-2xl md:w-[1000px] md:ml-[300px]">
          <thead className="bg-gray-200 text-sm md:text-base">
            <tr className=" ">
              <th className="py-2 border">S.N.</th>
              <th className="py-2 border">Product Name</th>
              <th className="py-2 border">Price</th>
              <th className="py-2 border " >Image</th>
              <th className="py-2 border">Description</th>
              <th className="py-2 border ">Action</th>
            </tr>
          </thead>
          <tbody>
            {product.length > 0 ? (
              product.map((item,index)=>(
                <tr key={index}>
                  <td className="border px-1 ">{index+1}</td>
                  <td className="border px-1 ">{item.name}</td>
                  <td className="border px-1 ">{item.price}</td>
                  <td className="border px-1 ">
                    <img src={item.imageUrl} alt="image" className="h-16 w-16 object-cover  " />
                  </td>
                  <td className="border md:w-56 md:px-2  ">{item.description}</td>
                  <td  className="border md:px-3 text-center">
                    <button className="bg-green-900 p-2 rounded text-white md:mr-5 cursor-pointer">Update</button>
                    <button className="bg-red-900 p-2 rounded text-white md:mr-5 cursor-pointer">Delete</button>
                  </td>
                </tr>

              ))
            ):(
              <tr>
        <td colSpan="6">
          <p className="text-center text-red-500 py-5">Product Not Found</p>
        </td>
      </tr>
            ) }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Product;
