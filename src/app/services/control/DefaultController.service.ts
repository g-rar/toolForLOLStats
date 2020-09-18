import { Injectable } from '@angular/core';
import ControlModule from '../control.module';
import { Controller, ControllerError } from './Controller.service';
import { Authenticator } from '../authentication/Authenticator.service';
import { Database } from '../database/Database.service';
import { MatchFetcher } from '../matches/MatchFetcher.service';
import { IdentityFetcher } from '../identities/IdentityFetcher.service';
import IdentityLocation from '../identities/IdentityLocation';
import IdentityMap from '../identities/IdentityMap';
import IdentityLinker from '../identities/IdentityLinker.service';

import {
    User, 
    Tournament,
    ChampionOverallStats,
    Round,
    Set,
    Match,
    Team,
    PlayerOverallStats
} from '../../models/index';

@Injectable({
    providedIn: ControlModule,
})
export default class DefaultController implements Controller{
    private fetchedMatch: Match;

    constructor(
        private authenticator: Authenticator,
        private database: Database,
        private identityFetcher: IdentityFetcher,
        private identityLinker: IdentityLinker,
        private matchFetcher: MatchFetcher
    ){ this.fetchedMatch = null; }

    async login(email: string, password: string): Promise<User>{
        return await this.authenticator.login(email, password);
    }

    async logout(): Promise<void> {
        return await this.authenticator.logout();
    }

    async getLoggedUser(): Promise<User>{
        return await this.authenticator.getLoggedUser();
    }

    async addTournament(name: string, startDate: Date): Promise<Tournament>{
        await this.authenticator.validate();
        return await this.database.addTournament(name, startDate);
    }

    async endTournament(id: string): Promise<Tournament>{
        await this.authenticator.validate();
        return await this.database.endTournament(id);
    }

    async getTournament(id: string): Promise<Tournament>{
        return await this.database.getTournament(id);
    }

    async getTournaments(): Promise<Tournament[]>{
        return await this.database.getTournaments();
    }

    async getTournamentChampionsStats(tournamentId: string): Promise<ChampionOverallStats[]>{
        return await this.database.getTournamentChampionsStats(tournamentId);
    }

    async getTournamentChampionStats(tournamentId: string, championId: number): Promise<ChampionOverallStats>{
        return await this.database.getTournamentChampionStats(tournamentId, championId);
    }

    async addRound(tournamentId: string, roundName: string): Promise<Round>{
        await this.authenticator.validate();
        return await this.database.addRound(tournamentId, roundName);
    }

    async deleteRound(tournamentId: string, roundId: string): Promise<Round>{
        await this.authenticator.validate();
        return await this.database.deleteRound(tournamentId, roundId);
    }

    async getRound(tournamentId: string, roundId: string): Promise<Round>{
        return await this.database.getRound(tournamentId, roundId);
    }

    async getRounds(tournamentId: string): Promise<Round[]>{
        return await this.database.getRounds(tournamentId);
    }

    async addSet(tournamentId: string, roundId: string, firstTeamId: string, secondTeamId: string): Promise<Set>{
        await this.authenticator.validate();
        return await this.database.addSet(tournamentId, roundId, firstTeamId, secondTeamId);
    }

    async getSets(tournamentId: string, roundId: string): Promise<Set[]>{
        return await this.database.getSets(tournamentId, roundId);
    }

    async deleteSet(tournamentId: string, roundId: string, setId: string): Promise<Set>{
        await this.authenticator.validate();
        return await this.database.deleteSet(tournamentId, roundId, setId);
    }

    async fetchMatch(matchId: number, identityLocation: IdentityLocation): Promise<Match>{
        await this.authenticator.validate();
        const identities: [IdentityMap, IdentityMap] = await this.identityFetcher.fetch(identityLocation);
        const matchWithoutIdentities: Match = await this.matchFetcher.fetch(matchId);
        this.fetchedMatch = this.identityLinker.link(matchWithoutIdentities, identities);
        return this.fetchedMatch.clone(); //returning a clone to avoid tampering of the original match
    }

    async addMatch(tournamentId: string, roundId: string, setId: string, matchId: number): Promise<Match>{
        await this.authenticator.validate();
        if(this.fetchedMatch === null)
            throw new Error(ControllerError.MATCH_NOT_FETCHED);
        else if(this.fetchedMatch.id != matchId)
            throw new Error(ControllerError.INCORRECT_MATCH_ID);
        else{
            const match: Match = await this.database.addMatch(tournamentId, roundId, setId, this.fetchedMatch);
            this.fetchedMatch = null;
            return match;
        }
    }

    async getMatches(tournamentId: string, roundId?: string, setId?: string): Promise<Match[]>{
        return await this.database.getMatches(tournamentId, roundId, setId);
    }

    async addTeam(tournamentId: string, name: string): Promise<Team>{
        await this.authenticator.validate();
        return await this.database.addTeam(tournamentId, name);
    }

    async getTeams(tournamentId: string): Promise<Team[]>{
        return await this.database.getTeams(tournamentId);
    }
    
    async getPlayerStats(teamId?: string): Promise<PlayerOverallStats[]>{
        return await this.database.getPlayerStats(teamId);
    }
}