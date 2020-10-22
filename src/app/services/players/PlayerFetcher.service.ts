import { Player } from '../../models';

export abstract class PlayerFetcher {
    fetch: (summonerName: string) => Promise<Player>;
}

export enum PlayerFetcherError {
    FETCH_ERROR = 'PlayerFetcherError.FETCH_ERROR'
}