import { Card, Flex, Typography } from 'antd';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../../hooks/useAuth';
import { PartialEvent } from '../../../shared/types/eventTypes';
import {
    useAddFavoriteMutation,
    useFetchFavoriteQuery,
    useRemoveFavoriteMutation,
} from '../../../store/favoriteSlice/favoriteApi';
import CustomButton from '../customButton/CustomButton';
import s from './eventItem.module.scss';

type Props = {
    event: PartialEvent;
};

const { Text } = Typography;

const EventItem = ({ event }: Props) => {
    const { currentUser } = useAuth();
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const [addFavorite] = useAddFavoriteMutation();
    const [removeFavorite] = useRemoveFavoriteMutation();
    const { data: favoriteData } = useFetchFavoriteQuery(currentUser);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        navigate('');
    };

    const checkIsFavorite = useMemo(() => {
        if (!favoriteData) return false;
        return favoriteData.some((item) => item.eventId === event.id);
    }, [favoriteData, event.id]);

    const handleOnFavorite = () => {
        if (currentUser) {
            if (checkIsFavorite) {
                removeFavorite({
                    email: currentUser,
                    eventId: event.id,
                });
            } else {
                addFavorite({
                    email: currentUser,
                    eventId: event.id,
                });
            }
        }
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
            {currentUser && (
                <CustomButton
                    onClick={handleOnFavorite}
                    backgroundColor={checkIsFavorite ? '#FF603B' : ''}
                    className={`${s.button} ${!isHovered && s.hiddenButton}`}
                >
                    {checkIsFavorite ? 'Remove event' : 'Add event'}
                </CustomButton>
            )}
        </Flex>
    );
};

export default EventItem;
