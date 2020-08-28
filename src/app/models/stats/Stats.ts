export default abstract class Stats {
    constructor(
        readonly assists: number,
        readonly deaths: number,
        readonly damageDealtToChampions: number,
        readonly damageDealtToObjectives: number,
        readonly damageReceived: number,
        readonly gold: number,
        readonly kills: number,
        readonly minions: number,
        readonly minutesPlayed: number,
        readonly visionScore: number,
        readonly crowdControlScore: number
    ){ }

    get takedownDeathRatio(): number {
        return (this.kills + this.assists) / this.deaths;
    }
}