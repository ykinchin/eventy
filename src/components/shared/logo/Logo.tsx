import { Flex, Typography } from 'antd';
import s from './logo.module.scss';

const { Text } = Typography;

const Logo = () => {
    return (
        <Flex align="center" className={s.logo}>
            <Text className={s.mainLetter}>E</Text>
            <Text className={s.logoText}>e-venty</Text>
        </Flex>
    );
};

export default Logo;
