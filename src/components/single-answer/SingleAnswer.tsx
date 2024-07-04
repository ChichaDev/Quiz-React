import { useTranslation } from 'react-i18next';

import { useQuiz } from '@/hooks/useQuiz';
import type { Answer } from '@/types';

import AnswerOption from '../answer-option/AnswerOption';
import CustomButton from '../ui/button/Button';

import { BubbleImage, StyledContent, StyledDiv } from './SingleAnswer.ui';

type SingleAnswerProps = {
  answers: Answer[];
};

export const SingleAnswer = ({ answers }: SingleAnswerProps) => {
  const { selectedAnswers, handleSelectAnswer, handleNextQuestion } = useQuiz();
  const { t } = useTranslation();

  return (
    <StyledDiv>
      <StyledDiv>
        {answers.map((item, index) => (
          <AnswerOption
            checked={selectedAnswers.includes(item.text)}
            onClick={() => handleSelectAnswer(item)}
            key={index}
          >
            <StyledContent>
              {item.img && <BubbleImage alt='gender' src={item.img} />}
              {t(item.text)}
            </StyledContent>
          </AnswerOption>
        ))}
      </StyledDiv>
      <CustomButton disabled={selectedAnswers.length === 0} onClick={handleNextQuestion}>
        {t('Next')}
      </CustomButton>
    </StyledDiv>
  );
};
