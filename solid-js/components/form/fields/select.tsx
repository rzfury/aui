import { SelectFieldProps } from '../types';

export function Select(props: SelectFieldProps) {
  return (
    <div data-aui-input-select data-aui-input-labelled>
      <label data-aui-input-label class={props.labelClass}>{props.label}</label>
      <div data-aui-input-border class={props.wrapperClass}>
        <select class={props.inputClass}>
          {props.children}
        </select>
        <i data-aui-input-select-arrow/>
      </div>
    </div>
  )
}