import React from 'react'
import { IoMdCloseCircle } from "react-icons/io";

function Popup({setIsOpen}) {
  
  return (
    <div className="flex items-center justify-center font-tertiary h-screen">
    <div className="w-[500px] bg-gray-100 rounded-xl mt-[60px]">
      <div className="flex justify-end p-[20px]">
      <IoMdCloseCircle size={25} onClick={() => setIsOpen(false)}/>
      </div>
      <div className='flex flex-row '>
        <div className='flex flex-col px-[50px] space-y-3'>
          <label>Aarman ID:</label>
          <label>Staking Amount:</label>
          <label>Staking Plan:</label>
          <label>Staking Period:</label>
          <label>Reward %:</label>
          <p>Total Rewards:</p>
          <p>Daily Rewards:</p>
          <label>Rewards Collected:</label>
          <p>Remaining Rewards:</p>
        </div>
        <div className='flex flex-col px-[20px] space-y-3'>
              <input type='text' placeholder='ID' className='border-b-2 border-black outline-none bg-transparent'/>
              <input type='text' placeholder='Staking amount' className='border-b-2 border-black outline-none bg-transparent'/>
              <select name="plan" id="plan" className='bg-transparent'>
                <option value="select">Select</option>
                <option value="regular">Regular</option>
                <option value="fixed">Fixed</option>
                <option value="combo">Combo</option>
              </select>   
              <select name="period" id="period" className='bg-transparent'>
                <option value="select">Select</option>
                <option value="3years">3 Years</option>
                <option value="5years">5 Years</option>
              </select>  
              <select name="reward" id="reward" className='bg-transparent'>
                <option value="select">Select</option>
                <option value="3.0per">3.0 %</option>
                <option value="2.8per">2.8 %</option>
                <option value="2.6per">2.6 %</option>
                <option value="2.4per">2.4 %</option>
              </select>  
              <p>500</p>  
              <p>5</p>
              <input type='text' placeholder='Rewards Collected' className='border-b-2 border-black outline-none bg-transparent'/>
              <p>100</p>
        </div>
        </div>
        <div className='flex justify-center items-center w-full'>
          <button className=' h-[30px] w-[70px] font-bold bg-[#245f9bcf] shadow-inner text-white font-secondary rounded-xl mx-[150px] my-[30px] hover:bg-[#338de1] '>Save</button>
        </div>
    </div>
    </div>
  )
}

export default Popup