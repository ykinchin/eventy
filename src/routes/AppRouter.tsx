import { Route, Routes } from 'react-router-dom';
import AppLayout from '../components/layouts/AppLayout';
import AuthLayout from '../components/layouts/authLayout/AuthLayout';
import MainLayout from '../components/layouts/mainLayout/MainLayout';
import AuthPage from '../pages/auth-page/AuthPage';
import EventsPage from '../pages/events-page/EventsPage';
import FavoritePage from '../pages/favorite-page/FavoritePage';
import MainPage from '../pages/main-page/MainPage';
import { PATHS } from '../shared/constants/paths';

const AppRouter = () => {
    return (
        <Routes>
            <Route path={PATHS.main} element={<AppLayout />}>
                <Route element={<MainLayout />}>
                    <Route index element={<MainPage />} />
                    <Route path={PATHS.events} element={<EventsPage />} />
                    <Route path={PATHS.favorite} element={<FavoritePage />} />
                </Route>
                <Route path={PATHS.auth} element={<AuthLayout />}>
                    <Route index element={<AuthPage />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default AppRouter;
