import React from 'react';
import styled from 'styled-components';

import { Container } from '@/constants/theme';
import useQuestion from '@/hooks/useQuestion';

import BackBtn from '../../img/backdown.svg';

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 4px;
  background-color: #e8eaf2;
  border-radius: 12px;
  overflow: hidden;
`;

const ProgressBarFill = styled.div<{ percentage: number }>`
  height: 100%;
  width: ${({ percentage }) => `${percentage}%`};
  background-color: var(--primary-color);
  border-radius: 12px;
  transition: width 0.3s ease-in-out;
`;

const BackDownImg = styled.img`
  width: 25px;
  height: 25px;
`;

const BackDownBtn = styled.button`
  background-color: transparent;
  border: none;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const StyledFlex = styled.div`
  display: flex;
`;

const ProgressBar = () => {
  const { currentQuestion, totalQuestions, handlePreviousQuestion } = useQuestion();

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
