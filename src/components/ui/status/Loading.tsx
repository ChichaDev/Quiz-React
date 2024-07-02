import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { Container, StyledP } from '@/constants/theme';

const fill = keyframes`
  0% {
    stroke-dasharray: 20 100;
    stroke-dashoffset: 100 0;
  }
  100% {
    stroke-dasharray: 100 0;
    stroke-dashoffset: -100;
  }
`;

const SpinnerContainer = styled.div`
  position: relative;
  width: 252px;
  height: 252px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleBackground = styled.circle`
  fill: none;
  stroke: #f3f3f3;
  stroke-width: 4;
`;

const CircleForeground = styled.circle`
  fill: none;
  stroke: var(--primary-color);
  stroke-width: 4;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  animation: ${fill} 5s linear forwards;
`;

const Text = styled.div`
  position: absolute;
  font-size: 1.2em;
  color: var(--color-basic-3);
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

interface LoadingProps {
  onLoadingComplete: () => void;
}

const Loading: React.FC<LoadingProps> = ({ onLoadingComplete }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercentage((prev) => prev + 1);
    }, 50);

    const timeout = setTimeout(() => {
      clearInterval(timer);
      onLoadingComplete();
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [onLoadingComplete]);

  return (
    <Container>
      <LoaderContainer>
        <SpinnerContainer>
          <svg width='120' height='120' viewBox='0 0 40 40'>
            <CircleBackground r='18' cx='20' cy='20' />
            <CircleForeground r='18' cx='20' cy='20' />
          </svg>
          <Text>{percentage}%</Text>
        </SpinnerContainer>
        <StyledP>Finding collections for you...</StyledP>
      </LoaderContainer>
    </Container>
  );
};

export default Loading;
