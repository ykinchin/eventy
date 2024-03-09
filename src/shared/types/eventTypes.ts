export type Sort = 'name,desc' | 'relevance,desc' | 'date,asc';

type Link = {
    href: string;
    templated: boolean;
};

type Market = {
    id: string;
};

type Location = {
    longitude: string;
    latitude: string;
};

type Address = {
    line1: string;
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
    address: Address;
    location: Location;
    markets: Market[];
    _links: {
        self: Link;
    };
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
    width: number;
    height: number;
    fallback: boolean;
};

export type IEvent = {
    name: string;
    type: string;
    id: string;
    test: boolean;
    url: string;
    locale: string;
    images: Image[];
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
    };
    _links: {
        self: Link;
        attractions: Link[];
        venues: Link[];
    };
    _embedded: {
        venues: Venue[];
        attractions: Venue[];
    };
};

export type Page = {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
};

export type EventsData = {
    events: IEvent[];
};
