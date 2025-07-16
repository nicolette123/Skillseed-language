
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css'; 

const Navbar = ({ onLanguageChange }) => {
  const { t, i18n } = useTranslation();

  const handleLangChange = (e) => {
    i18n.changeLanguage(e.target.value);
    if (onLanguageChange) onLanguageChange(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">{t('navbar.title')}</div>
      <ul className="navbar__links">
        <li>{t('navbar.home')}</li>
        <li>{t('navbar.about')}</li>
        <li>{t('navbar.contact')}</li>
      </ul>
      <select className="navbar__language" onChange={handleLangChange}>
        <option value="en">EN</option>
        <option value="fr">FR</option>
        <option value="sw">SW</option>
        <option value="rw">RW</option>
      </select>
    </nav>
  );
};

export default Navbar;
