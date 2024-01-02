import { InputHTMLAttributes } from 'react';

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
  reference?: HTMLInputElement;
  hasFocus?: boolean;
  readonly?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
