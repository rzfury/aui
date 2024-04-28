import { JSX, ParentProps } from 'solid-js'

export type FormFieldBaseProps = {
  name?: string,
  // arbitrary
  label?: string,
}

export type TextFieldProps = FormFieldBaseProps & {
  labelClass?: string,
  wrapperClass?: string,
  onChange?: (e: Event & { currentTarget: HTMLInputElement, target: Element }) => void
}

export type TextAreaProps = FormFieldBaseProps & {
  labelClass?: string,
  wrapperClass?: string,
  inputClass?: string,
  onChange?: JSX.ChangeEventHandlerUnion<HTMLTextAreaElement, Event>
}

export type SelectFieldProps = FormFieldBaseProps & ParentProps<{
  labelClass?: string,
  wrapperClass?: string,
  inputClass?: string,
  onChange?: JSX.ChangeEventHandlerUnion<HTMLSelectElement, Event>
}>

export type RadioButtonProps = FormFieldBaseProps & {
  labelClass?: string,
  wrapperClass?: string,
  inputClass?: string,
  onChange?: (e: Event & { currentTarget: HTMLInputElement, target: Element }) => void,
}

export type CheckBoxProps = FormFieldBaseProps & {
  labelClass?: string,
  wrapperClass?: string,
  inputClass?: string,
  onChange?: (e: Event & { currentTarget: HTMLInputElement, target: Element }) => void,
  checked?: boolean,
}

export type FileInputProps = FormFieldBaseProps & {
  labelClass?: string,
  wrapperClass?: string,
  inputClass?: string,
  onChange?: (e: Event & { currentTarget: HTMLInputElement, target: Element }) => void,
}
