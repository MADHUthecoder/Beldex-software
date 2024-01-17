import React, { useState } from "react";
import { IoEyeOff } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import image from "../images/detailspic.jpg"

function Details() {
  const [chooseColor, setChooseColor] = useState("");
  const Colors = {
    White: "#FFFFFF",
    Yellow: "#FDDA0D",
    Red: "#FF6347",
    Blue: "#5FCFFF",
    Orange: "#FFA500",
    Pink: "#FF69B4",
    Green: "#50C878",
  };
  const [showAarmanPassword, setShowAarmanPassword] = useState(false);
  const [showMailPassword, setShowMailPassword] = useState(false);
  
  const [aarmanPassword, setAarmanPassword] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [DOB, setDOB] = useState("");
  const [contact, setContact] = useState("");
  const [totalStaking, setTotalStaking] = useState("");

  // Add similar state variables for other input fields

  const [aarmanPasswordError, setAarmanPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [DOBError, setDOBError] = useState("");
  const [contactError, setContactError] = useState("");
  const [stakingError, setStakingError] = useState("");


 const handleAarmanPasswordChange = (value) => {
  setAarmanPassword(value);
  if (value.length < 6 || value === "") {
    setAarmanPasswordError('Aarman Password must be at least 6 characters.');
  } else {
    setAarmanPasswordError('');
  }
};

const handleEmailChange = (value) => {
  setEmail(value);
  if (!/\S+@\S+\.\S+/.test(value)) {
    setEmailError('Please enter a valid email address.');
  } else {
    setEmailError('');
  }
};

const handleEmailPassword = (value) => {
  setPassword(value);
  if(value.length < 6){
    setPasswordError("Please enter a valid password")
  }
}

const handleUserNameChange = (value) => {
  setUserName(value);
  if (value.length < 5) {
    setUserNameError('Aarman Username must be at least 5 characters.');
  } else {
    setUserNameError('');
  }
};

const handleDOBChange = (value) => {
  setDOB(value);
  if(value.length){
    setDOBError("Please enter DOB.")
  }
}

const handleContactChange = (value) => {
  setContact(value);
  if(value.length === 10){
    setContactError("Please enter a valid contact number.")
  } else{
    setContact('');
  }
};

const handleStakingChange = (value) => {
  setTotalStaking(value);
  if (value.length) {
    setStakingError('Please enter Staking amount.');
  } else {
    setStakingError('');
  }
};

const handleSubmit = () => {
  if (aarmanPassword.length < 6) {
    setAarmanPasswordError('Aarman Password must be at least 6 characters.');
  } else {
    setAarmanPasswordError('');
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    setEmailError('Please enter a valid email address.');
  } else {
    setEmailError('');
  }

  if(password.length < 8){
    setPasswordError("Please enter a valid password")
  }

  if (username.length < 5) {
    setUserNameError('Aarman Username must be at least 5 characters.');
  } else {
    setUserNameError('');
  }

  if(DOB.length === 0){
    setDOBError("Please enter DOB.")
  }

  if(contact.length < 10 || contact.length > 10){
    setContactError("Please enter a valid contact number.")
  } else{
    setContact('');
  }

  if (totalStaking.length === 0) {
    setStakingError('Please enter Staking amount.');
  } else {
    setStakingError('');
  }

}


  return (
    <div className="flex">
        <img src={image} alt="detailsimage" className="h-[460px] px-[30px] pt-[80px]"/>
    <div className="py-[15px] flex flex-col items-left px-[60px]">
      <div
        className="border-2 border-black h-[80px] w-[300px] pt-[20px] ml-[25px]"
        style={{ backgroundColor: `${chooseColor}` }}
      >
        <input
          type="text"
          placeholder="User ID"
          className=" pl-[15px] outline-none font-tertiary text-xl font-semibold bg-transparent text-black placeholder-black w-[280px]"
        />
        <div className="border-b-2 border-black w-[298px]"></div>
        <input
          type="text"
          placeholder="Position"
          className="pl-[15px] outline-none font-tertiary text-md bg-transparent text-black placeholder-black"
        />
      </div>
      <div className="flex flex-row mt-[5px] font-tertiary">
        <div className="mt-[30px] pr-[10px] text-left flex flex-col">
          <h1 className="py-[12px]">Aarman Password: </h1>
          <h1 className="py-[12px]">Email ID: </h1>
          <h1 className="py-[12px]">Email Password: </h1>
          <h1 className="py-[12px]">Aarman Username: </h1>
          <h1 className="py-[12px]">DOB: </h1>
          <h1 className="py-[12px]">Contact: </h1>
          <h1 className="py-[12px]">Total Stakings: </h1>
          <h1 className="py-[12px]">Label colour: </h1>
        </div>
        <div className="mt-[30px] pl-[10px] text-right flex flex-col">
          <div className="flex items-center">
          <div className="flex items-center">
            <input
              type={`${showAarmanPassword === true ? "text" : "password"}`}
              className="outline-none border-b-2 border-black py-[11px]"
              value={aarmanPassword}
              onChange={(e) => handleAarmanPasswordChange(e.target.value)}
            />
            {showAarmanPassword === true ? (
              <FaEye
                size={15}
                className="ml-[-20px]"
                onClick={() => setShowAarmanPassword(false)}
              />
            ) : (
              <IoEyeOff
                size={15}
                className="ml-[-20px]"
                onClick={() => setShowAarmanPassword(true)}
              />
            )}
          </div>
          {aarmanPasswordError && <p className='text-red-500 ml-4'>{aarmanPasswordError}</p>}
          </div>

          <div className="flex items-center">
          <input
            type="email"
            className="outline-none border-b-2 border-black py-[11px]"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
          />

          {emailError && <p className='text-red-500 ml-4'>{emailError}</p>}
          </div>

          <div className="flex items-center">
          <div className="flex items-center">
            <input
              type={`${showMailPassword === true ? "text" : "password"}`}
              className="outline-none border-b-2 border-black py-[11px]"
              value={password}
              onChange={(e) => handleEmailPassword(e.target.value)}
            />
            {showMailPassword === true ? (
              <FaEye
                size={15}
                className="ml-[-20px]"
                onClick={() => setShowMailPassword(false)}
              />
            ) : (
              <IoEyeOff
                size={15}
                className="ml-[-20px]"
                onClick={() => setShowMailPassword(true)}
              />
            )}
          </div>
          {passwordError && <p className='text-red-500 ml-4'>{passwordError}</p>}
          </div>

          <div className="flex items-center">
          <input
            type="text"
            className="outline-none border-b-2 border-black py-[11px]"
            value={username}
            onChange={(e) => handleUserNameChange(e.target.value)}
          />
          {userNameError && <p className='text-red-500 ml-4'>{userNameError}</p>}
          </div>

          <div className="flex items-center">
          <input
            type="date"
            className="outline-none border-b-2 border-black py-[11px] w-[185px]"
            value={DOB}
            onChange={(e) => handleDOBChange(e.target.value)}
          />
          {DOBError && <p className='text-red-500 ml-4'>{DOBError}</p>}
          </div>
            
          <div className="flex items-center"> 
          <input
            type="text"
            className="outline-none border-b-2 border-black py-[11px]"
            value={contact}
            onChange={(e) => handleContactChange(e.target.value)}
          />
          {contactError && <p className='text-red-500 ml-4'>{contactError}</p>}
          </div>

          <div className="flex items-center">
          <input
            type="text"
            className="outline-none border-b-2 border-black py-[11px]"
            value={totalStaking}
            onChange={(e) => handleStakingChange(e.target.value)}
          />
          {stakingError && <p className='text-red-500 ml-4'>{stakingError}</p>}
          </div>

      
          <select
            name="color"
            className="outline-none py-[11px] w-[185px]"
            onChange={(e) => setChooseColor(e.target.value)}
          >
            <option value={Colors.White}>White </option>
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
          className="flex justify-center items-center h-[30px] w-[70px] font-bold bg-[#245f9bcf] shadow-inner text-white font-secondary rounded-xl mx-[150px] my-[7px] hover:bg-[#338de1] "
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
     </div>
  );
}

export default Details;
