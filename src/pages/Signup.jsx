import React, { useState } from 'react'
import image from '../images/signup-image.jpg'
import { FaUser } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { ImProfile } from "react-icons/im";
import { FaLock } from "react-icons/fa6";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { doCreateUserWithEmailAndPassword } from '../firebase/auth';
import { useAuth } from '../contexts/authContext';


function Signup() {
  const { userLoggedIn } = useAuth()
 const [typeState,setTypeState] = useState("password");
 const [isRegistering, setIsRegistering] = useState(false);
 const [nameError, setNameError] = useState("");
 const [emailError, setEmailError] = useState("");
 const [aarmanIDError, setAarmanIDError] = useState("");
 const [passwordError, setPasswordError] = useState("");

 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [aarmanID, setAarmanID] = useState("");
 const [password, setPassword] = useState("");
 const navigation = useNavigate();

 const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;

    if (name.length < 3 || name.length > 50) {
      setNameError("Name must be between 3 and 50 characters long.");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (aarmanID.length <5) {
      setAarmanIDError("Aarman ID must be more than 5 characters long.");
      isValid = false;
    } else {
      setAarmanIDError("");
    }

    if (password.length < 8 || password.length > 20) {
      setPasswordError("Password must be between 8 and 20 characters long.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (!isRegistering){
      setIsRegistering(true)
      await doCreateUserWithEmailAndPassword(email, password)
    }

    if (isValid && userLoggedIn) {
      navigation('/maintree');
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <img
          src={image}
          alt="beldex signup"
          className="h-[400px] w-[415px] ml-[25px]"
        />
        <Link to='/login' className="font-secondary text-[15px] pt-[5px] underline underline-offset-4 hover:text-red-500">
          I am already a member
        </Link>
      </div>
      <div>
        <h1 className="flex flex-col font-primary text-[50px] drop-shadow-lg mr-[150px] mt-[15px]">
          Sign Up
        </h1>
        
        <div className="flex items-center border-b-2 border-black mt-[15px] ml-[30px]">
          <FaUser size={20} />
          <input
            type="text"
            className="p-2 outline-none font-secondary text-[20px]"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        {nameError && <p className="text-red-500">{nameError}</p>}
        
        <div className="flex items-center border-b-2 border-black mt-[20px] ml-[30px]">
          <CgMail size={20} />
          <input
            type="email"
            className="p-2 outline-none font-secondary text-[20px]"
            placeholder="Gmail ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {emailError && <p className="text-red-500">{emailError}</p>}
       
        <div className="flex items-center border-b-2 border-black mt-[20px] ml-[30px]">
          <ImProfile size={20} />
          <input
            type="text"
            className="p-2 outline-none font-secondary text-[20px]"
            placeholder="Aarman ID"
            value={aarmanID}
            onChange={(e) => setAarmanID(e.target.value)}
            required
          />
        </div>
        {aarmanIDError && <p className="text-red-500">{aarmanIDError}</p>}
        
        <div className="flex items-center border-b-2 border-black mt-[20px] ml-[30px]">
          <FaLock size={20} />
          <input
            type={typeState}
            className="p-2 outline-none font-secondary text-[20px]"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor='showpassword' className='font-secondary'>
            <input onClick={() => typeState === "password" ? setTypeState("text") : setTypeState("password")} type="checkbox" id="showpassword" name="showpassword" />
              Show Password
          </label>
        </div>
        {passwordError && <p className="text-red-500">{passwordError}</p>}

        <div>
          <div
            className="flex justify-center items-center h-[30px] w-[70px] font-bold bg-[#245f9bcf] shadow-inner text-white font-secondary rounded-xl mx-[150px] my-[30px] hover:bg-[#338de1]"
            onClick={handleSubmit}
          >
            Register
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default Signup;