import React, { useEffect, useState } from 'react';
import './LoadingPage.css';
import previewTrackImg from '../assets/Preview_track.png';

const LoadingPage = ({ onLoadingComplete }) => {
  const [text, setText] = useState('');
  const fullText = "Hi, idk txt";
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(prevText => prevText + fullText.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 150); // typing speed

    return () => clearInterval(typingInterval);
  }, []);

  // Simulate loading completion
  useEffect(() => {
    if (isTypingComplete) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
        if (onLoadingComplete) {
          onLoadingComplete();
        }
      }, 1500); // delay after typing completes

      return () => clearTimeout(timeout);
    }
  }, [isTypingComplete, onLoadingComplete]);

  return (
    <div 
      className={`loading-page ${!isLoading ? 'fade-out' : ''}`} 
      style={{ backgroundImage: `url(${previewTrackImg})` }}
    >
      <div className="loading-content">
        <h1 className="loading-title">{text}</h1>

        <h1 className="second">{text}</h1>
        {/* <div className="loading-indicator">
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
        </div> */}
      </div>
    </div>
  );
};

export default LoadingPage;
