import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import component from "../assets/Component 1.png";
import Card from "./Card";
import Navbar from "./Navbar";

const FlashCards = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const flashCards = location.state?.flashCards || [];

    // Organize cards into rows of 3
    const rows = [];
    for (let i = 0; i < flashCards.length; i += 3) {
        rows.push(flashCards.slice(i, i + 3));
    }

    if (!location.state?.flashCards) {
        navigate("/fc");
        return null;
    }
    if (!flashCards.length) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-white text-2xl">No flashcards available. Please upload a file first.</p>
            </div>
        );
    }
    return (
        <section
            className="Hero w-full min-h-screen bg-cover bg-center pt-10 pb-20"
            style={{ backgroundImage: `url(${component})` }}
        >
            <Navbar isDashboard={true} text="Sign Out" />
            <div className="flex flex-col justify-between mt-10 ml-50 space-y-20">
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex space-x-8">
                        {row.map((card, cardIndex) => (
                            <Card 
                                key={cardIndex}
                                title={card.title} 
                                description={card.content} 
                            />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FlashCards;