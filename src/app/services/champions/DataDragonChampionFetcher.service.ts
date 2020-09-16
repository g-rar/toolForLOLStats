import { Injectable } from '@angular/core';
import ControlModule from '../control.module';
import Champion from '../../models/Champion';
import { ChampionFetcher, ChampionFetcherError } from './ChampionFetcher.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: ControlModule,
})
export default class DataDragonChampionFetcher implements ChampionFetcher {
    
    private championsByAssetId: Map<string, Champion>;
    private championsById: Map<number, Champion>;
    private cachePromise: Promise<void>;
    
    constructor(private http: HttpClient){
        this.championsByAssetId = new Map();
        this.championsById = new Map();
        this.cachePromise = this.getChampions();
    }

    async fetch(id: number | string): Promise<Champion>{
        await this.cachePromise;
        let champion: Champion;
        if(typeof id === 'number')
            champion = this.championsById.get(id);
        else
            champion = this.championsByAssetId.get(id);
        if(champion === undefined)
            throw new Error(ChampionFetcherError.CHAMPION_NOT_FOUND);
        return champion;
    }

    private async getCurrentVersion(): Promise<string>{
        const versions: string[] = await this.http.get('ddragon/api/versions.json').toPromise() as string[];
        return versions[0];
    }

    private async getChampions(): Promise<void>{
        try{
            const version: string = await this.getCurrentVersion();
            const response: ResponseDTO = await this.http.get(`ddragon/cdn/${version}/data/en_US/champion.json`).toPromise() as ResponseDTO;
            Object.keys(response.data).forEach(championId => {
                const championDTO: ChampionDTO = response.data[championId];
                const champion: Champion = new Champion(
                    parseInt(championDTO.key),
                    championDTO.id,
                    championDTO.name,
                    `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championDTO.id}.png`
                );
                this.championsByAssetId.set(champion.assetId, champion);
                this.championsById.set(champion.id, champion);
            });
            return;
        } catch(error){
            console.error(error);
            throw new Error(ChampionFetcherError.FETCH_ERROR);
        }
    }
}

interface ChampionDTO{
    id: string; //assetId
    key: string; //actual id
    name: string;
}

interface ResponseDTO{
    type: string;
    version: string;
    format: string;
    data: object; //has all champion DTOs
}