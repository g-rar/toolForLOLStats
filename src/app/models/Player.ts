import Champion from './Champion'

export default class Player {
    constructor(
        public id: string,
        public name: string,
        public champions: Champion[],
        public teams: string[]
    ){}
}