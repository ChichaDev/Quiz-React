import styled, { keyframes } from 'styled-components';

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

export const SpinnerContainer = styled.div`
  position: relative;
  width: 252px;
  height: 252px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CircleBackground = styled.circle`
  fill: none;
  stroke: #f3f3f3;
  stroke-width: 4;
`;

export const CircleForeground = styled.circle`
  fill: none;
  stroke: ${({ theme }) => theme.colors.primary};
  stroke-width: 4;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  animation: ${fill} 5s linear forwards;
`;

export const StyledText = styled.div`
  position: absolute;
  font-size: 1.2em;
  color: ${({ theme }) => theme.colors.basic3};
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;
