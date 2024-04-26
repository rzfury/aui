import { PropsWithChildren } from 'react';
import { AngelUIBaseProps } from './types';

type ButtonProps = PropsWithChildren<AngelUIBaseProps<'button'> & {
  className?: string,
  color?: 'white' | 'blue' | 'yellow' | 'green' | 'red',
  disabled?: boolean,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'],
  // arbitrary
  bgClassName?: string,
  textClassName?: string,
}>;

export function Button(props: ButtonProps) {
  return (
    <button
      data-aui-button
      data-aui-button-color={props.color}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
      className={props.className}
      data-aui-properties={typeof props.auiProperties === 'string' ? props.auiProperties : props.auiProperties?.join(' ')}
      {...props.htmlProps}
    >
      <div data-aui-button-bg className={props.bgClassName} aria-hidden="true" />
      <span data-aui-button-text className={props.textClassName}>{props.children}</span>
    </button>
  );
}
