import React from 'react';
import './Reviews.css';
import { useLanguage } from '../context/LanguageContext';
import nursultanImg from '../assets/Nurs2.png';
import zhanikImg from '../assets/Zhanik2.jpg';

// Star rating component
const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
      ))}
    </div>
  );
};

const Reviews = () => {
  const { language } = useLanguage();
  
  // Updated hardcoded reviews with images, titles and ratings
  const reviews = {
    en: {
      title: 'Reviews',
      reviews: [
        {
          name: 'Zhanaru',
          title: '22 years old, student',
          content: 'I had a foundation, grammar at the intermediate level, but when I wanted to say something — I immediately lowered my voice, uncertainty interfered. At the "Tenim" courses, I finally felt free: I began to speak confidently, without fear. Thanks to this, I went to the USA on the Work and Travel program and calmly communicated with people. Thank you for your work and support!',
          image: zhanikImg,
          rating: 5
        },
        {
          name: 'Yerasyl',
          title: '16 years old, student',
          content: 'I\'ve always been fascinated by America. Since I was little, I learned English and dreamed of studying in the USA one day. Watching American TV series, I wanted to become a lawyer. But sometimes I was unsure of myself—my dreams seemed distant. The "Tenim" course helped me overcome that uncertainty. They believed in me, supported me. Thanks to my teachers, I began to see English not just as a subject, but as a world of opportunities. Now I am confident in myself. And I believe my dreams will come true.',
          image: nursultanImg,
          rating: 5
        }
      ]
    },
    ru: {
      title: 'Отзывы',
      reviews: [
        {
          name: 'Жанару',
          title: '22 года, студентка',
          content: 'У меня была база, грамматика на уровне intermediate, но когда хотела что-то сказать — сразу понижала голос, неуверенность мешала. На курсах «Теңім» я наконец почувствовала себя свободно: начала говорить уверенно, без страха. Благодаря этому поехала в США по программе Work and Travel и спокойно общалась с людьми. Спасибо вам за проделанную работу и поддержку!',
          image: zhanikImg,
          rating: 5
        },
        {
          name: 'Нұрсұлтан',
          title: '17 лет, школьник',
          content: 'Я хотел поступить в Назарбаев Университет. Когда узнал, что нужно сдавать IELTS, немного растерялся — времени было мало, а уровень нужно было подтянуть. Приход в «Теңім» оказался правильным решением. Здесь всё понятно и чётко. Мисс Аминат всегда поддерживали и направляли. Занятия были короткими, но очень полезными. За короткое время я добился результата — сдал IELTS с уверенностью. Теперь я на шаг ближе к своей мечте. «Теңім» — это не просто курс. Это про уверенность, мотивацию и новый взгляд на себя.',
          image: nursultanImg,
          rating: 5
        }
      ]
    },
    kz: {
      title: 'Пікірлер',
      reviews: [
        {
          name: 'Жанару',
          title: '22 жас, студент',
          content: 'Менің грамматика деңгейім — intermediate болса да, бірдеңе айтқым келсе, дауысымды бірден бәсеңдетіп, сенімсіздік кедергі келтіретін. «Теңім» курстарында өзімді ақыры еркін сезіндім: қорықпай, сенімді сөйлей бастадым. Соның арқасында Work and Travel бағдарламасы аясында АҚШ-қа барып, адамдармен еркін сөйлестім. Жасаған еңбектеріңіз бен көрсеткен қолдауларыңызға көп рақмет!',          image: zhanikImg,
          rating: 5
        },
        {
          name: 'Нұрсұлтан',
          title: '17 жаста, оқушы',
          content: 'Назарбаев Университетіне түскім келді. Бірақ IELTS тапсыру керек екенін білгенде, аздап қобалжыдым — уақытым аз, ал деңгейімді көтеру керек болды. «Теңім» курсына келгенім — дұрыс шешім болды. Мұнда бәрі түсінікті, нақты. Мисс Аминат бағыт беріп, әрқашан қолдау көрсетіп отырды. Сабақтар қысқа, бірақ өте пайдалы өтті. Қысқа уақыттың ішінде нәтиже болды — IELTS-ті сенімді түрде тапсырып шықтым. Енді арманыма бір қадам жақындадым. «Теңім» тек курс емес — бұл сенім, мотивация және өзіңе деген жаңа көзқарас.',
          image: nursultanImg,
          rating: 5
        }
      ]
    }
  };

  return (
    <div className="reviews-container">
      <h2 className="reviews-title">{reviews[language].title}</h2>
      
      <div className="reviews-list">
        {reviews[language].reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-image">
              <img className={review.name} src={review.image} alt={review.name} />
            </div>
            <div className="review-content">
              <div className="reviewer-info">
                <h3 className="reviewer-name">{review.name}</h3>
                <p className="reviewer-title">{review.title}</p>
              </div>
              <StarRating rating={review.rating} />
              <p className="review-text">{review.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
