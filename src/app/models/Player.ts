import Clonable from './Clonable';

export default class Player implements Clonable<Player> {
    constructor(
        public summonerName: string
    ){}

    clone(): Player {
        return new Player(this.summonerName);
    }
}