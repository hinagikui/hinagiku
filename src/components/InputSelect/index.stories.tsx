import type { ArgTypes, Meta, StoryObj } from '@storybook/react';
import { InputSelect } from '.';
import { useState } from 'react';

const meta: Meta<typeof InputSelect> = {
  title: 'components/InputSelect',
  component: InputSelect,
  argTypes: {
    value: {
      control: false,
    },
    updateValue: {
      control: false,
    },
  }
};
export default meta;

type Story = StoryObj<typeof meta>;

const Preview = (args: ArgTypes<typeof InputSelect>) => {
  const [value, setValue] = useState<string|number|object|undefined>();

  return (
    <>
      <InputSelect
        value={value}
        updateValue={setValue}
        {...args}
      />
      <div className="mockup-code w-full mt-2">
        <pre><code>{JSON.stringify(value)}</code></pre>
      </div>
    </>
  );
};

export const Default: Story = {
  render: (args) => <Preview {...args} />,
  args: {
    placeholder: 'Select...',
    options: [
      {title: 'test1', value: {
        test: 1,
      }},
      {title: 'test2', value: 2},
      {title: 'test3', value: 3},
    ],
  }
};
