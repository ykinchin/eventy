import { Button, Flex, Form } from 'antd';
import LoginInput from '../../../../components/shared/loginInput/LoginInput';
import PasswordInput from '../../../../components/shared/passwordInput/PasswordInput';
const LoginPage = () => {
    const [form] = Form.useForm();

    const handleFinish = () => {};
    const handleChange = () => {};

    return (
        <Form
            form={form}
            name="basic"
            autoComplete="off"
            size="large"
            onFinish={handleFinish}
            style={{
                height: '260px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <Flex vertical>
                <LoginInput onChange={handleChange} />
                <Flex vertical>
                    <PasswordInput />
                </Flex>
            </Flex>
            <Button type="primary" block size="large" htmlType="submit">
                Log In
            </Button>
        </Form>
    );
};

export default LoginPage;
