import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import userIcon from "../assets/user_icon.png";
import mailIcon from "../assets/mail_icon.png";
import lockIcon from "../assets/Lock.png";
import Arrow_right from "../assets/Arrow_right.svg";
import PMlogo from "../assets/PMLogo.svg";

const Registration = () => {
    const navigate = useNavigate();

    const [registrationData, setRegistrationData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [errorMessage, setErrorMessage] = useState(""); // Store error messages

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/register", registrationData);
            
            if (response.status === 201) {
                alert("Registration successful!");
                navigate(response.data.redirect);
            }
        } catch (err) {
            console.error(err);
            setErrorMessage(err.response?.data?.msg || "Something went wrong!");
        }
    };

    const handleRegistrationChange = (e) => {
        const { name, value } = e.target;
        setRegistrationData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="lg:flex w-[360px] lg:w-[1304px] h-[770px] lg:h-[794px] bg-[rgba(254,255,255,0.14)] rounded-[32px]">
                <div className="Logo w-[326px] h-[97px] relative">
                    <div className="absolute top-10 lg:top-80 left-4 lg:left-30 w-[330px] lg:w-[600px]">
                        <img src={PMlogo} className="w-[400px]" alt="PM Logo" />
                    </div>
                </div>
                <div className="user-input absolute top-75 lg:top-20 lg:right-55">
                    <h1 className="text-white font-poppins text-3xl lg:text-5xl font-[700]">Let's Get Started</h1>
                    <h3 className="text-white font-poppins text-xl lg:text-3xl font-[600] mt-2">Create an account</h3>
                    
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>} {/* Display error messages */}

                    <div className="input-fields mt-10 lg:mt-20">
                        <form method="POST" onSubmit={handleFormSubmit}>
                            <input 
                                type="text" 
                                placeholder="Your username" 
                                className="lg:mt-5 p-2 rounded-md border-b-1 w-[96%] lg:w-full placeholder-white text-white focus:outline-none"
                                name="username"
                                value={registrationData.username}
                                onChange={handleRegistrationChange}
                            />
                            <img src={userIcon} className=" w-[39px] h-[40px] absolute right-[6%] lg:right-5 bottom-74 lg:bottom-82" alt="user-icon" />
                            
                            <input 
                                type="email" 
                                placeholder="Your Email Address" 
                                className="mt-10 lg:mt-20 p-2 rounded-md border-b-1 w-[96%] lg:w-full placeholder-white text-white focus:outline-none"
                                name="email"
                                value={registrationData.email}
                                onChange={handleRegistrationChange}
                            />
                            <img src={mailIcon} className=" w-[39px] h-[40px] absolute right-[6%] lg:right-5 bottom-52" alt="mail-icon" />
                            
                            <input 
                                type="password" 
                                placeholder="Your Password" 
                                className="mt-10 lg:mt-20 p-2 rounded-md border-b-1 w-[96%] lg:w-full placeholder-white text-white focus:outline-none"
                                name="password"
                                value={registrationData.password}
                                onChange={handleRegistrationChange}
                            />
                            <img src={lockIcon} className=" w-[39px] h-[40px] absolute right-[6%] lg:right-5 bottom-32 lg:bottom-22" alt="lock-icon" />

                            <div>
                                <button
                                    type="submit"
                                    className="mt-18 lg:mt-7 w-[360px] h-[51px] bg-[rgba(0,134,255,1)] rounded-xl text-white text-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    Sign Up
                                </button>
                            </div>
                        </form>

                        <h2 className="text-white font-poppins mt-4 lg:mt-7 absolute left-16 lg:left-40">
                            Already have an account? 
                            <span className="ml-1"> 
                                <Link to="/login" className="text-[rgba(0,134,255,1)] font-[700] text-xl hover:underline"> Login</Link>
                            </span>
                        </h2>
                    </div>
                </div>
            </div>
            <button onClick={() => navigate("/")}>
                <img src={Arrow_right} className="cursor-pointer w-[30px] lg:w-[55px] h-[auto] absolute top-10 lg:top-15 left-6 lg:left-35" alt="back-arrow" />
            </button>
        </div>
    );
};

export default Registration;