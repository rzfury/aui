import { createContext } from 'solid-js';
import { DialogContextInstance } from './types';

export const DialogContext = createContext<DialogContextInstance>({
  activeDialogs: [],
  createDialog: () => { throw 'Out of dialog context!' },
  closeDialog: () => { throw 'Out of dialog context!' },
  closeAllDialogs: () => { throw 'Out of dialog context!' },
});
