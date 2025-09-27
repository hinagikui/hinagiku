import type { JSX, ReactEventHandler } from 'react';

type Props = {
  color?: 'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error',
  style?: 'default' | 'outline' | 'dash' | 'soft' | 'ghost' | 'link',
  active?: boolean,
  disabled?: boolean,
  loading?: boolean,
  children?: JSX.Element | string,
  onClick?: ReactEventHandler<HTMLButtonElement>,
};

const colorClassMap = {
  'default': undefined,
  'neutral': 'btn-neutral',
  'primary': 'btn-primary',
  'secondary': 'btn-secondary',
  'accent': 'btn-accent',
  'info': 'btn-info',
  'success': 'btn-success',
  'warning': 'btn-warning',
  'error': 'btn-error',
};

const styleClassMap = {
  'default': undefined,
  'outline': 'btn-outline',
  'dash': 'btn-dash',
  'soft': 'btn-soft',
  'ghost': 'btn-ghost',
  'link': 'btn-link',
};

const Button = ({
  color = 'default',
  style = 'default',
  active = false,
  disabled = false,
  loading = false,
  children,
  onClick,
}: Props) => {
  const baseClass = 'btn';
  const colorClass = color ? colorClassMap[color] : undefined;
  const styleClass = style ? styleClassMap[style] : undefined;
  const activeClass = active ? 'btn-active' : undefined;
  const disabledClass = disabled ? 'btn-disabled' : undefined;
  const classes = {
    baseClass,
    colorClass,
    styleClass,
    activeClass,
    disabledClass,
  };
  const convertedClasses = Object.values(classes).join(' ').trim();
  
  return (
    <button
      className={convertedClasses}
      disabled={loading || disabled}
      onClick={onClick}
    >
      {loading ? (<span className="loading loading-spinner"></span>) : null}
      {children}
    </button>
  );
};

export default Button;
