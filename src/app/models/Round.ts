import Set from './Set'

export default class Round{
    constructor(
        public id: string,
        public name: string,
        public sets: Set[]
    ){}
}