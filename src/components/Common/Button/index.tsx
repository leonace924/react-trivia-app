import React, { type HTMLProps } from 'react';

type ButtonProps = HTMLProps<HTMLButtonElement> & {
  children: React.ReactNode;
  type?: 'submit' | 'button' | 'reset';
};

export const Button = ({ type = 'submit', children, ...props }: ButtonProps) => {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
};
