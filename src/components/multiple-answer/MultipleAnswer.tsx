import { useTranslation } from 'react-i18next';

import { useQuiz } from '@/hooks/useQuiz';
import type { Answer } from '@/types';

import AnswerOption from '../answer-option/AnswerOption';
import CustomButton from '../ui/button/Button';

import { StyledDiv } from './MultipleAnswer.ui';

type MultipleAnswerProps = {
  answers: Answer[];
};

export const MultipleAnswer = ({ answers }: MultipleAnswerProps) => {
  const { selectedAnswers, handleSelectAnswer, handleNextQuestion } = useQuiz();
  const { t } = useTranslation();
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
            {t(item.text)}
          </AnswerOption>
        ))}
      </StyledDiv>
      <CustomButton disabled={selectedAnswers.length === 0} onClick={handleNextQuestion}>
        Next
      </CustomButton>
    </StyledDiv>
  );
};
