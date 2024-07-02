import styled from 'styled-components';

import ProgressBar from '@/components/progress-bar/ProgressBar';
import { Container } from '@/components/ui/container/Container.ui';
import useQuestion from '@/hooks/useQuestion';
import { renderQuestion } from '@/utils/renderQuestion';

const StyledSection = styled.section`
  background-color: var(--bg-color-basic);
`;

const StyledH2 = styled.h2`
  color: var(--color-basic-1);
  font-size: 28px;
  font-weight: bold;
  line-height: 34px;
  margin: 0;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`;

export const QuizQuestion = () => {
  const { question } = useQuestion();

  return (
    <StyledSection>
      <Container>
        <StyledWrapper>
          <ProgressBar />
          <StyledH2>Question {question?.name}</StyledH2>
          {renderQuestion(question)}
        </StyledWrapper>
      </Container>
    </StyledSection>
  );
};
