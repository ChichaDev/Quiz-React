import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import ProgressBar from '@/components/progress-bar/ProgressBar';
import { Container } from '@/components/ui-kit/Container.ui';
import { StyledH2 } from '@/components/ui-kit/H2.ui';
import { StyledP } from '@/components/ui-kit/P.ui';
import { StyledSection } from '@/components/ui-kit/Section.ui';
import { useQuiz } from '@/hooks/useQuiz';
import { getQuestionComponent } from '@/utils/getQuestionComponent';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  min-height: 100vh;
`;

export const Question = () => {
  const { t } = useTranslation();

  const { question } = useQuiz();

  if (!question) {
    return null;
  }

  return (
    <StyledSection>
      <Container>
        <StyledWrapper>
          <ProgressBar />
          <StyledH2>{t(question?.name)}</StyledH2>
          {question?.description && <StyledP>{t(question.description)}</StyledP>}
          {getQuestionComponent(question)}
        </StyledWrapper>
      </Container>
    </StyledSection>
  );
};
