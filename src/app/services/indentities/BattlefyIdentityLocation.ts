import IdentityLocation from './IdentityLocation'

export default class BattlefyIdentityLocation implements IdentityLocation {
    constructor(
        public readonly battlefyUrl: string
    ){}
}