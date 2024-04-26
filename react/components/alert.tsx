import { PropsWithChildren } from 'react';
import { AngelUIBaseProps } from './types';

type AlertProps = PropsWithChildren<AngelUIBaseProps<'alert'> & {
  className?: string,
  color?: 'white' | 'blue' | 'yellow' | 'green' | 'red',
  // arbitrary
  bgClassName?: string,
  textClassName?: string,
  withProgress?: boolean,
  progressPercentage?: number,
}>;

export function Alert(props: AlertProps) {
  return (
    <div
      data-aui-alert
      data-aui-alert-color={props.color}
      className={props.className}
      data-aui-properties={typeof props.auiProperties === 'string' ? props.auiProperties : props.auiProperties?.join(' ')}
      {...props.htmlProps}
    >
      <div data-aui-alert-bg className={props.bgClassName} aria-hidden="true" />
      <span data-aui-alert-text className={props.textClassName}>{props.children}</span>
      {props.withProgress && (
        <div data-aui-alert-progress-bar>
          <div data-aui-alert-progress-bar-inner style={{ width: `${props.progressPercentage || 0}%` }} />
        </div>
      )}
    </div>
  );
}
