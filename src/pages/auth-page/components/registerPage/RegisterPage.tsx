import { Button, Flex, Form } from 'antd';
import LoginInput from '../../../../components/shared/loginInput/LoginInput';
import PasswordInput from '../../../../components/shared/passwordInput/PasswordInput';

const RegisterPage = () => {
    return (
        <Form
            style={{
                height: '260px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <Flex vertical>
                <LoginInput onChange={() => {}} />
                <Flex vertical>
                    <PasswordInput />
                    <PasswordInput placeholder="Repeat password" />
                </Flex>
            </Flex>
            <Button size="large" type="primary" htmlType="submit">
                Create account
            </Button>
        </Form>
    );
};

export default RegisterPage;
