import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { AUIConst } from '../../_const';
import { DialogContext } from './context';
import { DialogRenderer } from './renderer';
import { DialogCreateConfig, DialogInstance } from './types';

const randomId = () => {
  const charcodes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102];
  const str: string[] = [];
  str.length = 8;
  str.fill('');
  
  return str.map(() => {
    return String.fromCharCode(charcodes[Math.floor(Math.random() * charcodes.length)]);
  }).join('');
}

export function DialogContextProvider(props: PropsWithChildren) {
  const [activeDialogs, setActiveDialogs] = useState<DialogInstance[]>([]);

  const handleCreateDialog = useCallback((config: DialogCreateConfig) => {
    const dialogId = config.id || randomId();

    setActiveDialogs(prev => {
      const clone = [...prev];
      clone.push({
        id: dialogId,
        title: config.title,
        template: config.template
      });
      return clone;
    });

    return dialogId;
  }, [activeDialogs, setActiveDialogs]);

  const handleCloseDialog = useCallback((id?: string) => {
    setActiveDialogs(prev => {
      const clone = [...prev];
      clone.splice(clone.findIndex(d => d.id === (id || '')));
      return clone;
    });
  }, [activeDialogs, setActiveDialogs]);

  const handleCloseAllDialog = useCallback(() => {
    setActiveDialogs([]);
  }, [activeDialogs, setActiveDialogs]);

  useEffect(() => {
    const dialogFlag = document.body.getAttribute(AUIConst.DocumentBodyDialogFlag) !== null;

    if (dialogFlag && activeDialogs.length === 0) {
      document.body.removeAttribute(AUIConst.DocumentBodyDialogFlag);
    }
    else if (!dialogFlag && activeDialogs.length > 0) {
      document.body.setAttribute(AUIConst.DocumentBodyDialogFlag, '');
    }
  }, [activeDialogs]);

  return (
    <DialogContext.Provider
      value={{
        activeDialogs,
        createDialog: handleCreateDialog,
        closeDialog: handleCloseDialog,
        closeAllDialogs: handleCloseAllDialog,
      }}
    >
      {props.children}
      <DialogRenderer
        dialogs={activeDialogs}
        closeDialog={handleCloseDialog}
      />
    </DialogContext.Provider>
  )
}
