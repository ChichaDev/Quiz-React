import React, { createContext, useState, useMemo, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { questions } from '@/constants/quiz-data';
import type { Answer, Question } from '@/types';
import { getFromLocalStorage, setToLocalStorage } from '@/utils/getFromLocalStorage';

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

  const handleSelectAnswer = (answer: Answer) => {
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
    if (question) {
      const quizData = {
        order: currentQuestion,
        title: question.name,
        type: question.type,
        answer: selectedAnswers
      };

      const existingResults = getFromLocalStorage('quizResults', []);

      const updatedResults = [...existingResults, quizData];

      setToLocalStorage('quizResults', updatedResults);
    }
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
