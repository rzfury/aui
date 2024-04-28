import { ParentProps } from 'solid-js';
import { AngelUIBaseProps } from './types';

type BadgeProps = ParentProps<AngelUIBaseProps<'badge'> & {
  class?: string,
  color?: 'white' | 'blue' | 'yellow' | 'green' | 'red',
  // arbitrary
  bgClass?: string,
  textClass?: string,
}>;

export function Badge(props: BadgeProps) {
  return (
    <div
      data-aui-badge
      data-aui-badge-color={props.color}
      class={props.class}
      data-aui-properties={typeof props.auiProperties === 'string' ? props.auiProperties : props.auiProperties?.join(' ')}
      {...props.htmlProps}
    >
      <div data-aui-badge-bg class={props.bgClass} aria-hidden="true" />
      <span data-aui-badge-text class={props.textClass}>{props.children}</span>
    </div>
  );
}
