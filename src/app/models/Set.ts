import SetResult from './SetResult';

export default class Set {
    constructor(
        public id: string,
        public firstTeamResult: SetResult,
        public secondTeamResult: SetResult,
        public matchIds: number[]
    ){}
}