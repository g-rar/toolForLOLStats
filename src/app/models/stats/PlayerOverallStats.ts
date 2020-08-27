import OverallStats from './OverallStats';
import Player from '../Player';
import Champion from '../Champion'

export default class PlayerOverallStats extends OverallStats {
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
        public losses: number,
        public player: Player,
        public champions: Champion[]
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
            crowdControlScore,
            wins,
            losses
        );
    }
}