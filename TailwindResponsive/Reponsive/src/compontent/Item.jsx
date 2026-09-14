import React from 'react'
import {motion} from 'motion/react'
const Item = () => {
  return (
    <div className='max-h-auto w-full p-10 bg-neutral-200 '>
      <div className='flex justify-between gap-4 flex-wrap md:flex-row'>
        <motion.div
        initial={{
          y:-100,
          opacity:0,
        }}
        animate={{
          opacity:1,
          y:0
        }}
        transition={{
          duration:0.6,
          ease:"easeOut"
        }}
        className='w-[200px] h-[300px] bg-red-400 rounded-lg '>

        </motion.div>
        <motion.div
        initial={{
          y:-100,
          opacity:0,
        }}
        animate={{
          opacity:1,
          y:0
        }}
        transition={{
          duration:0.7,
          ease:"easeOut"
        }}
        className='w-[200px] h-[300px] bg-red-400 rounded-lg '>

        </motion.div>
        <div className='w-[200px] h-[300px] bg-red-400 rounded-lg '>

        </div>
        <div className='w-[200px] h-[300px] bg-red-400 rounded-lg '>

        </div>
        <div className='w-[200px] h-[300px] bg-red-400 rounded-lg '>

        </div>
        <div className='w-[200px] h-[300px] bg-red-400 rounded-lg '>

        </div>
        <div className='w-[200px] h-[300px] bg-red-400 rounded-lg '>

        </div>
      </div>
    </div>
  )
}

export default Item
