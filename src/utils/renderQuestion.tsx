import { BubbleAnswer } from '@/components/bubble-answer/BubbleAnswer';
import { MultipleAnswer } from '@/components/multiple-answer/MultipleAnswer';
import { SingleAnswer } from '@/components/single-answer/SingleAnswer';
import type { Answer } from '@/types';

interface Question {
  type: 'single' | 'multiple' | 'bubble';
  answers: Answer[];
  name: string;
}

export const renderQuestion = (question: Question | undefined) => {
  if (!question) {
    return <p>Unknown question type</p>;
  }

  switch (question.type) {
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
