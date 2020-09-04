import { Injectable } from '@angular/core';
import ControlModule from '../control.module';
import { Controller, ControllerError } from './Controller.service';
import IdentityLocation from '../indentities/IdentityLocation';
import { Authenticator, AuthenticatorError } from '../authentication/Authenticator.service';
import Database from '../database/Database.service';
import ChampionFetcher from '../champions/ChampionFetcher.service';
import { IdentityFetcher } from '../indentities/IdentityFetcher.service';
import MatchFetcher from '../matches/MatchFetcher.service';

import {
    User, 
    Tournament,
    ChampionOverallStats,
    Round,
    Set,
    Match,
    Team,
    PlayerOverallStats,
    Player,
    Champion,
    PerformanceStats,
    TeamPerformance,
    SetResult
} from '../../models/index';
import { async } from 'rxjs';

@Injectable({
    providedIn: ControlModule,
})
export default class DefaultController implements Controller{
    private fetchedMatch: Match;

    constructor(
        private authenticator: Authenticator,
        private championFetcher: ChampionFetcher,
        private database: Database,
        private identityFetcher: IdentityFetcher,
        private matchFetcher: MatchFetcher
    ){ this.fetchedMatch = null; }

    async login(email: string, password: string): Promise<User>{
        return await this.authenticator.login(email, password);
    }

    async logout(): Promise<void> {
        return await this.authenticator.logout();
    }

    async addTournament(name: string, startDate: Date): Promise<void>{
        await this.authenticator.validate();
        throw new Error("Not implemented yet.");
    }

    async endTournament(id: string): Promise<void>{
        await this.authenticator.validate();
        throw new Error("Not implemented yet.");
    }

    async getTournaments(): Promise<Tournament[]>{
        throw new Error("Not implemented yet.");
    }

    async getTournamentChampionsStats(tournamentId: string): Promise<ChampionOverallStats[]>{
        throw new Error("Not implemented yet.");
    }

    async getTournamentChampionStats(tournamentId: string, championId: number): Promise<ChampionOverallStats>{
        throw new Error("Not implemented yet.");
    }

    async addRound(tournamentId: string, roundName: string): Promise<void>{
        await this.authenticator.validate();
        throw new Error("Not implemented yet.");
    }

    async deleteRound(tournamentId: string, roundId: string): Promise<void>{
        await this.authenticator.validate();
        throw new Error("Not implemented yet.");
    }

    async getRound(tournamentId: string, roundId: string): Promise<Round>{
        throw new Error("Not implemented yet.");
    }

    async getRounds(tournamentId: string): Promise<Round[]>{
        throw new Error("Not implemented yet.");
    }

    async addSet(tournamentId: string, roundId: string, firstTeamId: string, secondTeamId: string): Promise<void>{
        await this.authenticator.validate();
        throw new Error("Not implemented yet.");
    }

    async getSets(tournamentId: string, roundId: string): Promise<Set[]>{
        throw new Error("Not implemented yet.");
    }

    async deleteSet(tournamentId: string, roundId: string, setId: string): Promise<void>{
        await this.authenticator.validate();
        throw new Error("Not implemented yet.");
    }

    async fetchMatch(matchId: number, identityLocation: IdentityLocation): Promise<Match>{
        await this.authenticator.validate();
        throw new Error("Not implemented yet.");
    }

    async addMatch(tournamentId: string, roundId: string, setId: string, matchId: number): Promise<void>{
        await this.authenticator.validate();
        throw new Error("Not implemented yet.");
    }

    async getMatches(tournamentId: string, roundId?: string, setId?: string): Promise<Match[]>{
        throw new Error("Not implemented yet.");
    }

    async addTeam(tournamentId: string, name: string): Promise<void>{
        await this.authenticator.validate();
        throw new Error("Not implemented yet.");
    }

    async getTeams(tournamentId: string): Promise<Team[]>{
        throw new Error("Not implemented yet.");
    }
    
    async getPlayerStats(teamId?: string): Promise<PlayerOverallStats[]>{
        throw new Error("Not implemented yet.");
    }
}