import axios from "axios";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import { useEffect, useState } from "react";

const api = [
  { id: 0, image: img1 },
  { id: 1, image: img2 },
];

const Carasole = () => {
  const [start, setStart] = useState([]);
  useEffect(() => {
    setStart(api);
    console.log(start);
  }, []);
  return (
    <>
      <div>
        {start.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Carasole;
