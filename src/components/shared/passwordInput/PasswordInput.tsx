import { Form, Input } from 'antd';
import { ChangeEvent } from 'react';

type Props = {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    withHelp: boolean;
    placeholder: string;
    name: string;
};

const PasswordInput = ({
    placeholder = 'Password',
    value,
    onChange,
    withHelp = true,
    name = 'password',
}: Partial<Props>) => (
    <Form.Item
        name={name}
        rules={[
            {
                required: true,
                message: '',
            },
            {
                pattern: /.{6,}/,

                message: withHelp ? (
                    <div style={{ fontSize: 12, width: 320 }}>
                        Password must contain at least 6 characters
                    </div>
                ) : (
                    ''
                ),
            },
            ({ getFieldValue }) => ({
                validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }
                    return Promise.reject(
                        new Error('Confirm your password, please'),
                    );
                },
            }),
        ]}
    >
        <Input.Password
            name={name}
            placeholder={placeholder}
            style={{ fontSize: 14, lineHeight: '180%' }}
            value={value}
            onChange={onChange}
            autoComplete="off"
            size="large"
        />
    </Form.Item>
);

export default PasswordInput;
