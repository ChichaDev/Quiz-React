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
    name: 'What is your preferred language?',
    answers: [
      { text: 'English' },
      { text: 'French' },
      { text: 'German' },
      { text: 'Spanish' }
    ],
    description: 'Choose language'
  },
  {
    id: 2,
    type: 'single',
    name: 'What gender do you identify with?',
    answers: [
      { text: 'Female', img: Female },
      { text: 'Male', img: Male },
      { text: 'Other', img: Other }
    ],
    description: 'Please share how do you identify yourself'
  },
  {
    id: 3,
    type: 'single',
    name: 'What is your age?',
    answers: [
      { text: '18-29 years' },
      { text: '30-39 years' },
      { text: '40-49 year' },
      { text: '50+' }
    ]
  },
  {
    id: 4,
    type: 'multiple',
    name: 'What do you hate the most in a book?',
    answers: [
      { text: 'Lack of logic' },
      { text: 'A slow speed' },
      { text: 'Lack of humor' },
      { text: 'Way too generic ending' }
    ]
  },
  {
    id: 5,
    type: 'bubble',
    name: 'What are your favorite topics?',
    answers: [
      { text: 'Werewolf', img: Wolf },
      { text: 'Action', img: Dance },
      { text: 'Royal Obsession', img: Corn },
      { text: 'Billionaire', img: Royal },
      { text: 'Romance', img: Love },
      { text: 'Young Adult', img: Young },
      { text: 'Bad Boy', img: Cowboy }
    ],
    description: 'Choose up to 3 topics you like'
  }
];
