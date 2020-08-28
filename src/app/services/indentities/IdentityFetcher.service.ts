import IdentityLocation from './IdentityLocation';

export interface IdentityFetcher {
    fetch(location: IdentityLocation): Promise<Map<string, string>>;
}

export enum IdentityFetcherError {
    INVALID_LOCATION_SUBTYPE = "IdentityFetcherError.INVALID_LOCATION_SUBTYPE",
    LOCATION_DATA_ERROR = "IdentityFetcherError.LOCATION_DATA_ERROR"
}