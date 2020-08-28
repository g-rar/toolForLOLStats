import Stats from './Stats';

export default abstract class OverallStats extends Stats {
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
        readonly crowdControlScore: number,
        readonly wins: number,
        readonly losses: number
    ) {
        super(
            assists,
            deaths,
            damageDealtToChampions,
            damageDealtToObjectives,
            damageReceived,
            gold,
            kills,
            minions,
            minutesPlayed,
            visionScore,
            crowdControlScore
        );
    }

    get assistsPerMatch(): number {
        return this.assists / (this.wins + this.losses);
    }

    get deathsPerMatch(): number {
        return this.deaths / (this.wins + this.losses);
    }

    get damageDealtToChampionsPerMatch(): number {
        return this.damageDealtToChampions / (this.wins + this.losses);
    }

    get damageDealtToObjectivesPerMatch(): number {
        return this.damageDealtToObjectives / (this.wins + this.losses);
    }

    get damageReceivedPerMatch(): number {
        return this.damageReceived / (this.wins + this.losses);
    }

    get goldPerMatch(): number {
        return this.gold / (this.wins + this.losses);
    }

    get killsPerMatch(): number {
        return this.kills / (this.wins + this.losses);
    }

    get minionsPerMatch(): number {
        return this.minions / (this.wins + this.losses);
    }

    get minutesPlayedPerMatch(): number {
        return this.minutesPlayed / (this.wins + this.losses);
    }

    get visionScorePerMatch(): number {
        return this.visionScore / (this.wins + this.losses);
    }

    get crowdControlScorePerMatch(): number {
        return this.crowdControlScore / (this.wins + this.losses);
    }
}