import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import ControlModule from '../control.module';
import DataDragonChampionFetcher from './DataDragonChampionFetcher.service';
import { ChampionFetcher, ChampionFetcherError } from './ChampionFetcher.service';

const mockVersionResponse: object = [ "CURRENT_VERSION" ];

describe('DataDragonChampionFetcher', ()=>{
    let httpTestingController: HttpTestingController;
    let fetcher: ChampionFetcher;
    const STUB_VERSION_URL = '/ddragon/api/versions.json';
    const STUB_CHAMPIONS_URL = `/ddragon/cdn/${mockVersionResponse[0]}/data/en_US/champion.json`;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ ControlModule, HttpClientTestingModule ]
        });
        httpTestingController = TestBed.inject(HttpTestingController);
        fetcher = TestBed.inject(DataDragonChampionFetcher);
    });

    it('fetch(): fetches champions', fakeAsync(() => {
        httpTestingController.expectOne(STUB_VERSION_URL).flush(mockVersionResponse);
        tick();
        httpTestingController.expectOne(STUB_CHAMPIONS_URL).flush(mockChampionResponse);
        expectAsync(fetcher.fetch('Aatrox')).toBeResolved();
        tick();
        //adding an extra fetch here to check that further calls to fetch require no
        //extra http calls
        expectAsync(fetcher.fetch('Aatrox')).toBeResolved();
        tick();
    }));

    it('fetch(): fails with an incorrect champion id or champion asset id', fakeAsync(() => {
        const incorrectId: number = -1;
        const incorrectAssetId: string = 'not a champion';
        httpTestingController.expectOne(STUB_VERSION_URL).flush(mockVersionResponse);
        tick();
        httpTestingController.expectOne(STUB_CHAMPIONS_URL).flush(mockChampionResponse);
        expectAsync(fetcher.fetch(incorrectAssetId)).toBeRejectedWith(
            new Error(ChampionFetcherError.CHAMPION_NOT_FOUND)
        );
        tick();
        expectAsync(fetcher.fetch(incorrectId)).toBeRejectedWith(
            new Error(ChampionFetcherError.CHAMPION_NOT_FOUND)
        );
        tick();
    }));

    it('fetch(): fails gracefully when fetching the version number is impossible', async () => {
        const ERROR_404: object = { status: 404, statusText: 'Not Found' };
        httpTestingController.expectOne(STUB_VERSION_URL).flush('deliberate 404 error', ERROR_404);
        await expectAsync(fetcher.fetch('Aatrox')).toBeRejectedWith(
            new Error(ChampionFetcherError.FETCH_ERROR)
        );
        
    });

    it('fetch(): fails grecefully when fetching champions is impossible', fakeAsync(() => {
        const ERROR_404: object = { status: 404, statusText: 'Not Found' };
        httpTestingController.expectOne(STUB_VERSION_URL).flush(mockVersionResponse);
        tick();
        httpTestingController.expectOne(STUB_CHAMPIONS_URL).flush('deliberate 404 error', ERROR_404);
        expectAsync(fetcher.fetch('Aatrox')).toBeRejectedWith(
            new Error(ChampionFetcherError.FETCH_ERROR)
        );
        tick();
    }));
});

const mockChampionResponse: object = {
    data:{
        Aatrox:{
            version:"10.16.1",
            id:"Aatrox",
            key:"266",
            name:"Aatrox",
            title:"the Darkin Blade",
            blurb:"Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...",
            info:{
                attack:8,
                defense:4,
                magic:3,
                difficulty:4
            },
            image:{
                full:"Aatrox.png",
                sprite:"champion0.png",
                group:"champion",
                x:0,
                y:0,
                w:48,
                h:48
            },
            tags:[
                "Fighter",
                "Tank"
            ],
            partype:"Blood Well",
            stats:{
                hp:580,
                hpperlevel:90,
                mp:0,
                mpperlevel:0,
                movespeed:345,
                armor:38,
                armorperlevel:3.25,
                spellblock:32.1,
                spellblockperlevel:1.25,
                attackrange:175,
                hpregen:3,
                hpregenperlevel:1,
                mpregen:0,
                mpregenperlevel:0,
                crit:0,
                critperlevel:0,
                attackdamage:60,
                attackdamageperlevel:5,
                attackspeedperlevel:2.5,
                attackspeed:0.651
            }
        }
    }
}