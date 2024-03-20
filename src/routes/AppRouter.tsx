import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from '../components/shared/loader/Loader';
import { PATHS } from '../shared/constants/paths';
import { lazyLoadedComponents } from './lazyRoutes';

const {
    AppLayout,
    AuthLayout,
    MainLayout,
    AuthPage,
    EventsPage,
    FavoritePage,
    HistoryPage,
    MainPage,
    ErrorDefault,
    ErrorResult,
    ErrorUserExistResult,
    SuccessResult,
    SearchPage,
    SingleEventPage,
} = lazyLoadedComponents;

const AppRouter = () => (
    <Suspense fallback={<Loader />}>
        <Routes>
            <Route path={PATHS.main} element={<AppLayout />}>
                <Route element={<MainLayout />}>
                    <Route index element={<MainPage />} />
                    <Route path={PATHS.events} element={<EventsPage />} />
                    <Route path="/events/search/" element={<SearchPage />} />
                    <Route
                        path={PATHS.eventPage}
                        element={<SingleEventPage />}
                    />
                    <Route path={PATHS.history} element={<HistoryPage />} />
                    <Route path={PATHS.favorite} element={<FavoritePage />} />
                </Route>
                <Route path={PATHS.auth} element={<AuthLayout />}>
                    <Route index element={<AuthPage />} />
                    <Route
                        path={PATHS.successResult}
                        element={<SuccessResult />}
                    />
                    <Route path={PATHS.errorResult} element={<ErrorResult />} />
                    <Route
                        path={PATHS.errorDefault}
                        element={<ErrorDefault />}
                    />
                    <Route
                        path={PATHS.errorUserExistResult}
                        element={<ErrorUserExistResult />}
                    />
                </Route>
            </Route>
        </Routes>
    </Suspense>
);

export default AppRouter;
