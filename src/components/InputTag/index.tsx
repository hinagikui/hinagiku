import { useState, type KeyboardEvent } from 'react';
import { Button } from '../Button';

type Props = {
  value: string[],
  max?: number,
  updateValue: (newValue: string[]) => void,
  className?: string,
  placeholder?: string,
  removable?: boolean,
};

export const InputTag = ({
  value = [],
  max = 5,
  updateValue,
  className,
  placeholder,
  removable = true,
}: Props) => {
  const [input, setInput] = useState('');

  const onKeyDown = (ev: KeyboardEvent) => {
    const { key } = ev;

    switch (key) {
      case 'Backspace':
        if (!input.length && value.length && updateValue) {
          updateValue(value.slice(0, -1));
        }
        break;
      case 'Enter':
      case ' ':
      case ',':
        ev.preventDefault();

        if (!input.length || value.length >= max || ev.nativeEvent.isComposing) {
          return;
        }

        // for unique
        if (!value.includes(input)) {
          updateValue([...value, input]);
        }
        setInput('');
        break;
    }
  };

  const deleteTag = (ev: React.SyntheticEvent<HTMLButtonElement, Event>, i: number) => {
    ev.preventDefault();
    const newValue = [...value];
    newValue.splice(i, 1);
    updateValue(newValue);
  };

  return (
    <div className={`input ${className}`}>
      {
        value.map(
          (tag, index) =>
            <div
              key={index}
              className="badge badge-primary rounded-sm hover:cursor-pointer flex justify-between"
            >
              {tag}
              {removable
                ?
                (
                  <Button modifier="circle" size="xxs" onClick={(ev) => deleteTag(ev, index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </Button>
                )
                : undefined
              }
            </div>
        )
      }
      <input
        className="grow"
        value={input}
        placeholder={value.length ? '' : placeholder}
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={onKeyDown}
      />
      <span className="text-xs text-neutral-500">{value.length}/{max}</span>
    </div>
  );
};
