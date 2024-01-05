import React from 'react'
import image from '../images/login-image.jpg'
import { ImProfile } from "react-icons/im";
import { FaLock } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

function login() {
  return (
    <div>
      <div className="flex">
        <div className="flex flex-col justify-center items-center">
          <img
            src={image}
            alt="beldex signup"
            className="h-[350px] w-[300px] ml-[350px] mt-[100px]"
          />
          <button className="font-secondary text-[15px] pl-[330px] pt-[5px] underline underline-offset-4 hover:text-red-500">
            Create an Account
          </button>
        </div>
        <div>
          <h1 className="flex flex-col font-primary text-[50px] drop-shadow-lg mt-[60px] mr-[150px]">
            Login
          </h1>
          <div className="flex items-center border-b-2 border-black mt-[20px] ml-[30px]">
            <ImProfile size={20} />
            <input
              type="text"
              className="p-2 outline-none font-secondary text-[20px]"
              placeholder="Aarman ID"
              required
            />
          </div>
          <div className="flex items-center border-b-2 border-black mt-[20px] ml-[30px]">
            <FaLock size={20} />
            <input
              type="password"
              className="p-2 outline-none font-secondary text-[20px]"
              placeholder="Password"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="h-[30px] w-[65px] bg-[#3384D3CF] shadow-inner text-white font-secondary rounded-xl mx-[150px] my-[30px] hover:bg-[#79b0e4] hover:text-black">
              Login
            </button>
          </div>
          <div className='flex flex-row'>
          <h1 className='font-secondary text-[18px] px-[40px] py-[40px]'>Or login with</h1>
          <div className='flex px-[40px] py-[40px] '>
          <FaEnvelope size={30}/>
          <FaSquareFacebook size={30}/>
          <FaSquareXTwitter size={30}/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login