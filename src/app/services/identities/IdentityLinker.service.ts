import { Injectable } from '@angular/core';
import ControlModule from '../control.module';
import { Match, PerformanceStats, Player, TeamPerformance } from "../../models";
import IdentityMap from './IdentityMap';

@Injectable({
    providedIn: ControlModule,
})
export default class IdentityLinker{

    public link(match: Match, identities: [IdentityMap, IdentityMap]): Match{
        this.linkTeamPerformance(match.blue, identities);
        this.linkTeamPerformance(match.red, identities);
        return match;
    }

    private linkTeamPlayers(playerPerformances: PerformanceStats[], identitites: IdentityMap): void {
        playerPerformances.forEach(performance => {
            const champion: string = performance.champion.assetId;
            const summonerName: string = identitites.get(champion);
            if(summonerName === undefined)
                throw new Error(IdentityLinkerError.IDENTITIES_COULD_NOT_BE_LINKED);
            performance.player = new Player(summonerName);
        });
    }

    private linkTeamPerformance(teamPerformance: TeamPerformance, identities: [IdentityMap, IdentityMap]): void{
        //linking red identities
        if(teamPerformance.won === identities[0].won)
            this.linkTeamPlayers(teamPerformance.playerStats, identities[0]);
        else if(teamPerformance.won === identities[1].won)
            this.linkTeamPlayers(teamPerformance.playerStats, identities[1]);
        else
            throw new Error(IdentityLinkerError.IDENTITIES_COULD_NOT_BE_LINKED);
    }
}

export enum IdentityLinkerError{
    IDENTITIES_COULD_NOT_BE_LINKED = 'IdentityLinkerError.IDENTITIES_COULD_NOT_BE_LINKED'
}