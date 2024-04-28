import { TextAreaProps } from '../types';

export function TextArea(props: TextAreaProps) {
  return (
    <div data-aui-input-textarea data-aui-input-labelled>
      <label data-aui-input-label class={props.labelClass}>{props.label}</label>
      <div data-aui-input-border class={props.wrapperClass}>
        <textarea class={props.inputClass}/>
      </div>
    </div>
  )
}
