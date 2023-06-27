'use client';
// import Button from '@/components/Button';
import Input from '@/components/Input';
import { MouseEventHandler, useState } from 'react';

const file = 'http://localhost:3000/api/user';

export default function Home() {
  const [email, setEmail] = useState('');

  const validateLogin: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    const response = await fetch(file);
    const data = await response.json();
    console.log(data);
  };

  const resiterNewUser = () => {
    console.log('resiterNewUser');
  };

  return (
    <main className='flex items-center p-24 grid-cols-2 min-h-screen'>
      <form className='bg-white px-12 py-12 rounded-lg min-w-max'>
        <Input
          id='email'
          type='email'
          name='email'
          data-testid='email'
          required={true}
          placeholder='E-mail'
        />
        <Input
          type='password'
          id='password'
          name='password'
          data-testid='password'
          required={true}
          placeholder='Password'
        />
        <div className='flex items-center gap-2 justify-center pt-2'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            data-testid='button'
            onClick={validateLogin}
          >
            Login
          </button>
          <button
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
            data-testid='button'
            // onClick={resiterNewUser}
          >
            Registrar
          </button>
        </div>
      </form>
      {/* <Button onClick={() => console.log('teste')}>Teste</Button> */}
    </main>
  );
}
