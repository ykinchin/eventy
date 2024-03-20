import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { eventApi } from './eventsSlice/eventApi';
import { favoriteApi } from './favoriteSlice/favoriteApi';
import { historyApi } from './historySlice/historyApi';
import { historyReducer } from './historySlice/historySlice';

export const store = configureStore({
    reducer: combineReducers({
        [eventApi.reducerPath]: eventApi.reducer,
        [favoriteApi.reducerPath]: favoriteApi.reducer,
        [historyApi.reducerPath]: historyApi.reducer,
        history: historyReducer,
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(eventApi.middleware)
            .concat(favoriteApi.middleware)
            .concat(historyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
