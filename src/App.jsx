import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import './i18n';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <h1 className="logo">Skillseed</h1>
          <div className="nav-links">
            <Link to="/">{t('common:nav.home')}</Link>
            <Link to="/about">{t('common:nav.about')}</Link>
            <Link to="/contact">{t('common:nav.contact')}</Link>
          </div>
          <select onChange={handleLanguageChange} className="language-select">
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="sw">Kiswahili</option>
            <option value="rw">Kinyarwanda</option>
          </select>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
