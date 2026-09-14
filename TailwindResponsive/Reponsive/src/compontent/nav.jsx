import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import { motion } from "motion/react"
const Nav = () => {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
    { href: '#name', label: 'Name' },
  ]

  const [open, setOpen] = useState(false)

  return (
    <div className='px-4 py-3 relative sm:px-40'>
      <motion.div
      
      
      className='relative hidden sm:flex max-w-4xl w-auto h-10 bg-red-300 rounded-lg mx-auto items-center justify-center gap-6 shadow-sankha'>
        {links.map((link, index) => (
          <a href={link.href} key={index} className='text-gray-800 font-medium hover:text-white'>
            {link.label}
          </a>
        ))}
      </motion.div>

      <div className='flex justify-end sm:hidden'>
        <button onClick={() => setOpen(!open)} className='flex items-center justify-center rounded-md bg-red-300 p-2 shadow-sankha' aria-label='Toggle menu'>
          <Menu />
        </button>
      </div>

      {open && (
        <div className=' sm:hidden absolute left-1/2 top-14 -translate-x-1/2 w-[90%] bg-white rounded-md shadow-sankha'>
          <div className='flex flex-col bg-red-300 rounded-lg items-center justify-center gap-3 py-3 shadow-sankha'>
            {links.map((link, index) => (
              <a href={link.href} key={index} className='text-gray-800 font-medium hover:text-white'>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Nav
