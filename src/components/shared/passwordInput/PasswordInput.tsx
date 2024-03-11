import Password from 'antd/es/input/Password';

type Props = {
    placeholder: string;
    visibilityToggle: boolean;
};

const PasswordInput = ({
    placeholder = 'Password',
    visibilityToggle,
}: Partial<Props>) => {
    return (
        <Password
            visibilityToggle={visibilityToggle}
            placeholder={placeholder}
            size="large"
        />
    );
};

export default PasswordInput;
