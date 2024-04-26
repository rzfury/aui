import { ReactNode } from 'react';

export type DialogContextInstance = {
  activeDialogs: DialogInstance[],
  createDialog: (config: DialogCreateConfig) => string,
  closeDialog: (id?: string) => void,
  closeAllDialogs: () => void,
};

export type DialogInstance = {
  id: string,
  title: string,
  template: ReactNode
};

export type DialogCreateConfig = {
  id?: string,
  title: string,
  template: ReactNode
};
