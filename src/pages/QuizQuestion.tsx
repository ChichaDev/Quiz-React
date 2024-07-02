import styled from 'styled-components';

import { BubbleAnswer } from '@/components/bubble-answer/BubbleAnswer';
import { MultipleAnswer } from '@/components/multiple-answer/MultipleAnswer';
import ProgressBar from '@/components/progress-bar/ProgressBar';
import { SingleAnswer } from '@/components/single-answer/SingleAnswer';
import CustomButton from '@/components/ui/button/Button';
import { Container } from '@/components/ui/container/Container.ui';
import useQuestion from '@/hooks/useQuestion';
import { setToLocalStorage } from '@/utils/getFromLocalStorage';

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
  const { handleNextQuestion, question, currentQuestion, totalQuestions } = useQuestion();

  const renderQuestion = () => {
    switch (question?.type) {
      case 'single':
        return <SingleAnswer answers={question.answers} />;
      case 'multiple':
        return <MultipleAnswer answers={question.answers} />;
      case 'bubble':
        return <BubbleAnswer answers={question.answers} />;
      default:
        return <p>Unknown question type</p>;
    }
  };

  const handleNext = () => {
    if (question) {
      setToLocalStorage('order', currentQuestion);
      setToLocalStorage('title', question.name);
      setToLocalStorage('type', question.type);
      setToLocalStorage('answer', '');
    }

    handleNextQuestion();
  };

  return (
    <StyledSection>
      <Container>
        <StyledWrapper>
          <ProgressBar currentStep={currentQuestion} totalSteps={totalQuestions} />
          <StyledH2>Question {question?.name}</StyledH2>
          {renderQuestion()}
          <CustomButton onClick={handleNext}>Next</CustomButton>
        </StyledWrapper>
      </Container>
    </StyledSection>
  );
};
