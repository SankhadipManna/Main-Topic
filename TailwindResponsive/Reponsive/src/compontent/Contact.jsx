import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-full   items-center w-auto max-h-auto bg-blue-200 p-10'>
      <h1 className='text-4xl sm:text-6xl font-bold  text-center pb-10 '>CONTACT</h1>
      <div className='flex justify-between items-center flex-col  md:flex-row gap-10 '>
        <div className='w-[300px] h-[300px] rounded-md rotate-none md:-rotate-9 flex justify-center items-center  text-center bg-green-200 '>
            <h1>Image</h1>
        </div>
        <div className='w-full max-w-[500px] h-auto bg-pink-300 rounded-lg'>
            <div className='flex justify-center flex-col items-center gap-6 p-6'>
                <h1 className='text-2xl sm:text-4xl font-semibold'>You are Sign In</h1>
                <p className='w-full max-w-[300px] h-[40px] bg-red-400 rounded-lg text-center'>Email</p>
                <p className='w-full max-w-[300px] h-[40px] bg-red-400 rounded-lg text-center'>Password</p>
                <button className='px-10 py-2 bg-neutral-300 hover:scale-95 text-2xl font-bold rounded-md'>Click Me</button>
                <div className='flex  justify-center md:flex-row gap-8 '>
                    <div className='w-[30px] h-[30px] rounded-full bg-black '></div>
                    <div className='w-[30px] h-[30px] rounded-full bg-black '></div>
                    <div className='w-[30px] h-[30px] rounded-full bg-black '></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
