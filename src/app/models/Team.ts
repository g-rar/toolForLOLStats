import Player from './Player';

export default class Team{
    constructor(
        public id: string,
        public name: string,
        public players: Player[]
    ){}
}