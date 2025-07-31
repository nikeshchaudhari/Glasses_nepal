import React from 'react'
import SideNav from './SideNav'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
    <div className="dashboard-wrapper ">
        <div className="dashboard-container">
            <SideNav/>
        </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Dashboard