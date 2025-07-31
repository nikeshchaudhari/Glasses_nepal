import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
   <>
   <div>
    <div className="w-70 bg-slate-900 h-screen shadow-l text-white">
<h2 className='font-bold text-[20px] p-5 text-center'>ADMIN</h2>
<hr className='opacity-10' />
<div className=' mt-5 w-full'>
 <ul className='text-[20px]'>
  <li className=' hover:bg-slate-700 py-2 transition hover:duration-500'>
    <Link className='ml-5'>Dashboard</Link>
  </li>
  <li className=' hover:bg-slate-700 py-2 transition hover:duration-500'>
    <Link className='ml-5'>Orders</Link>
  </li>
  <li className=' hover:bg-slate-700 py-2 transition hover:duration-500'>
    <Link className='ml-5'>Products</Link>
  </li>
  <li className=' hover:bg-slate-700 py-2 transition hover:duration-500'>
    <Link className='ml-5'>Users</Link>
  </li>
 </ul>
 <button className=" text-[20px]   hover:bg-slate-700 py-2 transition hover:duration-500 w-full text-left ">
  <Link className='ml-5'>Logout</Link>
 </button>
</div>
    </div>
   </div>
   </>
  )
}

export default Dashboard