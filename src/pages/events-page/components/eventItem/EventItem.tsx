import { Card, Flex } from 'antd';
import s from './eventItem.module.scss';

const EventItem = () => {
    return (
        <Card hoverable className={s.card} bordered={false}>
            <Flex justify="space-between" align="center">
                <Flex vertical>1</Flex>
                <Flex gap={60} justify="space-between">
                    <Flex vertical>1</Flex>
                </Flex>
            </Flex>
        </Card>
    );
};

export default EventItem;
