import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';
import MainHeader from './header/MainHeader';
import s from './mainLayout.module.scss';

const MainLayout = () => {
    return (
        <Layout style={{ height: '100%' }}>
            <MainHeader />
            <Content className={s.content}>
                <div className={s.wrapper}>
                    <Outlet />
                </div>
            </Content>
        </Layout>
    );
};

export default MainLayout;
