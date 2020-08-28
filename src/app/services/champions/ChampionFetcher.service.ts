import Champion from '../../models/Champion';

export default interface ChampionFetcher{
    fetch(id: number): Champion;
}