import { Injectable } from '@angular/core';
import { Champion, Player } from 'src/app/models';
import ControlModule from '../control.module';
import { IdentityFetcher } from './IdentityFetcher.service';
import IdentityLocation from './IdentityLocation';
import IdentityMap from './IdentityMap';

@Injectable({
    providedIn: ControlModule
})
export default class MockIdentityFetcher implements IdentityFetcher{

    private champions: Champion[] = [
        new Champion(226, "Aatrox", "Aatrox", "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Aatrox.png"),
        new Champion(81, "Ezreal", "Ezreal", "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Ezreal.png"),
        new Champion(103, "Ahri", "Ahri", "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Ahri.png"),
        new Champion(350, "Yuumi", "Yuumi", "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Yuumi.png"),
        new Champion(79, "Gragas", "Aatrox", "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Aatrox.png"),
        new Champion(31, "Chogath", "Cho'Gath", "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Chogath.png"),
        new Champion(412, "Thresh", "Thresh", "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Thresh.png"),
        new Champion(96, "KogMaw", "Kog'Maw", "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/KogMaw.png"),
        new Champion(134, "Syndra", "Syndra", "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Aatrox.png"),
        new Champion(254, "Vi", "Vi", "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Vi.png")
    ];

    async fetch(location: IdentityLocation): Promise< [IdentityMap,IdentityMap] >{
        const winners: IdentityMap = new IdentityMap('Devs Lives Matter', true);
        winners.set(this.champions[0], new Player('2', 'Player2'));
        winners.set(this.champions[1], new Player('6', 'Player6'));
        winners.set(this.champions[2], new Player('10', 'Player10'));
        winners.set(this.champions[3], new Player('14', 'Player14'));
        winners.set(this.champions[4], new Player('18', 'Player18'));

        const losers: IdentityMap = new IdentityMap('Los patitos', false);
        losers.set(this.champions[5], new Player('0', 'Player0'));
        losers.set(this.champions[6], new Player('4', 'Player4'));
        losers.set(this.champions[7], new Player('8', 'Player8'));
        losers.set(this.champions[8], new Player('12', 'Player12'));
        losers.set(this.champions[9], new Player('16', 'Player16'));

        return [winners, losers];
    }
}