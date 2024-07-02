import styled from 'styled-components';

import useAnswerSelection from '@/hooks/useAnswerSelection';
import useQuestion from '@/hooks/useQuestion';
import type { Answer } from '@/types';
import { getFromLocalStorage, setToLocalStorage } from '@/utils/getFromLocalStorage';

import AnswerOption from '../answer-option/AnswerOption';
import CustomButton from '../ui/button/Button';

type MultipleAnswerProps = {
  answers: Answer[];
};

const StyledOptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
`;

export const MultipleAnswer = ({ answers }: MultipleAnswerProps) => {
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
      {answers.map((item, index) => (
        <StyledOptionWrapper key={index}>
          <AnswerOption
            showCheckbox={true}
            checked={selectedAnswers.includes(item.text)}
            onClick={() => handleSelectAnswer(item)}
          >
            {item.text}
          </AnswerOption>
        </StyledOptionWrapper>
      ))}
      <CustomButton
        disabled={selectedAnswers.length === 0}
        onClick={handleCombineLocalStorage}
      >
        Next
      </CustomButton>
    </>
  );
};
