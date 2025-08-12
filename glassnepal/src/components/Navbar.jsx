import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import axios from "axios";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const findCategory = async () => {
      try {
        const res = await axios.get("http://localhost:4080/product/category", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        console.log("Response data:", res.data.category);
        setCategories(res.data.category );
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };
    findCategory();
  }, []);

  return (
    <div className="shadow w-full flex justify-end items-center md:justify-center">
      <ul className="hidden md:flex justify-center gap-10 mt-3 py-3 items-center">
        <li>
          <Link to="/home" className="hover:font-bold transition-all">
            Home
          </Link>
        </li>
        <li>
          <Link to="/product" className="hover:font-bold transition-all">
            All Product
          </Link>
        </li>

        <li
          className="relative"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="flex items-center cursor-pointer hover:font-bold transition-all">
            Categories
            {isOpen ? (
              <IoIosArrowUp className="inline ml-1" />
            ) : (
              <MdKeyboardArrowDown className="inline ml-1" />
            )}
          </div>
          {/* Dropdown Category */}
          {isOpen && (
            <ul className="absolute top-full left-0 w-40 bg-white p-2 rounded-b-sm shadow-md z-30">
              {categories.map((cat) => (
                <li key={cat._id} className="p-2">
                  <Link to={`/categories/${cat.name}/${cat._id}`}>
                    {cat.name}
                  </Link>
                </li>
              ))}
              {/* <li className="mb-2 hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                <Link to="/categories/women">Women</Link>
              </li>
              <li className="mb-2 hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                Sunglasses
              </li>
              <li className="mb-2 hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                Sportglasses
              </li> */}
            </ul>
          )}
        </li>

        <li>
          <Link to="/about-us" className="hover:font-bold transition-all">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
