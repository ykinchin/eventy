import { ResponseType } from '../../shared/types/eventTypes';

export const transformAllEvents = (response: ResponseType) => ({
    events: response._embedded?.events.map((event) => ({
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

export const transformFilteredEvents = (response: ResponseType) => ({
    events: response._embedded?.events.map((event) => ({
        name: event.name,
        id: event.id,
        date: event.dates.start.localDate,
    })),
});

export const transformSingleEvents = (response: ResponseType) => ({
    id: response._embedded?.events[0].id,
    name: response._embedded?.events[0]?.name,
    status: response._embedded?.events[0]?.dates.status.code,
    price:
        response?._embedded?.events[0]?.priceRanges &&
        response?._embedded?.events[0]?.priceRanges[0],
    startDate: response._embedded?.events[0]?.dates.start.localDate,
    image:
        response?._embedded?.events[0].images.find(
            (image) => image.ratio === '4_3',
        )?.url || '',
    promoter: response._embedded?.events[0]?.promoter?.name,
    seatmap: response._embedded?.events[0]?.seatmap?.staticUrl,
    city: response._embedded?.events[0]?._embedded?.venues[0]?.city.name,
    country: response._embedded?.events[0]?._embedded?.venues[0].country.name,
    venueName: response._embedded?.events[0]?._embedded?.venues[0].name,
});
