import styled from 'styled-components';

import { Container } from '@/shared/ui-kit/Container.ui';
import { StyledH1 } from '@/shared/ui-kit/H1.ui';
import { StyledLink } from '@/shared/ui-kit/Link.ui';
import { StyledSection } from '@/shared/ui-kit/Section.ui';

const QuizStartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Start = () => (
  <StyledSection>
    <Container>
      <QuizStartWrapper>
        <StyledH1>Welcome to the Quiz!</StyledH1>
        <StyledLink to='/quiz/1'>Start Quiz</StyledLink>
      </QuizStartWrapper>
    </Container>
  </StyledSection>
);
