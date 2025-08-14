import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";

const Dashboard = () => {
  return (
    <>
      <div className=" flex min-h-screen overflow-hidden ">
        <div className="fixed h-screen w-[250px]">
          <SideNav />
           </div>
          <div className="main">
            <div>

                <Outlet/>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
