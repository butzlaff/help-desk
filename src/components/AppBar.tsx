'use client';

import React from 'react';
import Button from './Button';
import { signOut, useSession } from 'next-auth/react';
import AvatarLogin from './AvatarLogin';

const AppBar = () => {
  const { data: session, status } = useSession();

  return (
    <header className='bg-blue-300 py-2'>
      <div className='flex justify-end text-sm gap-4 mr-4'>
        {!session?.user ? (
          <>
            <Button
              onClick={() => console.log(session?.user)}
              className='bg-green-600 rounded-md px-4 py-3 text-lg mr-4 text-white'
            >
              Sign in
            </Button>
          </>
        ) : (
          <>
            <p className='flex text-lg flex-col justify-center'>
              Bem vindo, {session?.user.name}
            </p>
            <Button
              onClick={() => signOut()}
              className='bg-red-600 rounded-md px-4 py-3 text-lg text-white'
            >
              Sign out
            </Button>
            <Button>
              <AvatarLogin />
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default AppBar;
