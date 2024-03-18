import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import EventList from '../../components/shared/eventList/EventList';
import { useAuth } from '../../hooks/useAuth';
import useDebounce from '../../hooks/useDebounce';
import { PATHS } from '../../shared/constants/paths';
import { Sort } from '../../shared/types/eventTypes';
import { useGetEventsQuery } from '../../store/eventsSlice/eventApi';
import { useFetchFavoriteQuery } from '../../store/favoriteSlice/favoriteApi';
import EmptyPage from './components/emptyPage/EmptyPage';

const FavoritePage = () => {
    const { currentUser } = useAuth();
    const [searchValue, setSearchValue] = useState<null | string>(null);
    const [cityValue, setCityValue] = useState<null | string>(null);
    const [sortValue, setSortValue] = useState<Sort>('relevance,desc');
    const debouncedSearch = useDebounce(searchValue, 300);
    const debouncedCity = useDebounce(cityValue, 300);

    const { data: favoriteData } = useFetchFavoriteQuery(currentUser);
    const favoriteIds = favoriteData && favoriteData.map((fav) => fav.eventId);

    const { data: { events } = {}, isLoading } = useGetEventsQuery({
        eventIds: favoriteIds,
        searchValue: debouncedSearch,
        city: debouncedCity,
        sort: sortValue,
    });

    const handleSort = (value: Sort) => {
        setSortValue(value);
    };

    const handleCitySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCityValue(e.currentTarget.value);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value);
    };

    if (!currentUser) {
        return <Navigate to={PATHS.main} replace />;
    }

    return (
        <div style={{ height: '100%' }}>
            {favoriteIds?.length === 0 ? (
                <EmptyPage />
            ) : (
                <EventList
                    events={events}
                    isLoading={isLoading}
                    handleInputChange={handleInputChange}
                    handleSort={handleSort}
                    handleCitySearch={handleCitySearch}
                />
            )}
        </div>
    );
};

export default FavoritePage;
