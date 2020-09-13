import { Injectable } from '@angular/core';
import ControlModule from '../control.module';
import { ChampionFetcher, ChampionFetcherError } from './ChampionFetcher.service';
import Champion from '../../models/Champion';

@Injectable({
    providedIn: ControlModule
})
export default class MockChampionFetcher implements ChampionFetcher {
    private championsByKey: Map<number, Champion>;
    private championsById: Map<string, Champion>;

    constructor(){
        const champions: Champion[] = [
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

        this.championsById = new Map();
        this.championsByKey = new Map();

        champions.forEach(champion => {
            this.championsById.set(champion.assetId, champion);
            this.championsByKey.set(champion.id, champion);
        });
    }

    async fetch(id: string | number): Promise<Champion> {
        let champion: Champion;
        if(typeof id === 'number')
            champion = this.championsByKey.get(id);
        else
            champion = this.championsById.get(id);
        
        if(champion === undefined)
            throw new Error(ChampionFetcherError.CHAMPION_NOT_FOUND);
        return champion;
    }
}