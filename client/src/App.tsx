import React, { useState } from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter, RouterProvider } from 'react-router-dom';

import { router } from './AppRouter';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
