import React from "react"
import Hero from "./Hero"
import Feature from "./Feature"
import bgpic from "../assets/bgFeature.png"
import youtube from "../assets/utube.png"
import flash from "../assets/flash-cards.png"
import AboutUs from "./AboutUs"
import ai from "../assets/ai.png"
const Landing = ({isDashboard})=>{

    return(
        <>
           <Hero text = "Sign Up" isDashboard = {isDashboard} />
            <section>
                <AboutUs />
            </section>
            <section className = "Features  m-0">
                <div className = "relative top-[0px] w-full h-screen bg-cover bg-center" style = {{backgroundImage:`url(${bgpic})`}}>

                <div className="flex justify-center lg:justify-end m-10 mr-8 lg:mr-20 relative">
                    <h1 className="p-10 font-Oxygen text-6xl lg:text-9xl font-[700] uppercase tracking-wide 
                        bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600 
                        bg-clip-text text-transparent animate-gradient">
                        FEATURES
                    </h1>
                </div>


                    
                <div className="space-y-8 lg:flex lg:space-y-0 lg:space-x-6 lg:m-50">
                    <Feature title="Youtube Summariser" image={youtube} />
                    <Feature title="Flash Cards" image={flash} />
                    <Feature title="Learn with AI" image={ai} />
                </div>

                    
                </div>
            </section>
                          
        </>
    )


}

export default Landing