import User from '../models/User'
import ChampionOverallStats from '../models/stats/ChampionOverallStats'
import Tournament from '../models/Tournament'
import Set from '../models/Set'
import Round from '../models/Round'
import Match from '../models/Match'
import Team from '../models/Team'
import PlayerOverallStats from '../models/stats/PlayerOverallStats'


export default interface Controller{
    //basic authentication
    authenticate(username: string, password: string): Promise<User>;

    //tournaments
    addTournament(name: string, startDate: Date): Promise<void>;
    endTournament(id: string): Promise<void>;
    getTournaments(): Promise<Tournament[]>;
    getTournamentChampionStats(id: string): Promise<ChampionOverallStats[]>

    //rounds
    addRound(tournamentId: string, roundName: string): Promise<void>;
    deleteRound(tournamentId: string, roundId: string): Promise<void>;
    getRound(tournamentId: string, roundId: string): Promise<Round>;
    getRounds(tournamentId: string): Promise<Round[]>;

    //sets
    addSet(tournamentId: string, roundId: string, firstTeamId): Promise<void>;
    getSets(tournamentId: string, roundId: string): Promise<Set[]>;
    deleteSet(tournamentId: string, roundId: string, setId: string): Promise<void>;

    //matches
    fetchMatch(matchId: number, tournamentCode: string): Promise<Match>;
    addMatch(match: Match, firstTeamId: string, secondTeamId: string): Promise<void>;
    getMatches(tournamentId: string, roundId?: string, setId?: string): Promise<Match[]>;

    //teams and players
    addTeam(tournamentId: string, name: string): Promise<void>;
    getTeams(tournamentId: string): Promise<Team[]>;
    getPlayerStats(teamId?: string): Promise<PlayerOverallStats[]>;
}