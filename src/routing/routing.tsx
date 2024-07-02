import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Email from '@/pages/Email';
import { Error } from '@/pages/Error';
import { QuizQuestion } from '@/pages/QuizQuestion';
import { QuizStart } from '@/pages/QuizStart';
import { Root } from '@/pages/Root';
import Success from '@/pages/Success';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route path='/' element={<QuizStart />} />
      <Route path='/quiz/:id' element={<QuizQuestion />} />
      <Route path='/email' element={<Email />} />
      <Route path='/success' element={<Success />} />
      <Route path='*' element={<Error />} />
    </Route>
  )
);
