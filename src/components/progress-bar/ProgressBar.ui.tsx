import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 4px;
  background-color: #e8eaf2;
  border-radius: 12px;
  overflow: hidden;
`;

export const ProgressBarFill = styled.div<{ percentage: number }>`
  height: 100%;
  width: ${({ percentage }) => `${percentage}%`};
  background-color: var(--primary-color);
  border-radius: 12px;
  transition: width 0.3s ease-in-out;
`;

export const BackDownImg = styled.img`
  width: 25px;
  height: 25px;
`;

export const BackDownBtn = styled.button`
  background-color: transparent;
  border: none;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const StyledFlex = styled.div`
  display: flex;
`;
