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

import IdentityLocation from '../indentities/IdentityLocation';

export default abstract class Controller{
    //basic authentication
    authenticate: (email: string, password: string) => Promise<User>;

    //tournaments
    addTournament: (name: string, startDate: Date) => Promise<void>;
    endTournament: (id: string) => Promise<void>;
    getTournaments: () => Promise<Tournament[]>;
    getTournamentChampionsStats: (tournamentId: string) => Promise<ChampionOverallStats[]>;
    getTournamentChampionStats: (tournamentId: string, championId: number) => Promise<ChampionOverallStats>;

    //rounds
    addRound: (tournamentId: string, roundName: string) => Promise<void>;
    deleteRound: (tournamentId: string, roundId: string) => Promise<void>;
    getRound: (tournamentId: string, roundId: string) => Promise<Round>;
    getRounds: (tournamentId: string) => Promise<Round[]>;

    //sets
    addSet: (tournamentId: string, roundId: string, firstTeamId: string, secondTeamId: string) => Promise<void>;
    getSets: (tournamentId: string, roundId: string) => Promise<Set[]>;
    deleteSet: (tournamentId: string, roundId: string, setId: string) => Promise<void>;

    //matches
    fetchMatch: (matchId: number, identityLocation: IdentityLocation) => Promise<Match>;
    addMatch: (tournamentId: string, roundId:string, setId:string, matchId: number) => Promise<void>;
    getMatches: (tournamentId: string, roundId?: string, setId?: string) => Promise<Match[]>;

    //teams and players
    addTeam: (tournamentId: string, name: string) => Promise<void>;
    getTeams: (tournamentId: string) => Promise<Team[]>;
    getPlayerStats: (teamId?: string) => Promise<PlayerOverallStats[]>;
}