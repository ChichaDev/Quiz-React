import styled from 'styled-components';

import { Container, StyledH1, StyledLink, StyledSection } from '@/constants/theme';

const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Error = () => (
  <StyledSection>
    <Container>
      <ErrorWrapper>
        <StyledH1>404 Not Found</StyledH1>
        <StyledLink to='/'>Back to Start</StyledLink>
      </ErrorWrapper>
    </Container>
  </StyledSection>
);
