import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate()

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//       const res=  await axios.get("http://localhost:4080/product/all-product");
//         setProduct(res.data.allProduct);
//       } catch (err) {
//         console.log("Something Error...");
//       }
//     };
//     fetchData();
//   }, []);

//  const filterData = product.filter((item) =>
//     item.name?.toLowerCase().includes(search.toLowerCase())
//   );

const handelData = (e)=>{
  if(e.key==="Enter"){
    e.preventDefault();
    navigate(`/search?query=${search}`)
  }

}
  return (
    <div className="h-[100px] relative  flex-col items-center justify-center">
      <div className="relative w-full md:w-[700px]">
        <input
          type="text"
          placeholder="Type here to search..."
          className="md:w-full p-3 pl-12 border border-gray-300 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
         onKeyDown={handelData}
        />
        <SearchIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
      </div>
      
    </div>
  );
};

export default SearchInput;
