import IdentityFetcher from '../IdentityFetcher.service'
import IdentityLocation from '../IdentityLocation'
import BattlefyIdentityLocation from './BattlefyIdentityLocation'

export default class BattlefyIdentityFetcher implements IdentityFetcher{
    fetchIdentities(location: IdentityLocation): Map<string, string> {
        throw new Error("Method not implemented.");
    }
}