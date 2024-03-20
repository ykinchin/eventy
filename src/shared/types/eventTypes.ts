export type Sort = 'name,desc' | 'relevance,desc' | 'date,asc';

export type FilteredEvent = Pick<PartialEvent, 'id' | 'name' | 'date'>;

export type ResponseType = {
    _embedded: Events;
    page: Page;
};

export type PartialEvent = {
    name: string;
    date: string;
    genre: string[];
    country: string;
    city: string;
    id: string;
};

export type Events = {
    events: EventType[];
};

export type SingleEventResponse = {
    id: string;
    name: string;
    startDate: string;
    status: string;
    image: string;
    price: Partial<Price>;
    promoter: string;
    seatmap: string;
    city: string;
    country: string;
    venueName: string;
};

export type City = {
    name: string;
};

type State = {
    name: string;
    stateCode: string;
};

export type Country = {
    name: string;
    countryCode: string;
};

export type Venue = {
    name: string;
    type: string;
    id: string;
    test: boolean;
    locale: string;
    postalCode: string;
    timezone: string;
    city: City;
    state: State;
    country: Country;
    location: Location;
};

type Classification = {
    primary: boolean;
    segment: {
        id: string;
        name: string;
    };
    genre: {
        id: string;
        name: string;
    };
    subGenre: {
        id: string;
        name: string;
    };
};

type Image = {
    ratio: string;
    url: string;
};

export type EventType = {
    name: string;
    type: string;
    id: string;
    url: string;
    locale: string;
    images: Image[];
    seatmap: {
        staticUrl: string;
    };
    sales: {
        public: {
            startDateTime: string;
            startTBD: boolean;
            endDateTime: string;
        };
    };
    dates: {
        start: {
            localDate: string;
            dateTBD: boolean;
            dateTBA: boolean;
            timeTBA: boolean;
            noSpecificTime: boolean;
        };
        timezone: string;
        status: {
            code: string;
        };
    };
    classifications?: Classification[];
    promoter: {
        id: string;
        name: string;
    };
    _embedded: {
        venues: Venue[];
    };
    priceRanges: Partial<Price>[];
};

type Price = {
    currency: string;
    max: number;
    min: number;
};

export type Page = {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
};
