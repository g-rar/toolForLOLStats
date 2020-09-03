import { Injectable } from '@angular/core';
import ControlModule from '../control.module';
import { HTMLFetcher, HTMLFetcherError } from './HTMLFetcher.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: ControlModule,
})
export default class AngularHTMLFetcher implements HTMLFetcher {

    private parser: DOMParser;

    constructor(private http: HttpClient){ 
        this.parser = new DOMParser();
    }

    async fetch(url: string): Promise<HTMLDocument> {
        const htmlString: string = (await this.http.get(url, {
            responseType: 'text',
            observe: 'response'
        }).toPromise()).body;
        const htmlDocument: HTMLDocument = this.parser.parseFromString(htmlString, 'text/html');
        this.validate(htmlDocument);
        return htmlDocument;
    }

    //throws an exception if the document is malformed
    validate(html: HTMLDocument): void {
        
    }
}