import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import image from "../images/login-image.jpg";
import { ImProfile } from "react-icons/im";
import { FaLock } from "react-icons/fa6";
import { IoLogoGoogle } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
  doSignInWithTwitter,
} from "../firebase/auth";
import { useAuth } from "../contexts/authContext";
import { TwitterAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase";

function Login() {
  const { userLoggedIn } = useAuth();
  const [typeState, setTypeState] = useState("password");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 8 || password.length > 20) {
      setPasswordError("Password must be between 8 and 20 characters long.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password);
    }

    if (isValid & userLoggedIn) {
      navigation("/maintree");
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().then((res)=>{navigation("/maintree");}).catch((err) => {
        setIsSigningIn(false);
      });
      
    }
  }

  const onTwitterSignIn = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      // doSignInWithTwitter().catch((err) => {
      //   setIsSigningIn(false);
      // });
        const provider = new TwitterAuthProvider();
        signInWithPopup(auth, provider).then((res)=>{
          console.log(res)
        }).catch((error) => {
            alert(error.message);
        })
      };
  }

    return (
      <div>
        {/* {userLoggedIn && <Navigate to={"/maintree"} replace={true} />} */}

        <div className="flex items-center justify-center">
          <div className="flex flex-col justify-center items-center mt-[35px]">
            <img
              src={image}
              alt="beldex signup"
              className="h-[350px] w-[300px]"
            />
            <Link
              to="/"
              className="font-secondary text-[15px] pt-[5px] underline underline-offset-4 hover:text-red-500"
            >
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
                className="p-2 outline-none font-secondary text-[20px] w-[350px]"
                placeholder="Mail ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {emailError && <p className="text-red-500">{emailError}</p>}

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
              <label htmlFor="showpassword" className="font-secondary">
                <input
                  onClick={() =>
                    typeState === "password"
                      ? setTypeState("text")
                      : setTypeState("password")
                  }
                  type="checkbox"
                  id="showpassword"
                  name="showpassword"
                />
                Show Password
              </label>
            </div>
            {passwordError && <p className="text-red-500">{passwordError}</p>}
            <Link to='/forgotpassword' className="font-secondary hover:text-red-500 hover:underline flex justify-end mt-[10px]">
              Forgot Password?
            </Link>
            <div>
              <div
                className="flex justify-center items-center h-[30px] w-[70px] font-bold bg-[#245f9bcf] shadow-inner text-white font-secondary rounded-xl mx-[150px] my-[30px] hover:bg-[#338de1] "
                onClick={handleSubmit}
              >
                Login
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <h1 className="font-secondary text-[18px] pl-[40px] ">
                Or login with
              </h1>
              <div className="flex pt-[25px]"></div>
              <IoLogoGoogle onClick={onGoogleSignIn} size={25} />
              <FaSquareXTwitter onClick={onTwitterSignIn} size={25} />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login;
