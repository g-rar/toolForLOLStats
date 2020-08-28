import BattlefyIdentityFetcher from './BattlefyIdentityFetcher.service';
import BattlefyIdentityLocation from './BattlefyIdentityLocation';
import { IdentityFetcherError } from '../IdentityFetcher.service';
import IdentityLocation from '../IdentityLocation';

class MockIdentity implements IdentityLocation {}

describe('BattlefyIdentityFetcher', () => {
    const fetcher: BattlefyIdentityFetcher = new BattlefyIdentityFetcher();

    it('should be created', () => {
        expect(fetcher).toBeTruthy();
    });

    it('should fail on null location', async () => {
        await expectAsync(fetcher.fetch(null)).toBeRejectedWith(
            Error(IdentityFetcherError.INVALID_LOCATION_SUBTYPE)
        );
    });

    it('should fail on non-BattlefyIdentityLocation location', async () => {
        await expectAsync(fetcher.fetch(new MockIdentity())).toBeRejectedWith(
            Error(IdentityFetcherError.INVALID_LOCATION_SUBTYPE)
        );
    });

    /*
    it('should ', async () => {
        
    });
    */
});