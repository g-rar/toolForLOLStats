import BattlefyIdentityFetcher from './BattlefyIdentityFetcher.service';
import BattlefyIdentityLocation from './BattlefyIdentityLocation';
import { IdentityFetcher, IdentityFetcherError } from '../IdentityFetcher.service';
import IdentityLocation from '../IdentityLocation';
import IdentityMap from '../IdentityMap';
import MockHTMLFetcher from '../../html/MockHTMLFetcher.service';
import { TestBed } from '@angular/core/testing';
import ControlModule from '../../control.module';
import { ChampionFetcher } from '../../champions/ChampionFetcher.service';
import MockChampionFetcher from '../../champions/MockChampionFetcher.service';
import { PlayerFetcher } from '../../players/PlayerFetcher.service';
import MockPlayerFetcher from '../../players/MockPlayerFetcher.service';
import RiotPlayerFetcher from '../../players/RiotPlayerFetcher.service';
import { HTMLFetcher } from '../../html/HTMLFetcher.service';

class MockIdentityLocation implements IdentityLocation {}

describe('BattlefyIdentityFetcher', () => {
    const STUB_URL: string = "url doesn't matter";
    const STUB_IDENTITY_LOCATION: BattlefyIdentityLocation = new BattlefyIdentityLocation(STUB_URL);
    let fetcher: IdentityFetcher;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ ControlModule ],
            providers: [
                { provide: ChampionFetcher, useClass: MockChampionFetcher },
                { provide: PlayerFetcher, useClass: MockPlayerFetcher },
                { provide: HTMLFetcher, useClass: MockHTMLFetcher },
            ]
        });
        fetcher = TestBed.inject(BattlefyIdentityFetcher);
    });

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
        console.log(identities);
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