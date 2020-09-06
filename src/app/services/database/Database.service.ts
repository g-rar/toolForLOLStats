import { Tournament, Round, Set, Match, Team, PlayerOverallStats, ChampionOverallStats, } from 'src/app/models';

export abstract class Database{
    addTournament: (name: string, startDate: Date) => Promise<Tournament>;
    endTournament: (id: string) => Promise<Tournament>;
    getTournaments: () => Promise<Tournament[]>;
    getTournamentChampionsStats: (tournamentId: string) => Promise<ChampionOverallStats[]>;
    getTournamentChampionStats: (tournamentId: string, championId: number) => Promise<ChampionOverallStats>;
    addRound: (tournamentId: string, roundName: string) => Promise<Round>;
    deleteRound: (tournamentId: string, roundId: string) => Promise<Round>;
    getRound: (tournamentId: string, roundId: string) => Promise<Round>;
    getRounds: (tournamentId: string) => Promise<Round[]>;
    addSet: (tournamentId: string, roundId: string, firstTeamId: string, secondTeamId: string) => Promise<Set>;
    getSets: (tournamentId: string, roundId: string) => Promise<Set[]>;
    deleteSet: (tournamentId: string, roundId: string, setId: string) => Promise<Set>;
    addMatch: (tournamentId: string, roundId: string, setId: string, match: Match) => Promise<Match>;
    getMatches: (tournamentId: string, roundId?: string, setId?: string) => Promise<Match[]>;
    addTeam: (tournamentId: string, name: string) => Promise<Team>;
    getTeams: (tournamentId: string) => Promise<Team[]>;
    getPlayerStats: (teamId?: string) => Promise<PlayerOverallStats[]>;
}

export enum DatabaseError{

}