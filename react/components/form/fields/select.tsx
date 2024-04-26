import { SelectFieldProps } from '../types';

export function Select(props: SelectFieldProps) {
  return (
    <div data-aui-input-select data-aui-input-labelled>
      <label data-aui-input-label className={props.labelClassName}>{props.label}</label>
      <div data-aui-input-border className={props.wrapperClassName}>
        <select className={props.inputClassName}>
          {props.children}
        </select>
        <i data-aui-input-select-arrow/>
      </div>
    </div>
  )
}