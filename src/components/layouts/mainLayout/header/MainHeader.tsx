import { Flex, Layout, Typography } from 'antd';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../providers/AuthContext';
import { PATHS } from '../../../../shared/constants/paths';
import CustomButton from '../../../shared/customButton/CustomButton';
import Logo from '../../../shared/logo/Logo';
import NavMenu from './NavMenu';
import s from './mainHeader.module.scss';

const { Header } = Layout;
const { Text } = Typography;

const MainHeader = () => {
    const { logOut, currentUser, isLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleOnClick = () => {
        if (currentUser) {
            logOut();
        } else {
            navigate(PATHS.auth);
        }
    };

    return (
        <Header className={s.header}>
            <Flex align="center" className={s.navigation}>
                <Flex>
                    <div className={s.logo}>
                        <Logo />
                    </div>
                    <NavMenu />
                </Flex>
                <Flex align="center" gap={22} className={s.rightMenu}>
                    <Text className={s.userLabel}>{currentUser}</Text>
                    {!isLoading && (
                        <CustomButton type="default" onClick={handleOnClick}>
                            {currentUser ? ' Logout' : 'Sign In'}
                        </CustomButton>
                    )}
                </Flex>
            </Flex>
        </Header>
    );
};

export default MainHeader;
