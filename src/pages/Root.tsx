import { Outlet } from 'react-router-dom';

import { ApiProvider } from '@/context/apiContext';
import { QuizProvider } from '@/context/quiz';

export const Root = () => {
  return (
    <>
      <ApiProvider>
        <QuizProvider>
          <main>
            <Outlet />
          </main>
        </QuizProvider>
      </ApiProvider>
    </>
  );
};
