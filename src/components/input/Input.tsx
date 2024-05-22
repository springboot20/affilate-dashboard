import React from 'react';

type InputProps = React.ComponentProps<'input'>;

export const Input = ({ className, ...rest }: InputProps) => {
  return <input className={className} {...rest} />;
};
