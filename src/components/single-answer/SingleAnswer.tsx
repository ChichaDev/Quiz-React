import styled from 'styled-components';

import useAnswerSelection from '@/hooks/useAnswerSelection';
import type { Answer } from '@/types';

import AnswerOption from '../answer-option/AnswerOption';

type SingleAnswerProps = {
  answers: Answer[];
};

const BubbleImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const SingleAnswer = ({ answers }: SingleAnswerProps) => {
  const { selectedAnswers, handleSelectAnswer } = useAnswerSelection({ multiple: false });
  return (
    <>
      {answers.map((item, index) => (
        <AnswerOption
          checked={selectedAnswers.includes(item.text)}
          onClick={() => handleSelectAnswer(item)}
          key={index}
        >
          {item.img && <BubbleImage alt='gender' src={item.img} />}
          {item.text}
        </AnswerOption>
      ))}
    </>
  );
};
