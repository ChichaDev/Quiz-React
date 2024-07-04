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
    name: 'question1',
    answers: [
      { text: 'answer1_1' },
      { text: 'answer1_2' },
      { text: 'answer1_3' },
      { text: 'answer1_4' }
    ],
    description: 'question1_description'
  },
  {
    id: 2,
    type: 'single',
    select: 'single',
    name: 'question2',
    answers: [
      { text: 'answer2_1', img: Female },
      { text: 'answer2_2', img: Male },
      { text: 'answer2_3', img: Other }
    ],
    description: 'question2_description'
  },
  {
    id: 3,
    type: 'single',
    select: 'single',
    name: 'question3',
    answers: [
      { text: 'answer3_1' },
      { text: 'answer3_2' },
      { text: 'answer3_3' },
      { text: 'answer3_4' }
    ]
  },
  {
    id: 4,
    type: 'multiple',
    select: 'multiple',
    name: 'question4',
    answers: [
      { text: 'answer4_1' },
      { text: 'answer4_2' },
      { text: 'answer4_3' },
      { text: 'answer4_4' }
    ]
  },
  {
    id: 5,
    type: 'bubble',
    select: 'multiple',
    name: 'question5',
    answers: [
      { text: 'answer5_1', img: Wolf },
      { text: 'answer5_2', img: Dance },
      { text: 'answer5_3', img: Corn },
      { text: 'answer5_4', img: Royal },
      { text: 'answer5_5', img: Love },
      { text: 'answer5_6', img: Young },
      { text: 'answer5_7', img: Cowboy }
    ],
    description: 'question5_description'
  }
];
