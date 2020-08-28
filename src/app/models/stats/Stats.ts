export default abstract class Stats {
    constructor(
        public assists: number,
        public deaths: number,
        public damageDealtToChampions: number,
        public damageDealtToObjectives: number,
        public damageReceived: number,
        public gold: number,
        public kills: number,
        public minions: number,
        public minutesPlayed: number,
        public visionScore: number,
        public crowdControlScore: number
    ){ }

    get takedownDeathRatio(): number {
        return (this.kills + this.assists) / this.deaths;
    }
}