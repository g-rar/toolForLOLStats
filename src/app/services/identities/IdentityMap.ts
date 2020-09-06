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

    set(champion: string, player: string): void {
        this.championToPlayer.set(champion, player);
    }

    setAll(championToPlayer: Map<string, string>): void{
        for(const champion of championToPlayer.keys())
            this.set(champion, championToPlayer.get(champion));
    }

    get(champion: string): string{
        return this.championToPlayer.get(champion);
    }
}