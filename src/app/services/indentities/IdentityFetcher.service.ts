import IdentityLocation from './IdentityLocation';
import IdentityMap from './IdentityMap';

export abstract class IdentityFetcher {
    fetch: (location: IdentityLocation) => Promise<[IdentityMap, IdentityMap]>;
}

export enum IdentityFetcherError {
    INVALID_LOCATION_SUBTYPE = 'IdentityFetcherError.INVALID_LOCATION_SUBTYPE',
    UNABLE_TO_FIND_TEAM_STATUS = 'IdentityFetcherError.UNABLE_TO_FIND_TEAM_STATUS',
    UNABLE_TO_FIND_TEAM_NAME = 'IdentityFetcherError.UNABLE_TO_FIND_TEAM_NAME',
    UNABLE_TO_FIND_PLAYER_DATA = 'IdentityFetcherError.UNABLE_TO_FIND_PLAYER_DATA',
    UNABLE_TO_FIND_CHAMPION_DATA = 'IdentityFetcherError.UNABLE_TO_FIND_CHAMPION_DATA'
}