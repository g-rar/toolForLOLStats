import Match from '../../models/Match'
import { Injectable } from '@angular/core';
import ControlModule from '../control.module';
import { MatchFetcher } from './MatchFetcher.service'
import { ChampionFetcher } from '../champions/ChampionFetcher.service';

@Injectable({
    providedIn: ControlModule,
})
export default class RiotMatchFetcher implements MatchFetcher{
    constructor(
        private championFetcher: ChampionFetcher
    ){}

    fetch(id: number): Promise<Match> {
        throw new Error("Method not implemented.");
    }
}