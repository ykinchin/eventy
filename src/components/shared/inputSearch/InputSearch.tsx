import { Input } from 'antd';
import { ChangeEventHandler, FocusEventHandler, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import s from './input.module.scss';

type Props = {
    setSearchValue: (value: string) => void;
    onSearch: () => void;
    onChange: ChangeEventHandler<HTMLInputElement>;
    onFocus: FocusEventHandler<HTMLInputElement>;
    onBlur: FocusEventHandler<HTMLInputElement>;
    value: string;
};

const { Search } = Input;

const InputSearch = ({
    setSearchValue,
    onSearch,
    onChange,
    onFocus,
    onBlur,
    value,
}: Props) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const queryUrl = searchParams.get('query') || '';

    useEffect(() => {
        setSearchValue(queryUrl);
    }, [queryUrl, setSearchValue]);

    return (
        <Search
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            enterButton="Search"
            placeholder="Find your event"
            className={s.input}
            onSearch={onSearch}
        />
    );
};

export default InputSearch;
