import { Menu, MenuProps } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth';
import { PATHS } from '../../../../shared/constants/paths';
import s from './navMenu.module.scss';

const navLinks: MenuProps['items'] = [
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
    {
        label: <Link to={PATHS.history}>History</Link>,
        key: PATHS.history,
    },
];

const NavMenu = () => {
    const { currentUser } = useAuth();
    const location = useLocation();
    const [current, setCurrent] = useState('');

    const links = currentUser ? navLinks : navLinks.slice(0, 2);

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
            items={links}
        />
    );
};

export default NavMenu;
