import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Card = ({ title, description }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    const cardStyle = {
        backgroundImage: "linear-gradient(to top left, rgba(20, 138, 40, 0.61) 60%, rgba(69, 174, 86, 0.61) 80%, rgba(114, 210, 122, 0.86))",
        boxShadow: "0 0 20px rgba(5, 71, 16, 0.8)",
    };

    return (
        <div className="w-[350px]">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div
                    className="relative flex flex-col justify-center items-center w-full h-[410px] rounded-2xl p-4 cursor-pointer"
                    style={cardStyle}
                    onClick={handleClick}
                >
                    <h1 className="text-3xl text-white font-semibold text-center">
                        {title}
                    </h1>
                    <p className="mt-4 text-white text-sm opacity-70">Click to see content</p>
                </div>

                <div
                    className="relative flex flex-col justify-center items-center w-full h-[410px] rounded-2xl p-6 cursor-pointer"
                    style={cardStyle}
                    onClick={handleClick}
                >
                    <p className="text-white font-normal text-base overflow-auto max-h-[350px]">
                        {description}
                    </p>
                </div>
            </ReactCardFlip>
        </div>
    );
};

export default Card;