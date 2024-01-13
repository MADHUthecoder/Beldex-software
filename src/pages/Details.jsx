import React, { useState } from 'react'
import { IoEyeOff } from "react-icons/io5";

function Details() {
  const [chooseColor, setChooseColor] = useState("");
  const Colors = {
    Yellow:"#FDDA0D",
    Red:"#FF6347",
    Blue:"#5FCFFF",
    Orange:"#FFA500",
    Pink:"#F88379",
    Green:"#50C878"
  }

  return (
    <div className='py-[15px] flex flex-col items-center'>
        <div className='border-2 border-black h-[80px] w-[240px] pt-[20px]' style={{backgroundColor:`${chooseColor}`}} >
            <input type='text' placeholder='User ID' className=' pl-[15px] outline-none font-tertiary text-xl bg-transparent text-black placeholder-black'/>
          <div className='border-b-2 border-black w-[240px]'></div>  
            <input type='text' placeholder='Position' className='pl-[15px] outline-none font-tertiary text-md bg-transparent text-black placeholder-black'/>
        </div>
     <div className='flex flex-row mt-[5px] font-tertiary'>
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
          <div className='flex flex-row'>
            <input type='password' className='outline-none border-b-2 border-black py-[11px]'/>
            <IoEyeOff size={15}/>
          </div>
            <input type='email' className='outline-none border-b-2 border-black py-[11px]'/>
            <input type='password' className='outline-none border-b-2 border-black py-[11px]'/>
            <input type='text' className='outline-none border-b-2 border-black py-[11px]'/>
            <input type='date' className='outline-none border-b-2 border-black py-[11px]'/>
            <input type='text' className='outline-none border-b-2 border-black py-[11px]'/>
            <input type='text' className='outline-none border-b-2 border-black py-[11px]'/>
            <select name='color' className='outline-none py-[11px]' onChange={e=>setChooseColor(e.target.value)}>
                <option value={Colors.Yellow}>Yellow </option>
                <option value={Colors.Red}>Red</option>
                <option value={Colors.Blue}>Blue</option>
                <option value={Colors.Orange}>Orange</option>
                <option value={Colors.Pink}>Pink</option>
                <option value={Colors.Green}>Green</option>
            </select>
        </div> 
        </div>  
          <div>
            <button
              type="submit"
              className="flex justify-center items-center h-[30px] w-[70px] font-bold bg-[#245f9bcf] shadow-inner text-white font-secondary rounded-xl mx-[150px] my-[7px] hover:bg-[#338de1] ">
              Save
            </button>
          </div>
    </div>

  )
}

export default Details