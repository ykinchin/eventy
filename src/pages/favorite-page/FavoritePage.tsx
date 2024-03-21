import { Flex, Typography } from 'antd';
import EventList from '../../components/shared/eventList/EventList';
import Loader from '../../components/shared/loader/Loader';
import { useAuth } from '../../hooks/useAuth';
import { useGetAllEventsQuery } from '../../store/eventsSlice/eventApi';
import { useFetchFavoriteQuery } from '../../store/favoriteSlice/favoriteApi';
import EmptyPage from './components/emptyPage/EmptyPage';

const { Title } = Typography;

const FavoritePage = () => {
    const { currentUser } = useAuth();
    const userName = currentUser?.split('@')[0] + "'s";

    const { data: favoriteData } = useFetchFavoriteQuery(currentUser, {
        skip: !currentUser,
    });

    const favoriteIds = favoriteData && favoriteData.map((fav) => fav.eventId);

    const { data: { events } = {}, isLoading } = useGetAllEventsQuery(
        {
            eventIds: favoriteIds,
        },
        { skip: !currentUser },
    );

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    {favoriteIds?.length === 0 ? (
                        <EmptyPage />
                    ) : (
                        <Flex vertical gap={40}>
                            <Title level={3}>{userName} favorite events</Title>
                            {events && <EventList events={events} />}
                        </Flex>
                    )}
                </>
            )}
        </>
    );
};

export default FavoritePage;
