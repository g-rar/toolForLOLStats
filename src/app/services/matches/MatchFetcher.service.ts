import Match from '../../models/Match'

export abstract class MatchFetcher{
    fetch: (id: number) => Match;
}

export enum MatchFetcherError{

}