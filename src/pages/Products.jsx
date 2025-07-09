import React from "react";
import UpHeader from "../components/UpHeader";
import Navbar from "../components/Navbar";
import MainHeader from "../components/MainHeader";
import ProductList from "../components/ProductList";

const Products = () => {
  return (
    <div>
      <MainHeader />
      <Navbar />
      <ProductList/>
    </div>
  );
};

export default Products;
