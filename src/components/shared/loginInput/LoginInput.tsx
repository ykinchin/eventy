import { Form, Input } from 'antd';
import { ChangeEvent } from 'react';

type Props = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
};

const LoginInput = ({ onChange }: Props) => {
    return (
        <Form.Item required>
            <Input
                name="email"
                placeholder="Email"
                size="large"
                onChange={onChange}
                autoComplete="off"
            />
        </Form.Item>
    );
};

export default LoginInput;
