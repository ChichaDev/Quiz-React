import useSaveQuizResults from '@/hooks/useSaveQuizResults';
import type { Answer } from '@/types';

import AnswerOption from '../answer-option/AnswerOption';
import CustomButton from '../ui/button/Button';

import { StyledBubbleContainer, StyledBubbleImage, StyledDiv } from './BubbleAnswer.ui';

type BubbleAnswerProps = {
  answers: Answer[];
};

export const BubbleAnswer = ({ answers }: BubbleAnswerProps) => {
  const { selectedAnswers, handleSelectAnswer, handleSaveToLocalStorage } =
    useSaveQuizResults(true);

  return (
    <StyledDiv>
      <StyledBubbleContainer>
        {answers.map((item, index) => (
          <AnswerOption
            key={index}
            round
            checked={selectedAnswers.includes(item.text)}
            onClick={() => handleSelectAnswer(item)}
          >
            {item.img && <StyledBubbleImage alt='emoji' src={item.img} />}
            {item.text}
          </AnswerOption>
        ))}
      </StyledBubbleContainer>
      <CustomButton
        disabled={selectedAnswers.length === 0}
        onClick={handleSaveToLocalStorage}
      >
        Next
      </CustomButton>
    </StyledDiv>
  );
};
