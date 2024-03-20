import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import Loader from '../../shared/loader/Loader';
import MainHeader from './header/MainHeader';
import s from './mainLayout.module.scss';

const MainLayout = () => {
    const { isLoading } = useAuth();

    if (isLoading) {
        return <Loader />;
    }

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
