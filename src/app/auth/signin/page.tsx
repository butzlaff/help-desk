'use client';
// import Button from '@/components/Button';
import Input from '@/components/Input';
import { MouseEventHandler, useEffect, useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (session?.user) {
      router.push('/');
    }
  });

  const router = useRouter();

  const [error, setError] = useState<boolean>(false);

  const { data: session, status } = useSession();

  const validateLogin: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();

    const user = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    if (user?.error) {
      setError(true);
    } else {
      router.push('/');
    }
  };

  const logout: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();

    await signOut({ redirect: false });
  };

  return (
    <main className='flex items-center p-24 grid-cols-2 min-h-screen'>
      {/* {session && redirect('/register')} */}
      {status === 'loading' ? (
        <div className='flex items-center p-24 grid-cols-2 text-4xl'>
          Loading...
        </div>
      ) : (
        <form className='bg-white px-12 py-12 rounded-lg min-w-max'>
          <Input
            id='email'
            type='email'
            name='email'
            data-testid='email'
            required={true}
            placeholder='E-mail'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            id='password'
            type='password'
            name='password'
            required={true}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {error && (
            <div className='flex items-center gap-2 justify-center pt-2'>
              <p className='text-red-500'>E-mail ou senha incorretos</p>
            </div>
          )}
          <div className='flex items-center gap-2 justify-center pt-2'>
            <button
              type='button'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              data-testid='button-login'
              onClick={validateLogin}
            >
              Login
            </button>
            <button
              className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
              data-testid='button-register'
            >
              Registrar
            </button>
            {status === 'authenticated' && (
              <button
                className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
                data-testid='button-register'
                onClick={logout}
              >
                Deslogar
              </button>
            )}
          </div>
        </form>
      )}
    </main>
  );
}
