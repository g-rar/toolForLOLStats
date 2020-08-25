export default class Tournament {
    constructor(
        readonly id: string,
        readonly name: string,
        readonly completed: boolean,
        readonly startDate: Date,
        readonly endDate: Date,
        readonly roundIds: string[],
        readonly teamIds: string[]
    ){}
}