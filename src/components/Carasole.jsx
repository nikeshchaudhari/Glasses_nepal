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
    <div className="relative w-full h-[300px] overflow-hidden flex items-center justify-center">
      {/* Carousel image */}
      <img
        src={api[isCurrent].image}
        alt={`Image ${isCurrent}`}
        className="w-full h-full object-cover transition-transform duration-700"
      />

      {/* Left Button */}
      <button
        onClick={left}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        ◀
      </button>

      {/* Right Button */}
      <button
        onClick={right}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        ▶
      </button>
    </div>
  );
};

export default Carasole;
