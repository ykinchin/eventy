import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import moment from 'moment';
import { BASE_URL } from '../../shared/constants/url';
import { IEvent, Sort } from '../../shared/types/eventTypes';

type ResponseData = {
    _embedded: {
        events: IEvent[];
    };
    page: {
        totalElements: number;
    };
};

type QueryParams = {
    page: number;
    searchValue?: string | null;
    sort?: Sort;
    city?: string | null;
};

export const eventApi = createApi({
    reducerPath: 'events',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getEvents: builder.query<
            { events: IEvent[]; totalElements: number },
            QueryParams
        >({
            query: ({ page, searchValue, sort, city }) => {
                const formattedDate = moment()
                    .utc()
                    .format('YYYY-MM-DDTHH:mm:ss[Z]');
                let queryString = `events.json?apikey=${import.meta.env.VITE_API_KEY}&size=10&page=${page}&startDateTime=${formattedDate}`;
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
            transformResponse: (response: ResponseData) => ({
                events: response._embedded?.events,
                totalElements: response.page.totalElements,
            }),
        }),
    }),
});

export const { useGetEventsQuery } = eventApi;
