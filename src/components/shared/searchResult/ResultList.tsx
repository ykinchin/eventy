import { List, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FilteredEvent } from '../../../shared/types/eventTypes';
import s from './resultList.module.scss';

type Props = { events: FilteredEvent[] };

const { Text } = Typography;

const ResultList = ({ events }: Props) => {
    const navigate = useNavigate();
    const handleOnClick = (id: string) => {
        navigate(`/${id}`);
    };

    return (
        <List
            style={{
                position: 'absolute',
                top: 35,
                width: '100%',
            }}
            dataSource={events}
            className={s.list}
            renderItem={(item) => (
                <List.Item
                    key={item.id}
                    className={s.item}
                    onClick={() => handleOnClick(item.id)}
                >
                    <Text ellipsis className={s.itemTitle}>
                        {item.name}
                    </Text>
                    <Text>{item.date}</Text>
                </List.Item>
            )}
        />
    );
};

export default ResultList;
