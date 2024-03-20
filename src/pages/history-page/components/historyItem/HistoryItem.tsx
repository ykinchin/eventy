import { Card, Flex, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../../../components/shared/customButton/CustomButton';
import { HistoryType } from '../../../../shared/types/historyTypes';
import s from './historyItem.module.scss';

type Props = {
    historyItem: HistoryType;
    onRemove: (id: string) => void;
};

const { Text } = Typography;

const HistoryItem = ({ historyItem, onRemove }: Props) => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate(`/events/search?query=${historyItem.searchValue}`);
    };

    return (
        <Flex className={s.wrapper}>
            <Card
                hoverable
                className={s.card}
                bordered={false}
                onClick={handleOnClick}
            >
                <Flex justify="space-between" align="center">
                    <Text>{historyItem.searchValue}</Text>
                </Flex>
            </Card>
            <CustomButton size="large" onClick={() => onRemove(historyItem.id)}>
                Remove
            </CustomButton>
        </Flex>
    );
};

export default HistoryItem;
