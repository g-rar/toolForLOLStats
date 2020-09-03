import { Injectable } from '@angular/core';
import ControlModule from '../control.module';
import Champion from '../../models/Champion';
import ChampionFetcher from './ChampionFetcher.service';


@Injectable({
    providedIn: ControlModule,
})
export default class KaynChampionFetcher implements ChampionFetcher {
    fetch(id: number): Champion {
        throw new Error("Method not implemented.");
    }
}