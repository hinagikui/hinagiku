import { useRef, useState } from 'react';
import { Modal } from '../components/Modal';

type ConfirmDialogArgs = {
  title: string,
  content: string,
  okLabel?: string,
  cancelLabel?: string,
};
export default function useConfirmDialog({
  title,
  content,
  okLabel = 'OK',
  cancelLabel = 'CANCEL',
}: ConfirmDialogArgs) {
  const ref = useRef<(value: unknown) => void>(null);
  const [active, setActive] = useState(false);

  const showConfirm = () => {
    setActive(true);
    return new Promise((resolve) => {
      ref.current = resolve;
    });
  };

  const resolveConfirm = (result: boolean) => {
    if (!ref.current) return;

    setActive(false);
    ref.current(result);
  };

  const ConfirmDialog = () => {
    return (
      <Modal
        active={active}
        disableEsc={true}
      >
        <>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{content}</p>
          <div className="modal-action">
            <button className="btn btn-success" onClick={() => resolveConfirm(true)}>
              {okLabel}
            </button>
            <button className="btn btn-warning" onClick={() => resolveConfirm(false)}>
              {cancelLabel}
            </button>
          </div>
        </>
      </Modal>
    );
  };

  return {
    showConfirm,
    ConfirmDialog,
  };
};
