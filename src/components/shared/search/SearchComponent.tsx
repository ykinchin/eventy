import { Flex } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import useDebounce from '../../../hooks/useDebounce';
import { useGetFilteredEventsQuery } from '../../../store/eventsSlice/eventApi';
import { useAddHistoryMutation } from '../../../store/historySlice/historyApi';
import InputSearch from '../inputSearch/InputSearch';
import ResultList from '../searchResult/ResultList';

const SearchComponent = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const [inputFocus, setInputFocus] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const debouncedSearch = useDebounce(searchValue, 300);

    const { data: { events } = {} } = useGetFilteredEventsQuery(
        {
            searchValue: debouncedSearch,
        },
        { skip: debouncedSearch === '' },
    );

    const [addHistory] = useAddHistoryMutation();

    const handleInputBlur = () => {
        setTimeout(() => setInputFocus(false), 300);
    };

    const handleInputFocus = () => {
        setInputFocus(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value);
    };

    const handleSearchClick = () => {
        if (searchValue) {
            navigate(`/events/search?query=${searchValue}`);
            if (currentUser) {
                addHistory({ email: currentUser, searchValue });
            }
        }
    };

    return (
        <Flex gap={20}>
            <Flex vertical style={{ position: 'relative' }}>
                <InputSearch
                    setSearchValue={setSearchValue}
                    value={searchValue}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onChange={handleInputChange}
                    onSearch={handleSearchClick}
                />

                {events && inputFocus && searchValue && (
                    <ResultList events={events} />
                )}
            </Flex>
        </Flex>
    );
};

export default SearchComponent;
