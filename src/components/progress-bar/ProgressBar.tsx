import React from 'react';
import styled from 'styled-components';

import { questions } from '@/constants/quiz-data';
import useQuestion from '@/hooks/useQuestion';

import BackBtn from '../../img/backdown.svg';
import CustomButton from '../ui/button/Button';
import { Container } from '../ui/container/Container.ui';

type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
};

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 24px;
  background-color: #f0f0f0;
  border-radius: 12px;
  overflow: hidden;
`;

const ProgressBarFill = styled.div<{ percentage: number }>`
  height: 100%;
  width: ${({ percentage }) => `${percentage}%`};
  background-color: #3498db;
  border-radius: 12px;
  transition: width 0.3s ease-in-out;
`;

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const percentage = (currentStep / totalSteps) * 100;
  const { handlePreviousQuestion } = useQuestion({ questions });

  return (
    <Container>
      <h2>
        {currentStep}/{totalSteps}
      </h2>
      <ProgressBarContainer>
        <ProgressBarFill percentage={percentage} />
      </ProgressBarContainer>
      <CustomButton onClick={handlePreviousQuestion}>
        <img alt='back' src={BackBtn} />
      </CustomButton>
    </Container>
  );
};

export default ProgressBar;
