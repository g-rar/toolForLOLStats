import Stats from './Stats';

export default abstract class OverallStats extends Stats {
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
        public crowdControlScore: number,
        public wins: number,
        public losses: number
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