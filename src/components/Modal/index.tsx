import { useEffect, useRef, type JSX, type ReactEventHandler } from 'react';

type ModalProps = {
  active?: boolean,
  disableEsc?: boolean,
  children?: JSX.Element,
  onClose?: ReactEventHandler<HTMLDialogElement>,
};

export const Modal = ({
  active = false,
  disableEsc = false,
  children,
  onClose,
}: ModalProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  const onKeydown = (ev: KeyboardEvent) => {
    if (ev.isComposing) {
      return;
    }

    if (ev.key === 'Escape') {
      ev.preventDefault();
    }
  };

  useEffect(() => {
    if (active) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [active, ref]);

  useEffect(() => {
    if (disableEsc) {
      document.addEventListener('keydown', onKeydown);
    } else {
      document.removeEventListener('keydown', onKeydown);
    }

    return () => document.removeEventListener('keydown', onKeydown);
  }, [disableEsc]);

  return (
    <dialog ref={ref} onClose={onClose} className="modal">
      <div className="modal-box">
        {children}
      </div>
    </dialog>
  );
};
