import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import mailIcon from "../assets/mail_icon.png";
import lockIcon from "../assets/Lock.png";
import PMlogo from "../assets/PMLogo.svg";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [errorMessage, setErrorMessage] = useState(""); // For displaying error messages
  const [loading, setLoading] = useState(false); // To indicate login in progress

  // Handle input change
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!loginData.email || !loginData.password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setErrorMessage(""); // Clear previous errors

    try {
      const response = await axios.post("http://localhost:3000/login", loginData);
      
      console.log("Login Successful:", response.data);

      // Store user data in localStorage (optional)
      localStorage.setItem("user", JSON.stringify(response.data));

      navigate("/dashboard");
    } catch (err) {
      console.error("Login Error:", err.response?.data?.message || "Login failed");
      setErrorMessage(err.response?.data?.message || "Incorrect email or password.");
    } finally {
      setLoading(false);
      setLoginData({ email: "", password: "" });
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-black'>
      <div className='lg:flex w-[360px] lg:w-[1304px] h-[770px] lg:h-[794px] bg-[rgba(254,255,255,0.14)] rounded-[32px]'>
        
        
        <div className='absolute top-20 lg:top-80 left-8 lg:left-30 w-[330px] lg:w-[600px]'>
          <img src={PMlogo} className='w-[400px]' alt='PM Logo' />
        </div>

   
        <div className='w-[330px] lg:w-[1150px] text-white mt-60 lg:my-30 lg:ml-160 lg:mr-10  lg:px-10'>
          <h1 className='text-3xl lg:text-5xl font-poppins font-bold mb-8'>Hello! <br />Welcome Back...</h1>

          {errorMessage && <p className="text-red-500 bg-red-100 p-3 rounded-md mb-4">{errorMessage}</p>}

          <form onSubmit={handleFormSubmit}>
            
       
            <div className='my-6 relative'>
              <input
                type='email'
                placeholder='Your Email Address'
                className=' mt-10 p-3 border-b-2 rounded-md w-[107%] lg:w-full border-gray-600 placeholder-white text-white bg-transparent focus:outline-none'
                name='email'
                value={loginData.email}
                onChange={handleLoginChange}
              />
              <img src={mailIcon} className='w-[30px] h-[30px] right-1 absolute lg:right-5 bottom-3' alt='mail-icon' />
            </div>

       
            <div className='my-6 relative'>
              <input
                type='password'
                placeholder='Your Password'
                className='p-3 border-b-2 rounded-md w-[107%] lg:w-full border-gray-600 placeholder-white text-white bg-transparent focus:outline-none'
                name='password'
                value={loginData.password}
                onChange={handleLoginChange}
              />
              <img src={lockIcon} className='w-[30px] h-[30px] absolute right-1 lg:right-5 bottom-3' alt='lock-icon' />
            </div>

 
            <div className='my-8'>
              <button
                type='submit'
                className={`mt-10 lg:mt-10 w-[107%] lg:w-full h-[51px] bg-[#0086FF] rounded-xl text-white text-xl transition duration-300 ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>

          <div className='ml-15 lg:ml-0 lg:text-center'>
            <p>Don't have an account? 
              <Link to='/register' className='ml-1 text-[#0086FF] font-bold text-lg hover:underline'> Sign up</Link>
            </p>
            <p className='mt-4'>Forgot your password? 
              <Link to='/reset' className='ml-1 text-[#0086FF] font-bold text-lg hover:underline'> Reset</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;