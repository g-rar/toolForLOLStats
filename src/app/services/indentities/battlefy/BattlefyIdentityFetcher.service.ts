import { IdentityFetcher, IdentityFetcherError } from '../IdentityFetcher.service'
import IdentityLocation from '../IdentityLocation'
import BattlefyIdentityLocation from './BattlefyIdentityLocation'

export default class BattlefyIdentityFetcher implements IdentityFetcher{

    async fetch(location: IdentityLocation): Promise<Map<string, string>> {
        if(!(location instanceof BattlefyIdentityLocation))
            throw new Error(IdentityFetcherError.INVALID_LOCATION_SUBTYPE);
    
        const battlefyUrl: string = (<BattlefyIdentityLocation>location).battlefyUrl;
        const response: Map<string, string> = new Map();

        //download the HTML
        const html: string = await this.downloadHTML(battlefyUrl);
        console.log(html);

        //get the champions in order
        //get the players in order

        //add them to the map

        return response;
    }

    private async downloadHTML(url: string): Promise<string> {
        return "hola";
    }
}