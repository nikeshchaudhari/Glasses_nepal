import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-screen md:w-full bg-black h-40 relative ">
        <div>
          <div>
            <h1 className="md:w-[250px]   text-[30px] font-semibold  rounded-lg p-2 text-white">
              GLASSES NEPAL
            </h1>
          </div>
        </div>
        <div>
          <hr className="text-white" />
          <p className="text-white text-center absolute bottom-0 lg:left-130 md:left-100 p-5">
            © 2025 Glasses Nepal. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
