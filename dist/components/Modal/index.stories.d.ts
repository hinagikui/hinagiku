import { Meta, StoryObj } from '@storybook/react';
import { Modal } from '.';
declare const meta: Meta<typeof Modal>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Confirm: {
    render: () => import("react/jsx-runtime").JSX.Element;
};
