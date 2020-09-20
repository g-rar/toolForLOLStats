import { TestBed } from '@angular/core/testing';
import ControlModule from '../control.module';
import { Controller, ControllerError } from './Controller.service';
import DefaultController from './DefaultController.service';
import { User, Tournament, Team, Round, Set, Match, ChampionOverallStats, PlayerOverallStats } from '../../models/index';
import { Authenticator, AuthenticatorError } from '../authentication/Authenticator.service';
import MockAuthenticator from '../authentication/MockAuthenticator.service';
import { ChampionFetcher, ChampionFetcherError } from '../champions/ChampionFetcher.service';
import MockChampionFetcher from '../champions/MockChampionFetcher.service';
import { Database, DatabaseError } from '../database/Database.service';
import MockDatabase from '../database/MockDatabase.service';
import { IdentityFetcher, IdentityFetcherError } from '../identities/IdentityFetcher.service';
import MockIdentityFetcher from '../identities/MockIdentityFetcher.service';
import { MatchFetcher, MatchFetcherError } from '../matches/MatchFetcher.service';
import MockMatchFetcher from '../matches/MockMatchFetcher.service';
import IdentityLinker from '../identities/IdentityLinker.service';
import IdentityLocation from '../identities/IdentityLocation';

class MockIdentityLocation implements IdentityLocation{}

describe('DefaultController', () => {

    let controller: Controller;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ ControlModule ],
            providers: [
                IdentityLinker, 
                { provide: Authenticator, useClass: MockAuthenticator },
                { provide: ChampionFetcher, useClass: MockChampionFetcher },
                { provide: Database, useClass: MockDatabase },
                { provide: IdentityFetcher, useClass: MockIdentityFetcher },
                { provide: MatchFetcher, useClass: MockMatchFetcher },
                { provide: Controller, useClass: DefaultController }
            ] 
        });
        controller = TestBed.inject(Controller);
        controller.login(MockAuthenticator.CORRECT_USERNAME, MockAuthenticator.CORRECT_PASSWORD);
    });

    it('login(): fails authentication on incorrect credentials', async () => {
        const wrong_email: string = 'wrong@email.com';
        const correct_email: string = MockAuthenticator.CORRECT_USERNAME;
        const wrong_password: string = 'wrong_password';
        
        await expectAsync(controller.login(wrong_email, wrong_password)).toBeRejectedWith(
            new Error(AuthenticatorError.AUTHENTICATION_FAILED)
        );

        await expectAsync(controller.login(correct_email, wrong_password)).toBeRejectedWith(
            new Error(AuthenticatorError.AUTHENTICATION_FAILED)
        );
    });

    it('login(): authenticates properly with the correct credentials', async () => {
        const email: string = MockAuthenticator.CORRECT_USERNAME;
        const password: string = MockAuthenticator.CORRECT_PASSWORD;
        await expectAsync(controller.login(email, password)).toBeResolved();
    });

    it('logout(): logs out if a user is already logged in', async () => {
        const email: string = MockAuthenticator.CORRECT_USERNAME;
        const password: string = MockAuthenticator.CORRECT_PASSWORD;
        await expectAsync(controller.login(email, password)).toBeResolved();
        await expectAsync(controller.logout()).toBeResolved();
    });

    it('logout(): fails if a logout is attempted when a user isn\'t logged in', async () => {
        //user gets logged-in on the beforeEach, so logout must be called an extra time to trigger
        await expectAsync(controller.logout()).toBeResolved();
        await expectAsync(controller.logout()).toBeRejectedWith(
            new Error(AuthenticatorError.NOT_AUTHENTICATED)
        );
    });

    it('logout(): fails when excecuting an operation which requires authorization and the user is unauthorized', async () => {
        const tournanentId: string = 'doesn\'t matter';
        await expectAsync(controller.logout()).toBeResolved();
        await expectAsync(controller.getLoggedUser()).toBeRejectedWith(
            new Error(AuthenticatorError.NOT_AUTHENTICATED)
        );
    });

    it('getLoggedUser(): returns the currently logged user', async () => {
        const email: string = MockAuthenticator.CORRECT_USERNAME;
        const password: string = MockAuthenticator.CORRECT_PASSWORD;
        const user: User = await controller.login(email, password);
        const logged: User = await controller.getLoggedUser();
        expect(user).toEqual(logged);
    });

    it('getLoggedUser(): fails when a user isn\'t logged in', async () => {
        //user gets logged-in on the beforeEach, so logout must be called here
        await controller.logout();
        await expectAsync(controller.getLoggedUser()).toBeRejectedWith(
            new Error(AuthenticatorError.NOT_AUTHENTICATED)
        );
    });

    it('getTournaments(): gets the list of existing tournaments', async () => {
        const tournaments: Tournament[] = await controller.getTournaments();
        expect(tournaments).toBeTruthy();
    });

    it('addTournament(): adds a tournament', async () => {
        const tournamentName: string = "Torneo Meca";
        const tournamentDescription: string = 'https://www.google.com';
        const tournament: Tournament = await controller.addTournament(tournamentName, tournamentDescription, new Date());
        expect(tournament).toBeTruthy();
    });

    it('addTournament(): fails when ending a tournament with an incorrect id', async () => {
        const tournamentId: string = 'incorrect ID';
        await expectAsync(controller.endTournament(tournamentId)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_TOURNAMENT_ID)
        );
    });

    it('getTournament(): gets an existing tournament', async () => {
        const tournament: Tournament = await controller.addTournament('Some Tournament', 'https://www.google.com', new Date());
        const gottenTournament: Tournament = await controller.getTournament(tournament.id);
        expect(tournament).toEqual(gottenTournament);
    });

    it('getTournament(): fails with an incorrect id', async () => {
        const incorrectTournamentId: string = 'wrong id';
        await expectAsync(controller.getTournament(incorrectTournamentId)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_TOURNAMENT_ID)
        );
    });

    it('endTournament(): ends an uncompleted a tournament', async () => {
        let tournament: Tournament = await controller.addTournament('Test Tournament', 'https://www.google.com', new Date());
        
        expect(tournament.completed).toBe(false);
        tournament = await controller.endTournament(tournament.id);
        expect(tournament.completed).toBe(true);
    });

    it('endTournament(): fails when ending a completed tournament', async () => {
        //getting a random tournament
        const tournament: Tournament = await controller.addTournament('Test Tournament', 'https://www.google.com', new Date());

        //it should not have completed
        expect(tournament.completed).toBe(false);

        //ending it twice
        await controller.endTournament(tournament.id);
        await expectAsync(controller.endTournament(tournament.id)).toBeRejectedWith(
            new Error(DatabaseError.TOURNAMENT_ALREADY_ENDED)
        );
    });

    it('getTournamentChampionsStats(): gets all the tournament\'s champions stats', async () => {
        const tournament: Tournament = await controller.addTournament('Test Tournament', 'https://www.google.com', new Date());
        const stats: ChampionOverallStats[] = await controller.getTournamentChampionsStats(tournament.id);
        expect(stats).toBeTruthy();
    });

    it('getTournamentChampionsStats(): fails when getting champion stats with an incorrect tournament id', async () => {
        const tournamentId: string = 'incorrect id';

        await expectAsync(controller.getTournamentChampionsStats(tournamentId)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_TOURNAMENT_ID)
        );
    });
    
    it('getTournamentChampionStats(): gets a single Champion\'s tournament stats', async () => {
        const tournament: Tournament = await controller.addTournament('Test Tournament', 'https://www.google.com', new Date());
        const threshId: number = 412; //riot's thresh ID
        const stats: ChampionOverallStats = await controller.getTournamentChampionStats(tournament.id, threshId);

        expect(stats).toBeTruthy();
    });

    it('getTournamentChampionStats(): fails with an incorrect champion or tournament id', async () => {
        const tournament: Tournament = await controller.addTournament('Test Tournament', 'https://www.google.com', new Date());
        const threshId: number = 412; //riot's thresh ID
        const incorrectTournamentId: string = 'incorrect id';
        const incorrectChampionId: number = -1; //doesn't exist
        
        await expectAsync(controller.getTournamentChampionStats(incorrectTournamentId, threshId)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_TOURNAMENT_ID)
        );
        await expectAsync(controller.getTournamentChampionStats(tournament.id, incorrectChampionId)).toBeRejectedWith(
            new Error(ChampionFetcherError.CHAMPION_NOT_FOUND)
        );
    });

    it('getRound(): gets a single tournament\'s round', async () => {
        const tournament: Tournament = await controller.addTournament('Test Tournament', 'https://www.google.com', new Date());
        let round: Round = await controller.addRound(tournament.id, 'Test Round');
        round = await controller.getRound(tournament.id, round.id);
        expect(round).toBeTruthy();
    });

    it('getRound(): fails with an incorrect tournament or round id', async () => {
        const tournament: Tournament = await controller.addTournament('Test Tournament', 'https://www.google.com', new Date());
        const round: Round = await controller.addRound(tournament.id, 'Test Round');
        const incorrectTournamentId: string = 'incorrect id';
        const incorrectRoundId: string = 'incorrect id';

        await expectAsync(controller.getRound(incorrectTournamentId, round.id)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_TOURNAMENT_ID)
        );
        await expectAsync(controller.getRound(tournament.id, incorrectRoundId)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_ROUND_ID)
        );
    });

    it('addRound(): adds a new round to a tournament', async () => {
        const tournament: Tournament = await controller.addTournament('Test Tournament', 'https://www.google.com', new Date());
        const round: Round = await controller.addRound(tournament.id, 'Test Round');

        expect(round).toBeTruthy();
    });

    it('addRound(): fails with an incorrect tournament id', async () => {
        const roundName: string = "Test Round";
        const incorrectTournamentId: string = 'incorrect id';

        await expectAsync(controller.addRound(incorrectTournamentId, roundName)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_TOURNAMENT_ID)
        );
    });

    it('getRounds(): gets a tournament\'s rounds', async () => {
        const tournament: Tournament = await controller.addTournament('Test Tournament', 'https://www.google.com', new Date());
        const rounds: Round[] = await controller.getRounds(tournament.id);
        expect(rounds).toBeTruthy();
    });

    it('getRounds(): fails with an incorrect tournament id', async () => {
        const tournamentId: string = 'incorrect id';
        await expectAsync(controller.getRounds(tournamentId)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_TOURNAMENT_ID)
        );
    });

    it('deleteRound(): deletes a round', async () => {
        const tournament: Tournament = await controller.addTournament('Test Tournament', 'https://www.google.com', new Date());
        const round: Round = await controller.addRound(tournament.id, 'Test Round');
        const deleted: Round = await controller.deleteRound(tournament.id, round.id);
        
        expect(deleted.id).toBe(round.id);
    });

    it('deleteRound(): fails with an incorrect tournament or round id', async () => {
        const tournament: Tournament = await controller.addTournament('Test Tournament', 'https://www.google.com', new Date());
        const round: Round = await controller.addRound(tournament.id, 'Test Round');
        const incorrectTournamentId: string = 'incorrect id';
        const incorrectRoundId: string = 'incorrect id';
        
        await expectAsync(controller.deleteRound(incorrectTournamentId, round.id)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_TOURNAMENT_ID)
        );
        await expectAsync(controller.deleteRound(tournament.id, incorrectRoundId)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_ROUND_ID)
        );
    });

    it('addSet(): adds a new set to a round', async () => {
        const tournament: Tournament = await controller.addTournament('Test Tournament', 'https://www.google.com', new Date());
        const round: Round = await controller.addRound(tournament.id, 'Test Round');
        const teams: Team[] = [
            await controller.addTeam(tournament.id, 'Team 0'),
            await controller.addTeam(tournament.id, 'Team 1')
        ];
        
        const set: Set = await controller.addSet(tournament.id, round.id, teams[0].id, teams[1].id);
        
        expect(set).toBeTruthy();
    });

    it('addSet(): fails with an incorrect tournament, round or either team ids', async () => {
        const tournament: Tournament = await controller.addTournament('Test Tournament', 'https://www.google.com', new Date());
        const round: Round = await controller.addRound(tournament.id, 'Test Round');
        const teams: Team[] = [
            await controller.addTeam(tournament.id, 'Team 0'),
            await controller.addTeam(tournament.id, 'Team 1')
        ];
        const incorrectTournamentId: string = 'incorrect id';
        const incorrectRoundId: string = 'incorrect id';
        const incorrectTeamId: string = 'incorrect id';

        await expectAsync(controller.addSet(incorrectTournamentId, round.id, teams[0].id, teams[1].id)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_TOURNAMENT_ID)
        );
        await expectAsync(controller.addSet(tournament.id, incorrectRoundId, teams[0].id, teams[1].id)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_ROUND_ID)
        );
        await expectAsync(controller.addSet(tournament.id, round.id, incorrectTeamId, teams[1].id)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_TEAM_ID)
        );
        await expectAsync(controller.addSet(tournament.id, round.id, teams[0].id, incorrectTeamId)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_TEAM_ID)
        );
    });

    it('getSets(): fails with an incorrect tournament or round id', async () => {
        const tournament: Tournament = await controller.addTournament('Test Tournament', 'https://www.google.com', new Date());
        const round: Round = await controller.addRound(tournament.id, 'Test Round');
        const incorrectTournamentId: string = 'incorrect id';
        const incorrectRoundId: string = 'incorrect id';

        await expectAsync(controller.getSets(incorrectTournamentId, round.id)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_TOURNAMENT_ID)
        );
        await expectAsync(controller.getSets(tournament.id, incorrectRoundId)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_ROUND_ID)
        );
    });
    
    it('getSets(): gets a round\'s sets', async () => {
        const tournament: Tournament = await controller.addTournament('Test Tournament', 'https://www.google.com', new Date());
        const round: Round = await controller.addRound(tournament.id, 'Test Round');
        const sets: Set[] = await controller.getSets(tournament.id, round.id);
        expect(sets).toBeTruthy();
    });

    it('deleteSet(): fails with an incorrect tournament, round or set id', async () => {
        const tournament: Tournament = await controller.addTournament('Test Tournament', 'https://www.google.com', new Date());
        const round: Round = await controller.addRound(tournament.id, 'Test Round');
        const teams: Team[] = await controller.getTeams(tournament.id);
        const set: Set = await controller.addSet(tournament.id, round.id, teams[0].id, teams[1].id);
        const incorrectTournamentId: string = 'incorrect id';
        const incorrectRoundId: string = 'incorrect id';
        const incorrectSetId: string = 'incorrect id';

        await expectAsync(controller.deleteSet(incorrectTournamentId, round.id, set.id)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_TOURNAMENT_ID)
        );
        await expectAsync(controller.deleteSet(tournament.id, incorrectRoundId, set.id)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_ROUND_ID)
        );
        await expectAsync(controller.deleteSet(tournament.id, round.id, incorrectSetId)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_SET_ID)
        );
    });
    
    it('deleteSet(): deletes a set', async () => {
        const tournament: Tournament = (await controller.getTournaments())[0];
        const round: Round = (await controller.getRounds(tournament.id))[0];
        const teams: Team[] = [
            await controller.addTeam(tournament.id, 'Team 0'),
            await controller.addTeam(tournament.id, 'Team 1')
        ];

        const set: Set = await controller.addSet(tournament.id, round.id, teams[0].id, teams[1].id);
        const deleted: Set = await controller.deleteSet(tournament.id, round.id, set.id);
        
        expect(set.id).toBe(deleted.id);
    });

    it('fetchMatch(): fails with an incorrect match id', async () => {
        const incorrectMatchId: number = MockMatchFetcher.INCORRECT_ID;
        await expectAsync(controller.fetchMatch(incorrectMatchId, new MockIdentityLocation())).toBeRejectedWith(
            new Error(MatchFetcherError.MATCH_NOT_FOUND)
        );
    });

    it('fetchMatch(): fetches a complete match with identities', async () => {
        const matchId: number = 0 //doesn't matter
        const match: Match = await controller.fetchMatch(matchId, new MockIdentityLocation());
        expect(match).toBeTruthy();
        match.blue.playerStats.forEach(player => { expect(player).toBeTruthy(); });
        match.red.playerStats.forEach(player => { expect(player).toBeTruthy(); });
    });

    it('addMatch(): fails with an incorrect tournament, round or set ids', async () => {
        const tournament: Tournament = await controller.addTournament('Test Tournament', 'https://www.google.com', new Date());
        const round: Round = await controller.addRound(tournament.id, 'Test Round');
        const teams: Team[] = [
            await controller.addTeam(tournament.id, 'Team 0'),
            await controller.addTeam(tournament.id, 'Team 1')
        ];
        const set: Set = await controller.addSet(tournament.id, round.id, teams[0].id, teams[1].id);
        const match: Match = await controller.fetchMatch(0, new MockIdentityLocation());
        const incorrectTournamentId: string = 'incorrect id';
        const incorrectRoundId: string = 'incorrect id';
        const incorrectSetId: string = 'incorrect id';

        await expectAsync(controller.addMatch(incorrectTournamentId, round.id, set.id, match.id)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_TOURNAMENT_ID)
        );
        await expectAsync(controller.addMatch(tournament.id, incorrectRoundId, set.id, match.id)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_ROUND_ID)
        );
        await expectAsync(controller.addMatch(tournament.id, round.id, incorrectSetId, match.id)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_SET_ID)
        );
    });

    it('addMatch(): fails when adding a match prior to fetching', async () => {
        const tournamentId: string = 'doesn\'t matter';
        const roundId: string = 'doesn\'t matter';
        const setId: string = 'doesn\'t matter';
        const matchId: number = 0;

        await expectAsync(controller.addMatch(tournamentId, roundId, setId, matchId)).toBeRejectedWith(
            new Error(ControllerError.MATCH_NOT_FETCHED)
        );
    });

    it('addMatch(): fails when adding a match with an id that doesn\'t match the fetched id', async () => {
        const tournamentId: string = 'doesn\'t matter';
        const roundId: string = 'doesn\'t matter';
        const setId: string = 'doesn\'t matter';
        const matchId: number = 0;
        const incorrectMatchId: number = 1;

        await controller.fetchMatch(matchId, new MockIdentityLocation());
        await expectAsync(controller.addMatch(tournamentId, roundId, setId, incorrectMatchId)).toBeRejectedWith(
            new Error(ControllerError.INCORRECT_MATCH_ID)
        );
    });

    it('getMatches(): fails when called with an incorrect tournament, round or set IDs', async () => {
        const tournament: Tournament = await controller.addTournament('Test Tournament', 'https://www.google.com', new Date());
        const round: Round = await controller.addRound(tournament.id, 'Test Round');
        const incorrectTournamentId: string = 'doesn\'t matter';
        const incorrectRoundId: string = 'doesn\'t matter';
        const incorrectSetId: string = 'doesn\'t matter';

        await expectAsync(controller.getMatches(incorrectTournamentId)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_TOURNAMENT_ID)
        );
        await expectAsync(controller.getMatches(tournament.id, incorrectRoundId)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_ROUND_ID)
        );
        await expectAsync(controller.getMatches(tournament.id, round.id, incorrectSetId)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_SET_ID)
        );
    });

    it('getMatches(): gets a list of matches for a tournament, round or set', async () => {
        const tournament: Tournament = await controller.addTournament('Test Tournament', 'https://www.google.com', new Date());
        const round: Round = await controller.addRound(tournament.id, 'Test Round');
        const teams: Team[] = [
            await controller.addTeam(tournament.id, 'Team 0'),
            await controller.addTeam(tournament.id, 'Team 1')
        ];
        const set: Set = await controller.addSet(tournament.id, round.id, teams[0].id, teams[1].id);

        await expectAsync(controller.getMatches(tournament.id)).toBeResolved();
        await expectAsync(controller.getMatches(tournament.id, round.id)).toBeResolved();
        await expectAsync(controller.getMatches(tournament.id, round.id, set.id)).toBeResolved();
    });

    it('getTeams(): gets a list of teams in a tournament', async () => {
        const tournament: Tournament = await controller.addTournament('Test Tournament', 'https://www.google.com', new Date());
        const teams: Team[] = await controller.getTeams(tournament.id);
        expect(teams).toBeTruthy();
    });

    it('getTeams(): fails with an incorrect tournament id', async () => {
        const incorrectTournamentId: string = 'incorrect id'
        await expectAsync(controller.getTeams(incorrectTournamentId)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_TOURNAMENT_ID)
        );
    });

    it('addTeam(): fails with an incoorrect tournament id', async () => {
        const incorrectTournamentId: string = 'incorrect ID';
        const teamName: string = 'Test Team';
        await expectAsync(controller.addTeam(incorrectTournamentId, teamName)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_TOURNAMENT_ID)
        );
    });

    it('addTeam(): adds a new team to a tournament', async () => {
        const tournament: Tournament = await controller.addTournament('Test Tournament', 'https://www.google.com', new Date());
        const team: Team = await controller.addTeam(tournament.id, 'Test Team');
        
        expect(team).toBeTruthy();
    });

    it('getPlayerStats(): fails with an incorrect team id', async () => {
        const incorrectTeamId: string = 'incorrect id';

        await expectAsync(controller.getPlayerStats(incorrectTeamId)).toBeRejectedWith(
            new Error(DatabaseError.UNKNOWN_TEAM_ID)
        );
    });

    it('getPlayerStats(): gets a list of player stats in general or for a team', async () => {
        const tournament: Tournament = await controller.addTournament('Test Tournament', 'https://www.google.com', new Date());
        const team: Team = await controller.addTeam(tournament.id, 'Test Team');

        await expectAsync(controller.getPlayerStats()).toBeResolved();
        await expectAsync(controller.getPlayerStats(team.id)).toBeResolved();   
    });
});