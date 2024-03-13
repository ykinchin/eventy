import { Button, Flex, Form } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { ChangeEvent, useState } from 'react';
import Loader from '../../../../components/shared/loader/Loader';
import LoginInput from '../../../../components/shared/loginInput/LoginInput';
import PasswordInput from '../../../../components/shared/passwordInput/PasswordInput';
import useLogin from '../../../../hooks/useLogin';
import { UserCredentials } from '../../../../shared/types/userType';
const LoginPage = () => {
    const [form] = useForm();
    const { loginUser, isLoading } = useLogin();
    const [userForm, setUserForm] = useState<UserCredentials>({
        email: '',
        password: '',
    });

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserForm({ ...userForm, [e.target.name]: e.target.value });
    };

    const handleOnFinish = () => {
        loginUser(userForm);
    };

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <Form
                    form={form}
                    name="basic"
                    autoComplete="off"
                    size="large"
                    onFinish={handleOnFinish}
                    style={{
                        height: '260px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <Flex vertical>
                        <LoginInput onChange={handleOnChange} />
                        <Flex vertical>
                            <PasswordInput onChange={handleOnChange} />
                        </Flex>
                    </Flex>
                    <Button type="primary" block size="large" htmlType="submit">
                        Log In
                    </Button>
                </Form>
            )}
        </>
    );
};

export default LoginPage;
