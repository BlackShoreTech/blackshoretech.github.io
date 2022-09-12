import React, {
  DetailedHTMLProps,
  ForwardedRef,
  InputHTMLAttributes,
} from 'react';

type ITextInputProps = {
  label: string;
} & DetailedHTMLProps<
  InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export const TextAreaInput = React.forwardRef(
  (props: ITextInputProps, ref: ForwardedRef<HTMLTextAreaElement>) => (
    <div className="flex flex-wrap justify-between items-center">
      <div>
        <p>{props.label}</p>
        <textarea
          ref={ref}
          type="text"
          {...props}
          className="rounded-sm border border-gray-900 px-2 py-1"
        />
      </div>
    </div>
  )
);

TextAreaInput.displayName = 'TextAreaInput';
export default TextAreaInput;
