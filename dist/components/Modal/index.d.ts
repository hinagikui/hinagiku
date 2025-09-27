import { JSX, ReactEventHandler } from 'react';
type ModalProps = {
    active?: boolean;
    disableEsc?: boolean;
    children?: JSX.Element;
    onClose?: ReactEventHandler<HTMLDialogElement>;
};
declare const Modal: ({ active, disableEsc, children, onClose, }: ModalProps) => import("react/jsx-runtime").JSX.Element;
export default Modal;
