# E-venty

[![ci/cd](https://github.com/ykinchin/eventy/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/ykinchin/eventy/actions/workflows/main.yml)

_Приложение для отслеживания мероприятий_

**Deploy**: https://e-venty.netlify.app

**API**: https://developer.ticketmaster.com/

## Реализованы следующие требования к функциональности:

-   [x] Реализованы Требования к функциональности
-   [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используем Firebase

#### React

-   [x] Пишем функциональные компоненты с хуками в приоритете над классовыми[components](https://github.com/ykinchin/eventy/tree/main/src/components/shared)
-   [x] Есть разделение на [умные](https://github.com/ykinchin/eventy/blob/main/src/pages/favorite-page/FavoritePage.tsx) и [глупые](https://github.com/ykinchin/eventy/blob/main/src/components/shared/searchResult/ResultList.tsx) компоненты
-   [x] Есть [рендеринг списков](https://github.com/ykinchin/eventy/blob/main/src/components/shared/eventList/EventList.tsx)
-   [x] Реализована хотя бы одна [форма](https://github.com/ykinchin/eventy/blob/main/src/pages/auth-page/components/loginPage/LoginPage.tsx)
-   [x] Есть применение [Контекст API](https://github.com/ykinchin/eventy/blob/main/src/providers/AuthContext.tsx)
-   [x] Есть применение [предохранителя](https://github.com/ykinchin/eventy/blob/main/src/components/errorBoundary/AppErrorBoundary.tsx)
-   [x] Есть хотя бы один [кастомный хук](https://github.com/ykinchin/eventy/blob/main/src/hooks/useLogin.ts)
-   [x] Хотя бы несколько компонентов используют PropTypes:[RelustCard](https://github.com/ykinchin/eventy/blob/main/src/components/shared/resultCard/ResultCard.tsx),[RowItem](https://github.com/ykinchin/eventy/blob/main/src/pages/single-event-page/components/rowItem/RowItem.tsx)
-   [x] Поиск не должен триггерить много запросов к серверу: [useDebounce](https://github.com/ykinchin/eventy/blob/main/src/hooks/useDebounce.ts)
-   [x] Есть применение [lazy](https://github.com/ykinchin/eventy/blob/main/src/routes/lazyRoutes.ts) + [Suspense](https://github.com/ykinchin/eventy/blob/main/src/routes/AppRouter.tsx)

#### Redux

-   [x] Используем [Modern Redux with Redux Toolkit](https://github.com/ykinchin/eventy/blob/main/src/store/store.ts)
-   [x] Используем [слайсы](https://github.com/ykinchin/eventy/blob/main/src/store/historySlice/historySlice.ts)
-   [x] Есть хотя бы одна [кастомная мидлвара](https://github.com/ykinchin/eventy/blob/main/src/store/middleware/loggerMiddleware.ts)
-   [x] Используется [RTK Query](https://github.com/ykinchin/eventy/blob/main/src/store/eventsSlice/eventApi.ts)
-   [x] Используется [Transforming Responses](https://github.com/ykinchin/eventy/blob/main/src/shared/helpers/apiHelpers.ts)

### 2 уровень (необязательный)

-   [x] Используeтся TypeScript
-   [x] Используется Firebase для [учетных записей пользователей](https://github.com/ykinchin/eventy/blob/main/src/hooks/useRegistration.ts) и их [Избранного](https://github.com/ykinchin/eventy/blob/main/src/store/favoriteSlice/favoriteApi.ts) и [Истории поиска](https://github.com/ykinchin/eventy/blob/main/src/store/historySlice/historyApi.ts). Обновление информации через инвалидацию кеша RTK Query
-   [x] Настроен [CI / CD](https://github.com/ykinchin/eventy/blob/main/.github/workflows/main.yml)
-   [x] Реализована [виртуализация списка](https://github.com/ykinchin/eventy/blob/main/src/components/shared/eventList/EventList.tsx)
