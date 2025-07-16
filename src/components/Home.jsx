import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation('home');

  return (
    <div className="page">
      <h2>{t('welcome')}</h2>
      <p>{t('description')}</p>
      <p>{t('mission')}</p>
      <p>{t('impact')}</p>
    </div>
  );
}

export default Home;
