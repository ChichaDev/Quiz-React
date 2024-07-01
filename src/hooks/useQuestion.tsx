import { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import type { Question } from '@/types';

type UseQuestionProps = {
  questions: Question[];
};

const useQuestion = ({ questions }: UseQuestionProps) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const totalQuestions = 5;

  useEffect(() => {
    const questionId = id ? parseInt(id, 10) : 1;
    setCurrentQuestion(questionId);
  }, [id]);

  const questionId = useMemo(() => (id ? parseInt(id, 10) : NaN), [id]);

  const question = useMemo(
    () => questions.find((q) => q.id === questionId),
    [questions, questionId]
  );

  const handleNextQuestion = () => {
    if (questionId < questions.length) {
      navigate(`/quiz/${questionId + 1}`);
    }

    if (currentQuestion < totalQuestions) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (questionId > 1) {
      navigate(`/quiz/${questionId - 1}`);
    }

    if (currentQuestion > 1) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  return {
    question,
    handleNextQuestion,
    handlePreviousQuestion,
    questionId,
    totalQuestions,
    currentQuestion
  };
};

export default useQuestion;
