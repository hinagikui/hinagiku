import { JSX, ReactEventHandler } from 'react';
type Props = {
    color?: 'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
    style?: 'default' | 'outline' | 'dash' | 'soft' | 'ghost' | 'link';
    active?: boolean;
    disabled?: boolean;
    size?: 'default' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    modifier?: 'default' | 'wide' | 'block' | 'square' | 'circle';
    loading?: boolean;
    children?: JSX.Element | string;
    onClick?: ReactEventHandler<HTMLButtonElement>;
};
export declare const Button: ({ color, style, active, disabled, size, modifier, loading, children, onClick, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
