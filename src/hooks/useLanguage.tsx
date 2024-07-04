import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { StorageQuizRepository, LocalStorageAdapter } from '@/api';

const useLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  const localStorageAdapter = useMemo(() => new LocalStorageAdapter(), []);

  const quizRepository = useMemo(
    () => new StorageQuizRepository(localStorageAdapter),
    [localStorageAdapter]
  );

  useEffect(() => {
    const fetchSelectedLanguage = () => {
      const selectedLanguage = quizRepository.fetchQuizData('selectedLanguage') || 'en';
      if (selectedLanguage) {
        i18n.changeLanguage(selectedLanguage);
        setLanguage(selectedLanguage);
      }
    };
    fetchSelectedLanguage();
  }, [i18n, quizRepository]);

  const changeLanguage = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
    quizRepository.saveQuizData('selectedLanguage', newLanguage);
  };

  return { language, changeLanguage };
};

export default useLanguage;
