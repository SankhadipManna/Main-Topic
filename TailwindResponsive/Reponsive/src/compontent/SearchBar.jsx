import React from 'react'
import {Search} from 'lucide-react'
const SearchBar = () => {
  
  return (
    <div className='pt-10 px-4 h-[200px]'>
     <div className='mx-auto w-full max-w-xl relative'>
            <Search className='test-black font-bold absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 ' />
            <input type="text" 
             placeholder='Search...'
             id="" 
             className='h-[40px] w-full rounded-lg border-gray-300 bg-white pl-12 pr-4 text-sm text-gray-700 shadow-sm transition focus:border-red-400 focus:ring-2 focus:ring-red-200 placeholder:text-gray-500' />
     </div>
    </div>
  )
}

export default SearchBar
