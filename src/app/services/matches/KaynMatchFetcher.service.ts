import Match from '../../models/Match'
import MatchFetcher from './MatchFetcher.service'

export default class KaynMatchFetcher implements MatchFetcher{
    fetch(id: number): Match {
        throw new Error("Method not implemented.");
    }
}