import { Injectable } from '@angular/core';
import ControlModule from '../control.module';
import { MatchFetcher, MatchFetcherError } from './MatchFetcher.service';
import { Match } from '../../models';

@Injectable({
    providedIn: ControlModule
})
export default class MockMatchFetcher implements MatchFetcher{
    fetch(id: number): Match {
        throw new Error("Method not implemented.");
    }
    
}