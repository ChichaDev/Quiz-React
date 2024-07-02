import styled from 'styled-components';

import useAnswerSelection from '@/hooks/useAnswerSelection';
import useQuestion from '@/hooks/useQuestion';
import type { Answer } from '@/types';
import { setToLocalStorage } from '@/utils/getFromLocalStorage';

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
      const key = `quiz${currentQuestion}`;
      const quizData = {
        order: currentQuestion + 1,
        title: question.name,
        type: question.type,
        answer: selectedAnswers
      };

      setToLocalStorage(key, quizData);
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
