import React from 'react'
import image from '../images/signup-image.jpg'
import { FaUser } from "react-icons/fa";

function signup() {
  return (
    <div className='flex'>
      <div className='flex flex-col justify-center items-center'>
        <img src={image} alt='beldex signup' className='h-[400px] w-[415px] ml-[275px] mt-[90px]'/>
        <h1 className='font-secondary text-[15px] pl-[207px] pt-[5px] underline underline-offset-4'>I am already a member</h1>
      </div>
      <div>
        <h1 className='font-primary text-[50px] drop-shadow-lg my-[70px] mr-[150px]'>Sign Up</h1>
        <div>
          <input type='text' className='border-b outline-none'/> <FaUser size={20}/>
        </div>
      </div>
    </div>
  )
}

export default signup