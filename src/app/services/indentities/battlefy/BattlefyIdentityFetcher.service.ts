import { IdentityFetcher, IdentityFetcherError } from '../IdentityFetcher.service'
import IdentityLocation from '../IdentityLocation'
import BattlefyIdentityLocation from './BattlefyIdentityLocation'
import IdentityMap from '../IdentityMap';
import { HTMLFetcher } from '../../html/HTMLFetcher.service';

export default class BattlefyIdentityFetcher implements IdentityFetcher{

    private static readonly FIRST_TEAM_NAME_SELECTOR: string = "html#ng-app.no-js.wf-roboto-n4-active.wf-roboto-n3-active.wf-roboto-n5-active.wf-roboto-i4-active.wf-roboto-i3-active.wf-roboto-i1-active.wf-roboto-n1-active.wf-active body bf-app.firefox main.main.side-bar-open div div#tournament.tournament-layout div bf-tournament.game-league-of-legends.match-page div.tournament-details div.tournament-wrapper div.tournament-details-content.tournament-body.tournament-content.infinite-scroll-container div.tournament-fixed-size div.tournament-routes div.stage-view-container div#stage-bracket-container div bf-match div.match-page div.role-component bf-match-viewer div.card bf-match-core-info div.match-participant-names div.match-team-container div.hidden-xs.hidden-sm.bfy-match-team h2 span.team-name";
    private static readonly FIRST_TEAM_VICTORY_SELECTOR: string = "html#ng-app.no-js.wf-roboto-n4-active.wf-roboto-n3-active.wf-roboto-n5-active.wf-roboto-i4-active.wf-roboto-i3-active.wf-roboto-i1-active.wf-roboto-n1-active.wf-active body bf-app.firefox main.main.side-bar-open div div#tournament.tournament-layout div bf-tournament.game-league-of-legends.match-page div.tournament-details div.tournament-wrapper div.tournament-details-content.tournament-body.tournament-content.infinite-scroll-container div.tournament-fixed-size div.tournament-routes div.stage-view-container div#stage-bracket-container div bf-match div.match-page div.role-component bf-match-viewer div.card bf-match-core-info div.match-participant-names div.match-team-container div.win-status.top div small.winner span";
    private static readonly FIRST_TEAM_DEFEAT_SELECTOR: string = "html#ng-app.no-js.wf-roboto-n4-active.wf-roboto-n3-active.wf-roboto-n5-active.wf-roboto-i4-active.wf-roboto-i3-active.wf-roboto-i1-active.wf-roboto-n1-active.wf-active body bf-app.firefox main.main.side-bar-open div div#tournament.tournament-layout div bf-tournament.game-league-of-legends.match-page div.tournament-details div.tournament-wrapper div.tournament-details-content.tournament-body.tournament-content.infinite-scroll-container div.tournament-fixed-size div.tournament-routes div.stage-view-container div#stage-bracket-container div bf-match div.match-page div.role-component bf-match-viewer div.card bf-match-core-info div.match-participant-names div.match-team-container div.win-status.top div small.loser span";

    private static readonly SECOND_TEAM_NAME_SELECTOR: string = "html#ng-app.no-js.wf-roboto-n4-active.wf-roboto-n3-active.wf-roboto-n5-active.wf-roboto-i4-active.wf-roboto-i3-active.wf-roboto-i1-active.wf-roboto-n1-active.wf-active body bf-app.firefox main.main.side-bar-open div div#tournament.tournament-layout div bf-tournament.game-league-of-legends.match-page div.tournament-details div.tournament-wrapper div.tournament-details-content.tournament-body.tournament-content.infinite-scroll-container div.tournament-fixed-size div.tournament-routes div.stage-view-container div#stage-bracket-container div bf-match div.match-page div.role-component bf-match-viewer div.card bf-match-core-info div.match-participant-names div.match-team-container.text-align-right div.hidden-xs.hidden-sm.bfy-match-team h2 span.team-name";
    private static readonly SECOND_TEAM_VICTORY_SELECTOR: string = "html#ng-app.no-js.wf-roboto-n4-active.wf-roboto-n3-active.wf-roboto-n5-active.wf-roboto-i4-active.wf-roboto-i3-active.wf-roboto-i1-active.wf-roboto-n1-active.wf-active body bf-app.firefox main.main.side-bar-open div div#tournament.tournament-layout div bf-tournament.game-league-of-legends.match-page div.tournament-details div.tournament-wrapper div.tournament-details-content.tournament-body.tournament-content.infinite-scroll-container div.tournament-fixed-size div.tournament-routes div.stage-view-container div#stage-bracket-container div bf-match div.match-page div.role-component bf-match-viewer div.card bf-match-core-info div.match-participant-names div.match-team-container.text-align-right div.win-status.bottom div small.winner span";
    private static readonly SECOND_TEAM_DEFEAT_SELECTOR: string = "html#ng-app.no-js.wf-roboto-n4-active.wf-roboto-n3-active.wf-roboto-n5-active.wf-roboto-i4-active.wf-roboto-i3-active.wf-roboto-i1-active.wf-roboto-n1-active.wf-active body bf-app.firefox main.main.side-bar-open div div#tournament.tournament-layout div bf-tournament.game-league-of-legends.match-page div.tournament-details div.tournament-wrapper div.tournament-details-content.tournament-body.tournament-content.infinite-scroll-container div.tournament-fixed-size div.tournament-routes div.stage-view-container div#stage-bracket-container div bf-match div.match-page div.role-component bf-match-viewer div.card bf-match-core-info div.match-participant-names div.match-team-container.text-align-right div.win-status.bottom div small.loser span";

    private htmlFetcher: HTMLFetcher;

    constructor(htmlFetcher: HTMLFetcher){
        this.htmlFetcher = htmlFetcher;
    }

    async fetch(location: IdentityLocation): Promise<[IdentityMap, IdentityMap]> {
        if(!(location instanceof BattlefyIdentityLocation))
            throw new Error(IdentityFetcherError.INVALID_LOCATION_SUBTYPE);
    
        const battlefyUrl: string = (<BattlefyIdentityLocation>location).battlefyUrl;
        const doc: HTMLDocument = await this.htmlFetcher.fetch(battlefyUrl);

        //get empty team identities
        const firstTeamIdentities: IdentityMap = this.getTeamIdentity(doc,
            BattlefyIdentityFetcher.FIRST_TEAM_NAME_SELECTOR,
            BattlefyIdentityFetcher.FIRST_TEAM_VICTORY_SELECTOR,
            BattlefyIdentityFetcher.FIRST_TEAM_DEFEAT_SELECTOR
        );
        const secondTeamIdentities: IdentityMap = this.getTeamIdentity(doc,
            BattlefyIdentityFetcher.SECOND_TEAM_NAME_SELECTOR,
            BattlefyIdentityFetcher.SECOND_TEAM_VICTORY_SELECTOR,
            BattlefyIdentityFetcher.SECOND_TEAM_DEFEAT_SELECTOR
        );

        return [ firstTeamIdentities, secondTeamIdentities ];
    }

    private getTeamIdentity(doc: HTMLDocument, teamNameSelector: string, victorySelector: string, defeatSelector: string): IdentityMap {
        const name: string = this.getTeamName(doc, teamNameSelector);
        const status: boolean = this.getTeamStatus(doc, victorySelector, defeatSelector);
        return new IdentityMap(name, status);
    }

    private getTeamName(doc: HTMLDocument, teamNameSelector: string): string {
        const teamNameElement: Element = doc.querySelector(teamNameSelector);
        if(teamNameElement)
            return teamNameElement.innerHTML.trim();
        else
            throw new Error(IdentityFetcherError.UNABLE_TO_FIND_TEAM_NAME);
    }

    private getTeamStatus(doc: HTMLDocument, victorySelector: string, defeatSelector: string): boolean {
        let status: Element = doc.querySelector(victorySelector);
        if(status)
            return true;
        status = doc.querySelector(defeatSelector);
        if(status)
            return false;
        throw new Error(IdentityFetcherError.UNABLE_TO_FIND_TEAM_STATUS);
    }
}