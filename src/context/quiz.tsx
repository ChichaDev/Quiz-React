import { t } from 'i18next';
import React, { createContext, useState, useMemo, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { questions } from '@/constants/quiz-data';
import { useApi } from '@/hooks/useApi';
import useLanguage from '@/hooks/useLanguage';
import type { Answer, Question } from '@/types';

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
  const { quizRepository } = useApi();

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

  const questionId = id ? parseInt(id, 10) : 1;

  const question = useMemo(
    () => questions.find((q) => q.id === questionId),
    [questionId]
  );

  const handleLanguageChange = (answer: Answer) => {
    if (currentQuestion === 1) {
      switch (answer.text) {
        case 'question1.answers.answer1':
          changeLanguage('en');
          break;
        case 'question1.answers.answer2':
          changeLanguage('fr');
          break;
        case 'question1.answers.answer3':
          changeLanguage('de');
          break;
        case 'question1.answers.answer4':
          changeLanguage('es');
          break;
        default:
          break;
      }
    }
  };

  const handleSelectAnswer = (answer: Answer) => {
    if (currentQuestion === 1) {
      handleLanguageChange(answer);
    }

    if (question?.select === 'multiple') {
      if (selectedAnswers.includes(answer.text)) {
        setSelectedAnswers(selectedAnswers.filter((item) => item !== answer.text));
      } else {
        setSelectedAnswers([...selectedAnswers, answer.text]);
      }
      return;
    }

    setSelectedAnswers([answer.text]);
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
      id: question.id,
      order: currentQuestion,
      name: localizedTitle,
      type: question.type,
      answer: localizedAnswers
    };

    const existingResults: Question[] = quizRepository.fetchQuizData('quizResults') || [];

    const existingIndex = existingResults.findIndex(
      (result) => result.order === currentQuestion
    );

    if (existingIndex !== -1) {
      existingResults[existingIndex] = quizData;
    } else {
      existingResults.push(quizData);
    }

    quizRepository.saveQuizData('quizResults', existingResults);
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
