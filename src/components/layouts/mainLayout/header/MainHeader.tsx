import { Flex, Layout, Typography } from 'antd';
import CustomButton from '../../../shared/customButton/CustomButton';
import Logo from '../../../shared/logo/Logo';
import NavMenu from './NavMenu';
import s from './mainHeader.module.scss';

const { Header } = Layout;
const { Text } = Typography;

const MainHeader = () => {
    return (
        <Header className={s.header}>
            <Flex align="center" className={s.navigation}>
                <Logo />
                <NavMenu />
                <Flex align="center" gap={22} className={s.rightMenu}>
                    <Text className={s.userLabel}>UserName</Text>
                    <CustomButton type="default">Logout</CustomButton>
                </Flex>
            </Flex>
        </Header>
    );
};

export default MainHeader;
