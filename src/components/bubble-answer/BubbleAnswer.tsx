import styled from 'styled-components';

import useAnswerSelection from '@/hooks/useAnswerSelection';
import useQuestion from '@/hooks/useQuestion';
import type { Answer } from '@/types';
import { getFromLocalStorage, setToLocalStorage } from '@/utils/getFromLocalStorage';

import AnswerOption from '../answer-option/AnswerOption';
import CustomButton from '../ui/button/Button';

type BubbleAnswerProps = {
  answers: Answer[];
};

const BubbleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  align-items: center;
  justify-items: center;
`;

const BubbleImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const BubbleAnswer = ({ answers }: BubbleAnswerProps) => {
  const { selectedAnswers, handleSelectAnswer } = useAnswerSelection({ multiple: true });
  const { handleNextQuestion, question, currentQuestion } = useQuestion();

  const handleCombineLocalStorage = () => {
    if (question) {
      const quizData = {
        order: currentQuestion + 1,
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

  return (
    <>
      <BubbleContainer>
        {answers.map((item, index) => (
          <AnswerOption
            key={index}
            round
            checked={selectedAnswers.includes(item.text)}
            onClick={() => handleSelectAnswer(item)}
          >
            {item.img && <BubbleImage alt='emoji' src={item.img} />}
            {item.text}
          </AnswerOption>
        ))}
      </BubbleContainer>
      <CustomButton
        disabled={selectedAnswers.length === 0}
        onClick={handleCombineLocalStorage}
      >
        Next
      </CustomButton>
    </>
  );
};
