import PerformanceStats from './stats/PerformanceStats';
import Champion from './Champion'

export default class TeamPerformance{
    constructor(
        readonly teamId: string,
        readonly teamName: string,
        readonly bans: Champion[],
        readonly won: boolean,
        readonly playerStats: PerformanceStats[]
    ){}
}