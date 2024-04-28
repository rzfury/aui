import { ParentProps, JSXElement, createSignal } from 'solid-js';
import { AngelUIBaseProps } from './types';

type SideNavsProps = ParentProps<AngelUIBaseProps<'sidenavs'> & {
  contents: {
    label: JSXElement,
    content: JSXElement
  }[],
  mainClass?: string,
  contentWrapperClass?: string
}>;

export function SideNavs(props: SideNavsProps) {
  const [activeNavs, setActiveNavs] = createSignal(0);

  return (
    <div
      data-aui-sidenavs
      class={props.mainClass}
      data-aui-properties={typeof props.auiProperties === 'string' ? props.auiProperties : props.auiProperties?.join(' ')}
    >
      <nav data-aui-sidenavs-buttons>
        {props.contents.map(({ label }, i) => (
          <button data-aui-sidenavs-button={activeNavs() === i ? 'active' : 'inactive'} onClick={() => setActiveNavs(i)}>{label}</button>
        ))}
      </nav>
      <div data-aui-sidenavs-contents class={props.contentWrapperClass}>
        {props.contents.map(({ content }, i) => (
          <div data-aui-sidenavs-content={activeNavs() === i ? 'active' : 'inactive'}>{content}</div>
        ))}
      </div>
    </div>
  );
}
