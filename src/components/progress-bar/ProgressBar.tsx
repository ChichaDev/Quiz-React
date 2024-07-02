import React from 'react';
import styled from 'styled-components';

import useQuestion from '@/hooks/useQuestion';

import BackBtn from '../../img/backdown.svg';
import { Container } from '../ui/container/Container.ui';

type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
};

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

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const percentage = (currentStep / totalSteps) * 100;
  const { handlePreviousQuestion } = useQuestion();

  return (
    <Container>
      <StyledFlex>
        <StyledWrapper>
          <BackDownBtn onClick={handlePreviousQuestion}>
            <BackDownImg alt='back' src={BackBtn} />
          </BackDownBtn>
        </StyledWrapper>
        <StyledWrapper>
          <h2>
            <span style={{ color: 'var(--primary-color)' }}>{currentStep}</span>
            <span style={{ color: 'var(--color-basic-4)' }}>/</span>
            <span style={{ color: 'var(--color-basic-4)' }}>{totalSteps}</span>
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
