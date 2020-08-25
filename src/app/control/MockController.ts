import Controller from './Controller';
import User from '../models/User'
import ChampionOverallStats from '../models/stats/ChampionOverallStats'
import Tournament from '../models/Tournament'
import Set from '../models/Set'
import Round from '../models/Round'
import Match from '../models/Match'
import Team from '../models/Team'
import PlayerOverallStats from '../models/stats/PlayerOverallStats'

export default class MockController implements Controller{
    authenticate(username: string, password: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    
    addTournament(name: string, startDate: Date): Promise<void> {
        throw new Error("Method not implemented.");
    }
    endTournament(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getTournaments(): Promise<Tournament[]> {
        throw new Error("Method not implemented.");
    }
    getTournamentChampionStats(id: string): Promise<ChampionOverallStats[]> {
        throw new Error("Method not implemented.");
    }
    addRound(tournamentId: string, roundName: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteRound(tournamentId: string, roundId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getRound(tournamentId: string, roundId: string): Promise<Round> {
        throw new Error("Method not implemented.");
    }
    getRounds(tournamentId: string): Promise<Round[]> {
        throw new Error("Method not implemented.");
    }
    addSet(tournamentId: string, roundId: string, firstTeamId: any): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getSets(tournamentId: string, roundId: string): Promise<Set[]> {
        throw new Error("Method not implemented.");
    }
    deleteSet(tournamentId: string, roundId: string, setId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    fetchMatch(matchId: number, tournamentCode: string): Promise<Match> {
        throw new Error("Method not implemented.");
    }
    addMatch(match: Match, firstTeamId: string, secondTeamId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getMatches(tournamentId: string, roundId?: string, setId?: string): Promise<Match[]> {
        throw new Error("Method not implemented.");
    }
    addTeam(tournamentId: string, name: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getTeams(tournamentId: string): Promise<Team[]> {
        throw new Error("Method not implemented.");
    }
    getPlayerStats(teamId?: string): Promise<PlayerOverallStats[]> {
        throw new Error("Method not implemented.");
    }
    
}