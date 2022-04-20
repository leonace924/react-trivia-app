import React from 'react';
import dompurify from 'dompurify';
import { View } from '../View';

type RedactorProps = {
  className?: string;
  children: string | Node;
};

export const Redactor = ({ children, ...rest }: RedactorProps) => {
  if (!children) return null;

  const sanitizer = dompurify.sanitize;

  return <View dangerouslySetInnerHTML={{ __html: sanitizer(children) }} {...rest} />;
};
