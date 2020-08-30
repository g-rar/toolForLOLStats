import { HTMLFetcher, HTMLFetcherError } from './HTMLFetcher.service';
import { HttpClient } from '@angular/common/http';


export default class AngularHTMLFetcher implements HTMLFetcher {
    private http: HttpClient;
    private parser: DOMParser;

    constructor(){
        this.parser = new DOMParser();
    }

    //throw an exception if the document is malformed
    validate(html: Document): void {
        
    }

    async fetch(url: string): Promise<HTMLDocument> {
        const htmlString: string = await this.http.get(url, {responseType: 'text'}).toPromise();
        const htmlDocument: HTMLDocument = this.parser.parseFromString(htmlString, 'text/html');
        this.validate(htmlDocument);
        return htmlDocument;
    }
}