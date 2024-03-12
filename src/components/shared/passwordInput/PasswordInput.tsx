import { Form, Input } from 'antd';
import { ChangeEvent } from 'react';

type Props = {
    value?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    withHelp?: boolean;
    placeholder?: string;
};

const PasswordInput = ({
    placeholder = 'Password',
    value,
    onChange,
}: Partial<Props>) => {
    return (
        <Form.Item name={placeholder} required>
            <Input.Password
                name={placeholder.toLocaleLowerCase()}
                placeholder={placeholder}
                style={{ fontSize: 14, lineHeight: '180%' }}
                value={value}
                onChange={onChange}
                autoComplete="off"
                size="large"
            />
        </Form.Item>
    );
};

export default PasswordInput;
