import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-amber-200'>
      <ul className='flex justify-center gap-10 mt-3 py-3 items-center'>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/product">All Product</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/about-us">About</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
