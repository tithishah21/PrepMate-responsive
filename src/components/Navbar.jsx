import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo1.svg";

const Navbar = ({ text, isDashboard }) => {
  const navigate = useNavigate();
  const signUp = () => {
    navigate("/register");
  };

  const buttonStyle =
    text === "Sign Up"
      ? {
          background:
            "linear-gradient(to right, rgba(113,153,255,1), rgba(37,70,153,1))",
        }
      : {
          background:
            "linear-gradient(to right, rgb(203, 156, 236), rgb(35, 14, 98))",
        };

  return (
    <>
      <nav className="nav sticky w-full bg-black px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="p-3 w-[155px] cursor-pointer"
            />
          </Link>

          {/* Middle: Links (Only in Dashboard View) */}
          {isDashboard && (
            <div className="hidden lg:flex items-center space-x-6">
              <Link
                to="/youtubeSummarizer"
                className="font-poppins text-md lg:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white hover:text-white"
              >
                Youtube Summariser
              </Link>

              <Link
                to="/flash-card-form"
                className="font-poppins text-md lg:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white hover:text-white"
              >
                Flash Cards
              </Link>

              <Link
                to="/youtubeSummarizer"
                className="font-poppins text-md lg:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white hover:text-white"
              >
                Learn with AI
              </Link>
            </div>
          )}

          {/* Right: Sign Out Button (Responsive Fix) */}
          <button
            className="rounded-2xl w-[120px] h-[35px] text-white cursor-pointer hover:from-black hover:to-[#7199FF] lg:relative lg:top-[10px] lg:right-[10px] 
            flex justify-center items-center lg:inline-block"
            style={buttonStyle}
            onClick={signUp}
          >
            {text}
          </button>
        </div>

        {/* Show links below logo in small screens */}
        {isDashboard && (
          <div className="flex lg:flex-col items-center mt-3 lg:hidden">
            <Link
              to="/youtubeSummarizer"
              className="p-2 font-poppins text-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white hover:text-white"
            >
              Youtube Summariser
            </Link>

            <Link
              to="/flash-card-form"
              className="p-2 font-poppins text-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white hover:text-white"
            >
              Flash Cards
            </Link>

            <Link
              to="/youtubeSummarizer"
              className="p-2 font-poppins text-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white hover:text-white"
            >
              Learn with AI
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
