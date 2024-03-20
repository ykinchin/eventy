import { Empty } from 'antd';
import { FixedSizeList } from 'react-window';
import { PartialEvent } from '../../../shared/types/eventTypes';
import EventItem from '../eventItem/EventItem';
import Loader from '../loader/Loader';

type Props = {
    events?: PartialEvent[];
    isLoading?: boolean;
};

const EventList = ({ events, isLoading }: Props) => (
    <>
        {isLoading ? (
            <Loader />
        ) : events ? (
            <FixedSizeList
                height={900}
                itemCount={events.length}
                itemSize={85}
                width={'100%'}
            >
                {({ index, style }) => (
                    <div style={style}>
                        <EventItem event={events[index]} />
                    </div>
                )}
            </FixedSizeList>
        ) : (
            <Empty />
        )}
    </>
);

export default EventList;
