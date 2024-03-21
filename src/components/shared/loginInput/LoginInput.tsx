import { Form, Input } from 'antd';
import { ChangeEvent } from 'react';

type Props = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    size?: 'large' | 'small' | 'middle';
};

const LoginInput = ({ onChange, value, size = 'large' }: Props) => (
    <Form.Item
        name="email"
        rules={[
            { required: true, message: 'Email is required' },
            { type: 'email', message: 'Please enter a valid email' },
        ]}
    >
        <Input
            name="email"
            placeholder="Email"
            size={size}
            onChange={onChange}
            autoComplete="off"
            value={value}
        />
    </Form.Item>
);

export default LoginInput;
