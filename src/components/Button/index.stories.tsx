import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  argTypes: {
    onClick: {
      control: false,
    },
  }
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    loading: false,
    children: 'Button',
    color: 'default',
    style: 'default',
    active: false,
    disabled: false
  }
};
