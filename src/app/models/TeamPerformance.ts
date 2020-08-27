import PerformanceStats from './stats/PerformanceStats';
import Champion from './Champion'

export default class TeamPerformance{
    constructor(
        public teamId: string,
        public teamName: string,
        public bans: Champion[],
        public won: boolean,
        public playerStats: PerformanceStats[]
    ){}
}