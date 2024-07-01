import * as React from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './routing/routing';

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
