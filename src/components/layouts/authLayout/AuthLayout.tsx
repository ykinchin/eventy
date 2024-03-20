import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';
import s from './authLayout.module.scss';

const AuthLayout = () => (
    <Layout style={{ height: '100%' }}>
        <Content className={s.content}>
            <div className={s.wrapper}>
                <Outlet />
            </div>
        </Content>
    </Layout>
);

export default AuthLayout;
