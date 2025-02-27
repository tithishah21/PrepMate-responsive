import React from 'react'
import Desktop2 from '../assets/Desktop2.png'
import social from '../assets/social.svg'
import social2 from '../assets/social2.svg'
import social3 from '../assets/social3.svg'
import social4 from '../assets/social4.svg'
import social5 from '../assets/social5.svg'
import star from '../assets/star.png'

const Footer = () => {
  return (
    <div
      className="bg-cover bg-center relative" 
      style={{ backgroundImage: `url(${Desktop2})` }}
    > <hr className="w-full border-dashed border-t-10 border-gray-300" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#162027]/35 to-[#162027]/80"></div>

      <div className="relative z-10 flex flex-col items-center py-7"> 
        <div className="flex space-x-0.1">
          <a href="#"><img src={social} className="w-[100px] h-[100px]" alt="GitHub" /></a>
          <a href="#"><img src={social2} className="w-[100px] h-[100px]" alt="GitHub" /></a>
          <a href="#"><img src={social3} className="w-[100px] h-[100px]" alt="GitHub" /></a>
          <a href="#"><img src={social4} className="w-[100px] h-[100px]" alt="GitHub" /></a>
          <a href="#"><img src={social5} className="w-[100px] h-[100px]" alt="GitHub" /></a>
        </div>

        <div className="mt-2 mb-7 flex space-x-5 lg:space-x-20 text-white text-lg">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Events</a>
          <a href="#" className="hover:underline">Features</a>
          <a href="#" className="hover:underline">Gallery</a>
          <a href="#" className="hover:underline">Team</a>
        </div>

        <hr className="w-90 lg:w-280 my-5 border-t-2 border-gray-300" />

        <div className='text-white'> 
          &#xA9; 2025 All Rights Reserved
        </div>

        {/* <hr className="w-full my-5 border-t-2 border-gray-300" /> */}
      </div>
      <img 
        src={star} 
        alt="Corner Image" 
        className="absolute bottom-0 right-0 w-[280px] h-auto opacity-80" 
      />
    </div>
  )
}

export default Footer