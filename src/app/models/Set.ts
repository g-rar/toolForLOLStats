import SetResult from './SetResult';

export default class Set {
    constructor(
        readonly id: string,
        readonly firstTeamResult: SetResult,
        readonly secondTeamResult: SetResult,
        readonly matchIds: string[]
    ){}
}