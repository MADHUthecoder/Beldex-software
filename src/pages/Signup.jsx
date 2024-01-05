import React from 'react'
import image from '../images/signup-image.jpg'
import { FaUser } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { ImProfile } from "react-icons/im";
import { FaLock } from "react-icons/fa6";

function signup() {
  return (
    <div className="flex">
      <div className="flex flex-col justify-center items-center">
        <img
          src={image}
          alt="beldex signup"
          className="h-[400px] w-[415px] ml-[275px] mt-[85px]"
        />
        <button className="font-secondary text-[15px] pl-[207px] pt-[5px] underline underline-offset-4 hover:text-red-500">
          I am already a member
        </button>
      </div>
      <div>
        <h1 className="flex flex-col font-primary text-[50px] drop-shadow-lg mt-[60px] mr-[150px]">
          Sign Up
        </h1>
        <div className="flex items-center border-b-2 border-black mt-[40px] ml-[30px]">
          <FaUser size={20} />
          <input
            type="text"
            className="p-2 outline-none font-secondary text-[20px]"
            placeholder="Name"
            required
          />
        </div>
        <div className="flex items-center border-b-2 border-black mt-[20px] ml-[30px]">
          <CgMail size={20} />
          <input
            type="email"
            className="p-2 outline-none font-secondary text-[20px]"
            placeholder="Gmail ID"
            required
          />
        </div>
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
            className="h-[30px] w-[65px] bg-[#3384D3CF] shadow-inner text-white font-secondary rounded-xl mx-[150px] my-[30px] hover:bg-[#79b0e4] hover:text-black"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default signup