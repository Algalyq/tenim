import React from 'react';
import './Reviews.css';
import { useLanguage } from '../context/LanguageContext';

const Reviews = () => {
  const { language } = useLanguage();
  
  // Hardcoded reviews since we had issues updating translations
  const reviews = {
    en: {
      title: 'Reviews',
      reviews: [
        {
          name: 'Zhanaru, 22 years old, student',
          content: 'I had a foundation, grammar at the intermediate level, but when I wanted to say something — I immediately lowered my voice, uncertainty interfered. At the "Tenim" courses, I finally felt free: I began to speak confidently, without fear. Thanks to this, I went to the USA on the Work and Travel program and calmly communicated with people. Thank you for your work and support!'
        },
        {
          name: 'Yerasyl, 16 years old, student',
          content: 'I\'ve always been fascinated by America. Since I was little, I learned English and dreamed of studying in the USA one day. Watching American TV series, I wanted to become a lawyer. But sometimes I was unsure of myself—my dreams seemed distant. The "Tenim" course helped me overcome that uncertainty. They believed in me, supported me. Thanks to my teachers, I began to see English not just as a subject, but as a world of opportunities. Now I am confident in myself. And I believe my dreams will come true.'
        }
      ]
    },
    ru: {
      title: 'Отзывы',
      reviews: [
        {
          name: 'Жанару, 22 года, студентка',
          content: 'У меня была база, грамматика на уровне intermediate, но когда хотела что-то сказать — сразу понижала голос, неуверенность мешала. На курсах «Теңім» я наконец почувствовала себя свободно: начала говорить уверенно, без страха. Благодаря этому поехала в США по программе Work and Travel и спокойно общалась с людьми. Спасибо вам за проделанную работу и поддержку!'
        },
        {
          name: 'Ерасыл, 16 лет, школьник',
          content: 'Мне всегда была интересна Америка. С детства я учил английский и мечтал когда-нибудь учиться в США. Смотря американские сериалы, я хотел стать адвокатом. Но иногда я не был уверен в себе — мои мечты казались далекими. Курс «Teңім» помог мне преодолеть эту неуверенность. Здесь в меня верили, поддерживали. Благодаря моим учителям, я начал видеть английский не просто как предмет, а как мир возможностей. Сейчас я уверен в себе. И я верю, что мои мечты сбудутся.'
        }
      ]
    },
    kz: {
      title: 'Пікірлер',
      reviews: [
        {
          name: 'Жанару, 22 жас, студент',
          content: 'Менің негіз бар болған, грамматика intermediate деңгейде, бірақ бірдеңе айтқым келсе — бірден дауысымды бәсеңдетіп, сенімсіздік кедергі келтіретін. «Теңім» курстарында мен өзімді ақыры еркін сезіндім: қорықпастан, сеніммен сөйлей бастадым. Соның арқасында Work and Travel бағдарламасы аясында АҚШ-қа барып, адамдармен еркін сөйлестім. Сіздердің жасаған жұмыстарыңыз бен қолдауларыңызға рахмет!'
        },
        {
          name: 'Ерасыл, 16 жаста, оқушы',
          content: 'Маған әрдайым Америка қызық болатын. Кішкентайымнан ағылшын тілін үйреніп, бір күні АҚШ-та оқимын деп армандадым. Америкалық сериалдарды көріп, адвокат болғым келді. Бірақ кейде өзіме сенімсіз болатынмын — армандарым алыс сияқты көрінді. «Teңім» курсы сол сенімсіздікті жеңуге көмектесті. Мұнда маған сенді, қолдау көрсетті. Ұстаздарымның арқасында мен ағылшын тілін тек пән емес, мүмкіндіктер әлемі ретінде көре бастадым. Қазір мен өзіме сенімдімін. Және армандарым орындалатынына сенем.'
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
            <div className="review-avatar">
              <div className="avatar-placeholder">
                {review.name.charAt(0)}
              </div>
            </div>
            <div className="review-content">
              <h3 className="reviewer-name">{review.name}</h3>
              <p className="review-text">{review.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
