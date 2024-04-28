import { ParentProps, JSXElement } from 'solid-js';
import { AngelUIBaseProps } from './types';

type CardProps = ParentProps<AngelUIBaseProps<'card'> & {
  class?: string,
  //arbitrary
  head?: JSXElement
  footer?: JSXElement
}>;

export function Card(props: CardProps) {
  return (
    <div
      data-aui-card
      data-aui-properties={typeof props.auiProperties === 'string' ? props.auiProperties : props.auiProperties?.join(' ')}
      class={props.class}
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
