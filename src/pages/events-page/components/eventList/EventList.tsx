import { Flex, Input, List, Pagination, Select } from 'antd';
import { useState } from 'react';
import InputSearch from '../../../../components/shared/inputSearch/InputSearch';
import Loader from '../../../../components/shared/loader/Loader';
import useDebounce from '../../../../hooks/useDebounce';
import { Sort } from '../../../../shared/types/eventTypes';
import { useGetEventsQuery } from '../../../../store/eventsSlice/eventApi';
import EventItem from '../eventItem/EventItem';
import s from './eventList.module.scss';

const EventList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState<null | string>(null);
    const [cityValue, setCityValue] = useState<null | string>(null);
    const [sortValue, setSortValue] = useState<Sort>('relevance,desc');
    const debouncedSearch = useDebounce(searchValue, 300);
    const debouncedCity = useDebounce(cityValue, 300);

    const { data, isLoading } = useGetEventsQuery({
        page: currentPage,
        searchValue: debouncedSearch,
        city: debouncedCity,
        sort: sortValue,
    });

    const pagesNumber =
        data?.totalElements && data?.totalElements > 990
            ? 990
            : data && data?.totalElements - 10;

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
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <Flex vertical justify="space-between" className={s.wrapper}>
                    <Flex justify="center" vertical gap={40}>
                        <Flex gap={20}>
                            <InputSearch onChange={handleInputChange} />
                            <Input
                                onChange={handleCitySearch}
                                placeholder="City"
                                style={{ width: '200px' }}
                            />
                            <Select
                                style={{ width: 130 }}
                                onChange={handleSort}
                                defaultValue={'relevance,desc'}
                                options={[
                                    {
                                        value: 'relevance,desc',
                                        label: 'relevance',
                                    },
                                    { value: 'date,asc', label: 'date' },
                                    { value: 'name,desc', label: 'name' },
                                ]}
                            />
                        </Flex>
                        <List
                            style={{ height: '70vh', overflow: 'auto' }}
                            dataSource={data?.events}
                            renderItem={(item) => (
                                <List.Item key={item.id}>
                                    <EventItem event={item} />
                                </List.Item>
                            )}
                        />
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
export default EventList;
