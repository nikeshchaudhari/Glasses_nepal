import React from "react";
import UpHeader from "../components/UpHeader";
import MainHeader from "../components/MainHeader";
import Navbar from "../components/Navbar";
import Carasole from "../components/Carasole";
import SearchInput from "../components/SearchInput";
import ShopCategories from "../components/ShopCategories";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <UpHeader />
      <MainHeader />
      <Navbar />
      <Carasole />
      <ShopCategories />
    </div>
  );
};

export default Home;
