import { Champion, Player } from '../../models';

export default class IdentityMap{
    public team: string;
    public won: boolean;
    private championToPlayer: Map<Champion, Player>;

    constructor( team: string, won: boolean ){
        this.team = team;
        this.won = won;
        this.championToPlayer = new Map<Champion, Player>(); 
    }

    get champions(): Champion[] {
        const champions: Champion[] = [];
        for(const champion of this.championToPlayer.keys())
            champions.push(champion);
        return champions;
    }

    get players(): Player[] {
        const players: Player[] = [];
        for(const player of this.championToPlayer.values())
            players.push(player);
        return players;
    }

    set(champion: Champion, player: Player): void {
        this.championToPlayer.set(champion, player);
    }

    setAll(championToPlayer: Map<Champion, Player>): void{
        for(const champion of championToPlayer.keys())
            this.set(champion, championToPlayer.get(champion));
    }

    get(champion: Champion): Player{
        for(let mapChampion of this.championToPlayer.keys())
            if(champion.id === mapChampion.id)
                return this.championToPlayer.get(mapChampion);
        return undefined;
    }
}