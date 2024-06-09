import { Inter } from 'next/font/google';
import { authControllerGetSessionInfo } from '@/shared/api/generated';
import { useQuery } from 'react-query';
import { UiButton } from '@/shared/ui/ui-button';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { data } = useQuery({
    queryKey: ['session'],
    queryFn: () => authControllerGetSessionInfo(),
  });

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <UiButton variant="primary">Sign in</UiButton>
      <UiButton variant="secondary">Sign out</UiButton>
      <UiButton variant="outlined">Sign out</UiButton>
      <UiButton disabled variant="primary">
        Sign out
      </UiButton>

      {data?.email}
    </main>
  );
}
