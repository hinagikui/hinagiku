type Props = {
    value: string[];
    max?: number;
    updateValue: (newValue: string[]) => void;
    className?: string;
    placeholder?: string;
    removable?: boolean;
};
declare const TagInput: ({ value, max, updateValue, className, placeholder, removable, }: Props) => import("react/jsx-runtime").JSX.Element;
export default TagInput;
