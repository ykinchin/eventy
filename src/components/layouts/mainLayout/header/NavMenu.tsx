import { Menu, MenuProps } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth';
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
    const { currentUser } = useAuth();
    const [current, setCurrent] = useState('');
    const location = useLocation();

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };

    useEffect(() => {
        setCurrent(location.pathname);
    }, [location.pathname]);

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
