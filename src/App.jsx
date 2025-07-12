import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div
      className="home-page"
      style={{
        backgroundImage: "url('/learn.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
     
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="overlay" />

      {/* Navbar with translated title */}
      <div className="navbar">
        <h1>{t('home.title')}</h1>

      </div>

      {/* Language dropdown */}
      <div className="language-dropdown">
        <select onChange={changeLanguage}>
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="sw">SW</option>
          <option value="rw">RW</option>
        </select>
      </div>

      {/* Center text */}
    <div className="center-text">
  <p>{t('home.message')}</p>
  <p>{t('home.paragraph')}</p> 
</div>

    </div>
  );
}

export default App;
