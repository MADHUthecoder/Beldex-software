import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import image from '../images/login-image.jpg'
import { ImProfile } from "react-icons/im";
import { FaLock } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

function Login() {
  const [typeState,setTypeState] = useState("password");
  const [aarmanIDError, setAarmanIDError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [aarmanID, setAarmanID] = useState("");
 const [password, setPassword] = useState("");
 const navigation = useNavigate();

 const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
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

    if (isValid) {
      navigation('/maintree');
    }
  };

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
          <h1 className="flex flex-col font-primary text-[50px] drop-shadow-lg mt-[50px] mr-[150px]">
            Login
          </h1>
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
              type="password"
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
          <div className='font-secondary hover:text-red-500 hover:underline flex justify-end mt-[10px]'>
            Forgot Password?
          </div>
          <div>
            <div
              className="flex justify-center items-center h-[30px] w-[70px] font-bold bg-[#245f9bcf] shadow-inner text-white font-secondary rounded-xl mx-[150px] my-[30px] hover:bg-[#338de1] " 
              onClick={handleSubmit}>
              Login
            </div>
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

export default Login