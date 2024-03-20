import { Empty, Flex, Typography } from 'antd';
import { useLocation } from 'react-router-dom';
import EventList from '../../components/shared/eventList/EventList';
import Loader from '../../components/shared/loader/Loader';
import { useGetAllEventsQuery } from '../../store/eventsSlice/eventApi';

const { Title } = Typography;

const SearchPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchValue = searchParams.get('query');

    const {
        data: { events } = {},
        isLoading,
        isError,
    } = useGetAllEventsQuery({
        searchValue,
    });

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    {isError ? (
                        <Empty />
                    ) : (
                        <Flex vertical gap={40}>
                            <Title level={4}>
                                Search Results for "{searchValue}"
                            </Title>
                            <EventList events={events} />
                        </Flex>
                    )}
                </>
            )}
        </>
    );
};

export default SearchPage;
