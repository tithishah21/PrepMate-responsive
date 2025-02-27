import React from 'react'
import PMlogo from "../assets/PMLogo.svg";

const Verify = () => {
  return (
    <div className='text-white w-[1300px] h-[650px] bg-[#1E1E1E] ml-20 my-20 rounded-3xl flex'>
       <div className = "absolute top-80 left-50 w-[400px]">
            <img src = {PMlogo} className = "w-[400px]"></img>
        </div>
        <div className='w-[650px] h-[650px]  font-poppins font-weight-[700] text-9xl my-50 mx-7 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-white'>
        
      </div><br/>
      <div className='w-[900px] h-[650px] text-white my-10 mx-30 '>
        <h1 className=' mt-5 mb-22 text-5xl font-poppins font-[600]'>Verify Your Email Address</h1>

        <h2 className=' text-lg font-poppins font-[400]'>To complete your registration, please enter the verification code sent to your email address.</h2>


        <input type="text" placeholder="Enter the code" className='px-4 py-5 w-150 border-b-2 border-gray-600 placeholder-white focus:outline-none'></input>
        
        
        <div className='my-16'>
          <button className='bg-[#0086FF] px-70 py-2 rounded-lg cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'>Verify</button>
        </div>
        
      </div>
    </div>
  )
}

export default Verify
