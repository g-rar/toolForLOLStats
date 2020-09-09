import Match from '../../models/Match'

export abstract class MatchFetcher{
    fetch: (id: number) => Promise<Match>;
}

export enum MatchFetcherError{

}