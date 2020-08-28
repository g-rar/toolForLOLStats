import Champion from './Champion'

export default class Player {
    constructor(
        readonly id: string,
        readonly name: string,
        readonly champions: Champion[],
        readonly teams: string[]
    ){}
}