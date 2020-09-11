import Stats from './Stats'
import Champion from '../Champion'
import Clonable from '../Clonable';
import { Player } from '..';

export default class PerformanceStats extends Stats implements Clonable<PerformanceStats>{
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
        public player: Player,
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

    clone(): PerformanceStats {
        return new PerformanceStats(
            this.assists,
            this.deaths,
            this.damageDealtToChampions,
            this.damageDealtToObjectives,
            this.damageReceived,
            this.gold,
            this.kills,
            this.minions,
            this.minutesPlayed,
            this.visionScore,
            this.crowdControlScore,
            this.player.clone(),
            this.champion.clone(),
            this.largestMultikill,
            this.largestKillingSpree,
            this.firstBlood,
            this.firstTower,
            this.won
        );
    }
}