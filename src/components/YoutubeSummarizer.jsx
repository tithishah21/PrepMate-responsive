import React, { useState } from "react";
import axios from "axios";
import PMlogo from "../assets/PMLogo.svg";
import { useNavigate } from "react-router-dom";
import Arrow_right from "../assets/Arrow_right.svg";

const YoutubeSummarizer = () => {
    const [videoUrl, setVideoUrl] = useState({
        link: ""
    });
    const [loading, setLoading] = useState(false);  // Loading state
    const [summary, setSummary] = useState("");  // State to store the summary

    const [errorMessage, setErrorMessage] = useState("");  // Error state
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/dashboard");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVideoUrl((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!videoUrl.link) {
            setErrorMessage("Please fill in all fields.");
            return;
        }
        setLoading(true);
        setErrorMessage(""); // Clear previous errors
    
        try {
            const response = await axios.post("http://localhost:3000/youtube-summary", videoUrl);
            
            // Store the summary in state
            setSummary(response.data.msg);
    
            // Optionally store the summary in localStorage if needed
            localStorage.setItem("summary", response.data.msg);
    
            // Navigate to the summary page
            navigate("/youtubeSummarizer/summary");
        } catch (err) {
            console.error("Error:", err.response?.data?.message || "Could not fetch the summary.");
            setErrorMessage(err.response?.data?.message || "Could not fetch the summary.");
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="lg:flex w-[360px] lg:w-[1304px] h-[770px] lg:h-[794px] bg-[rgba(254,255,255,0.14)] rounded-[32px]">
                    <div className="Logo w-[326px] h-[97px] relative">
                        <div className="absolute top-10 lg:top-80 left-4 lg:left-30 w-[330px] lg:w-[600px]">
                            <img src={PMlogo} className="w-[400px]" alt="PM Logo" />
                        </div>
                    </div>
                    <div className="user-input absolute top-75 lg:top-20 lg:right-55">
                        <h1 className="text-white font-poppins text-3xl lg:text-5xl font-[700]">Youtube Summarizer</h1>
                        <h3 className="text-white font-poppins text-xl lg:text-3xl font-[600] mt-5">Upload the youtube video link below...</h3>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="url"
                            name="link"
                            value={videoUrl.link}
                            onChange={handleChange}
                            placeholder="Enter Youtube Video URL"
                            className="mt-90 lg:mt-90 p-2 rounded-md border-b-1 ml-0 lg:ml-90 w-[99%] lg:w-[59%] placeholder-white text-white focus:outline-none"
                        />

                        {errorMessage && (
                            <div className="text-red-500 mt-2">{errorMessage}</div>
                        )}

                        <button
                            type="submit"
                            className="mt-21 lg:mt-13 ml-0 lg:ml-103 w-[360px] lg:w-[550px] h-[40px] bg-[rgba(0,134,255,1)] rounded-xl text-white text-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            disabled={loading}
                        >
                            {loading ? "Loading..." : "Upload"}
                        </button>
                    </form>
                </div>

                <button onClick={goBack}>
                    <img src={Arrow_right} className="cursor-pointer w-[30px] lg:w-[55px] h-[auto] absolute top-10 lg:top-15 left-6 lg:left-35" alt="Back Arrow" />
                </button>
            </div>
        </>
    );
};

export default YoutubeSummarizer;
