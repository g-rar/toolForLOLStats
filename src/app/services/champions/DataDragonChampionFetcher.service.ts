import { Injectable } from '@angular/core';
import ControlModule from '../control.module';
import Champion from '../../models/Champion';
import { ChampionFetcher } from './ChampionFetcher.service';


@Injectable({
    providedIn: ControlModule,
})
export default class DataDragonChampionFetcher implements ChampionFetcher {
    fetch(id: number | string): Champion{
        throw new Error("not implemented");
    }
}