import { useCallback } from 'react';

import type { Answer } from '@/types';
import { getFromLocalStorage, setToLocalStorage } from '@/utils/getFromLocalStorage';

interface QuizData {
  order: number;
  title: string;
  type: string;
  answer: Answer[];
}

const useQuizLocalStorage = () => {
  const saveQuizData = useCallback(
    (currentQuestion: number, question: QuizData, selectedAnswers: string) => {
      if (question) {
        const quizData: QuizData = {
          order: currentQuestion + 1,
          title: question.name,
          type: question.type,
          answer: selectedAnswers
        };

        const existingResults = getFromLocalStorage('quizResults', []);
        const updatedResults = [...existingResults, quizData];
        setToLocalStorage('quizResults', updatedResults);
      }
    },
    []
  );

  return { saveQuizData };
};

export default useQuizLocalStorage;
