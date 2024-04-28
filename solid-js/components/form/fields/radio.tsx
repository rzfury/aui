import { RadioButtonProps } from '../types';

export function Radio(props: RadioButtonProps) {
  return (
    <label data-aui-input-radio data-aui-input-labelled>
      <input type="radio" name={props.name}/>
      <span data-aui-input-label>{props.label}</span>
    </label>
  )
}
