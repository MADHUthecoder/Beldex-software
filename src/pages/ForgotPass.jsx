import React from 'react'

function ForgotPass() {
  return (
    <div className='flex justify-center font-tertiary '>
      <div className=' border-black border-2 flex flex-col justify-center items-center my-[90px] rounded-xl shadow-xl'>
        <div className='m-[25px] flex flex-col justify-center'>
            <label className='p-[5px] font-bold '>Enter your Email Address</label>
            <input type="email" placeholder='Email Address' className='outline-none p-[5px] w-[300px] border-b-2'/>
        </div>
        <div className='m-[30px]'>
        <button className="flex justify-center items-center h-[30px] w-[150px] font-bold bg-[#245f9bcf] shadow-inner text-white font-secondary rounded-xl hover:bg-[#338de1]">Send Reset Link</button>
        </div>
      </div>
    </div>

  )
}

export default ForgotPass