import { t } from 'i18next';
import React, { createContext, useState, useMemo, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { questions } from '@/constants/quiz-data';
import useLanguage from '@/hooks/useLanguage';
import type { Answer, Question } from '@/types';
import { getFromLocalStorage, setToLocalStorage } from '@/utils/localStorageUtils';

interface QuizContextProps {
  currentQuestion: number;
  question: Question | undefined;
  selectedAnswers: string[];
  totalQuestions: number;
  // eslint-disable-next-line no-unused-vars
  handleSelectAnswer: (answer: Answer) => void;
  handleNextQuestion: () => void;
  handlePreviousQuestion: () => void;
  saveResultsToStorage: () => void;
}

export const QuizContext = createContext<QuizContextProps | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { changeLanguage } = useLanguage();

  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const totalQuestions = questions.length;

  useEffect(() => {
    const questionId = id ? parseInt(id, 10) : 1;
    setCurrentQuestion(questionId);
  }, [id]);

  const questionId = id ? parseInt(id, 10) : NaN;

  const question = useMemo(
    () => questions.find((q) => q.id === questionId),
    [questionId]
  );

  const handleLanguageChange = (answer: Answer) => {
    if (currentQuestion === 1) {
      switch (answer.text) {
        case 'answer1_1':
          changeLanguage('en');
          break;
        case 'answer1_2':
          changeLanguage('fr');
          break;
        case 'answer1_3':
          changeLanguage('de');
          break;
        case 'answer1_4':
          changeLanguage('es');
          break;
        default:
          break;
      }
    }
  };

  const handleSelectAnswer = (answer: Answer) => {
    // Change language if it's the first question
    if (currentQuestion === 1) {
      handleLanguageChange(answer);
    }
    if (question?.select === 'multiple') {
      if (selectedAnswers.includes(answer.text)) {
        setSelectedAnswers(selectedAnswers.filter((item) => item !== answer.text));
      } else {
        setSelectedAnswers([...selectedAnswers, answer.text]);
      }
    } else {
      setSelectedAnswers([answer.text]);
    }
  };

  const handleNextQuestion = () => {
    saveResultsToStorage();
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswers([]);
      navigate(`/quiz/${questionId + 1}`);
    } else {
      navigate('/email');
    }
  };

  const handlePreviousQuestion = () => {
    if (questionId > 1) {
      setSelectedAnswers([]);
      navigate(`/quiz/${questionId - 1}`);
    }

    if (currentQuestion > 1) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const saveResultsToStorage = () => {
    if (!question) {
      return;
    }
    const localizedAnswers = selectedAnswers.map((answer) => t(answer));
    const localizedTitle = t(question.name);

    const quizData = {
      order: currentQuestion,
      title: localizedTitle,
      type: question.type,
      answer: localizedAnswers
    };

    const existingResults: Question[] = getFromLocalStorage('quizResults', []);

    const existingIndex = existingResults.findIndex(
      (result) => result.order === currentQuestion
    );

    if (existingIndex !== -1) {
      existingResults[existingIndex] = quizData;
    } else {
      existingResults.push(quizData);
    }

    setToLocalStorage('quizResults', existingResults);
  };

  return (
    <QuizContext.Provider
      value={{
        currentQuestion,
        question,
        selectedAnswers,
        totalQuestions,
        handleSelectAnswer,
        handleNextQuestion,
        handlePreviousQuestion,
        saveResultsToStorage
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
