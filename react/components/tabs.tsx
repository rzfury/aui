import { PropsWithChildren, ReactNode, useState } from 'react';
import { AngelUIBaseProps } from './types';

type TabsProps = PropsWithChildren<AngelUIBaseProps<'tabs'> & {
  contents: {
    label: string,
    content: ReactNode
  }[]
}>;

export function Tabs(props: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div data-aui-tabs>
      <div data-aui-tabs-buttons>
        {props.contents.map(({ label }, i) => (
          <button key={i} data-aui-tabs-button={activeTab === i ? 'active' : 'inactive'} onClick={() => setActiveTab(i)}>{label}</button>
        ))}
      </div>
      <div data-aui-tabs-contents>
        {props.contents.map(({ content }, i) => (
          <div key={i} data-aui-tabs-content={activeTab === i ? 'active' : 'inactive'}>{content}</div>
        ))}
      </div>
    </div>
  );
}
