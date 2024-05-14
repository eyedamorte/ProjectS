import { createBrowserRouter } from 'react-router-dom';

import { SIGNIN_ROUTE } from './constants';
import { SigninPage } from './pages';
import { HomePage } from './pages/HomePage';
import { ProtectedRoute } from './routes/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  { path: SIGNIN_ROUTE, element: <SigninPage /> },
]);
