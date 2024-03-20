import { Flex, Typography } from 'antd';
import { useMemo } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import CustomButton from '../../components/shared/customButton/CustomButton';
import Loader from '../../components/shared/loader/Loader';
import { useAuth } from '../../hooks/useAuth';
import { PATHS } from '../../shared/constants/paths';
import { useGetSingleEventQuery } from '../../store/eventsSlice/eventApi';
import {
    useAddFavoriteMutation,
    useFetchFavoriteQuery,
    useRemoveFavoriteMutation,
} from '../../store/favoriteSlice/favoriteApi';
import RowItem from './components/rowItem/RowItem';

const { Title } = Typography;

const SingleEventPage = () => {
    const { currentUser } = useAuth();
    const { id } = useParams();

    const { data, isLoading } = useGetSingleEventQuery(id);
    const { data: favoriteData } = useFetchFavoriteQuery(currentUser, {
        skip: !currentUser,
    });

    const [addFavorite] = useAddFavoriteMutation();
    const [removeFavorite] = useRemoveFavoriteMutation();

    const checkIsFavorite = useMemo(() => {
        if (!favoriteData) return false;
        return favoriteData.some((item) => item.eventId === data?.id);
    }, [favoriteData, data?.id]);

    const handleToggleFavorite = () => {
        if (currentUser && data) {
            if (checkIsFavorite) {
                removeFavorite({
                    email: currentUser,
                    eventId: data.id,
                });
            } else {
                addFavorite({
                    email: currentUser,
                    eventId: data.id,
                });
            }
        }
    };

    if (!isLoading && !data) return <Navigate to={PATHS.events} />;
    if (isLoading) return <Loader />;

    return (
        <div>
            <Title>{data?.name}</Title>
            <Flex>
                <Flex align="center" gap={40}>
                    <Flex vertical>
                        <img src={data?.image} alt="event" />
                        {currentUser && (
                            <CustomButton
                                onClick={handleToggleFavorite}
                                backgroundColor={
                                    checkIsFavorite ? '#FF603B' : ''
                                }
                            >
                                {checkIsFavorite
                                    ? 'Remove from favorite'
                                    : 'Add to favorite'}
                            </CustomButton>
                        )}
                    </Flex>

                    <Flex vertical>
                        <RowItem
                            title="Start date:"
                            description={data?.startDate}
                        />
                        <RowItem title="Country:" description={data?.country} />
                        <RowItem title="City:" description={data?.city} />
                        <RowItem title="Venue:" description={data?.venueName} />
                        <RowItem title="Status:" description={data?.status} />
                        <RowItem
                            title="Promoter:"
                            description={data?.promoter}
                        />
                        <RowItem
                            title="Ticket price:"
                            description={`${data?.price?.min}-${data?.price?.max} ${data?.price?.currency}`}
                        />

                        {data?.seatmap && (
                            <Link to={data.seatmap} style={{ fontSize: 18 }}>
                                Seatmap
                            </Link>
                        )}
                    </Flex>
                </Flex>
            </Flex>
        </div>
    );
};

export default SingleEventPage;
