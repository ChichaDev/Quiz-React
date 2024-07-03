import styled from 'styled-components';

export const StyledBubbleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  align-items: center;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const StyledBubbleImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
