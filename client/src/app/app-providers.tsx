import { queryClient } from '@/shared/api/query-client';
import { ReactNode } from 'react';
import { QueryClientProvider } from 'react-query';

export const AppProvider = ({ children }: { children?: ReactNode }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
