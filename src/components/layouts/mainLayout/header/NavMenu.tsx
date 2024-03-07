import { Menu, MenuProps } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../../../shared/constants/paths';
import s from './navMenu.module.scss';

const items: MenuProps['items'] = [
    {
        label: <Link to={PATHS.main}>Main</Link>,
        key: PATHS.main,
    },
    {
        label: <Link to={PATHS.events}>Events</Link>,
        key: PATHS.events,
    },
    {
        label: <Link to={PATHS.favorite}>Favorite</Link>,
        key: PATHS.favorite,
    },
];

const NavMenu = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            className={s.menu}
            items={items}
        />
    );
};

export default NavMenu;
