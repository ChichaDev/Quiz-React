import styled from 'styled-components';

import useAnswerSelection from '@/hooks/useAnswerSelection';
import useQuestion from '@/hooks/useQuestion';
import type { Answer } from '@/types';
import { setToLocalStorage } from '@/utils/getFromLocalStorage';

import AnswerOption from '../answer-option/AnswerOption';
import CustomButton from '../ui/button/Button';

type SingleAnswerProps = {
  answers: Answer[];
};

const BubbleImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const SingleAnswer = ({ answers }: SingleAnswerProps) => {
  const { selectedAnswers, handleSelectAnswer } = useAnswerSelection({ multiple: false });

  const { handleNextQuestion, question, currentQuestion } = useQuestion();

  const handleCombineLocalStorage = () => {
    if (question) {
      const key = `quiz${currentQuestion}`;
      const quizData = {
        order: currentQuestion + 1,
        title: question.name,
        type: question.type,
        answer: selectedAnswers
      };

      setToLocalStorage(key, quizData);
    }

    handleNextQuestion();
  };

  return (
    <>
      {answers.map((item, index) => (
        <AnswerOption
          checked={selectedAnswers.includes(item.text)}
          onClick={() => handleSelectAnswer(item)}
          key={index}
        >
          {item.img && <BubbleImage alt='gender' src={item.img} />}
          {item.text}
        </AnswerOption>
      ))}

      <CustomButton
        disabled={selectedAnswers.length === 0}
        onClick={handleCombineLocalStorage}
      >
        Next
      </CustomButton>
    </>
  );
};
