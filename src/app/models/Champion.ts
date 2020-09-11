import Clonable from './Clonable';

export default class Champion implements Clonable<Champion> {
    constructor(
        readonly id: number,
        readonly assetId: string,
        readonly name: string,
        readonly picture: string
    ){}

    clone(): Champion {
        return new Champion(this.id, this.assetId, this.name, this.picture);
    }
}