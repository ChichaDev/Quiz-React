import { getFromLocalStorage, setToLocalStorage } from '@/utils/getFromLocalStorage';

import useAnswerSelection from './useAnswerSelection';
import useQuestion from './useQuestion';

const useSaveQuizResults = (multiple: boolean) => {
  const { selectedAnswers, handleSelectAnswer } = useAnswerSelection({ multiple });
  const { handleNextQuestion, question, currentQuestion } = useQuestion();

  const handleSaveToLocalStorage = () => {
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

    handleNextQuestion();
  };

  return {
    selectedAnswers,
    handleSelectAnswer,
    handleSaveToLocalStorage,
    question,
    currentQuestion
  };
};

export default useSaveQuizResults;
