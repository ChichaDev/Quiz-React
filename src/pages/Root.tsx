import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/constants/theme';
import { ApiProvider } from '@/context/apiContext';
import { QuizProvider } from '@/context/quiz';

export const Root = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ApiProvider>
          <QuizProvider>
            <main>
              <Outlet />
            </main>
          </QuizProvider>
        </ApiProvider>
      </ThemeProvider>
    </>
  );
};
