import React, {
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ ...props }: ButtonProps) => {
  return <button {...props}>{props.children}</button>;
};

export default Button;
