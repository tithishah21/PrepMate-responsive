import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Summary = () => {
    const [summary, setSummary] = useState("");
    
    useEffect(() => {
        const storedSummary = localStorage.getItem("summary");
        if (storedSummary) {
            setSummary(storedSummary);
        } else {
            // Handle case where summary is not available (e.g., show a loading state or error)
            setSummary("No summary available.");
        }
    }, []);
    
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[80%] bg-gray-100 p-6 rounded-md">
                <h2 className="text-3xl font-bold mb-4">Summary</h2>
                <p>{summary}</p>
            </div>
        </div>
    );
};

export default Summary;
