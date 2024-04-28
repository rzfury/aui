import { ParentProps } from 'solid-js';
import { AngelUIBaseProps } from './types';

type AlertProps = ParentProps<AngelUIBaseProps<'alert'> & {
  class?: string,
  color?: 'white' | 'blue' | 'yellow' | 'green' | 'red',
  // arbitrary
  bgClass?: string,
  textClass?: string,
  withProgress?: boolean,
  progressPercentage?: number,
}>;

export function Alert(props: AlertProps) {
  return (
    <div
      data-aui-alert
      data-aui-alert-color={props.color}
      class={props.class}
      data-aui-properties={typeof props.auiProperties === 'string' ? props.auiProperties : props.auiProperties?.join(' ')}
      {...props.htmlProps}
    >
      <div data-aui-alert-bg class={props.bgClass} aria-hidden="true" />
      <span data-aui-alert-text class={props.textClass}>{props.children}</span>
      {props.withProgress && (
        <div data-aui-alert-progress-bar>
          <div data-aui-alert-progress-bar-inner style={{ width: `${props.progressPercentage || 0}%` }} />
        </div>
      )}
    </div>
  );
}
