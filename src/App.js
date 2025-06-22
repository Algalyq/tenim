import './App.css';
import Content from './components/Content';
import AboutUs from './components/AboutUs';
import Reviews from './components/Reviews';
import PriceList from './components/PriceList';
import Contact from './components/Contact';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Content />
        <div id="aboutus"><AboutUs /></div>
        <div id="reviews"><Reviews /></div>
        <div id="courses"><PriceList /></div>
        <div id="contact"><Contact /></div>
      </div>
    </LanguageProvider>
  );
}

export default App;
