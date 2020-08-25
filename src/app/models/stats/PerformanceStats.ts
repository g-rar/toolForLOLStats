import Stats from './Stats'
import Champion from '../Champion'

export default class PerformanceStats extends Stats{
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
        readonly playerId: string,
        readonly playerName: string,
        readonly champion: Champion,
        readonly largestMultikill: number,
        readonly largestKillingSpree: number,
        readonly firstBlood: boolean,
        readonly firstTower: boolean,
        readonly won: boolean
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