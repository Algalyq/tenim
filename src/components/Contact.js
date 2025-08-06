import React from 'react';
import './Contact.css';
import { useLanguage } from '../context/LanguageContext';
import whatsappIcon from '../assets/whatsapp.png';
import telegramIcon from '../assets/telegram_3.webp';

const Contact = () => {
  const { language } = useLanguage();

  // Hardcoded translations
  const content = {
    ru: {
      title: 'Связаться с нами',
      subtitle: 'Выберите удобный для вас способ связи',
      whatsapp: 'Написать в WhatsApp',
      telegram: 'Присоединиться к Telegram каналу'
    },
    kz: {
      title: 'Бізбен байланысу',
      subtitle: 'Өзіңізге ыңғайлы байланыс тәсілін таңдаңыз',
      whatsapp: 'WhatsApp-қа жазу',
      telegram: 'Telegram арнасына қосылу'
    }
  };

  const currentContent = content[language] || content.ru;
  const whatsappLinkKz = 'https://wa.me/77757962363';
  const whatsappLinkRu = 'https://wa.me/77757962363';
  const telegramLink = 'https://t.me/tenim_ilim';
  const whatsappLink = whatsappLinkKz;
  return (
    <div className="contact-container" id="contact">
      <div className="contact-content">
        <h2 className="contact-title">{currentContent.title}</h2>
        <p className="contact-subtitle">{currentContent.subtitle}</p>
        
        <div className="contact-methods">
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-button whatsapp-button"
          >
            <img src={whatsappIcon} alt="WhatsApp" className="contact-icon" />
            <span>{currentContent.whatsapp}</span>
          </a>
          
          <a 
            href={telegramLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-button telegram-button"
          >
            <img src={telegramIcon} alt="Telegram" className="contact-icon" />
            <span>{currentContent.telegram}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
