import { CheckBoxProps } from '../types';

export function CheckBox(props: CheckBoxProps) {
  return (
    <label data-aui-input-checkbox data-aui-input-labelled>
      <input type="checkbox" name={props.name}/>
      <span data-aui-input-label>{props.label}</span>
    </label>
  )
}
