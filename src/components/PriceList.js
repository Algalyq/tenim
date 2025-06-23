import React, { useState } from 'react';
import './PriceList.css';
import { useLanguage } from '../context/LanguageContext';
import nyc2 from '../assets/nyc_4.jpg';
import individualImg from '../assets/friends_1.jpg';
import miniGroupImg from '../assets/friends_3.jpg';
import pairImg from '../assets/friends_2.jpg';
import dailyImg from '../assets/nyc_1.jpg';
import expressImg from '../assets/nyc_2.jpg';
import trialImg from '../assets/nyc_3.jpg';
const PriceList = () => {
  const { language } = useLanguage();
  
  // State to track the selected price type
  const [selectedType, setSelectedType] = useState('individual');

  // Hardcoded content due to translation file issues
  const content = {
    ru: {
      title: 'Выбери свой тариф',
      individual: {
        title: 'ИНДИВИДУАЛЬНО',
        description: [
          '📌 Только ты и преподаватель',
          '📌 Гибкий график и персональный подход'
        ],
        options: [
          '2 раза в неделю по 60 мин — 32 000 ₸/мес',
          '3 раза в неделю по 60 мин — 48 000 ₸/мес'
        ]
      },
      miniGroup: {
        title: 'МИНИ-ГРУППА',
        description: [
          '📌 Общение, практика, мотивация (до 4 человек)',
          '📌 Идеально для разговорного уровня'
        ],
        options: [
          '2 раза в неделю по 80 мин — 24 000 ₸/мес',
          '3 раза в неделю по 80 мин — 36 000 ₸/мес'
        ]
      },
      pair: {
        title: 'ЗАНЯТИЯ В ПАРЕ',
        description: [
          '📌 С другом, партнёром или коллегой',
          '📌 Весело и выгодно!'
        ],
        options: [
          '2 раза в неделю по 60 мин — 28 000 ₸/мес с чел.',
          '3 раза в неделю по 60 мин — 42 000 ₸/мес с чел.'
        ]
      },
      daily: {
        title: 'КАЖДЫЙ ДЕНЬ',
        description: [
          '📌 20 минут в день, 5 раз в неделю',
          '📌 Для занятых, кто хочет системности'
        ],
        options: [
          '32 000 ₸/мес'
        ]
      },
      express: {
        title: 'ЭКСПРЕСС',
        description: [
          'За полтора месяца 1 уровень в скоростном режиме',
          '📌 5 раз в неделю по 60 минут'
        ],
        options: [
          '100 000 ₸/мес'
        ]
      },
      trial: {
        title: 'ПРОБНЫЙ УРОК',
        options: [
          'Бесплатно (45 мин)'
        ]
      }
    },
    kz: {
      title: 'Өз тарифыңды таңда',
      individual: {
        title: 'ЖЕКЕ САБАҚТАР',
        description: [
          '📌 Тек сен және ұстаз',
          '📌 Икемді кесте мен жеке тәсіл'
        ],
        options: [
          'Аптасына 2 рет, 60 минут – 32 000 ₸/ай',
          'Аптасына 3 рет, 60 минут – 48 000 ₸/ай'
        ]
      },
      miniGroup: {
        title: 'МИНИ-ТОП',
        description: [
          '📌 Қарым-қатынас, тәжірибе, мотивация  (4 адамға дейін)',
          '📌 Сөйлесу дағдысын дамыту үшін тамаша'
        ],
        options: [
          'Аптасына 2 рет, 80 минут – 24 000 ₸/ай',
          'Аптасына 3 рет, 80 минут – 36 000 ₸/ай'
        ]
      },
      pair: {
        title: 'ЖҰППЕН САБАҚТАР',
        description: [
          '📌 Досыңмен, әріптесіңмен немесе жұбайыңмен',
          '📌 Қызықты әрі тиімді!'
        ],
        options: [
          'Аптасына 2 рет, 60 минут – 28 000 ₸/ай (адам басына)',
          'Аптасына 3 рет, 60 минут – 42 000 ₸/ай (адам басына)'
        ]
      },
      daily: {
        title: 'КҮН САЙЫН',
        description: [
          '📌 Күніне 20 минут, аптасына 5 рет (жеке)',
          '📌 Уақыты тығыз, бірақ жүйелілік керек адамдарға'
        ],
        options: [
          '32 000 ₸/ай'
        ]
      },
      express: {
        title: 'ЭКСПРЕСС-БАҒДАРЛАМА',
        description: [
          '1,5 айда 1 деңгей — жылдам нәтиже!',
          '📌 Аптасына 5 рет, 60 минут'
        ],
        options: [
          '100 000 ₸/ай'
        ]
      },
      trial: {
        title: 'СЫНАҚ САБАҒЫ',
        options: [
          'Тегін (45 мин)'
        ]
      }
    }
  };
  
  // Function to render a pricing option card
  const renderPricingCard = (typeKey, type) => (
    <div className="pricing-card" key={typeKey}>
      <h3 className="pricing-title">{type.title}</h3>
      
      {type.description && (
        <div className="pricing-description">
          {type.description.map((desc, i) => (
            <p key={i}>{desc}</p>
          ))}
        </div>
      )}
      
      <div className="pricing-options">
        {type.options.map((option, i) => (
          <p key={i} className="price-option">{option}</p>
        ))}
      </div>
      
      {typeKey === 'trial' && (
        <a href="#contact" className="trial-button" style={{ textDecoration: 'none' }}>
          {language === 'ru' ? 'ЗАПИСАТЬСЯ' : language === 'kz' ? 'ЖАЗЫЛУ' : 'SIGN UP'}
        </a>
      )}
    </div>
  );

  // Get course types excluding 'title'
  const courseTypes = Object.keys(content[language]).filter(key => key !== 'title');
  
  return (
    <div className="price-list-container" id="courses">
    {/* <div className="hero-section" style={{ backgroundImage: `url(${nyc2})` }}> */}
      <h2 className="price-list-title">{content[language].title}</h2>
      
      <div className="price-tabs">
        {courseTypes.map(typeKey => (
          <button 
            key={typeKey}
            className={`price-tab ${selectedType === typeKey ? 'active' : ''}`}
            onClick={() => setSelectedType(typeKey)}
          >
            {content[language][typeKey].title}
          </button>
        ))}
      </div>
      
      <div className="pricing-content">
        {courseTypes.map(typeKey => (
          <div 
            key={typeKey} 
            className={`pricing-panel ${selectedType === typeKey ? 'active' : ''}`}
          >
            {renderPricingCard(typeKey, content[language][typeKey])}
          </div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default PriceList;
