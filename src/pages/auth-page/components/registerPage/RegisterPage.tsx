import { Button, Flex, Form } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { ChangeEvent, useState } from 'react';
import Loader from '../../../../components/shared/loader/Loader';
import LoginInput from '../../../../components/shared/loginInput/LoginInput';
import PasswordInput from '../../../../components/shared/passwordInput/PasswordInput';
import useRegistration from '../../../../hooks/useRegistration';
import { ExtendedUserCredentials } from '../../../../shared/types/userType';

const RegisterPage = () => {
    const [form] = useForm();
    const { registerUser, isLoading } = useRegistration();
    const [userForm, setUserForm] = useState<ExtendedUserCredentials>({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserForm({ ...userForm, [e.target.name]: e.target.value });
    };

    const handleOnFinish = () => {
        registerUser(userForm);
    };

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <Form
                    form={form}
                    style={{
                        height: '260px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                    onFinish={handleOnFinish}
                >
                    <Flex vertical>
                        <LoginInput onChange={handleOnChange} />
                        <Flex vertical>
                            <PasswordInput onChange={handleOnChange} />
                            <PasswordInput
                                name="confirmPassword"
                                placeholder="Confirm password"
                                withHelp={false}
                                onChange={handleOnChange}
                            />
                        </Flex>
                    </Flex>
                    <Button size="large" type="primary" htmlType="submit">
                        Create account
                    </Button>
                </Form>
            )}
        </>
    );
};

export default RegisterPage;
