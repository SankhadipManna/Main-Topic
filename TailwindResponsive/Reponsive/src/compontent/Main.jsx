import React from 'react'
import { motion } from 'framer-motion'
const Main = () => {
  return (
    <div className='w-full max-w-auto h-screen bg-neutral-300 p-10 overflow-hidden '>
      <div className='flex flex-col justify-between  items-center sm:gap-6 md:flex-row  '>
        <motion.div
        initial={{
          y:-100,
          opacity:0
        }}
        animate={{
          y:0,
          opacity:1
        }}
        transition={{
          duration:0.6,
          ease:"easeInOut"
        }}

        
        className='w-[400px] h-[400px] text-center pb-5 bg-green-300 rounded-lg '>
            <h1 className='text-center font-bold text-2xl '>Content</h1>
        </motion.div>
        <motion.div
        initial={{
          y:-100,
          opacity:0
        }}
        animate={{
          y:0,
          opacity:1
        }}
        transition={{
          duration:0.6,
          ease:"easeInOut"
        }}
        className='w-[400px] h-[400px] mt-10 text-center bg-red-300 rounded-full'>
            <h1 className='text-center font-bold text-2xl'>Image</h1>
        </motion.div>
      </div>
    </div>
  )
}

export default Main
