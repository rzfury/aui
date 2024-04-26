import { PropsWithChildren } from 'react';
import { AngelUIBaseProps } from './types';

type BadgeProps = PropsWithChildren<AngelUIBaseProps<'badge'> & {
  className?: string,
  color?: 'white' | 'blue' | 'yellow' | 'green' | 'red',
  // arbitrary
  bgClassName?: string,
  textClassName?: string,
}>;

export function Badge(props: BadgeProps) {
  return (
    <div
      data-aui-badge
      data-aui-badge-color={props.color}
      className={props.className}
      data-aui-properties={typeof props.auiProperties === 'string' ? props.auiProperties : props.auiProperties?.join(' ')}
      {...props.htmlProps}
    >
      <div data-aui-badge-bg className={props.bgClassName} aria-hidden="true" />
      <span data-aui-badge-text className={props.textClassName}>{props.children}</span>
    </div>
  );
}
