import Player from './Player';

export default class Team{
    constructor(
        readonly id: string,
        readonly name: string,
        readonly players: Player[]
    ){}
}