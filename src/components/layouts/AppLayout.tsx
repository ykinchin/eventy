import { Layout } from 'antd';
import { Outlet } from 'react-router';
import s from './appLayout.module.scss';

const AppLayout = () => (
    <Layout className={s.mainLayout}>
        <Outlet />
    </Layout>
);

export default AppLayout;
