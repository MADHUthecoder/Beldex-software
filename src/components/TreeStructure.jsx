import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";

function TreeStructure(props) {
  return (
    <div className='flex justify-center items-center h-screen '>
      <div className='border-solid border-2 border-black h-[100px] w-[250px] rounded ring-2 ring-gray p-4 hover:shadow-gray-300 hover:shadow-lg flex flex-r'>
        <FaRegUserCircle size={40} className='pr-2 flex items-start justify-start'/>
        <p className='text-md font-tertiary'>{props.username}</p>
      </div>
    </div>
  )
}

export default TreeStructure