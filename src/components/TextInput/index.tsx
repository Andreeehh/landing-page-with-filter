import React, { InputHTMLAttributes, forwardRef, useRef } from 'react';
import * as Styled from './styles';

export type TextInputProps = {
  label: string;
  name: string;
  type?: string;
  onInputChange?: (value: string) => void;
  disabled?: boolean;
  errorMessage?: string;
  value?: string;
  icon?: React.ReactNode;
  as?: 'input' | 'textarea';
  reference?: React.Ref<HTMLInputElement>;
  hasFocus?: boolean;
  readonly?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      type = 'text',
      label,
      name,
      disabled = false,
      onInputChange,
      errorMessage = '',
      value = '',
      icon = '',
      as = 'input',
      readOnly = false,
      ...rest
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    React.useImperativeHandle(ref, () => inputRef.current);

    const handleChange = () => {
      const value = inputRef.current?.value || '';

      if (onInputChange) {
        onInputChange(value);
      }
    };

    return (
      <Styled.Wrapper>
        <Styled.InputWrapper errorMessage={errorMessage}>
          <Styled.Input
            type={type}
            name={name}
            id={name}
            disabled={disabled}
            ref={inputRef}
            onChange={handleChange}
            placeholder={label}
            errorMessage={errorMessage}
            as={as}
            readOnly={readOnly}
            value={value}
            {...rest}
          />

          <Styled.Label htmlFor={name} element={as}>
            {label}
          </Styled.Label>
          {!!icon && as !== 'textarea' && icon}
        </Styled.InputWrapper>

        {!!errorMessage && (
          <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
        )}
      </Styled.Wrapper>
    );
  },
);

TextInput.displayName = 'TextInput';
