import type { ArgTypes, Meta, StoryObj } from '@storybook/react';
import { InputTag } from '.';
import { useState } from 'react';

const meta: Meta<typeof InputTag> = {
  title: 'components/InputTag',
  component: InputTag,
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

const Preview = (args: ArgTypes<typeof InputTag>) => {
  const [tags, setTags] = useState(['tag1', 'tag2']);

  return (
    <InputTag value={tags} updateValue={setTags} {...args} />
  );
};

export const Default: Story = {
  render: (args) => <Preview {...args} />,
  args: {
    max: 5,
  }
};
