import { useTranslation } from 'react-i18next';

import { useQuiz } from '@/hooks/useQuiz';
import type { Answer } from '@/types';

import AnswerOption from '../answer-option/AnswerOption';
import CustomButton from '../ui/button/Button';

import { StyledBubbleContainer, StyledBubbleImage, StyledDiv } from './BubbleAnswer.ui';

type BubbleAnswerProps = {
  answers: Answer[];
};

export const BubbleAnswer = ({ answers }: BubbleAnswerProps) => {
  const { selectedAnswers, handleSelectAnswer, handleNextQuestion } = useQuiz();
  const { t } = useTranslation();

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
            {t(item.text)}
          </AnswerOption>
        ))}
      </StyledBubbleContainer>
      <CustomButton disabled={selectedAnswers.length === 0} onClick={handleNextQuestion}>
        Next
      </CustomButton>
    </StyledDiv>
  );
};
