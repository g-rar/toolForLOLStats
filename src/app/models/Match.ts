import TeamPerformance from './TeamPerformance'

export default class Match {
    constructor(
        readonly id: string,
        readonly tournamentCode: string,
        readonly red: TeamPerformance[],
        readonly blue: TeamPerformance[],
        readonly minutesPlayed: number,
        readonly date: Date
    ){}
}