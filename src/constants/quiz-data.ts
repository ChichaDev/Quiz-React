import type { Question } from '@/types';

import Corn from '../img/emoji/corn.svg';
import Cowboy from '../img/emoji/cowboy.svg';
import Dance from '../img/emoji/dance.svg';
import Love from '../img/emoji/love.svg';
import Royal from '../img/emoji/royal.svg';
import Wolf from '../img/emoji/wolf.svg';
import Young from '../img/emoji/young.svg';
import Female from '../img/gender/female.png';
import Male from '../img/gender/male.png';
import Other from '../img/gender/other.png';

export const questions: Question[] = [
  {
    id: 1,
    type: 'single',
    select: 'single',
    name: 'question1.text',
    answers: [
      { text: 'question1.answers.answer1' },
      { text: 'question1.answers.answer2' },
      { text: 'question1.answers.answer3' },
      { text: 'question1.answers.answer4' }
    ],
    description: 'question1.description'
  },
  {
    id: 2,
    type: 'single',
    select: 'single',
    name: 'question2.text',
    answers: [
      { text: 'question2.answers.answer1', img: Female },
      { text: 'question2.answers.answer2', img: Male },
      { text: 'question2.answers.answer3', img: Other }
    ],
    description: 'question2.description'
  },
  {
    id: 3,
    type: 'single',
    select: 'single',
    name: 'question3.text',
    answers: [
      { text: 'question3.answers.answer1' },
      { text: 'question3.answers.answer2' },
      { text: 'question3.answers.answer3' },
      { text: 'question3.answers.answer4' }
    ]
  },
  {
    id: 4,
    type: 'multiple',
    select: 'multiple',
    name: 'question4.text',
    answers: [
      { text: 'question4.answers.answer1' },
      { text: 'question4.answers.answer2' },
      { text: 'question4.answers.answer3' },
      { text: 'question4.answers.answer4' }
    ]
  },
  {
    id: 5,
    type: 'bubble',
    select: 'multiple',
    name: 'question5.text',
    answers: [
      { text: 'question5.answers.answer1', img: Wolf },
      { text: 'question5.answers.answer2', img: Dance },
      { text: 'question5.answers.answer3', img: Corn },
      { text: 'question5.answers.answer4', img: Royal },
      { text: 'question5.answers.answer5', img: Love },
      { text: 'question5.answers.answer6', img: Young },
      { text: 'question5.answers.answer7', img: Cowboy }
    ],
    description: 'question5.description'
  }
];
