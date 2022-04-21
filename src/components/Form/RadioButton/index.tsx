import React, { type HTMLProps } from 'react';
import cx from 'classnames';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import { View } from 'components/Common';
import { Label } from 'components/Form';

type RadioButtonProps = HTMLProps<HTMLInputElement> & {
  label?: string;
  name: string;
  errors?: any;
  register: UseFormRegister<FieldValues>;
  validation?: any;
};

export const RadioButton = ({
  id,
  name,
  register,
  validation,
  errors,
  label,
  ...props
}: RadioButtonProps) => {
  const hasError = errors && !!errors?.errors?.[name];

  return (
    <View className="flex items-center">
      <div className="flex items-center h-5">
        <input
          id={id}
          aria-describedby={id}
          type="radio"
          className={'h-4 w-4 rounded border-0'}
          {...register(name, validation)}
          {...props}
        />
      </div>
      <View className="ml-3">
        <Label htmlFor={id} className={cx('text-lg font-semibold', { 'text-rose-600': hasError })}>
          {label}
        </Label>
      </View>
    </View>
  );
};
