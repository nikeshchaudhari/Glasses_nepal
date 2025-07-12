import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import { useState } from "react";

const api = [
  { id: 0, image: img1 },
  { id: 1, image: img2 },
];

const Carasole = () => {
  const [isCurrent, setIsCurrent] = useState(0);

  const left = () => {
    setIsCurrent(isCurrent === 0 ? api.length - 1 : isCurrent - 1);
  };

  const right = () => {
    setIsCurrent(isCurrent === api.length - 1 ? 0 : isCurrent + 1);
  };

  return (

    <>
    
    
    </>
  )
    
};

export default Carasole;
