import type { Meta, StoryObj } from '@storybook/react';
import LoginInput from './LoginInput';

const meta = {
    title: 'LoginInput',
    component: LoginInput,
} satisfies Meta<typeof LoginInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Partial<Story> = {
    args: {
        size: 'small',
        onChange: () => {},
    },
};

export const Large: Partial<Story> = {
    args: {
        size: 'large',
        onChange: () => {},
    },
};
