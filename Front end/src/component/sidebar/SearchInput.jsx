// import React from 'react'
import { FcSearch } from "react-icons/fc";


const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
      <input type="text" placeholder='search' className='input input-bordered rounded-full' />
    <button type='submit' className=' btn  btn-circle bg-sky-500/75  text-white'>
    <FcSearch className="w-6 h-6 outline-none" />


    </button>
    </form>
  )
}

export default SearchInput 