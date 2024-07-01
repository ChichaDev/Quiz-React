import styled from 'styled-components';

import useAnswerSelection from '@/hooks/useAnswerSelection';
import type { Answer } from '@/types';

import AnswerOption from '../answer-option/AnswerOption';

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
    </>
  );
};
