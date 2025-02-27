
import React from "react";

const Feature = ({title,image}) => {
    return (
        <>
                <div className="flex flex-col items-center mb-10 lg:mb-0 ml-20 p-7 w-[250px] lg:w-[300px] h-[190px] lg:h-[200px] bg-[rgba(255,255,255,0.1)] rounded-xl hover:bg-[rgba(255,255,255,0.5)] hover:scale-150 hover:shadow-2xl transition-all duration-350">
                    <img src={image} alt="Image" className="w-[70px] h-[70px]" />
                        <div className="mt-4 text-white text-2xl">
                            <p>{title}</p>
                        </div>
                </div>
        </>
    );
};

export default Feature;