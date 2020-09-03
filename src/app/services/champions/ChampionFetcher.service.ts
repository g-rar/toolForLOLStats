import Champion from '../../models/Champion';

export default abstract class ChampionFetcher{
    fetch: (id: number) => Champion;
}