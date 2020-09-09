import Champion from '../../models/Champion';

export abstract class ChampionFetcher{
    //if it's a string then it should look up the champion id
    //if it's a number then it should look up the champion key
    fetch: (id: string | number) => Champion;
}

export enum ChampionFetcherError{
    CHAMPION_NOT_FOUND = 'ChampionFetcherError.CHAMPION_NOT_FOUND'
}