import { Empty, Flex, Pagination, Typography } from 'antd';
import { useState } from 'react';
import EventList from '../../components/shared/eventList/EventList';
import Loader from '../../components/shared/loader/Loader';
import { useGetAllEventsQuery } from '../../store/eventsSlice/eventApi';

const { Title } = Typography;

const EventsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const {
        data: { events, totalElements } = {},
        isLoading,
        isError,
    } = useGetAllEventsQuery({
        page: currentPage,
    });

    const pagesNumber =
        totalElements && totalElements > 990
            ? 990
            : totalElements && totalElements - 10;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <Flex
                    vertical
                    justify="space-between"
                    style={{ height: '100%' }}
                >
                    <Flex vertical gap={40}>
                        <Title level={3}>Explore world events</Title>

                        {isError ? (
                            <Empty />
                        ) : (
                            <EventList isLoading={isLoading} events={events} />
                        )}
                    </Flex>
                    <Flex justify="center">
                        <Pagination
                            showSizeChanger={false}
                            hideOnSinglePage={true}
                            total={pagesNumber}
                            current={currentPage}
                            onChange={handlePageChange}
                        />
                    </Flex>
                </Flex>
            )}
        </>
    );
};

export default EventsPage;
