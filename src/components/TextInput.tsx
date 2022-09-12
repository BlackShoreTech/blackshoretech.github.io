import React, {
  DetailedHTMLProps,
  ForwardedRef,
  InputHTMLAttributes,
} from 'react';

type ITextInputProps = {
  label: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const TextInput = React.forwardRef(
  (props: ITextInputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <div className="flex flex-wrap justify-between items-center">
      <div>
        <p>{props.label}</p>
        <input
          ref={ref}
          type="text"
          {...props}
          className="rounded-sm border border-gray-900 px-2 py-1"
        />
      </div>
    </div>
  )
);

TextInput.displayName = 'TextInput';
export default TextInput;
