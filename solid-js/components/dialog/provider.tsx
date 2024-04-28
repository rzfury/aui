import { ParentProps, createEffect, createSignal } from 'solid-js';
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

export function DialogContextProvider(props: ParentProps) {
  const [activeDialogs, setActiveDialogs] = createSignal<DialogInstance[]>([]);

  const handleCreateDialog = (config: DialogCreateConfig) => {
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
  };

  const handleCloseDialog = (id?: string) => {
    setActiveDialogs(prev => {
      const clone = [...prev];
      clone.splice(clone.findIndex(d => d.id === (id || '')));
      return clone;
    });
  };

  const handleCloseAllDialog = () => {
    setActiveDialogs([]);
  };

  createEffect(() => {
    const dialogFlag = document.body.getAttribute(AUIConst.DocumentBodyDialogFlag) !== null;
    const activeDialogsCount = activeDialogs().length;

    if (dialogFlag && activeDialogsCount === 0) {
      document.body.removeAttribute(AUIConst.DocumentBodyDialogFlag);
    }
    else if (!dialogFlag && activeDialogsCount > 0) {
      document.body.setAttribute(AUIConst.DocumentBodyDialogFlag, '');
    }
  });

  return (
    <DialogContext.Provider
      value={{
        activeDialogs: activeDialogs(),
        createDialog: handleCreateDialog,
        closeDialog: handleCloseDialog,
        closeAllDialogs: handleCloseAllDialog,
      }}
    >
      {props.children}
      <DialogRenderer
        dialogs={activeDialogs()}
        closeDialog={handleCloseDialog}
      />
    </DialogContext.Provider>
  )
}
