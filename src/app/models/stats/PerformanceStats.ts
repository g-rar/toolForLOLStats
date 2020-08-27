import Stats from './Stats'
import Champion from '../Champion'

export default class PerformanceStats extends Stats{
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
        public playerId: string,
        public playerName: string,
        public champion: Champion,
        public largestMultikill: number,
        public largestKillingSpree: number,
        public firstBlood: boolean,
        public firstTower: boolean,
        public won: boolean
    ){ 
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
}