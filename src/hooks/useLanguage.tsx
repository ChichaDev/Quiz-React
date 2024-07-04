import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { getFromLocalStorage, setToLocalStorage } from '@/utils/localStorageUtils';

const useLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const selectedLanguage = getFromLocalStorage('selectedLanguage', 'en');
    if (selectedLanguage) {
      i18n.changeLanguage(selectedLanguage);
      setLanguage(selectedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
    setToLocalStorage('selectedLanguage', newLanguage);
  };

  return { language, changeLanguage };
};

export default useLanguage;
