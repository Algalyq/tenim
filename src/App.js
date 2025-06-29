import React, { useState, useEffect } from 'react';
import './App.css';
import Content from './components/Content';
import AboutUs from './components/AboutUs';
import Reviews from './components/Reviews';
import PriceList from './components/PriceList';
import Contact from './components/Contact';
import InstagramButton from './components/InstagramButton';
import LoadingPage from './components/LoadingPage';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <LanguageProvider>
      {loading && <LoadingPage onLoadingComplete={handleLoadingComplete} />}
      <div className={`App ${loading ? 'hidden' : ''}`}>
        <Content />
        <div id="aboutus"><AboutUs /></div>
        <div id="reviews"><Reviews /></div>
        <div id="courses"><PriceList /></div>
        <div id="contact"><Contact /></div>
        <InstagramButton />
      </div>
    </LanguageProvider>
  );
}

export default App;
