import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-[#245f9bcf] text-white flex flex-row items-center font-tertiary h-[70px] p-[15px] fixed w-full'>
    <div className=''>
        <h1>Logo</h1>
    </div>
    <div className='flex w-full justify-center'>    
        <Link to="/maintree" className='px-[15px] hover:font-bold'>Home</Link>
        <Link to="/viewportal" className='px-[15px] hover:font-bold'>View Portal</Link>
    </div>
    </div>

  )
}

export default Navbar