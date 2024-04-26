import { ChangeEvent, useRef } from 'react';
import { Button } from '../../button';
import { FileInputProps } from '../types';

export function FileInput(props: FileInputProps) {
  const inputRef = useRef<HTMLInputElement | null>();
  const fileNameRef = useRef<HTMLDivElement | null>();

  const handleButtonClick = () => {
    inputRef.current?.click();
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (fileNameRef.current)
      fileNameRef.current.textContent = e.target.files?.item(0)?.name ?? 'No File Selected';

    props.onChange?.(e);
  }

  return (
    <div data-aui-input-file data-aui-input-labelled>
      <input ref={ref => inputRef.current = ref} type="file" name={props.name} onChange={handleChange}/>
      <label data-aui-input-label className={props.labelClassName}>{props.label}</label>
      <div data-aui-input-border className={props.wrapperClassName}>
        <Button auiProperties="nopadding" className="m-2 px-6 py-2" onClick={handleButtonClick}>Choose File</Button>
        <div ref={ref => fileNameRef.current = ref} data-aui-input-file-name>No File Selected</div>
      </div>
    </div>
  )
}
