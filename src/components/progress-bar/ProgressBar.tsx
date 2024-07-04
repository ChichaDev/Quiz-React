import { Container } from '@/constants/theme';
import { StyledH2 } from '@/constants/theme';
import { useQuiz } from '@/hooks/useQuiz';

import BackBtn from '../../img/backdown.svg';

import {
  BackDownBtn,
  BackDownImg,
  ProgressBarContainer,
  ProgressBarFill,
  StyledFlex,
  StyledQuestionNumber,
  StyledSeparator,
  StyledTotalQuestions,
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
          <StyledH2>
            <StyledQuestionNumber>{currentQuestion}</StyledQuestionNumber>
            <StyledSeparator>/</StyledSeparator>
            <StyledTotalQuestions>{totalQuestions}</StyledTotalQuestions>
          </StyledH2>
        </StyledWrapper>
      </StyledFlex>

      <ProgressBarContainer>
        <ProgressBarFill percentage={percentage} />
      </ProgressBarContainer>
    </Container>
  );
};

export default ProgressBar;
