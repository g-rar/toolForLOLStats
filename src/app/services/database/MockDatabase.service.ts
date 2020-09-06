import { Injectable } from '@angular/core';
import ControlModule from '../control.module';
import { Database } from './Database.service';
import { Tournament, Round, Set, Match, PlayerOverallStats, ChampionOverallStats, Team } from 'src/app/models';

@Injectable({
    providedIn: ControlModule
})
export default class MockDatabase implements Database {
    async addTournament(name: string, startDate: Date): Promise<Tournament>{
        throw new Error('Not implemented yet');
    }

    async endTournament(id: string): Promise<Tournament>{
        throw new Error('Not implemented yet');
    }

    async getTournaments(): Promise<Tournament[]>{
        throw new Error('Not implemented yet');
    }

    async getTournamentChampionsStats(tournamentId: string): Promise<ChampionOverallStats[]>{
        throw new Error('Not implemented yet');
    }
    
    async getTournamentChampionStats(tournamentId: string, championId: number): Promise<ChampionOverallStats>{
        throw new Error('Not implemented yet');
    }

    async addRound(tournamentId: string, roundName: string): Promise<Round>{
        throw new Error('Not implemented yet');
    }

    async deleteRound(tournamentId: string, roundId: string): Promise<Round>{
        throw new Error('Not implemented yet');
    }

    async getRound(tournamentId: string, roundId: string): Promise<Round>{
        throw new Error('Not implemented yet');
    }

    async getRounds(tournamentId: string): Promise<Round[]>{
        throw new Error('Not implemented yet');
    }

    async addSet(tournamentId: string, roundId: string, firstTeamId: string, secondTeamId: string): Promise<Set>{
        throw new Error('Not implemented yet');
    }

    async getSets(tournamentId: string, roundId: string): Promise<Set[]>{
        throw new Error('Not implemented yet');
    }

    async deleteSet(tournamentId: string, roundId: string, setId: string): Promise<Set>{
        throw new Error('Not implemented yet');
    }

    async addMatch(tournamentId: string, roundId: string, setId: string, match: Match): Promise<Match>{
        throw new Error('Not implemented yet');
    }

    async getMatches(tournamentId: string, roundId?: string, setId?: string): Promise<Match[]>{
        throw new Error('Not implemented yet');
    }

    async addTeam(tournamentId: string, name: string): Promise<Team>{
        throw new Error('Not implemented yet');
    }

    async getTeams(tournamentId: string): Promise<Team[]>{
        throw new Error('Not implemented yet');
    }

    async getPlayerStats(teamId?: string): Promise<PlayerOverallStats[]>{
        throw new Error('Not implemented yet');
    }
}