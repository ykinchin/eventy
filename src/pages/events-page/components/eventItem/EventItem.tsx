import { Card, Flex, Typography } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import CustomButton from '../../../../components/shared/customButton/CustomButton';
import { PartialEvent } from '../../../../shared/types/eventTypes';
import s from './eventItem.module.scss';

type Props = {
    event: PartialEvent;
};

const { Text } = Typography;

const EventItem = ({ event }: Props) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('');
    };

    return (
        <Flex
            className={s.wrapper}
            onMouseOver={handleMouseEnter}
            onMouseOut={handleMouseLeave}
        >
            <Card
                hoverable
                className={s.card}
                bordered={false}
                onClick={handleClick}
            >
                <Flex justify="space-between" align="center">
                    <Flex vertical>
                        <Text>{event.genre}</Text>
                        <Text className={s.title}>{event.name}</Text>
                    </Flex>
                    <Flex
                        justify="space-between"
                        align="center"
                        style={{ width: 350 }}
                    >
                        <Flex vertical>
                            <Text>{event.country}</Text>
                            <Text>{event.city}</Text>
                        </Flex>
                        <Text>{event.date}</Text>
                    </Flex>
                </Flex>
            </Card>
            <CustomButton
                className={`${s.button} ${!isHovered && s.hiddenButton}`}
            >
                Add event
            </CustomButton>
        </Flex>
    );
};

export default EventItem;
