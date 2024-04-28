import { ParentProps, JSXElement, createSignal } from 'solid-js';
import { AngelUIBaseProps } from './types';

type TabsProps = ParentProps<AngelUIBaseProps<'tabs'> & {
  contents: {
    label: string,
    content: JSXElement
  }[]
}>;

export function Tabs(props: TabsProps) {
  const [activeTab, setActiveTab] = createSignal(0);

  return (
    <div data-aui-tabs>
      <div data-aui-tabs-buttons>
        {props.contents.map(({ label }, i) => (
          <button data-aui-tabs-button={activeTab() === i ? 'active' : 'inactive'} onClick={() => setActiveTab(i)}>{label}</button>
        ))}
      </div>
      <div data-aui-tabs-contents>
        {props.contents.map(({ content }, i) => (
          <div data-aui-tabs-content={activeTab() === i ? 'active' : 'inactive'}>{content}</div>
        ))}
      </div>
    </div>
  );
}
