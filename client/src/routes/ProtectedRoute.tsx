import { PropsWithChildren, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { SIGNIN_ROUTE } from 'src/constants';
import { RootState } from 'src/store';

type ProtectedRouteProps = PropsWithChildren;

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthorized = useSelector((state: RootState) => state.auth.isAuthorized);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized) {
      navigate(SIGNIN_ROUTE, { replace: true });
    }
  }, [navigate, isAuthorized]);

  return children;
};
