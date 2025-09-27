type ConfirmDialogArgs = {
    title: string;
    content: string;
    okLabel?: string;
    cancelLabel?: string;
};
export declare function useConfirmDialog({ title, content, okLabel, cancelLabel, }: ConfirmDialogArgs): {
    showConfirm: () => Promise<unknown>;
    ConfirmDialog: () => import("react/jsx-runtime").JSX.Element;
};
export {};
