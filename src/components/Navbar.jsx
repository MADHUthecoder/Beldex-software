import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-[#245f9bcf] text-white flex flex-row font-tertiary p-[15px]'>
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