export type AngelUIComponentKinds =
  | 'alert'
  | 'badge'
  | 'button'
  | 'card'
  | 'dropdown'
  | 'dialog'
  | 'sidenavs'
  | 'tabs';

export type AngelUISpecialProperties<T extends AngelUIComponentKinds> =
  T extends 'alert' ?
  ('skew' | 'nopadding' | 'text-nostyle') :
  T extends 'badge' ?
  ('skew' | 'nopadding' | 'flat' | 'text-nostyle') :
  T extends 'button' ?
  ('skew' | 'nopadding' | 'text-nostyle') :
  T extends 'card' ?
  ('skew' | 'nocardbody') :
  T extends 'dropdown' ?
  'PLACEHOLDER_NO_SPECIAL_PROPERTIES_FOR_THIS_COMPONENT' :
  T extends 'dialog' ?
  'PLACEHOLDER_NO_SPECIAL_PROPERTIES_FOR_THIS_COMPONENT' :
  T extends 'tabs' ?
  'PLACEHOLDER_NO_SPECIAL_PROPERTIES_FOR_THIS_COMPONENT' :
  T extends 'sidenavs' ?
  'PLACEHOLDER_NO_SPECIAL_PROPERTIES_FOR_THIS_COMPONENT' :
  never;

export type AngelUIBaseProps<T extends AngelUIComponentKinds> = {
  auiProperties?: AngelUISpecialProperties<T>[] | string,
} & (
    T extends 'alert' ? {
      htmlProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    } :
    T extends 'badge' ? {
      htmlProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    } :
    T extends 'button' ? {
      htmlProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    } :
    T extends 'card' ? {
      htmlProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    } : 
    T extends 'dropdown' ? {
      htmlProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    } : 
    T extends 'dialog' ? {
      htmlProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    } : 
    T extends 'tabs' ? {
      htmlProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    } : 
    T extends 'sidenavs' ? {
      htmlProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    } : never
  );
