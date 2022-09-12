import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ForwardedRef,
} from 'react';

type ITextInputProps = {
  children: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = React.forwardRef(
  (props: ITextInputProps, ref: ForwardedRef<HTMLButtonElement>) => (
    <button
      ref={ref}
      {...props}
      className="rounded-lg bg-primary-500 text-lg font-semibold py-2 px-4 text-white hover:bg-primary-600 my-2"
    >
      {props.children}
    </button>
  )
);

Button.displayName = 'Button';
export default Button;
