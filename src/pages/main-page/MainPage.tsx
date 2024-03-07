import { Flex, Typography } from 'antd';
import Advantages from './components/advantages/Advantages';
import BottomContent from './components/bottomContent/BottomContent';
import s from './mainPage.module.scss';

const { Title, Text, Paragraph } = Typography;

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
                <BottomContent />
            </div>
        </>
    );
};

export default MainPage;
