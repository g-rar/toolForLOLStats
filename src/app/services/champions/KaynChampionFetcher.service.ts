import Champion from '../../models/Champion'
import ChampionFetcher from './ChampionFetcher.service'

export default class KaynChampionFetcher implements ChampionFetcher {
    fetch(id: number): Champion {
        throw new Error("Method not implemented.");
    }
}