import styled from 'styled-components';

import ProgressBar from '@/components/progress-bar/ProgressBar';
import { Container, StyledH2, StyledP } from '@/constants/theme';
import useQuestion from '@/hooks/useQuestion';
import { renderQuestion } from '@/utils/renderQuestion';

const StyledSection = styled.section`
  background-color: var(--bg-color-basic);
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
          {question?.description && <StyledP>{question.description}</StyledP>}
          {renderQuestion(question)}
        </StyledWrapper>
      </Container>
    </StyledSection>
  );
};
