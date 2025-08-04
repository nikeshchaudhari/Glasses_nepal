import React, { useEffect, useState } from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
const api = [
  {
    id: 1,
    image: img1,
  },

  {
    id: 2,
    image: img2,
  },
];
const Carasole = () => {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setData(api);
  }, []);
  const next = () => {
    setCurrent(current === data.length - 1 ? 0 : current + 1);
  };
  const prev = () => {
    setCurrent(current === 0 ? data.length - 1 : current - 1);
  };
  return (
    <div className="flex justify-evenly items-center overflow-hidden  "
    >
      <div
        className="left-arrow absolute z-40 left-0 "
        onClick={prev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="size-10"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="image relative">
        {data.map(
          (item, index) =>
            current === index && (
              <div key={index} className="flex-shrink-0 w-full mt-1">
                <img
                  src={item.image}
                  alt="image"
                 className="w-full"
                />
              </div>
            )
        )}
      </div>
      <div typeof="button" className="right-arrow absolute right-0 " onClick={next}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white "
          className="size-10"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Carasole;
