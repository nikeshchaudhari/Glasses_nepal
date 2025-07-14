import React from 'react'

const Sidebar = () => {
  return (

        <div className="w-[400px] ">
          <h5 className="mb-5">FILTER BY :</h5>
        <hr className="mb-5"/>
      <div>
        <h5>Price</h5>
        <div className='flex justify-between'>
          <h5>From</h5> 
          <h5>To </h5>
        </div>
        <div className="flex w-5">
          <input type="number" className="w-15"/>
          <span className="">-</span>
          <input type="number" name="" id="" className="w-15" />
        </div>
      </div>
      

        </div>  )
}

export default Sidebar
