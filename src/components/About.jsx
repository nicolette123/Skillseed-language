import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation('about');

  return (
    <div className="page">
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
      <p>{t('vision')}</p>
      <p>{t('team')}</p>
    </div>
  );
}

export default About;
