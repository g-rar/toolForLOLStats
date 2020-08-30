import BattlefyIdentityFetcher from './BattlefyIdentityFetcher.service';
import BattlefyIdentityLocation from './BattlefyIdentityLocation';
import { IdentityFetcherError } from '../IdentityFetcher.service';
import IdentityLocation from '../IdentityLocation';
import IdentityMap from '../IdentityMap';
import MockHTMLFetcher from '../../html/MockHTMLFetcher.service';

class MockIdentityLocation implements IdentityLocation {}

describe('BattlefyIdentityFetcher', () => {
    const STUB_URL: string = "url doesn't matter";
    const STUB_FETCHER: MockHTMLFetcher = new MockHTMLFetcher();
    const STUB_IDENTITY_LOCATION: BattlefyIdentityLocation = new BattlefyIdentityLocation(STUB_URL);
    const fetcher: BattlefyIdentityFetcher = new BattlefyIdentityFetcher(STUB_FETCHER);

    it('should be created', () => {
        expect(fetcher).toBeTruthy();
    });

    it('should fail on null location', async () => {
        await expectAsync(fetcher.fetch(null)).toBeRejectedWith(
            Error(IdentityFetcherError.INVALID_LOCATION_SUBTYPE)
        );
    });

    it('should fail on non-BattlefyIdentityLocation location', async () => {
        await expectAsync(fetcher.fetch(new MockIdentityLocation())).toBeRejectedWith(
            Error(IdentityFetcherError.INVALID_LOCATION_SUBTYPE)
        );
    });

    it('should get the identity maps', async () => {
        //since the fetcher was initialized with the mock HTML fetcher the identity location doesn't matter
        const response: [IdentityMap, IdentityMap] = await fetcher.fetch(STUB_IDENTITY_LOCATION);
        expect(response).toBeTruthy();
    });

    /*
    it('should ', async () => {
        
    });
    */
});