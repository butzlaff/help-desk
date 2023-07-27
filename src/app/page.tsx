'use client';

import { signOut, useSession } from 'next-auth/react';
import { MouseEventHandler, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface sessionProps {
  user: {
    name: string;
    email: string;
    avatar: string;
  } | null;
}

export default function Home() {
  const { data: session, status } = useSession();
  // const { user }: sessionProps = session;

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

  console.log(session?.user);

  return (
    <main className='flex items-center p-4 grid-cols-2'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold mb-4'>Welcome to the app!</h1>
        <Image
          src={session?.user?.avatar}
          width={200}
          height={200}
          alt='Avatar'
        />
        <p className='text-xl'>
          You are logged in as <strong>{session?.user?.email}</strong>
        </p>
      </div>
    </main>
  );
}
