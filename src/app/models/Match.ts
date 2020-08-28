import TeamPerformance from './TeamPerformance'

export default class Match {
    constructor(
        public id: number,
        public red: TeamPerformance,
        public blue: TeamPerformance,
        public minutesPlayed: number,
        public date: Date
    ){}
}