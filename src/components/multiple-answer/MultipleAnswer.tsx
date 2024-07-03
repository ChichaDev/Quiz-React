import useSaveQuizResults from '@/hooks/useSaveQuizResults';
import type { Answer } from '@/types';

import AnswerOption from '../answer-option/AnswerOption';
import CustomButton from '../ui/button/Button';

import { StyledDiv } from './MultipleAnswer.ui';

type MultipleAnswerProps = {
  answers: Answer[];
};

export const MultipleAnswer = ({ answers }: MultipleAnswerProps) => {
  const { selectedAnswers, handleSelectAnswer, handleSaveToLocalStorage } =
    useSaveQuizResults(true);

  return (
    <StyledDiv>
      <StyledDiv>
        {answers.map((item, index) => (
          <AnswerOption
            showCheckbox={true}
            checked={selectedAnswers.includes(item.text)}
            onClick={() => handleSelectAnswer(item)}
            key={index}
          >
            {item.text}
          </AnswerOption>
        ))}
      </StyledDiv>
      <CustomButton
        disabled={selectedAnswers.length === 0}
        onClick={handleSaveToLocalStorage}
      >
        Next
      </CustomButton>
    </StyledDiv>
  );
};
