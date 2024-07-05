import styled from 'styled-components';

import { Container } from '@/components/ui-kit/Container.ui';
import { StyledH1 } from '@/components/ui-kit/H1.ui';
import { StyledLink } from '@/components/ui-kit/Link.ui';
import { StyledSection } from '@/components/ui-kit/Section.ui';

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
