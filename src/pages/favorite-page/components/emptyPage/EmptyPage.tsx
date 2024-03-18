import { Flex, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../../../components/shared/customButton/CustomButton';
import { PATHS } from '../../../../shared/constants/paths';
import s from './emptyPage.module.scss';

const { Title } = Typography;

const EmptyPage = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate(PATHS.events);
    };

    return (
        <Flex justify="center" align="center" className={s.wrapper}>
            <Flex vertical align="center" gap={20}>
                <Title level={3}>You don't have saved events yet.</Title>
                <CustomButton size="large" onClick={handleOnClick}>
                    Browse all events
                </CustomButton>
            </Flex>
        </Flex>
    );
};

export default EmptyPage;
