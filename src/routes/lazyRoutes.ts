import { lazy } from 'react';

export const lazyLoadedComponents = {
    AppLayout: lazy(() => import('../components/layouts/AppLayout')),
    AuthLayout: lazy(
        () => import('../components/layouts/authLayout/AuthLayout'),
    ),
    MainLayout: lazy(
        () => import('../components/layouts/mainLayout/MainLayout'),
    ),
    AuthPage: lazy(() => import('../pages/auth-page/AuthPage')),
    EventsPage: lazy(() => import('../pages/events-page/EventsPage')),
    FavoritePage: lazy(() => import('../pages/favorite-page/FavoritePage')),
    HistoryPage: lazy(() => import('../pages/history-page/HistoryPage')),
    MainPage: lazy(() => import('../pages/main-page/MainPage')),
    ErrorDefault: lazy(() => import('../pages/result-page/ErrorDefault')),
    ErrorResult: lazy(() => import('../pages/result-page/ErrorResult')),
    ErrorUserExistResult: lazy(
        () => import('../pages/result-page/ErrorUserExistResult'),
    ),
    SuccessResult: lazy(() => import('../pages/result-page/SuccessResult')),
    SearchPage: lazy(() => import('../pages/search-page/SearchPage')),
    SingleEventPage: lazy(
        () => import('../pages/single-event-page/SingleEventPage'),
    ),
};
