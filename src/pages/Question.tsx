import styled from 'styled-components';

import ProgressBar from '@/components/progress-bar/ProgressBar';
import { Container, StyledH2, StyledP, StyledSection } from '@/constants/theme';
import { useQuiz } from '@/hooks/useQuiz';
import { getQuestionComponent } from '@/utils/getQuestionComponent';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`;

export const Question = () => {
  const { question } = useQuiz();
  return (
    <StyledSection>
      <Container>
        <StyledWrapper>
          <ProgressBar />
          <StyledH2>Question {question?.name}</StyledH2>
          {question?.description && <StyledP>{question.description}</StyledP>}
          {getQuestionComponent(question)}
        </StyledWrapper>
      </Container>
    </StyledSection>
  );
};
