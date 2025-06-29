import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import './InstagramButton.css';

const InstagramButton = () => {
  return (
    <a 
      href="https://www.instagram.com/_tenim.ilim/" 
      target="_blank"
      rel="noopener noreferrer"
      className="instagram-button"
      aria-label="Visit our Instagram"
    >
      <FaInstagram className="instagram-icon" />
    </a>
  );
};

export default InstagramButton;
