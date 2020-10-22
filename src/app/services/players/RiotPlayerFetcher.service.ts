import { Injectable } from '@angular/core';
import ControlModule from '../control.module';
import { Player } from "../../models";
import { PlayerFetcher, PlayerFetcherError } from "./PlayerFetcher.service";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: ControlModule,
})
export default class RiotPlayerFetcher implements PlayerFetcher{

    constructor(private http: HttpClient){}

    public async fetch(summonerName: string): Promise<Player>{
        try{
            const playerDTO: PlayerDTO = await this.http.get(`/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${environment.RIOT_API_KEY}`).toPromise() as PlayerDTO;
            return new Player(playerDTO.accountId, playerDTO.name);
        } catch(error) {
            console.error(error);
            throw new Error(PlayerFetcherError.FETCH_ERROR);
        }
    }
}

interface PlayerDTO{
    accountId: string,
    name: string
}