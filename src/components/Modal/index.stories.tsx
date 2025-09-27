import type { ArgTypes, Meta, StoryObj } from '@storybook/react';
import Modal from '.';
import Button from '../Button';
import { useState } from 'react';
import useConfirmDialog from '../../hooks/useConfirmDialog';

const meta: Meta<typeof Modal> = {
  title: 'components/Modal',
  component: Modal,
  argTypes: {
    active: {
      control: false,
    },
    children: {
      control: false,
    },
    onClose: {
      control: false,
    },
  }
};
export default meta;

type Story = StoryObj<typeof meta>;

const PreviewModal = (args: ArgTypes<typeof Modal>) => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <Button onClick={() => setActive(true)}>Open</Button>
      <Modal
        active={active}
        onClose={() => setActive(false)}
        {...args}>
        <>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </>
      </Modal>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <PreviewModal {...args} />
};

const PreviewConfirmDialog = () => {
  const { showConfirm, ConfirmDialog } = useConfirmDialog({
    title: 'ConfirmDialog',
    content: 'Select Ok or Cancel',
  });

  const handleClick = async () => {
    const result = await showConfirm();
    alert(result);
  };

  return (
    <div>
      <Button onClick={handleClick}>Confirm</Button>
      <ConfirmDialog />
    </div>
  );
};

export const Confirm = {
  render: () => <PreviewConfirmDialog />
};
