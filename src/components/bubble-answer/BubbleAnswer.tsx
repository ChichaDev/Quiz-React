import { useTranslation } from 'react-i18next';

import useMountAnimation from '@/hooks/useMountAnimation';
import { useQuiz } from '@/hooks/useQuiz';
import CustomButton from '@/shared/ui-kit/button/Button';
import type { Answer } from '@/types';

import AnswerOption from '../answer-option/AnswerOption';

import { StyledBubbleContainer, StyledBubbleImage, StyledDiv } from './BubbleAnswer.ui';

type BubbleAnswerProps = {
  answers: Answer[];
};

export const BubbleAnswer = ({ answers }: BubbleAnswerProps) => {
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
        {t('Next')}
      </CustomButton>
    </StyledDiv>
  );
};
