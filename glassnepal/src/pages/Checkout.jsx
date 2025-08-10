import React from 'react'

const Checkout = () => {
  return (
    <>
    <div className=' w-full h-full'>
      <div className='flex w-120 border rounded-lg mx-auto items-center  m-4'>
        
        <form className='flex flex-col  w-120  p-10  gap-2 '>
          <h3 className='text-center text-[20px] font-bold'>Checkout</h3>
            <label htmlFor="fullname" className=''>Full Name</label>
            <input type="text" placeholder='Enter Your name' className='border border-black/30 outline-none p-1 rounded' />
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter your email' className='border border-black/30 outline-none p-1 rounded'/>
            <label htmlFor="phone">Phone</label>
            <input type="text" placeholder='Enter your phonenumber'maxLength="10"  className='border border-black/30 outline-none p-1 rounded' />
            <label htmlFor="address">Address</label>
            <input type="text" placeholder='Enter full address' className='border border-black/30 outline-none p-1 rounded'/>
            <label htmlFor="address">Payment Method</label>
            <select name="" id="" className='border border-black/30 outline-none p-1 rounded'>
              <option value="">--Select Option--</option>
              <option value="cash on delivery">Cash On Deleivery</option>
              <option value="onlinepay">Online Pay</option>
            </select>
            <button type='submit' className='bg-green-800 p-2 text-white rounded cursor-pointer hover:bg-green-950 transition  hover:duration-700'>Place Order</button>

        </form>
    </div>
    </div>
    </>
  )
}

export default Checkout