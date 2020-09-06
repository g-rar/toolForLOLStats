import { Injectable } from '@angular/core';
import ControlModule from '../control.module';
import { IdentityFetcher } from './IdentityFetcher.service';
import IdentityLocation from './IdentityLocation';
import IdentityMap from './IdentityMap';

@Injectable({
    providedIn: ControlModule
})
export default class MockIdentityFetcher implements IdentityFetcher{
    async fetch(location: IdentityLocation): Promise< [IdentityMap,IdentityMap] >{
        throw new Error("not implemented yet");
    }
}