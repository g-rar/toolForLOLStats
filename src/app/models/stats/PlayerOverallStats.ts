import OverallStats from './OverallStats';
import Player from '../Player';
import Champion from '../Champion'

export default class PlayerOverallStats extends OverallStats {
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
        readonly losses: number,
        readonly player: Player,
        readonly champions: Champion[]
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