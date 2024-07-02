import styled from 'styled-components';

import { Container, StyledH1, StyledLink, StyledSection } from '@/constants/theme';

const QuizStartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const QuizStart = () => (
  <StyledSection>
    <Container>
      <QuizStartWrapper>
        <StyledH1>Welcome to the Quiz!</StyledH1>
        <StyledLink to='/quiz/1'>Start Quiz</StyledLink>
      </QuizStartWrapper>
    </Container>
  </StyledSection>
);
