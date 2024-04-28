import { JSXElement } from 'solid-js';

export type DialogContextInstance = {
  activeDialogs: DialogInstance[],
  createDialog: (config: DialogCreateConfig) => string,
  closeDialog: (id?: string) => void,
  closeAllDialogs: () => void,
};

export type DialogInstance = {
  id: string,
  title: string,
  template: () => JSXElement
};

export type DialogCreateConfig = {
  id?: string,
  title: string,
  template: () => JSXElement
};
