import React from 'react'
import { motion } from 'framer-motion'
const featuer = () => {
  
 
  
  return (
    <div className='flex justify-center flex-col md:flex-row  items-center  gap-6 max-w-auto h-[500px]'>
      <motion.div 
       initial={{
        opacity:0,
        x:-10
       }}
       animate={{
        opacity:1,
        x:0
       }}
       transition={{
        duration:0.6,
        ease:"easeInOut"
       }}
      className='w-[300px] h-[70px] border border-black bg-red-500 rounded-lg'>

      </motion.div>
      <motion.div
      initial={{
        opacity:0,
        x:-10
       }}
       animate={{
        opacity:1,
        x:0
       }}
       transition={{
        duration:0.7,
        ease:"easeInOut"
       }}

      
      className='w-[300px] h-[70px] border border-black bg-pink-300 rounded-lg'>

      </motion.div>
      <motion.div
       initial={{
        opacity:0,
        x:-10
       }}
       animate={{
        opacity:1,
        x:0
       }}
       transition={{
        duration:0.8,
        ease:"easeInOut"
       }}

      
      className='w-[300px] h-[70px] border border-black bg-blue-300 rounded-lg'>

      </motion.div>
      <motion.div
     
      initial={{
        opacity:0,
        x:-10
       }}
       animate={{
        opacity:1,
        x:0
       }}
       transition={{
        duration:0.9,
        ease:"easeInOut"
       }}
      className='w-[300px] h-[70px] border border-black bg-gray-500 rounded-lg'>

      </motion.div>
      <motion.div 
       initial={{
        opacity:0,
        x:-10
       }}
       animate={{
        opacity:1,
        x:0
       }}
       transition={{
        duration:0.10,
        ease:"easeInOut"
       }}
className='w-[300px] h-[70px] border border-black bg-yellow-500 rounded-lg'>

      </motion.div>
      <motion.div 
       initial={{
        opacity:0,
        x:-10
       }}
       animate={{
        opacity:1,
        x:0
       }}
       transition={{
        duration:0.11,
        ease:"easeInOut"
       }}
className='w-[300px] h-[70px] border border-black bg-cyan-200-500 rounded-lg'>

      </motion.div>
    </div>
  )
}

export default featuer
