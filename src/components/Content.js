import React from 'react';
import nyc2 from '../assets/preview.jpg';
import friends1 from '../assets/friends_3.jpg';
import previewNyc from '../assets/usa.jpg';
import './Content.css';
import { translations } from '../translations.js';
import { useLanguage } from '../context/LanguageContext';

const Content = () => {
  const { language, changeLanguage } = useLanguage();
  
  const whatsappLink = 'https://wa.me/77757962363?text=Hello, I am interested in your program(Бұл мысал, адам қандай тіл таңдап қарағанға байланысты сондай msg келеді)';
  return (
    <div className="content-container">
      {/* Language Selector */}
      <div className="hero-section" style={{ backgroundImage: `url(${nyc2})` }}>
        {/* Navigation Bar */}
        <header className="navbar">
          <div className="logo">Tenim</div>
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
              <div className="tv-icon"></div>
            </div>
            
            {/* NYC image with speech bubble */}
            <div className="image-container nyc-image">
              <img src={previewNyc} className="rotated-image" alt="New York City preview" />
              <div className="speech-bubble right">
                <div className="bubble-text">{translations[language].utp_2}</div>
              </div>
            </div>
            
            {/* Icons */}
            <div className="icon-star left"></div>
            <div className="icon-trophy"></div>
            <div className="icon-star right"></div> 
          </div>
          
          <div className="button-container">
            <a href={whatsappLink} className="cta-button" style={{ textDecoration: 'none' }}>{translations[language].readMore}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;