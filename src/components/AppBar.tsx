'use client';

import React from 'react';
import Button from './Button';
import { signOut, useSession } from 'next-auth/react';
import AvatarLogin from './AvatarLogin';
import Image from 'next/image';

const AppBar = () => {
  const { data: session, status } = useSession();
  const imageAvatar = session?.user?.avatar || session?.user?.image;

  console.log(session);
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
              {imageAvatar ? (
                <Image
                  src={imageAvatar}
                  alt='Avatar'
                  className='rounded-full w-10 h-10'
                  width={40}
                  height={40}
                />
              ) : (
                <AvatarLogin />
              )}
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default AppBar;
