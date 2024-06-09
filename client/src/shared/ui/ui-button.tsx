import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type UiButtonVariant = 'primary' | 'secondary' | 'outlined';

export type UiButtonProps = {
  variant: UiButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const UiButton = (props: UiButtonProps) => {
  const { variant, className } = props;
  return (
    <button
      {...props}
      className={clsx(
        className,
        'px-4 h-10 rounded cursor-pointer flex gap-2 items-center justify-center',
        {
          primary: 'text-white bg-sky-500 shadow-teal-500/30',
          secondary: 'text-white bg-sky-500 shadow-teal-500/30',
          outlined: 'text-white bg-sky-500 shadow-teal-500/30',
        }[variant],
      )}
    />
  );
};
