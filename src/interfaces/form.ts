export type Field = {
  type: string;
  placeholder?: string;
  label?: string;
  title?: string;
  value?: string;
  maxLength?: number;
}

export type FormFieldState = {
    name: string;
    value: string | undefined | null;
    error: string;
  };