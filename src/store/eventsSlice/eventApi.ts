import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import moment from 'moment';
import { BASE_URL } from '../../shared/constants/url';
import {
    PartialEvent,
    ResponseType,
    Sort,
} from '../../shared/types/eventTypes';

type eventsResponse = {
    events: PartialEvent[];
    totalElements: number;
};

type QueryParams = {
    eventIds?: string[] | null;
    page?: number;
    searchValue?: string | null;
    sort?: Sort;
    city?: string | null;
};

const transformEvents = (response: ResponseType): eventsResponse => ({
    events: response._embedded.events.map((event) => ({
        name: event.name,
        id: event.id,
        city: event?._embedded?.venues?.[0]?.city?.name || 'Unknown City',
        country:
            event?._embedded?.venues?.[0]?.country?.name || 'Unknown Country',
        genre:
            event.classifications?.map(
                (classification) => classification.segment.name,
            ) || [],
        date: event.dates.start.localDate,
    })),
    totalElements: response.page.totalElements,
});

export const eventApi = createApi({
    reducerPath: 'events',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getEvents: builder.query<eventsResponse, QueryParams>({
            query: ({ page, searchValue, sort, city, eventIds }) => {
                const formattedDate = moment()
                    .utc()
                    .format('YYYY-MM-DDTHH:mm:ss[Z]');
                let queryString = `events.json?apikey=${import.meta.env.VITE_API_KEY}&size=${page ? '10' : '200'}&startDateTime=${formattedDate}`;
                if (eventIds && eventIds.length > 0) {
                    queryString += `&id=${eventIds.join(',')}`;
                }
                if (page) {
                    queryString += `&page=${page}`;
                }
                if (searchValue) {
                    queryString += `&keyword=${searchValue}`;
                }
                if (sort) {
                    queryString += `&sort=${sort}`;
                }
                if (city && city !== '') {
                    queryString += `&city=${city}`;
                }
                return queryString;
            },
            transformResponse: transformEvents,
        }),
    }),
});

export const { useGetEventsQuery } = eventApi;
