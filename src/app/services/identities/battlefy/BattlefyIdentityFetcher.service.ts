import { Injectable } from '@angular/core';
import ControlModule from '../../control.module';
import { IdentityFetcher, IdentityFetcherError } from '../IdentityFetcher.service'
import IdentityLocation from '../IdentityLocation'
import BattlefyIdentityLocation from './BattlefyIdentityLocation'
import IdentityMap from '../IdentityMap';
import { HTMLFetcher } from '../../html/HTMLFetcher.service';
import { ChampionFetcher } from '../../champions/ChampionFetcher.service';
import { PlayerFetcher } from '../../players/PlayerFetcher.service';
import { Champion, Player } from 'src/app/models';

@Injectable({
    providedIn: ControlModule,
})
export default class BattlefyIdentityFetcher implements IdentityFetcher{

    private static readonly TEAM_NAME_AND_STATUS_SELECTOR: string = "bf-app.firefox main.main.side-bar-open div div#tournament.tournament-layout div bf-tournament.game-league-of-legends.match-page div.tournament-details div.tournament-wrapper div.tournament-details-content.tournament-body.tournament-content.infinite-scroll-container div.tournament-fixed-size div.tournament-routes div.stage-view-container div#stage-bracket-container div bf-match div.match-page div#match-extras div.visible-lg bfy-lol-match-stats div div bfy-lol-stats.static div div.end-of-game.game-stats.clearfix div div.well h2.team-name span";
    private static readonly WINNING_TEAM_PLAYER_NAME_SELECTOR: string = "bf-app.firefox main.main.side-bar-open div div#tournament.tournament-layout div bf-tournament.game-league-of-legends.match-page div.tournament-details div.tournament-wrapper div.tournament-details-content.tournament-body.tournament-content.infinite-scroll-container div.tournament-fixed-size div.tournament-routes div.stage-view-container div#stage-bracket-container div bf-match div.match-page div#match-extras div.visible-lg bfy-lol-match-stats div div bfy-lol-stats.static div div.end-of-game.game-stats.clearfix div div.well div.stat-table-container table.table.table-striped.table-stats tbody tr.player-winner td.player div.player-name-container div.summoner-spell-container.pl-10 div.summoner-name b";
    private static readonly WINNING_TEAM_CHAMPION_IMAGE_SELECTOR: string = "bf-app.firefox main.main.side-bar-open div div#tournament.tournament-layout div bf-tournament.game-league-of-legends.match-page div.tournament-details div.tournament-wrapper div.tournament-details-content.tournament-body.tournament-content.infinite-scroll-container div.tournament-fixed-size div.tournament-routes div.stage-view-container div#stage-bracket-container div bf-match div.match-page div#match-extras div.visible-lg bfy-lol-match-stats div div bfy-lol-stats.static div div.end-of-game.game-stats.clearfix div div.well div.stat-table-container table.table.table-striped.table-stats tbody tr.player-winner td.player div.player-name-container img.lol-champion-icon";
    private static readonly LOSING_TEAM_PLAYER_NAME_SELECTOR: string = "bf-app.firefox main.main.side-bar-open div div#tournament.tournament-layout div bf-tournament.game-league-of-legends.match-page div.tournament-details div.tournament-wrapper div.tournament-details-content.tournament-body.tournament-content.infinite-scroll-container div.tournament-fixed-size div.tournament-routes div.stage-view-container div#stage-bracket-container div bf-match div.match-page div#match-extras div.visible-lg bfy-lol-match-stats div div bfy-lol-stats.static div div.end-of-game.game-stats.clearfix div div.well div.stat-table-container table.table.table-striped.table-stats tbody tr.player-loser td.player div.player-name-container div.summoner-spell-container.pl-10 div.summoner-name b";
    private static readonly LOSING_TEAM_CHAMPION_IMAGE_SELECTOR: string = "bf-app.firefox main.main.side-bar-open div div#tournament.tournament-layout div bf-tournament.game-league-of-legends.match-page div.tournament-details div.tournament-wrapper div.tournament-details-content.tournament-body.tournament-content.infinite-scroll-container div.tournament-fixed-size div.tournament-routes div.stage-view-container div#stage-bracket-container div bf-match div.match-page div#match-extras div.visible-lg bfy-lol-match-stats div div bfy-lol-stats.static div div.end-of-game.game-stats.clearfix div div.well div.stat-table-container table.table.table-striped.table-stats tbody tr.player-loser td.player div.player-name-container img.lol-champion-icon";
    private static readonly VICTORY_STATUS: string = "- VICTORY";
    private static readonly DEFEAT_STATUS: string = "- DEFEAT";
    private static readonly TEAM_SIZE: number = 5;

    constructor(
        private htmlFetcher: HTMLFetcher,
        private championFetcher: ChampionFetcher,
        private playerFetcher: PlayerFetcher
    ){}

    async fetch(location: IdentityLocation): Promise<[IdentityMap, IdentityMap]> {
        if(!(location instanceof BattlefyIdentityLocation))
            throw new Error(IdentityFetcherError.INVALID_LOCATION_SUBTYPE);
    
        const battlefyUrl: string = (<BattlefyIdentityLocation>location).battlefyUrl;
        const doc: HTMLDocument = await this.htmlFetcher.fetch(battlefyUrl);

        //get empty team identities
        const identities: [IdentityMap, IdentityMap] = this.getEmptyTeamIdentities(doc, BattlefyIdentityFetcher.TEAM_NAME_AND_STATUS_SELECTOR);
        //add the champion-player maps to the identities
        const firstTeamChampionToPlayerMap = await this.getChampionPlayerMapForIdentity(doc, identities[0]);
        const secondTeamChampionToPlayerMap = await this.getChampionPlayerMapForIdentity(doc, identities[1]);
        identities[0].setAll(firstTeamChampionToPlayerMap);
        identities[1].setAll(secondTeamChampionToPlayerMap);

        return identities;
    }

    private getEmptyTeamIdentities(doc: HTMLDocument, teamNameSelector: string): [ IdentityMap, IdentityMap ]{
        //this querySelectorAll should always return 4 nodes:
        //first team name, first team match status, second team name, second team match status
        const nodes: NodeListOf<Element> = doc.querySelectorAll(teamNameSelector);
        if(nodes.length != 4)
            throw new Error(IdentityFetcherError.UNABLE_TO_FIND_TEAM_NAME);
        
        const firstTeamName: string = nodes[0].innerHTML.trim();
        const firstTeamStatus: string = nodes[1].innerHTML.trim();
        const secondTeamName: string = nodes[2].innerHTML.trim();
        const secondTeamStatus: string = nodes[3].innerHTML.trim();

        const firstTeamIdentity: IdentityMap = this.getEmptyTeamIdentity(firstTeamName, firstTeamStatus);
        const secondTeamIdentity: IdentityMap = this.getEmptyTeamIdentity(secondTeamName, secondTeamStatus);

        return [firstTeamIdentity, secondTeamIdentity];
    }

    private getEmptyTeamIdentity(teamName: string, teamStatus: string): IdentityMap {
        if(teamStatus === BattlefyIdentityFetcher.VICTORY_STATUS)
            return new IdentityMap(teamName, true);
        if(teamStatus === BattlefyIdentityFetcher.DEFEAT_STATUS)
            return new IdentityMap(teamName, false);
        else
            throw new Error(IdentityFetcherError.UNABLE_TO_FIND_TEAM_STATUS);
    }

    private async getChampionPlayerMapForIdentity(doc: HTMLDocument, identity: IdentityMap): Promise<Map<Champion, Player>>{
        if(identity.won){
            return await this.getChampionPlayerMapBySelectors(doc, 
                BattlefyIdentityFetcher.WINNING_TEAM_PLAYER_NAME_SELECTOR,
                BattlefyIdentityFetcher.WINNING_TEAM_CHAMPION_IMAGE_SELECTOR
            );
        } else {
            return await this.getChampionPlayerMapBySelectors(doc, 
                BattlefyIdentityFetcher.LOSING_TEAM_PLAYER_NAME_SELECTOR,
                BattlefyIdentityFetcher.LOSING_TEAM_CHAMPION_IMAGE_SELECTOR
            );
        }
    }

    private async getChampionPlayerMapBySelectors(doc: HTMLDocument, playerSelector: string, championImageSelector: string): Promise<Map<Champion, Player>> {
        const playerSummonerNames: string[] = this.getInnerHTMLList(doc, playerSelector);
        const championImageURLs: string[] = this.getSourceList(doc, championImageSelector);

        if(playerSummonerNames.length != BattlefyIdentityFetcher.TEAM_SIZE)
            throw new Error(IdentityFetcherError.UNABLE_TO_FIND_PLAYER_DATA);
        else if(championImageURLs.length != BattlefyIdentityFetcher.TEAM_SIZE)
            throw new Error(IdentityFetcherError.UNABLE_TO_FIND_CHAMPION_DATA);
        else{
            const players: Player[] = await this.getPlayers(playerSummonerNames);
            const champions: Champion[] = await this.getChampions(championImageURLs);
            const map: Map<Champion, Player> = new Map();
            for(let i = 0; i < 5; i++)
                map.set(champions[i], players[i]);
            return map;
        }
    }

    private async getPlayers(summonerNames: string[]): Promise<Player[]>{
        const players: Player[] = [];
        for(let i = 0; i < summonerNames.length; i++){
            const player: Player = await this.playerFetcher.fetch(summonerNames[i]);
            players.push(player);
        }
        return players;
    }

    private async getChampions(championImageURLs: string[]): Promise<Champion[]>{
        const championsAssetIds: string[] = this.getChampionAssetIDsFromImage(championImageURLs);
        const champions: Champion[] = [];
        for(let i = 0; i < championsAssetIds.length; i++){
            const champion: Champion = await this.championFetcher.fetch(championsAssetIds[i]);
            champions.push(champion);
        }
        return champions;
    }

    private getChampionAssetIDsFromImage(championImages: string[]): string[] {
        const ids: string[] = [];
        championImages.forEach( image => {
            const start: number = image.lastIndexOf('/') + 1;
            const end: number = image.lastIndexOf('.');
            ids.push(image.substring(start, end));
        });
        return ids;
    }

    private getInnerHTMLList(doc: HTMLDocument, selector: string): string[]{
        const innerHtmls: string[] = [];
        doc.querySelectorAll(selector).forEach( node => innerHtmls.push(node.innerHTML.trim()) );
        return innerHtmls;
    }

    private getSourceList(doc: HTMLDocument, selector: string): string[]{
        const sources: string[] = [];
        doc.querySelectorAll(selector).forEach( node => sources.push(node.getAttribute('src').trim()) );
        return sources;
    }
}