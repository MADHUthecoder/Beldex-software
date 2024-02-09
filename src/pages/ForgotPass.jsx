import React from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from "../firebase/firebase";

function ForgotPass() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailVal = e.target.email.value;
    sendPasswordResetEmail(auth, emailVal)
      .then(() => {
        alert("A Password Reset Link has been sent to your Email");
      })
      .catch((err) => {
        console.error(err.code);
        console.error(err.message);
      });
  };

  return (
    <div className='flex justify-center font-tertiary'>
      <div className='border-black border-2 flex flex-col justify-center items-center my-[90px] rounded-xl shadow-xl'>
        <form onSubmit={handleSubmit}>
          <div className='m-[25px] flex flex-col justify-center'>
            <label className='p-[5px] font-bold'>Enter your Email Address</label>
            <input type="email" name="email" placeholder='Email Address' className='outline-none p-[5px] w-[300px] border-b-2'/>
          </div>
          <div className='m-[30px]'>
            <button type="submit" className="flex justify-center items-center h-[30px] w-[150px] font-bold bg-[#245f9bcf] shadow-inner text-white font-secondary rounded-xl hover:bg-[#338de1]">Send Reset Link</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPass;
