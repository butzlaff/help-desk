import React, { InputHTMLAttributes } from 'react';

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className='relative mt-2'>
      <input
        {...props}
        className='peer rounded-md w-full px-4 py-3 text-gray-700
        border-gray-200 border-2
        focus:bg-white bg-gray-200
        placeholder-shown:bg-gray-200
          placeholder-shown:border-none placeholder-transparent mb-4'
        size={40}
      />
      <label
        className='absolute left-2 -top-2.5 px-1 text-sm 
          transition-all bg-gray-200 text-gray-500 rounded 
          peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
          peer-placeholder-shown:top-3 peer-placeholder-shown:left-4
          peer-placeholder-show:bg-gray-200 peer-focus:-top-2.5 peer-focus:left-2
        peer-focus:text-blue-500 peer-focus:bg-white peer-focus:font-semibold'
        htmlFor={props.id}
      >
        {props.placeholder}
      </label>
    </div>
  );
};

export default Input;
