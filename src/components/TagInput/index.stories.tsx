import type { ArgTypes, Meta, StoryObj } from '@storybook/react';
import { TagInput } from '.';
import { useState } from 'react';

const meta: Meta<typeof TagInput> = {
  title: 'components/InputTag',
  component: TagInput,
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

const Preview = (args: ArgTypes<typeof TagInput>) => {
  const [tags, setTags] = useState(['tag1', 'tag2']);

  return (
    <TagInput value={tags} updateValue={setTags} {...args} />
  );
};

export const Default: Story = {
  render: (args) => <Preview {...args} />,
  args: {
    max: 5,
  }
};
