import React from 'react';
import './AboutUs.css';
import { translations } from '../translations';
import { useLanguage } from '../context/LanguageContext';
import google from '../assets/google_meet.png';
import zoom from '../assets/zoom_3.png';
const AboutUs = () => {
  const { language } = useLanguage();
  
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h2 className="about-us-title">{translations[language].aboutUsTitle}</h2>
        
        <p className="about-us-description">
          {translations[language].aboutUsIntro}
        </p>
        
        {/* History section with illustrations */}
        <div className="history-section">
          <div className="history-timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                <span>📅</span>
              </div>
              <div className="timeline-content">
                <h4 className="subtitle_timeline">{translations[language].timelineExperience}</h4>
              </div>
            </div>
            
            
            <div className="timeline-item">
              <div className="timeline-icon">
                <span>🌐</span>
              </div>
              <div className="timeline-content">
                <h4 className="subtitle_timeline">{translations[language].timelineInterpreters}</h4>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-icon">
                <span>🧭</span>
              </div>
              <div className="timeline-content">
                <h4 className="subtitle_timeline">{translations[language].timelineGuides}</h4>
              </div>
            </div>

            
          </div>
          
          <p className="about-us-description">
            {/* {translations[language].aboutUsHistory} */}
            <div className="subtitle">{translations[language].aboutUsHistory}</div>
          </p>
        </div>
        
        <div className="about-us-features">
          <h3>{translations[language].aboutUsWeOffer}</h3>
          <ul className="feature-list">
            <li>
              <div className="feature-number">1</div>
              <div className="feature-image">
                <span>📚</span>
              </div>
              <div className="feature-content">
                {translations[language].aboutUsFeature1}
              </div>
            </li>
            <li>
              <div className="feature-number">2</div>
              <div className="feature-image">
                <span>⏰</span>
              </div>
              <div className="feature-content">
                {translations[language].aboutUsFeature2}
              </div>
            </li>
            <li>
              <div className="feature-number">3</div>
              <div className="feature-image">
                <span>📅</span>
              </div>
              <div className="feature-content">
                {translations[language].aboutUsFeature3}
              </div>
            </li>
            <li>
              <div className="feature-number">4</div>
              <div className="feature-image">
                <span>🗣️</span>
              </div>
              <div className="feature-content">
                {translations[language].aboutUsFeature4}
              </div>
            </li>
          </ul>
        </div>
        
        <div className="course-info-section">
          <h3 className="course-info-title">{translations[language].howCourseTitle}</h3>
          <div className="course-info-content">
            <div className="platform-icons">
              <div className="platform-icon">
                <img src={google} alt="Google Meet" className="platform-logo" />
                <div>Google Meet</div>
              </div>
              <div className="platform-icon">
                <img src={zoom} alt="Zoom" className="platform-logo" />
                <div>Zoom</div>
              </div>
            </div>
            <p className="course-info-description">
              {translations[language].courseInfo}
            </p>
          </div>
        </div>
        
     
      </div>
    </div>
  );
};

export default AboutUs;
