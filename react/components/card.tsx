import { PropsWithChildren, ReactNode } from 'react';
import { AngelUIBaseProps } from './types';

type CardProps = PropsWithChildren<AngelUIBaseProps<'card'> & {
  className?: string,
  //arbitrary
  head?: ReactNode
  footer?: ReactNode
}>;

export function Card(props: CardProps) {
  return (
    <div
      data-aui-card
      data-aui-properties={typeof props.auiProperties === 'string' ? props.auiProperties : props.auiProperties?.join(' ')}
      className={props.className}
    >
      {props.head && <div data-aui-card-head>{props.head}</div>}
      {props.auiProperties?.includes('nocardbody')
        ? props.children
        : <div data-aui-card-body>
          {props.children}
        </div>
      }
      {props.footer && <div data-aui-card-footer>{props.footer}</div>}
    </div>
  );
}
