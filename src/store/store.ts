import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { eventApi } from './eventsSlice/eventApi';
import { favoriteApi } from './favoriteSlice/favoriteApi';

export const store = configureStore({
    reducer: combineReducers({
        [eventApi.reducerPath]: eventApi.reducer,
        [favoriteApi.reducerPath]: favoriteApi.reducer,
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(eventApi.middleware)
            .concat(favoriteApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
