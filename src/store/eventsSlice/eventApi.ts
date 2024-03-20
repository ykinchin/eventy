import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import moment from 'moment';
import { BASE_URL } from '../../shared/constants/url';
import {
    transformAllEvents,
    transformFilteredEvents,
    transformSingleEvents,
} from '../../shared/helpers/apiHelpers';
import {
    FilteredEvent,
    PartialEvent,
    SingleEventResponse,
} from '../../shared/types/eventTypes';

type AllEvents = {
    events: PartialEvent[];
    totalElements: number;
};

type FilteredEvents = {
    events: FilteredEvent[];
};

type AllEventsParams = {
    searchValue?: string | null;
    eventIds?: string[] | null;
    page?: number;
};

type EventId = string | undefined;

type FilteredEventsParams = {
    searchValue?: string | null;
};

const formattedDate = moment().utc().format('YYYY-MM-DDTHH:mm:ss[Z]');

export const eventApi = createApi({
    reducerPath: 'events',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getAllEvents: builder.query<AllEvents, AllEventsParams>({
            query: ({ page, eventIds, searchValue }) => {
                let queryString = `events.json?apikey=${import.meta.env.VITE_API_KEY}&size=${page ? '10' : '200'}&startDateTime=${formattedDate}`;

                if (searchValue) {
                    queryString += `&keyword=${searchValue}`;
                }

                if (eventIds && eventIds.length > 0) {
                    queryString += `&id=${eventIds.join(',')}`;
                }

                if (page) {
                    queryString += `&page=${page}`;
                }
                return queryString;
            },
            transformResponse: transformAllEvents,
        }),
        getSingleEvent: builder.query<Partial<SingleEventResponse>, EventId>({
            query: (eventId) => {
                const queryString = `events.json?apikey=${import.meta.env.VITE_API_KEY}&id=${eventId}`;

                return queryString;
            },
            transformResponse: transformSingleEvents,
        }),
        getFilteredEvents: builder.query<FilteredEvents, FilteredEventsParams>({
            query: ({ searchValue }) => {
                const queryString = `events.json?apikey=${import.meta.env.VITE_API_KEY}&size=5&keyword=${searchValue}&startDateTime=${formattedDate}`;

                return queryString;
            },
            transformResponse: transformFilteredEvents,
        }),
    }),
});

export const {
    useGetAllEventsQuery,
    useGetFilteredEventsQuery,
    useGetSingleEventQuery,
} = eventApi;
