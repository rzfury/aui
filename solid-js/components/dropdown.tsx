import { JSXElement, createUniqueId } from 'solid-js';
import { AngelUIBaseProps } from './types';

export type DropdownMenuItemTypes = 'divider' | 'button' | 'link';

export type DropdownMenuItem = {
  type?: DropdownMenuItemTypes,
  render?: JSXElement,
  onClick?: () => void,
  href?: string,
};

type DropdownProps = AngelUIBaseProps<'card'> & {
  children: (attr: { onClick: () => void }) => JSXElement,
  //arbitrary
  items?: DropdownMenuItem[],
};

export function Dropdown(props: DropdownProps) {
  const id = createUniqueId();

  const handleDropdownToggle = () => {
    const dropdownEl = document.querySelector(`[data-aui-dropdown="${id}"]`);
    if (dropdownEl) {
      const dropdownOpen = dropdownEl.getAttribute('data-aui-dropdown-open');
      dropdownEl.setAttribute('data-aui-dropdown-open', dropdownOpen === 'true' ? 'false' : 'true');
    }
  }

  const handleClickButton = (onClickItem?: () => void) => {
    return () => {
      onClickItem?.();
      closeDropdown();
    }
  }

  const handleClickAnchor = () => {
    return () => {
      closeDropdown();
    }
  }

  const closeDropdown = () => {
    const dropdownEl = document.querySelector(`[data-aui-dropdown="${id}"]`);
    if (dropdownEl) {
      const dropdownOpen = dropdownEl.getAttribute('data-aui-dropdown-open');
      dropdownEl.setAttribute('data-aui-dropdown-open', dropdownOpen === 'true' ? 'false' : 'true');
    }
  }

  return (
    <div
      data-aui-dropdown={id}
      data-aui-dropdown-open="false"
      data-aui-properties={typeof props.auiProperties === 'string' ? props.auiProperties : props.auiProperties?.join(' ')}
    >
      <div data-aui-dropdown-trigger>
        {props.children({
          onClick: handleDropdownToggle
        })}
      </div>
      <div data-aui-dropdown-popup>
        <div
          role="button"
          onClick={closeDropdown}
          data-aui-dropdown-backdrop
        />
        <div data-aui-dropdown-item-list>
          {props.items?.map(item => {
            if (item.type === 'divider') {
              return <div data-aui-dropdown-item-divider />;
            }
            if (item.type === 'link') {
              return (
                <a
                  data-aui-dropdown-item
                  onClick={handleClickAnchor()}
                  href={item.href}
                >
                  {item.render}
                </a>
              );
            }
            return (
              <button
                data-aui-dropdown-item
                onClick={handleClickButton(item.onClick)}
              >
                {item.render}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
