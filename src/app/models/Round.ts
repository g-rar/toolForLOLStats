import Set from './Set'

export default class Round{
    constructor(
        readonly id: string,
        readonly sets: Set[]
    ){}

    get name(): string{ return this.id; }
}