import PerformanceStats from './stats/PerformanceStats';
import Champion from './Champion'
import Clonable from './Clonable';

export default class TeamPerformance implements Clonable<TeamPerformance>{
    constructor(
        public teamId: string,
        public teamName: string,
        public bans: Champion[],
        public won: boolean,
        public dragons: number,
        public heralds: number,
        public barons: number,
        public towers: number,
        public playerStats: PerformanceStats[]
    ){}

    clone(): TeamPerformance {
        const bans: Champion[] = [];
        this.bans.forEach( ban => bans.push(ban.clone()) );

        const playerStats: PerformanceStats[] = [];
        this.playerStats.forEach( stats => playerStats.push(stats.clone()) );

        return new TeamPerformance(
            this.teamId,
            this.teamName,
            bans,
            this.won,
            this.dragons,
            this.heralds,
            this.barons,
            this.towers,
            playerStats
        );
    }
}