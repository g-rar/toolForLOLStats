import Clonable from './Clonable';

export default class Player implements Clonable<Player> {
    constructor(
        public id: string,
        public summonerName: string
    ){}

    clone(): Player {
        return new Player(this.id, this.summonerName);
    }
}