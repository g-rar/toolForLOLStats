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

import IdentityLocation from '../identities/IdentityLocation';

export abstract class Controller{
    //basic authentication
    login: (email: string, password: string) => Promise<User>;
    logout: () => Promise<void>;
    getLoggedUser: () => Promise<User>;

    //tournaments
    addTournament: (name: string, description: string, startDate: Date) => Promise<Tournament>;
    endTournament: (id: string) => Promise<Tournament>;
    getTournament: (id: string) => Promise<Tournament>;
    getTournaments: () => Promise<Tournament[]>;
    getTournamentChampionsStats: (tournamentId: string) => Promise<ChampionOverallStats[]>;
    getTournamentChampionStats: (tournamentId: string, championId: number) => Promise<ChampionOverallStats>;

    //rounds
    addRound: (tournamentId: string, roundName: string) => Promise<Round>;
    deleteRound: (tournamentId: string, roundId: string) => Promise<Round>;
    getRound: (tournamentId: string, roundId: string) => Promise<Round>;
    getRounds: (tournamentId: string) => Promise<Round[]>;

    //sets
    addSet: (tournamentId: string, roundId: string, firstTeamId: string, secondTeamId: string) => Promise<Set>;
    getSets: (tournamentId: string, roundId: string) => Promise<Set[]>;
    deleteSet: (tournamentId: string, roundId: string, setId: string) => Promise<Set>;

    //matches
    fetchMatch: (matchId: number, identityLocation: IdentityLocation) => Promise<Match>;
    addMatch: (tournamentId: string, roundId:string, setId:string, matchId: number) => Promise<Match>;
    getMatches: (tournamentId: string, roundId?: string, setId?: string) => Promise<Match[]>;

    //teams and players
    addTeam: (tournamentId: string, name: string) => Promise<Team>;
    getTeams: (tournamentId: string) => Promise<Team[]>;
    getPlayerStats: (teamId?: string) => Promise<PlayerOverallStats[]>;
}

export enum ControllerError{
    MATCH_NOT_FETCHED = 'ControllerError.MATCH_NOT_FETCHED',
    INCORRECT_MATCH_ID = 'ControllerError.INCORRECT_MATCH_ID'
}