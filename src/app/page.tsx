'use client';

import { signOut, useSession } from 'next-auth/react';
import { MouseEventHandler, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// import Button from '@/components/Button';

export default function Home() {
  const { data: session, status } = useSession();

  const router = useRouter();

  console.log(status);

  useEffect(() => {
    if (!session?.user && status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [router, session?.user, status]);

  const logout: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();

    await signOut({ redirect: false });
  };

  return (
    <main className='flex items-center p-24 grid-cols-2 min-h-screen'>
      {session?.user && <p>Bem vindo {session?.user.email}</p>}
      {status === 'authenticated' && (
        <button
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
          data-testid='button-register'
          onClick={logout}
        >
          Deslogar
        </button>
      )}
    </main>
  );
}
