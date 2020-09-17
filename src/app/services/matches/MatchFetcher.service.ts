import Match from '../../models/Match'

export abstract class MatchFetcher{
    fetch: (id: number) => Promise<Match>;
}

export enum MatchFetcherError{
    MATCH_NOT_FOUND = 'MatchFetcherError.MATCH_NOT_FOUND',
    FETCH_ERROR = 'MatchFetcherError.FETCH_ERROR'
}