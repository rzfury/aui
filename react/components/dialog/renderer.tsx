import { DialogInstance } from './types';

export function DialogRenderer(props: {
  dialogs: DialogInstance[],
  closeDialog: (id: string) => void
}) {
  const handleCloseDialog = (id: string) => () => {
    props.closeDialog(id)
  }

  return (
    <div data-aui data-aui-dialog data-aui-dialog-count={props.dialogs.length}>
      {props.dialogs.map(dialog => (
        <div key={dialog.id} role="dialog" aria-modal="true" data-aui-dialog-instance>
          <div data-aui-dialog-backdrop aria-hidden role="button" onClick={handleCloseDialog(dialog.id)}/>
          <div data-aui-dialog-card>
            <div data-aui-dialog-head>
              <div data-aui-dialog-title>{dialog.title}</div>
              <button type="button" data-aui-dialog-close-button onClick={handleCloseDialog(dialog.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div data-aui-dialog-content>
              {dialog.template}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
