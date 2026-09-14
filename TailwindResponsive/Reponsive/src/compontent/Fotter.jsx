import React from 'react'
// import {Facebook, X, Instagram} from 'lucide-react'
const Fotter = () => {
  return (
    <div className='w-full h-auto bg-yellow-500'>
      <div className='flex  flex-col justify-between gap-8 items-center sm:flex-row '>
        <div className='flex flex-col '>
            <h1 className='text-2xl font-bold black'>Social Media</h1>
            <p className='text-[15px] font-semibold'>Good Service and Trust </p>
            {/* <Facebook /> */}
            {/* <Instagram/> */}
            {/* <X/> */}
        </div>
        <div className='flex flex-col gap-3 '>
            <h1 className='text-2xl font-bold'>Quick service</h1>
            <a href="#" className='text-[15px] font-semibold hover:text-blue-500 '>Home</a>
            <a href="#" className='text-[15px] font-semibold hover:text-blue-500'>About</a>
            <a href="#" className='text-[15px] font-semibold hover:text-blue-500'>Contact</a>
        </div>
        <div  className='flex flex-col gap-3 '>
            <h1 className='text-2xl font-bold'>Our Location</h1>
            <p className='text-[15px] font-semibold'>Kolkata, Howrah , pin:711414</p>
            <p className='text-[15px] font-semibold'>+91xxxxxx67</p>
            <p className='text-[15px] font-semibold'>SNstore@Gmail.com</p>
        </div>
        <div  className='flex flex-col gap-3 '>
            <h1 className='text-2xl font-bold'>Our Time</h1>
            <p className='text-[15px] font-semibold'> Sunday Morning 10.00 AM</p>
            <p className='text-[15px] font-semibold'>Open Everyday Monday-Sunday</p>
            <p className='text-[15px] font-semibold'>Off Time 11.00 PM</p>
        </div>
      </div>
        <hr  className='w-full max-w-auto mt-10'/>
        <p className='text-center font-bold text-[20px]'>Thanks For Visting </p>
    </div>
  )
}

export default Fotter
