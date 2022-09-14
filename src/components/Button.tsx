import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ForwardedRef,
} from 'react';

import classNames from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = React.forwardRef(
  (props: IButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const btnClass = classNames(
      {
        btn: true,
        'btn-xl': props.xl,
        'btn-base': !props.xl,
        'btn-primary': true,
      },
      props.className
    );

    // eslint-disable-next-line unused-imports/no-unused-vars
    const { xl, ...btnProps } = props;
    return (
      <button ref={ref} {...btnProps} className={btnClass}>
        {props.children}
        <style jsx>
          {`
            .btn {
              @apply inline-block rounded-md text-center;
            }

            .btn-base {
              @apply text-lg font-semibold py-2 px-4;
            }

            .btn-xl {
              @apply font-extrabold text-xl py-4 px-6;
            }

            .btn-primary {
              @apply text-white bg-primary-500;
            }

            .btn-primary:hover {
              @apply bg-primary-600;
            }
          `}
        </style>
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
