import { JSX, ParentProps } from 'solid-js';
import { AngelUIBaseProps } from './types';

type ButtonProps = ParentProps<AngelUIBaseProps<'button'> & {
  class?: string,
  color?: 'white' | 'blue' | 'yellow' | 'green' | 'red',
  disabled?: boolean,
  onClick?: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent>,
  type?: HTMLButtonElement['type'],
  // arbitrary
  bgClass?: string,
  textClass?: string,
}>;

export function Button(props: ButtonProps) {
  return (
    <button
      data-aui-button
      data-aui-button-color={props.color}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
      class={props.class}
      data-aui-properties={typeof props.auiProperties === 'string' ? props.auiProperties : props.auiProperties?.join(' ')}
      {...props.htmlProps}
    >
      <div data-aui-button-bg class={props.bgClass} aria-hidden="true" />
      <span data-aui-button-text class={props.textClass}>{props.children}</span>
    </button>
  );
}
