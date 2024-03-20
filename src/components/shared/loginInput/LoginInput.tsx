import { Form, Input } from 'antd';
import { ChangeEvent } from 'react';

type Props = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
};

const LoginInput = ({ onChange, value }: Props) => (
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
            size="large"
            onChange={onChange}
            autoComplete="off"
            value={value}
        />
    </Form.Item>
);

export default LoginInput;
