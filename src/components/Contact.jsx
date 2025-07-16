import React from 'react';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation('contact');

  return (
    <div className="page">
      <h2>{t('title')}</h2>
      <p>{t('email')}</p>
      <p>{t('phone')}</p>
      <p>{t('address')}</p>
    </div>
  );
}

export default Contact;
