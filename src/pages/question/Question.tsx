import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import ProgressBar from '@/components/progress-bar/ProgressBar';
import { useQuiz } from '@/hooks/useQuiz';
import { Container } from '@/shared/ui-kit/Container.ui';
import { StyledH2 } from '@/shared/ui-kit/H2.ui';
import { StyledP } from '@/shared/ui-kit/P.ui';
import { StyledSection } from '@/shared/ui-kit/Section.ui';

import { getQuestionComponent } from './getQuestionComponent';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
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
