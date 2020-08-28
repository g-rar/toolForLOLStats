import Match from '../../models/Match'

export default interface MatchFetcher{
    fetch(id: number): Match;
}