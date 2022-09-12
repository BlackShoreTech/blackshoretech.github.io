import React, {
  DetailedHTMLProps,
  ForwardedRef,
  InputHTMLAttributes,
} from 'react';

import classNames from 'classnames';

type ITextInputProps = {
  label: string;
} & DetailedHTMLProps<
  InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export const TextAreaInput = React.forwardRef(
  (props: ITextInputProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const inputClass = classNames(
      'rounded-lg',
      'border',
      'border-gray-400',
      'px-2',
      'py-1',
      'mb-2',
      props.className
    );
    return (
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <p>{props.label}</p>
          <textarea ref={ref} type="text" {...props} className={inputClass} />
        </div>
      </div>
    );
  }
);

TextAreaInput.displayName = 'TextAreaInput';
export default TextAreaInput;
