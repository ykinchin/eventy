import { Card, Flex, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import CustomButton from '../../../../components/shared/customButton/CustomButton';
import { useAuth } from '../../../../hooks/useAuth';
import { PartialEvent } from '../../../../shared/types/eventTypes';
import {
    useAddFavoriteMutation,
    useFetchFavoriteQuery,
    useRemoveFavoriteMutation,
} from '../../../../store/favoriteSlice/favoriteApi';
import s from './eventItem.module.scss';

type Props = {
    event: PartialEvent;
};

const { Text } = Typography;

const EventItem = ({ event }: Props) => {
    const { currentUser } = useAuth();
    const [isFavorite, setIsFavorite] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const [addFavorite] = useAddFavoriteMutation();
    const [removeFavorite] = useRemoveFavoriteMutation();
    const { data: favoriteData } = useFetchFavoriteQuery(
        currentUser ? currentUser : '',
    );

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        navigate('');
    };

    useEffect(() => {
        if (favoriteData?.some((item) => item.eventId === event.id)) {
            setIsFavorite(true);
        }
    }, [favoriteData, event.id]);

    const handleOnFavorite = () => {
        if (currentUser) {
            if (isFavorite) {
                removeFavorite({
                    email: currentUser,
                    eventId: event.id,
                });
                setIsFavorite(false);
            } else {
                addFavorite({
                    email: currentUser,
                    eventId: event.id,
                });
                setIsFavorite(true);
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
                    backgroundColor={isFavorite ? '#FF603B' : ''}
                    className={`${s.button} ${!isHovered && s.hiddenButton}`}
                >
                    {isFavorite ? 'Remove event' : 'Add event'}
                </CustomButton>
            )}
        </Flex>
    );
};

export default EventItem;
