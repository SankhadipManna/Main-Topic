import React, { useState } from 'react'
import {Menu} from 'lucide-react'
const Slidebar = () => {
    const [isOpen , setIsOpen] = useState(false)
    const items =[
        {ite:"Menu"},
        {ite:"About"},
        {ite:"Home"}
    ]
  return (
    <div className='w-full h-[400px] bg-green-400'>
        {/* slidebar button  */}
      <div className='flex justify-center items-end pt-4  '>
        <button className='px-2 py-3 shadow-lg rounded-sm bg-blue-300' onClick={()=>{
            setIsOpen((prev)=>!prev)
        }}>
            <Menu className='w-7 h-7 text-red-400 font-semibold' />
            </button>
      </div>
      {/* floating slidebar  */}
      <div className={` sticky top-20 left-0 h-auto w-[300px] bg-red-300 z-50 overflow-y-auto transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0":"-translate-x-full"}`}>
        <div className='p-4 flex justify-between items-center border-b border-black '>
            <h2 className='text-2xl font-bold text-white  '>Welcome</h2>
            <button className='text-white font-bold px-2 py-1 bg-black rounded' onClick={()=>{
                setIsOpen(false)
            }}>X</button>
        </div>
        {items.map((item)=>(
                <div className='p-6'>
                    <div className='flex flex-col justify-center gap-6'>
                        <p className='text-[20px] font-bold hover:text-neutral-400 duration-200'>{item.ite}</p>
                     </div>
                </div>
        ))}
      </div>
    </div>
  )
}

export default Slidebar
