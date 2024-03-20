import { List } from 'antd';
import { PartialEvent } from '../../../shared/types/eventTypes';
import EventItem from '../eventItem/EventItem';
import Loader from '../loader/Loader';

type Props = {
    events?: PartialEvent[];
    isLoading?: boolean;
};

const EventList = ({ events, isLoading }: Props) => {
    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <List
                    style={{ height: '70vh', overflow: 'auto' }}
                    dataSource={events}
                    renderItem={(item) => (
                        <List.Item key={item.id}>
                            <EventItem event={item} />
                        </List.Item>
                    )}
                />
            )}
        </>
    );
};
export default EventList;
