import { Outlet } from 'react-router-dom';

import { QuizProvider } from '@/context/quiz';

export const Root = () => {
  return (
    <>
      <QuizProvider>
        <main>
          <Outlet />
        </main>
      </QuizProvider>
    </>
  );
};
