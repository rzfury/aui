import { useContext } from 'react';
import { DialogContext } from './context';

export function useDialog() {
  const { createDialog, closeDialog, closeAllDialogs } = useContext(DialogContext);
  return {
    createDialog,
    closeDialog,
    closeAllDialogs,
  }
}
