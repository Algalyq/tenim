import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './DiscountModal.css';

const DiscountModal = () => {
  const [visible, setVisible] = useState(true);
  const { language } = useLanguage();

  const handleWhatsAppNavigation = (e) => {
    e.preventDefault();
    const phoneNumber = '77757962363'; // Replace with actual WhatsApp number
    
    // Define messages for different languages
    let message = '';
    if (language === 'ru') {
      message = 'Здравствуйте! Меня заинтересовал курс «Теңім». Могли бы вы помочь мне выбрать подходящий тариф?';
    } else if (language === 'kz') {
      message = 'Сәлеметсіз бе! Мені «Теңім» курсы қызықтырды. Маған ыңғайлы тариф таңдауға көмектесе аласыздар ма?';
    } else {
      message = 'Hello! I would like to register for a trial lesson.';
    }
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  // Texts for the discount modal in different languages
  const discountText = {
    ru: {
      title: 'Специальное предложение!',
      discount: 'Скидка 15% в течение 24 часов после пробного урока!',
      callToAction: 'Успейте записаться!',
      buttonText: 'Связаться',
      whatsappMessage: 'Здравствуйте! Я хочу воспользоваться скидкой 10% на услуги.'
    },
    kz: {      
      title: 'Арнайы ұсыныс!',
      discount: 'Сынақ сабағынан кейін 24 сағат ішінде 15% жеңілдік!',    
      callToAction: 'Жазылып үлгеріңіз!',
      buttonText: 'Байланысу',
      whatsappMessage: 'Сәлем! Мен қызметтерге 10% жеңілдікті пайдаланғым келеді.'
    },
    en: {
      title: 'Special Offer',
      discount: '10% discount on all services',
      callToAction: 'Contact us through WhatsApp to use the offer',
      buttonText: 'Contact',
      whatsappMessage: 'Hello! I want to use the 10% discount on services.'
    }
  };

  // Set up modal behavior and handle persistence across reloads
  useEffect(() => {
    // Only run on initial mount
    const initialLoad = () => {
      const modalShown = localStorage.getItem('discountModalShown');
      const modalFirstAppeared = localStorage.getItem('discountModalFirstAppeared');
      const userClosedModal = localStorage.getItem('discountModalClosed');
      
      // First visit or new session
      if (!modalFirstAppeared) {
        // First appearance after 15 seconds
        const firstAppearanceTimeout = setTimeout(() => {
          setVisible(true);
          localStorage.setItem('discountModalFirstAppeared', 'true');
          localStorage.setItem('discountModalShown', 'true');
        }, 15 * 1000); // 15 seconds for first appearance
        
        return () => clearTimeout(firstAppearanceTimeout);
      }
      // If user closed the modal once, check if we should show it again
      else if (userClosedModal === 'true' && !modalShown) {
        // Reappearance after 15 seconds
        const reappearanceTimeout = setTimeout(() => {
          setVisible(true);
          localStorage.removeItem('discountModalClosed'); // Reset closed status
          localStorage.setItem('discountModalShown', 'true');
        }, 15 * 1000); // 15 seconds for reappearance
        
        return () => clearTimeout(reappearanceTimeout);
      }
      // If modal should be visible and wasn't closed
      else if (!userClosedModal) {
        setVisible(true);
      }
    };
    
    initialLoad();
    
  }, []); // Empty dependency array as we only want this to run once on mount

  // Handle close modal
  const handleClose = () => {
    setVisible(false);
    // Mark that user has closed the modal
    localStorage.setItem('discountModalClosed', 'true');
    // Reset the 'shown' flag so it can reappear later
    localStorage.removeItem('discountModalShown');
  };

  if (!visible) {
    return null;
  }

  const currentText = discountText[language] || discountText.kz;

  return (
    <div className="discount-modal-overlay">
      <div className="discount-modal">
        <button className="close-button" onClick={handleClose}>×</button>
        
        <h2>{currentText.title}</h2>
        <p className="discount-text">{currentText.discount}</p>
        <p className="call-to-action">{currentText.callToAction}</p>
        
        <a 
          onClick={handleWhatsAppNavigation}
          className="action-button"
        >
          {currentText.buttonText}
        </a>
      </div>
    </div>
  );
};

export default DiscountModal;
