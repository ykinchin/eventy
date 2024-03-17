import { Flex, Input, List, Pagination, Select } from 'antd';
import { PartialEvent, Sort } from '../../../shared/types/eventTypes';
import EventItem from '../eventItem/EventItem';
import InputSearch from '../inputSearch/InputSearch';
import Loader from '../loader/Loader';
import s from './eventList.module.scss';

type Props = {
    events?: PartialEvent[];
    pagesNumber?: number;
    currentPage?: number;
    isLoading: boolean;
    handlePageChange?: (page: number) => void;
    handleSort: (value: Sort) => void;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleCitySearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const EventList = ({
    events,
    pagesNumber,
    currentPage,
    isLoading,
    handleInputChange,
    handleSort,
    handlePageChange,
    handleCitySearch,
}: Props) => {
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
                            dataSource={events}
                            renderItem={(item) => (
                                <List.Item key={item.id}>
                                    <EventItem event={item} />
                                </List.Item>
                            )}
                        />
                    </Flex>
                    {currentPage && (
                        <Flex justify="center">
                            <Pagination
                                showSizeChanger={false}
                                hideOnSinglePage={true}
                                total={pagesNumber}
                                current={currentPage}
                                onChange={handlePageChange}
                            />
                        </Flex>
                    )}
                </Flex>
            )}
        </>
    );
};
export default EventList;
