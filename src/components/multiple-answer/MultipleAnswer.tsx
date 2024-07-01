import styled from 'styled-components';

import useAnswerSelection from '@/hooks/useAnswerSelection';
import type { Answer } from '@/types';

import AnswerOption from '../answer-option/AnswerOption';

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
    </>
  );
};
