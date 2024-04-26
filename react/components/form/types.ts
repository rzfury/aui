import { ComponentProps, PropsWithChildren } from 'react'

export type FormFieldBaseProps = {
  name?: string,
  // arbitrary
  label?: string,
}

export type TextFieldProps = FormFieldBaseProps & {
  labelClassName?: string,
  wrapperClassName?: string,
  onChange?: ComponentProps<'input'>['onChange']
}

export type TextAreaProps = FormFieldBaseProps & {
  labelClassName?: string,
  wrapperClassName?: string,
  inputClassName?: string,
  onChange?: ComponentProps<'textarea'>['onChange']
}

export type SelectFieldProps = FormFieldBaseProps & PropsWithChildren<{
  labelClassName?: string,
  wrapperClassName?: string,
  inputClassName?: string,
  onChange?: ComponentProps<'select'>['onChange']
}>

export type RadioButtonProps = FormFieldBaseProps & {
  labelClassName?: string,
  wrapperClassName?: string,
  inputClassName?: string,
  onChange?: ComponentProps<'input'>['onChange']
}

export type CheckBoxProps = FormFieldBaseProps & {
  labelClassName?: string,
  wrapperClassName?: string,
  inputClassName?: string,
  onChange?: ComponentProps<'input'>['onChange'],
  checked?: boolean,
}

export type FileInputProps = FormFieldBaseProps & {
  labelClassName?: string,
  wrapperClassName?: string,
  inputClassName?: string,
  onChange?: ComponentProps<'input'>['onChange'],
}
