import React, { useState, useEffect, useRef } from 'react';
import Desktop from '../assets/Desktop.png';
import OBJECTS from '../assets/OBJECTS.png';

const AboutUs = () => {
  const [aboutUsText, setAboutUsText] = useState("");
  const fullTextAboutUs = "ABOUT US";

  const [paragraphText, setParagraphText] = useState("");
  const fullTextParagraph = `PrepMate, created by four VIT University CSE students, is a platform designed to help university students succeed. We offer quizzes based on uploaded materials and YouTube videos, along with concise video summaries, and more. Our team consists of two frontend developers, a backend developer, and a designer, all working together to make studying easier and more effective.`;

  const [paragraphAnimationStarted, setParagraphAnimationStarted] = useState(false);
  const aboutUsRef = useRef(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimations();
          observer.unobserve(aboutUsRef.current); 
        }
      },
      {
        threshold: 0.2, 
      }
    );

    if (aboutUsRef.current) {
      observer.observe(aboutUsRef.current);
    }

    return () => {
      if (aboutUsRef.current) {
        observer.unobserve(aboutUsRef.current);
      }
    };
  }, []);

  const startAnimations = () => {
    let aboutUsIndex = 0;
    const aboutUsInterval = setInterval(() => {
      if (aboutUsIndex <= fullTextAboutUs.length) {
        setAboutUsText(fullTextAboutUs.substring(0, aboutUsIndex));
        aboutUsIndex++;
      } else {
        clearInterval(aboutUsInterval);
        setTimeout(() => {
          setParagraphAnimationStarted(true);
          animateParagraph();
        }, 50);
      }
    }, 200);

    const animateParagraph = () => {
      let charIndex = 0;
      const paragraphInterval = setInterval(() => {
        if (charIndex <= fullTextParagraph.length) {
          setParagraphText(fullTextParagraph.substring(0, charIndex));
          charIndex++;
        } else {
          clearInterval(paragraphInterval);
        }
      }, 5);

      return () => clearInterval(paragraphInterval);
    };
  };

  return (
    <div
      className="flex w-[400px] lg:w-[1400px]"
      style={{
        height: '810px',
        backgroundImage: `url(${Desktop})`
      }}
    >
      <div className='w-[400px] lg:w-[950px] h-[600px]' ref={aboutUsRef}> 
        <div className='text-7xl lg:text-9xl font-poppins font-[900] text-fuchsia-100 opacity-40 mx-20 mt-20 lg:mt-40'>
          {aboutUsText}
        </div>
        <div className='mx-20 my-20 text-lg lg:text-2xl font-[500] text-white opacity-90 lg:transition-colors lg:duration-200'>
          {paragraphAnimationStarted && <p>{paragraphText}</p>}
        </div>
      </div>
      <div className="hidden lg:block">
        <img src={OBJECTS} className="w-[650px] h-[350px] my-50" alt="Objects" />
      </div>

    </div>
  );
};

export default AboutUs;