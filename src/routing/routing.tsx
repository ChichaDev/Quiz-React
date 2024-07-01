import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { Error } from '@/pages/Error';
import { QuizQuestion } from '@/pages/QuizQuestion';
import { QuizStart } from '@/pages/QuizStart';
import { Root } from '@/pages/Root';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route path='/' element={<QuizStart />} />
      <Route path='/quiz/:id' element={<QuizQuestion />} />
      <Route path='*' element={<Error />} />
    </Route>
  )
);
