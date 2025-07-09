import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import axios from "axios";
const Carasole = () => {
  // const [image, setImage] = useState([]);

  // useEffect(() => {
  //   const Img = async () => {
  //     try {
  //       const res = await axios.get(
  //         "https://pixabay.com/api/");
  //       console.log(res);

  //       setImage(res.data.image);
  //     } catch (err) {
  //       console.log("Something wrong..");
  //     }
  //   };
  //   Img();
  // }, []);

  return (
    <>
    {/* {image.map((item)=>((
      <div key={item.key}>
       <img src={item.image} alt="" />  
      </div>
    )))} */}
    <div>
<img src={img1} alt="" srcset="" />


    </div>

    </>
  );
};

export default Carasole;
