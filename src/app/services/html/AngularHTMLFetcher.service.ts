import { Injectable } from '@angular/core';
import ControlModule from '../control.module';
import { HTMLFetcher, HTMLFetcherError } from './HTMLFetcher.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: ControlModule,
})
export default class AngularHTMLFetcher implements HTMLFetcher {

    private parser: DOMParser;

    constructor(private http: HttpClient){ 
        this.parser = new DOMParser();
    }

    async fetch(url: string): Promise<HTMLDocument> {
        try{
            const htmlString: string = (await this.http.get(url, {
                responseType: 'text',
                observe: 'response'
            }).toPromise()).body;
            //checking for parse errors is not done here since it could not be replicated
            //it could be added later on, but it is currently not necessary
            const htmlDocument: HTMLDocument = this.parser.parseFromString(htmlString, 'text/html');
            return htmlDocument;
        } catch(error) {
            console.error(error);
            if(error instanceof HttpErrorResponse)
                throw new Error(HTMLFetcherError.HTTP_ERROR);
            else
                throw error;
        }
    }
}