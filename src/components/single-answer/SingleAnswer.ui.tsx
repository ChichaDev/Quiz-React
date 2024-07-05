import styled from 'styled-components';

export const BubbleImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-width: 150px;

  @media (max-width: 630px) {
    justify-content: flex-start;
  }
`;
