import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.basic4};
  border-radius: 12px;
  overflow: hidden;
`;

export const ProgressBarFill = styled.div<{ percentage: number }>`
  height: 100%;
  width: ${({ percentage }) => `${percentage}%`};
  background-color: ${({ theme }) => theme.colors.primary};
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
  margin-bottom: 20px;
`;

export const StyledQuestionNumber = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledSeparator = styled.span`
  color: ${({ theme }) => theme.colors.basic4};
`;

export const StyledTotalQuestions = styled.span`
  color: ${({ theme }) => theme.colors.basic4};
`;
