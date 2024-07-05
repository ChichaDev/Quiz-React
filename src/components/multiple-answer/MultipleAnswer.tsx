import { useTranslation } from 'react-i18next';

import useMountAnimation from '@/hooks/useMountAnimation';
import { useQuiz } from '@/hooks/useQuiz';
import CustomButton from '@/shared/ui-kit/button/Button';
import type { Answer } from '@/types';

import AnswerOption from '../answer-option/AnswerOption';

import { StyledDiv } from './MultipleAnswer.ui';

type MultipleAnswerProps = {
  answers: Answer[];
};

export const MultipleAnswer = ({ answers }: MultipleAnswerProps) => {
  const { selectedAnswers, handleSelectAnswer, handleNextQuestion } = useQuiz();
  const { t } = useTranslation();
  const { isAnimated, key } = useMountAnimation(answers);

  return (
    <StyledDiv
      key={key}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isAnimated ? 1 : 0, y: isAnimated ? 0 : 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
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
        {t('Next')}
      </CustomButton>
    </StyledDiv>
  );
};
