import React from "react";
import { Outlet } from "react-router-dom";
// import SideNav from "./SideNav";

const Dashboard = () => {
  return (
    <>
      <div className="bg-red-500 w-full min-h-screen ">
        <div className="flex w-[100vw] bg-white justify-start">
          {/* <SideNav /> */}
          <div className="main">
            <div className="top-container">

              <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
