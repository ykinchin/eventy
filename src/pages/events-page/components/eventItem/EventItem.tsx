import { Card, Flex, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { IEvent } from '../../../../shared/types/eventTypes';
import s from './eventItem.module.scss';

type Props = {
    event: IEvent;
};

const { Text } = Typography;

const EventItem = ({ event }: Props) => {

    return (
        <Card
            hoverable
            className={s.card}
            bordered={false}
        >
            <Flex justify="space-between" align="center">
                <Flex vertical>
                </Flex>
                <Flex gap={60} justify="space-between">
                    <Flex vertical>
                    </Flex>
                </Flex>
            </Flex>
        </Card>
    );
};

export default EventItem;
