export default class IdentityMap{
    public team: string;
    public won: boolean;
    private championToPlayer: Map<string, string>;

    constructor( team: string, won: boolean ){
        this.team = team;
        this.won = won;
        this.championToPlayer = new Map(); 
    }

    get champions(): string[] {
        const champions: string[] = [];
        for(const champion of this.championToPlayer.keys())
            champions.push(champion);
        return champions;
    }

    get players(): string[] {
        const players: string[] = [];
        for(const player of this.championToPlayer.values())
            players.push(player);
        return players;
    }

    set(champion: string, summoner: string): void {
        this.championToPlayer.set(champion, summoner);
    }

    get(champion: string): string{
        return this.championToPlayer.get(champion);
    }
}