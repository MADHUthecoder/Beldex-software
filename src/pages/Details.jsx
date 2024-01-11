import React from 'react'
import { FaPencilAlt } from "react-icons/fa";

function Details(props) {
  return (
    <div className='h-screen py-[30px] flex flex-col items-center'>
        <div className='border-2 border-black h-[80px] w-[200px] pb-[40px]'>
            <h1>{props.username}</h1>
            <FaPencilAlt size={14} className='ml-auto '/>
            <div className='border-b-2 border-black h-[40px]'>
                <h1>{props.position}</h1>
            </div>
        </div>

     <div className='flex flex-row p-[10px] mt-[30px]'>
        <div className='mt-[30px] pr-[10px] text-left flex flex-col'>
            <h1 className='py-[12px]'>Aarman Password: </h1>
            <h1 className='py-[12px]'>Email ID: </h1>
            <h1 className='py-[12px]'>Email Password: </h1>
            <h1 className='py-[12px]'>Aarman Username: </h1>
            <h1 className='py-[12px]'>DOB: </h1>
            <h1 className='py-[12px]'>Contact: </h1>
            <h1 className='py-[12px]'>Total Stakings: </h1>
            <h1 className='py-[12px]'>Label colour: </h1>
        </div>
        <div className='mt-[30px] pl-[10px] text-right flex flex-col'>
            <input type='password' className='outline-none border-b-2 border-black py-[12px]'/>
            <input type='email' className='outline-none border-b-2 border-black py-[12px]'/>
            <input type='password' className='outline-none border-b-2 border-black py-[12px]'/>
            <input type='text' className='outline-none border-b-2 border-black py-[12px]'/>
            <input type='date' className='outline-none border-b-2 border-black py-[12px]'/>
            <input type='text' className='outline-none border-b-2 border-black py-[12px]'/>
            <input type='text' className='outline-none border-b-2 border-black py-[12px]'/>
            {/* <input type='color' className='outline-none border-b-2 border-black py-[12px]'/> */}
            <select name='color' value='' className='py-[12px]'>
                <option value="yellow">Yellow</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="orange">Orange</option>
                <option value="pink">Pink</option>
                <option value="green">Green</option>
            </select>
        </div> 
        </div>  
          <div>
            <button
              type="submit"
              className="flex justify-center items-center h-[30px] w-[70px] font-bold bg-[#245f9bcf] shadow-inner text-white font-secondary rounded-xl mx-[150px] my-[10px] hover:bg-[#338de1] ">
              Save
            </button>
          </div>
    </div>

  )
}

export default Details