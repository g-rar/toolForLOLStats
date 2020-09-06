import { Injectable } from '@angular/core';
import ControlModule from '../control.module';
import { ChampionFetcher } from './ChampionFetcher.service';
import Champion from '../../models/Champion';

@Injectable({
    providedIn: ControlModule
})
export default class MockChampionFetcher implements ChampionFetcher {
    fetch(id: number | string): Champion{
        throw new Error("not implemented");
    }
}