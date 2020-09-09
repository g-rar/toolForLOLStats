import { Injectable } from '@angular/core';
import ControlModule from '../control.module';
import { IdentityFetcher } from './IdentityFetcher.service';
import IdentityLocation from './IdentityLocation';
import IdentityMap from './IdentityMap';

@Injectable({
    providedIn: ControlModule
})
export default class MockIdentityFetcher implements IdentityFetcher{
    async fetch(location: IdentityLocation): Promise< [IdentityMap,IdentityMap] >{
        const winners: IdentityMap = new IdentityMap('Devs Lives Matter', true);
        winners.set('Aatrox', 'Player2');
        winners.set('Ezreal', 'Player6');
        winners.set('Ahri', 'Player10');
        winners.set('Yuumi', 'Player14');
        winners.set('Gragas', 'Player18');

        const losers: IdentityMap = new IdentityMap('Los patitos', false);
        losers.set('Chogath', 'Player0');
        losers.set('Thresh', 'Player4');
        losers.set('KogMaw', 'Player8');
        losers.set('Syndra', 'Player12');
        losers.set('Vi', 'Player16');

        return [winners, losers];
    }
}