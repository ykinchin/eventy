import { Flex, Typography } from 'antd';
import Advantages from './components/advantages/Advantages';
import s from './mainPage.module.scss';

const { Title, Text } = Typography;

const MainPage = () => {
    return (
        <>
            <div className={s.wrapper}>
                <Flex vertical gap={30}>
                    <Flex vertical>
                        <Title>Discover Events Nearby with Ease!</Title>
                        <Text type="secondary">
                            Never Miss Out on Exciting Opportunities Again
                        </Text>
                    </Flex>
                    <Advantages />
                </Flex>
            </div>
        </>
    );
};

export default MainPage;
