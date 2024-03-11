import { Flex, Form } from 'antd';
import CustomButton from '../../../../components/shared/customButton/CustomButton';
import LoginInput from '../../../../components/shared/loginInput/LoginInput';
import PasswordInput from '../../../../components/shared/passwordInput/PasswordInput';

const RegisterPage = () => {
    const handleChange = () => {};

    return (
        <Form
            style={{
                height: '220px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <Flex vertical>
                <Form.Item required>
                    <LoginInput onChange={handleChange} />
                </Form.Item>
                <Flex vertical gap={6}>
                    <Form.Item noStyle required>
                        <PasswordInput />
                    </Form.Item>
                    <Form.Item required>
                        <PasswordInput
                            placeholder="Repeat password"
                            visibilityToggle={false}
                        />
                    </Form.Item>
                </Flex>
            </Flex>
            <CustomButton block size="large">
                Create account
            </CustomButton>
        </Form>
    );
};

export default RegisterPage;
