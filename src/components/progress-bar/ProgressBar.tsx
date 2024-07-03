import { Container } from '@/constants/theme';
import { useQuiz } from '@/hooks/useQuiz';

import BackBtn from '../../img/backdown.svg';

import {
  BackDownBtn,
  BackDownImg,
  ProgressBarContainer,
  ProgressBarFill,
  StyledFlex,
  StyledWrapper
} from './ProgressBar.ui';

const ProgressBar = () => {
  const { currentQuestion, totalQuestions, handlePreviousQuestion } = useQuiz();

  const percentage = (currentQuestion / totalQuestions) * 100;

  return (
    <Container>
      <StyledFlex>
        <StyledWrapper>
          {currentQuestion > 1 && (
            <BackDownBtn onClick={handlePreviousQuestion}>
              <BackDownImg alt='back' src={BackBtn} />
            </BackDownBtn>
          )}
        </StyledWrapper>
        <StyledWrapper>
          <h2>
            <span style={{ color: 'var(--primary-color)' }}>{currentQuestion}</span>
            <span style={{ color: 'var(--color-basic-4)' }}>/</span>
            <span style={{ color: 'var(--color-basic-4)' }}>{totalQuestions}</span>
          </h2>
        </StyledWrapper>
      </StyledFlex>

      <ProgressBarContainer>
        <ProgressBarFill percentage={percentage} />
      </ProgressBarContainer>
    </Container>
  );
};

export default ProgressBar;
