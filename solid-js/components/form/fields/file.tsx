import { Button } from '../../button';
import { FileInputProps } from '../types';

export function FileInput(props: FileInputProps) {
  let inputRef: HTMLInputElement | null = null;
  let fileNameRef: HTMLDivElement | null = null;

  const handleButtonClick = () => {
    inputRef?.click();
  }

  const handleChange = (e: Event & { currentTarget: HTMLInputElement, target: Element }) => {
    if (fileNameRef)
      fileNameRef.textContent = e.currentTarget.files?.item(0)?.name ?? 'No File Selected';

    if(props.onChange)
      props.onChange(e);
  }

  return (
    <div data-aui-input-file data-aui-input-labelled>
      <input ref={ref => inputRef = ref} type="file" name={props.name} onChange={handleChange}/>
      <label data-aui-input-label class={props.labelClass}>{props.label}</label>
      <div data-aui-input-border class={props.wrapperClass}>
        <Button auiProperties="nopadding" class="m-2 px-6 py-2" onClick={handleButtonClick}>Choose File</Button>
        <div ref={ref => fileNameRef = ref} data-aui-input-file-name>No File Selected</div>
      </div>
    </div>
  )
}
