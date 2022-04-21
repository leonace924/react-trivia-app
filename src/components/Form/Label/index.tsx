import { type HTMLProps } from 'react';
import cx from 'classnames';

type LabelProps = HTMLProps<HTMLLabelElement>;

export const Label = ({ className, htmlFor, children, ...props }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      {...props}
      className={cx('block text-md font-normal text-black', className)}
    >
      {children}
    </label>
  );
};
