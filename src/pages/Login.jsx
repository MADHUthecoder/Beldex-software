import React from 'react'
import { Link } from 'react-router-dom';
import image from '../images/login-image.jpg'
import { ImProfile } from "react-icons/im";
import { FaLock } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

function login() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col justify-center items-center">
          <img
            src={image}
            alt="beldex signup"
            className="h-[350px] w-[300px]"
          />
          <Link to="/" className="font-secondary text-[15px] pt-[5px] underline underline-offset-4 hover:text-red-500">
            Create an Account
          </Link>
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
            <Link to='/maintree'
              type="submit"
              className="flex justify-center items-center h-[30px] w-[70px] font-bold bg-[#245f9bcf] shadow-inner text-white font-secondary rounded-xl mx-[150px] my-[30px] hover:bg-[#338de1] ">
              Login
            </Link>
          </div>
          <div className='flex flex-row space-x-4'>
          <h1 className='font-secondary text-[18px] pl-[40px] '>Or login with</h1>
          <div className='flex pt-[25px]'></div>
          <FaEnvelope size={25}/>
          <FaSquareFacebook size={25}/>
          <FaSquareXTwitter size={25}/>
          </div>
          </div>
        </div>
      </div>
  );
}

export default login