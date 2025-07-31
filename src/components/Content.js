import React from 'react';
import nyc2 from '../assets/preview.jpg';
import friends1 from '../assets/friends_3.jpg';
import previewNyc from '../assets/usa.jpg';
import './Content.css';
import logo from '../assets/Tenim_logo.png';
import { translations } from '../translations.js';
import { useLanguage } from '../context/LanguageContext';

const Content = () => {
  const { language, changeLanguage } = useLanguage();
  const handleWhatsAppNavigation = (e) => {
    e.preventDefault();
    const phoneNumber = '77757962363'; // Replace with actual WhatsApp number
    
    // Define messages for different languages
    let message = 'Сәлеметсіз бе! Мені «Теңім» курсы қызықтырды. Маған ыңғайлы тариф таңдауға көмектесе аласыздар ма?';
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };


 return (
    <div className="content-container">
      {/* Language Selector */}
      <div className="hero-section" style={{ backgroundImage: `url(${nyc2})` }}>
        {/* Navigation Bar */}
        <header className="navbar">
          <div className="logo">
            <img src={logo} className="logo-tenim"/>
          </div>
          <nav className="menu">
            <ul>
              <li><a href="#aboutus" style={{ textDecoration: 'none' }}>{translations[language].aboutUs}</a></li>
              <li><a href="#reviews" style={{ textDecoration: 'none' }}>{translations[language].review}</a></li>
              <li><a href="#courses" style={{ textDecoration: 'none' }}>{translations[language].courses}</a></li>
              <li><a href="#contact" style={{ textDecoration: 'none' }}>{translations[language].contactUs}</a></li>
            </ul>
          </nav>
          <div className="language-selector">
            <button onClick={() => changeLanguage('ru')} className={language === 'ru' ? 'active' : ''}>RU</button>
            <button onClick={() => changeLanguage('kz')} className={language === 'kz' ? 'active' : ''}>KZ</button>
          </div>
        </header>

      {/* Main content */}
      <div className="content-card">
          <div className="title-section">
            <div className="subtitle">{translations[language].learnEnglish}</div>
            <h1 className="main-title">{translations[language].englishLanguage}</h1>
            <div className="subtitle">{translations[language].throughLove}</div>
          </div>

          <div className="new-design-layout">
            {/* Friends image with speech bubble */}
            <div className="image-container friends-image">
              <img src={friends1} className="rotated-image" alt="Friends learning English" />
              <div className="speech-bubble left">
                <div className="bubble-text">{translations[language].utp_1}</div>
              </div>
            </div>
            
            {/* NYC image with speech bubble */}
            <div className="image-container nyc-image">
              <img src={previewNyc} className="rotated-image" alt="New York City preview" />
              <div className="speech-bubble right">
                <div className="bubble-text">{translations[language].utp_2}</div>
              </div>
            </div>
            
          </div>
          
          <div className="button-container">
            <a onClick={handleWhatsAppNavigation} className="cta-button" style={{ textDecoration: 'none' }}>{translations[language].readMore}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;