import { Tabs, TabsProps } from 'antd';
import Logo from '../../../../components/shared/logo/Logo';
import LoginPage from '../loginPage/LoginPage';
import RegisterPage from '../registerPage/RegisterPage';
import s from './authCard.module.scss';

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Log in',
        children: <LoginPage />,
    },
    {
        key: '2',
        label: 'Registration',
        children: <RegisterPage />,
    },
];

const AuthCard = () => {
    return (
        <div className={s.card}>
            <div className={s.logo}>
                <Logo />
            </div>
            <Tabs items={items} centered indicator={{ size: 100 }} />
        </div>
    );
};

export default AuthCard;
