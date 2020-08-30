import IdentityLocation from './IdentityLocation';
import IdentityMap from './IdentityMap';

export interface IdentityFetcher {
    fetch(location: IdentityLocation): Promise<[IdentityMap, IdentityMap]>;
}

export enum IdentityFetcherError {
    INVALID_LOCATION_SUBTYPE = "IdentityFetcherError.INVALID_LOCATION_SUBTYPE",
    LOCATION_DATA_ERROR = "IdentityFetcherError.LOCATION_DATA_ERROR",
    UNABLE_TO_FIND_TEAM_STATUS = 'BattlefyIdentityFetcherError.UNABLE_TO_FIND_TEAM_STATUS',
    UNABLE_TO_FIND_TEAM_NAME = 'BattlefyIdentityFetcherError.UNABLE_TO_FIND_TEAM_NAME'
}