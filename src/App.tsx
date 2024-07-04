import * as React from 'react';
import { RouterProvider } from 'react-router-dom';

import useLanguage from './hooks/useLanguage';
import { router } from './routing/routing';

function App() {
  useLanguage();
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
