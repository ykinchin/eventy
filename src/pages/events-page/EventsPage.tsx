import { useState } from 'react';
import EventList from '../../components/shared/eventList/EventList';
import useDebounce from '../../hooks/useDebounce';
import { Sort } from '../../shared/types/eventTypes';
import { useGetEventsQuery } from '../../store/eventsSlice/eventApi';

const EventsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState<null | string>(null);
    const [cityValue, setCityValue] = useState<null | string>(null);
    const [sortValue, setSortValue] = useState<Sort>('relevance,desc');
    const debouncedSearch = useDebounce(searchValue, 300);
    const debouncedCity = useDebounce(cityValue, 300);

    const { data: { events, totalElements } = {}, isLoading } =
        useGetEventsQuery({
            page: currentPage,
            searchValue: debouncedSearch,
            city: debouncedCity,
            sort: sortValue,
        });

    const pagesNumber =
        totalElements && totalElements > 990
            ? 990
            : totalElements && totalElements - 10;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleSort = (value: Sort) => {
        setSortValue(value);
    };

    const handleCitySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCityValue(e.currentTarget.value);
        setCurrentPage(1);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value);
        setCurrentPage(1);
    };

    return (
        <div style={{ height: '100%' }}>
            <EventList
                events={events}
                pagesNumber={pagesNumber}
                currentPage={currentPage}
                isLoading={isLoading}
                handleInputChange={handleInputChange}
                handleSort={handleSort}
                handlePageChange={handlePageChange}
                handleCitySearch={handleCitySearch}
            />
        </div>
    );
};

export default EventsPage;
