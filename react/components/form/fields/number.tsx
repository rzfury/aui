import { TextFieldProps } from '../types';

export function Number(props: TextFieldProps) {
  return (
    <div data-aui-input-text data-aui-input-labelled>
      <label data-aui-input-label className={props.labelClassName}>{props.label}</label>
      <div data-aui-input-border className={props.wrapperClassName}>
        <input type="number" name={props.name}/>
      </div>
    </div>
  )
}
