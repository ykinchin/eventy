import { Input } from 'antd';
import { ChangeEventHandler } from 'react';
import s from './input.module.scss';

type Props = {
    onChange: ChangeEventHandler<HTMLInputElement>;
};

const { Search } = Input;

const InputSearch = ({ onChange }: Props) => {
    return (
        <Search
            onChange={onChange}
            allowClear
            enterButton="Search"
            placeholder="Find your event"
            className={s.input}
        />
    );
};

export default InputSearch;
