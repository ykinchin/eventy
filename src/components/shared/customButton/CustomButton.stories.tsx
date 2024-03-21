import type { Meta, StoryObj } from '@storybook/react';
import CustomButton from './CustomButton';

const meta = {
    title: 'CustomButton',
    component: CustomButton,
} satisfies Meta<typeof CustomButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Partial<Story> = {
    args: {
        children: 'Press me',
        size: 'small',
        onClick: () => {},
    },
};

export const Custom: Partial<Story> = {
    args: {
        children: 'Custom Button',
        size: 'large',
        backgroundColor: '#3fc1c9',
        onClick: () => {},
    },
};
