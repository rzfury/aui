import { PropsWithChildren, ReactNode, useState } from 'react';
import { AngelUIBaseProps } from './types';

type SideNavsProps = PropsWithChildren<AngelUIBaseProps<'sidenavs'> & {
  contents: {
    label: ReactNode,
    content: ReactNode
  }[],
  mainClassName?: string,
  contentWrapperClassName?: string
}>;

export function SideNavs(props: SideNavsProps) {
  const [activeNavs, setActiveNavs] = useState(0);

  return (
    <div
      data-aui-sidenavs
      className={props.mainClassName}
      data-aui-properties={typeof props.auiProperties === 'string' ? props.auiProperties : props.auiProperties?.join(' ')}
    >
      <nav data-aui-sidenavs-buttons>
        {props.contents.map(({ label }, i) => (
          <button key={i} data-aui-sidenavs-button={activeNavs === i ? 'active' : 'inactive'} onClick={() => setActiveNavs(i)}>{label}</button>
        ))}
      </nav>
      <div data-aui-sidenavs-contents className={props.contentWrapperClassName}>
        {props.contents.map(({ content }, i) => (
          <div key={i} data-aui-sidenavs-content={activeNavs === i ? 'active' : 'inactive'}>{content}</div>
        ))}
      </div>
    </div>
  );
}
