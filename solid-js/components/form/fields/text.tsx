import { TextFieldProps } from '../types';

export function Text(props: TextFieldProps) {
  return (
    <div data-aui-input-text data-aui-input-labelled>
      <label data-aui-input-label class={props.labelClass}>{props.label}</label>
      <div data-aui-input-border class={props.wrapperClass}>
        <input type="text" name={props.name}/>
      </div>
    </div>
  )
}
