import React from "react";
import { Link,useNavigate } from "react-router-dom";
import logo from "../assets/logo1.svg";
const Navbar = ({ text, isDashboard })=>{
    const navigate = useNavigate();
    const signUp = () => {
      navigate("/register");
    }
    
    const buttonStyle = text === "Sign Up" ? {background: "linear-gradient(to right, rgba(113,153,255,1), rgba(37,70,153,1))"} : {background: "linear-gradient(to right, rgb(203, 156, 236), rgb(35, 14, 98))"}
    return (
        <>
            <nav className = "nav sticky w-full h-25 bg-black ">
                        <div className = "flex justify-between relative">
                            <Link to = "/"><img src = {logo} alt = "logo" className = "p-3 w-[155px] cursor-pointer" style={{ position: "absolute", top: "25px", left: "52px" }}></img></Link>
                            {isDashboard && (
                                <div className = "flex items-center ml-35 mt-1">
                                   <Link 
                                    to="/youtubeSummarizer" 
                                    className="relative font-poppins p-3 mt-7 mr-10 text-l font-[700] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white hover:text-white"
                                    >
                                    Youtube Summariser
                                    <span className="absolute left-0 bottom-0 block h-0.5 bg-white transition-all duration-300 transform scale-x-0 hover:w-full"></span>
                                    </Link>

                                    <Link to = "/flash-card-form" className = "p-3 mt-7 mr-10 font-poppins  text-l font-[700] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white hover:text-white">Flash Cards</Link>
                                    <Link to = "/youtubeSummarizer" className = "p-3 mt-7 font-poppins  text-l font-[700] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white hover:text-white">Youtube Summariser</Link>
                                </div>
                            )}
                            <button
                                className="rounded-2xl relative top-[45px] right-[45px] w-[120px] h-[30px] text-poppins text-white cursor-pointer hover:from-black hover:to-[#7199FF]"
                                style={buttonStyle}
                                onClick = {signUp}
                            >
                            {text}
                            </button>
                        </div>
            </nav>
        </>
    )
    
}

export default Navbar