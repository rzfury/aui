import { TextAreaProps } from '../types';

export function TextArea(props: TextAreaProps) {
  return (
    <div data-aui-input-textarea data-aui-input-labelled>
      <label data-aui-input-label className={props.labelClassName}>{props.label}</label>
      <div data-aui-input-border className={props.wrapperClassName}>
        <textarea className={props.inputClassName}/>
      </div>
    </div>
  )
}
