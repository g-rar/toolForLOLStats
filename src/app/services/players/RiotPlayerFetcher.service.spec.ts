import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import ControlModule from '../control.module';
import RiotPlayerFetcher from './RiotPlayerFetcher.service';
import { PlayerFetcher, PlayerFetcherError } from './PlayerFetcher.service';
import { environment } from '../../../environments/environment';
import { Player } from 'src/app/models';

describe('RiotPlayerFetcher', ()=>{
    let httpTestingController: HttpTestingController;
    let fetcher: PlayerFetcher;
    const mockPlayerResponse: any = {
        id: "PLAYER_ID",
        accountId: "ACCOUNT_ID",
        puuid: "PUU_ID",
        name: "SUMMONER_NAME",
        profileIconId: 1,
        revisionDate: 2,
        summonerLevel: 3
    };
    const STUB_PLAYER_URL = `/lol/summoner/v4/summoners/by-name/${mockPlayerResponse.name}?api_key=${environment.RIOT_API_KEY}`;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ ControlModule, HttpClientTestingModule ]
        });
        httpTestingController = TestBed.inject(HttpTestingController);
        fetcher = TestBed.inject(RiotPlayerFetcher);
    });

    it('fetch(): fetches and parses players', async () => {
        const playerPromise: Promise<Player> = fetcher.fetch(mockPlayerResponse.name);
        httpTestingController.expectOne(STUB_PLAYER_URL).flush(mockPlayerResponse);
        const player: Player = await playerPromise;
        expect(player).toBeTruthy();
        expect(player.summonerName).toBe(mockPlayerResponse.name);
        expect(player.id).toBe(mockPlayerResponse.accountId);
    });

    it('fetch(): fails gracefully when a player can\'t be fetched', async () => {
        const playerPromise: Promise<Player> = fetcher.fetch(mockPlayerResponse.name);
        const ERROR_404: object = { status: 404, statusText: 'Not Found' };
        httpTestingController.expectOne(STUB_PLAYER_URL).flush('deliberate 404 error', ERROR_404);
        await expectAsync(playerPromise).toBeRejectedWith(
            new Error(PlayerFetcherError.FETCH_ERROR)
        );
    });
});