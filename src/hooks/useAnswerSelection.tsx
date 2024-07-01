import { useState } from 'react';

import type { Answer } from '@/types';

type UseAnswerSelectionProps = {
  multiple: boolean;
};

const useAnswerSelection = ({ multiple }: UseAnswerSelectionProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const handleSelectAnswer = (answer: Answer) => {
    if (multiple) {
      if (selectedAnswers.includes(answer.text)) {
        setSelectedAnswers(selectedAnswers.filter((item) => item !== answer.text));
      } else {
        setSelectedAnswers([...selectedAnswers, answer.text]);
      }
    } else {
      setSelectedAnswers([answer.text]);
    }
  };

  return {
    selectedAnswers,
    handleSelectAnswer
  };
};

export default useAnswerSelection;
