import { useMemo, type ChangeEvent } from 'react';

type Option = {
  title: string,
  value: string | number | object,
};

type Props = {
  options?: Option[],
  value: string | number | object | undefined,
  placeholder?: string,
  allowEmpty?: boolean,
  disabled?: boolean,
  updateValue: (newValue: string | number | object | undefined) => void,
};

export const InputSelect = ({
  options = [],
  value,
  placeholder,
  allowEmpty = false,
  disabled = false,
  updateValue,
}: Props) => {
  const uuid = useMemo(() => crypto.randomUUID(), []);
  const onChange = (ev: ChangeEvent<HTMLSelectElement>) => {
    const selected = ev.target.value;
    
    if (selected === uuid) {
      updateValue(undefined);
      return;
    }
    
    updateValue(JSON.parse(selected));
  };

  return (
    <select
      defaultValue={JSON.stringify(value)}
      className="select"
      onChange={onChange}
      disabled={disabled}
    >
      {placeholder ?
        <option
          value={uuid}
          disabled={!allowEmpty}
        >
          {placeholder}
        </option>
        : undefined
      }
      {options.map((option) => (
        <option key={JSON.stringify(option.value)} value={JSON.stringify(option.value)}>
          {option.title}
        </option>
      ))}
    </select>
  );
};
