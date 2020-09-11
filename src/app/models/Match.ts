import TeamPerformance from './TeamPerformance'
import Clonable from './Clonable';

export default class Match implements Clonable<Match>{
    constructor(
        public id: number,
        public red: TeamPerformance,
        public blue: TeamPerformance,
        public minutesPlayed: number,
        public date: Date
    ){}

    clone(): Match{
        return new Match(
            this.id,
            this.red.clone(),
            this.blue.clone(),
            this.minutesPlayed,
            new Date(this.date.getTime())
        );
    }
}