import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PMlogo from "../assets/PMLogo.svg";
import Arrow_right from "../assets/Arrow_right.svg";

export default function FC() {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setError(null);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!selectedFile) {
            setError("Please select a file first.");
            return;
        }
        
        setIsLoading(true);
        setError(null);
        
        const formData = new FormData();
        formData.append("file", selectedFile);
    
        try {
            console.log("Sending request to server...");
            const response = await fetch("http://localhost:3000/flashcard", { 
                method: "POST",
                body: formData,
            });
    
            console.log("Response status:", response.status);
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to upload file");
            }
    
            const data = await response.json();
            console.log("Received data:", data);
    
            if (data.flashCards && Array.isArray(data.flashCards)) {
                console.log("Navigating to flash-cards page...");
                navigate("/flash-cards", { 
                    state: { flashCards: data.flashCards },
                    replace: true
                });
            } else {
                throw new Error("Invalid response format");
            }
        } catch (error) {
            console.error("Error during file upload:", error);
            setError(error.message || "Failed to process the file. Please try again.");
        } finally {
            setIsLoading(false);
        }
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
                    <h1 className="text-white font-poppins text-3xl lg:text-5xl font-[700]">Flash Cards Generator</h1>
                    <h3 className="text-white font-poppins text-xl lg:text-3xl font-[600] mt-5">Upload your document below</h3>
                </div>

                <form onSubmit={handleSubmit} className=" relative flex flex-col items-center mt-20">
                        <input 
                            type="file"
                            accept=".pdf,.ppt,.pptx"
                            onChange={handleFileChange}
                            className="absolute top-70 lg:top-75 lg:left-90 p-2 rounded-md border-1 lg:w-[500px] text-white focus:outline"
                        />
                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className="absolute top-95 lg:top-85 lg:left-90 mt-5 w-[360px] lg:w-[550px] h-[40px] bg-[rgba(0,134,255,1)] rounded-xl text-white text-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                        >
                            {isLoading ? "Processing..." : "Upload"}
                        </button>
                        {error && (
                            <p className=" absolute top-105 left-120 mt-4 text-red-500 w-[200px]">{error}</p>
                        )}
                </form>
            </div>

            <button onClick={() => navigate("/dashboard")}>
                <img src={Arrow_right} className="cursor-pointer w-[30px] lg:w-[55px] h-[auto] absolute top-10 lg:top-15 left-6 lg:left-35" alt="Back Arrow" />
            </button>
        </div>
    );
}