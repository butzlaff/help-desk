'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/auth/signin');
    },
  });

  const router = useRouter();

  // console.log(status);

  // useEffect(() => {
  //   if (!session?.user && status === 'unauthenticated') {
  //     router.push('/auth/signin');
  //   }
  // }, [router, session?.user, status]);

  return (
    <main className='flex items-center p-4 grid-cols-2'>
      {status === 'authenticated' && (
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-bold mb-4'>Welcome to the app!</h1>
          <div className='overflow-hidden'>
            <Image
              src={session?.user?.avatar || session?.user?.image || ''}
              width={100}
              height={80}
              alt='Avatar'
            />
          </div>
          <p className='text-xl'>
            You are logged in as <strong>{session?.user?.email}</strong>
          </p>
          <p>
            Your role is {session?.user?.isAdmin ? 'Administrator' : 'user'}{' '}
          </p>
        </div>
      )}
    </main>
  );
}
