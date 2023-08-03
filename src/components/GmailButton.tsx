import { getSession, signIn } from 'next-auth/react';
import React from 'react';
import GmailLogo from './GmailLogo';
import { GetServerSideProps } from 'next';

const GmailButton = () => {
  return (
    <button
      type='button'
      className='bg-transparent text-blue-500 font-bold py-2 px-4 
    rounded border-2 border-solid border-blue-500 
    w-full flex items-center justify-center gap-2'
      data-testid='button-google'
      onClick={() =>
        signIn('google', {
          callbackUrl: '/',
        })
      }
    >
      <GmailLogo />
      GMAIL
    </button>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

export default GmailButton;
