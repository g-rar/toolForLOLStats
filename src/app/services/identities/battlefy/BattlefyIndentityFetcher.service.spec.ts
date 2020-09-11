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

    it('fetch(): fails on null location', async () => {
        await expectAsync(fetcher.fetch(null)).toBeRejectedWith(
            Error(IdentityFetcherError.INVALID_LOCATION_SUBTYPE)
        );
    });

    it('fetch(): fails on non-BattlefyIdentityLocation location', async () => {
        await expectAsync(fetcher.fetch(new MockIdentityLocation())).toBeRejectedWith(
            Error(IdentityFetcherError.INVALID_LOCATION_SUBTYPE)
        );
    });

    it('fetch(): gets the identity maps', async () => {
        //since the fetcher was initialized with the mock HTML fetcher the identity location doesn't matter
        const identities: [IdentityMap, IdentityMap] = await fetcher.fetch(STUB_IDENTITY_LOCATION);
        expect(identities).toBeTruthy();
    });

    it('fetch(): gets exactly 5 player records per team', async () => {
        //since the fetcher was initialized with the mock HTML fetcher the identity location doesn't matter
        const identities: [IdentityMap, IdentityMap] = await fetcher.fetch(STUB_IDENTITY_LOCATION);
        expect(identities[0].players.length).toBe(5);
        expect(identities[1].players.length).toBe(5);
    });

    it('fetch(): always gets a winning team and a losing team', async () => {
        //since the fetcher was initialized with the mock HTML fetcher the identity location doesn't matter
        const identities: [IdentityMap, IdentityMap] = await fetcher.fetch(STUB_IDENTITY_LOCATION);
        expect(identities[0].won).toBe(!identities[1].won);
    });
});