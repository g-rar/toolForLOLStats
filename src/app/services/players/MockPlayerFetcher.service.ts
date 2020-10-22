import { Injectable } from '@angular/core';
import ControlModule from '../control.module';
import { Player } from "../../models";
import { PlayerFetcher } from "./PlayerFetcher.service";

@Injectable({
    providedIn: ControlModule,
})
export default class MockPlayerFetcher implements PlayerFetcher{
    public async fetch(summonerName: string): Promise<Player>{
        return new Player('id', summonerName);
    }
}