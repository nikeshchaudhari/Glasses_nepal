import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-screen md:w-full bg-black h-40 relative ">
        <div>
          <div className="w-full ">
            <h1 className="md:w-[250px] text-[30px] font-semibold  rounded-lg p-2 text-white mx-auto md:mx-auto  ">
              GLASSES NEPAL
            </h1>
          </div>
        </div>
        <div>
          <hr className="text-white/20 mt-10" />
          <p className="text-white text-center absolute bottom-0  left-30 lg:left-130 md:left-100 p-5">
            © 2025 Glasses Nepal. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
