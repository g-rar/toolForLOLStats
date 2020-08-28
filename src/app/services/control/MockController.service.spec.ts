import MockController from './MockController.service';
import IdentityLocation from '../indentities/IdentityLocation'
import { User, Tournament, Team, Round, Set, Match, ChampionOverallStats, PlayerOverallStats } from '../../models/index';

describe('MockController', () => {
    let controller: MockController;

    const STUB_USERNAME: string = "username doesn't matter";
    const STUB_PASSWORD: string = "password doesn't matter";
    const STUB_TOURNAMENT_ID: string = "tournament id doesn't matter";
    const STUB_ROUND_ID: string = "round id doesn't matter";
    const STUB_SET_ID: string = "set id doesn't matter";
    const STUB_TEAM_ID: string = "team id doesn't matter";
    const STUB_MATCH_ID: number = -1;
    const STUB_IDENTITY_LOCATION: IdentityLocation = null;

    beforeEach(() => {
        controller = new MockController();
    });

    it('should be created', () => {
        expect(controller).toBeTruthy();
    });

    it('should authenticate any user', async () => {
        const user: User = await controller.authenticate(STUB_USERNAME, STUB_PASSWORD);
        
        expect(user).toBeTruthy();
    });

    it('should return the same email on the user', async () => {
        const email: string = "ajoscram@gmail.com";
        const user: User = await controller.authenticate(email, STUB_PASSWORD);

        expect(user.email).toBe(email);
    });

    it('should get a non-empty list of existing tournaments', async () => {
        const tournaments: Tournament[] = await controller.getTournaments();
        expect(tournaments).toBeTruthy();
        expect(tournaments.length).toBeGreaterThan(0);
    });

    it('should add a tournament', async () => {
        const tournamentName: string = "Torneo Meca";
        
        const numberOfTournametsPreInsertion: number = (await controller.getTournaments()).length;
        await controller.addTournament(tournamentName, new Date());
        const numberOfTournametsPostInsertion: number = (await controller.getTournaments()).length;

        //there should be one more tournament after inserting
        expect(numberOfTournametsPreInsertion + 1).toBe(numberOfTournametsPostInsertion);
    });

    it('should end an uncompleted a tournament', async () => {
        //getting a random tournament
        let tournaments: Tournament[] = await controller.getTournaments();
        let tournament: Tournament = tournaments[0];

        //it should not have completed
        expect(tournament.completed).toBe(false);

        //ending it
        await controller.endTournament(tournament.id);
        
        //reobtaning the tournament
        tournaments = await controller.getTournaments();
        for(let i = 0; i < tournaments.length; i++){
            if(tournaments[i].id === tournament.id){
                tournament = tournaments[i];
                break;
            }
        }

        //it should have completed
        expect(tournament.completed).toBe(true);
    });

    it('should get all the tournament\'s champions stats', async () => {
        const stats: ChampionOverallStats[] = await controller.getTournamentChampionsStats(STUB_TOURNAMENT_ID);

        expect(stats).toBeTruthy();
        expect(stats.length).toBeGreaterThan(0);
    });

    it('should get Thresh\'s tournament champion stats', async () => {
        //riot's thresh ID
        const threshId: number = 412;

        //getting the champions stats
        const stats: ChampionOverallStats = await controller.getTournamentChampionStats(STUB_TOURNAMENT_ID, threshId);

        expect(stats).toBeTruthy();
    });

    it('should get random tournament champion stats on every call', async () => {
        //riot's thresh ID
        const threshId: number = 412;
        
        //getting the champions stats twice, they are randomized so should be different
        const stats1: ChampionOverallStats = await controller.getTournamentChampionStats(STUB_TOURNAMENT_ID, threshId);
        const stats2: ChampionOverallStats = await controller.getTournamentChampionStats(STUB_TOURNAMENT_ID, threshId);
        
        expect(stats1).not.toEqual(stats2);
    });

    it('should get a non-empty list of teams in a tournament', async () => {
        const teams: Team[] = await controller.getTeams(STUB_TOURNAMENT_ID);

        expect(teams).toBeTruthy();
        expect(teams.length).toBeGreaterThan(0);
    });

    it('should add a new team to a tournament', async () => {
        const teamName: string = "Los Bandidos";

        const numberOfTeamsPreInsertion: number = (await controller.getTeams(STUB_TOURNAMENT_ID)).length;
        await controller.addTeam(STUB_TOURNAMENT_ID, teamName);
        const numberOfTeamsPostInsertion: number = (await controller.getTeams(STUB_TOURNAMENT_ID)).length;

        //there should be one more team after inserting
        expect(numberOfTeamsPreInsertion + 1).toBe(numberOfTeamsPostInsertion); 
    });

    it('should add a round', async () => {
        const roundName: string = "Test Round";

        const numberOfRoundsPreInsertion: number = (await controller.getRounds(STUB_TOURNAMENT_ID)).length;
        await controller.addRound(STUB_TOURNAMENT_ID, roundName);
        const numberOfRoundsPostInsertion: number = (await controller.getRounds(STUB_TOURNAMENT_ID)).length;

        //there should be one more round after inserting
        expect(numberOfRoundsPreInsertion + 1).toBe(numberOfRoundsPostInsertion);
    });

    it('should get a tournament\'s rounds', async () => {
        const rounds: Round[] = await controller.getRounds(STUB_TOURNAMENT_ID);

        expect(rounds).toBeTruthy();
        expect(rounds.length).toBeGreaterThan(0);
    });

    it('should get a single tournament\'s round', async () => {
        const roundId: string = (await controller.getRounds(STUB_TOURNAMENT_ID))[0].id;
        const round: Round = await controller.getRound(STUB_TOURNAMENT_ID, roundId);

        expect(round).toBeTruthy();
    });

    it('should delete a round', async () => {
        //getting the number of rounds predeletion
        let rounds: Round[] = await controller.getRounds(STUB_TOURNAMENT_ID);
        const numberOfRoundsPreDeletion: number = rounds.length;
        
        //deleting the round
        const roundId = rounds[0].id;
        await controller.deleteRound(STUB_TOURNAMENT_ID, roundId);
        rounds = await controller.getRounds(STUB_TOURNAMENT_ID);

        //exactly one round should be deleted
        expect(rounds.length + 1).toBe(numberOfRoundsPreDeletion);

    });

    it('should get a non-empty list of sets from a tournament\'s round', async () => {
        const sets: Set[] = await controller.getSets(STUB_TOURNAMENT_ID, STUB_ROUND_ID);
        
        expect(sets).toBeTruthy();
        expect(sets.length).toBeGreaterThan(0);
    });

    it('should add a set to a round in a tournament', async () => {
        // every set needs two opposing teams
        const teams: Team[] = await controller.getTeams(STUB_TOURNAMENT_ID);
        const teamId1: string = teams[0].id;
        const teamId2: string = teams[1].id;

        const numberOfSetsPreInsertion: number = (await controller.getSets(STUB_TOURNAMENT_ID, STUB_ROUND_ID)).length;
        await controller.addSet(STUB_TOURNAMENT_ID, STUB_ROUND_ID, teamId1, teamId2);
        const numberOfSetsPostInsertion: number = (await controller.getSets(STUB_TOURNAMENT_ID, STUB_ROUND_ID)).length;

        //there should be one more set after inserting
        expect(numberOfSetsPreInsertion + 1).toBe(numberOfSetsPostInsertion);
    });

    it('should delete a set', async () => {
        const setId: string = (await controller.getSets(STUB_TOURNAMENT_ID, STUB_ROUND_ID))[0].id;

        const numberOfSetsPreDeletion: number = (await controller.getSets(STUB_TOURNAMENT_ID, STUB_ROUND_ID)).length;
        await controller.deleteSet(STUB_TOURNAMENT_ID, STUB_ROUND_ID, setId);
        const numberOfSetsPostDeletion: number = (await controller.getSets(STUB_TOURNAMENT_ID, STUB_ROUND_ID)).length;

        //there should be one less set after deleting
        expect(numberOfSetsPreDeletion).toBe(numberOfSetsPostDeletion + 1);
    });

    it('should get a non-empty list of matches', async () => {
        const matches: Match[] = await controller.getMatches(STUB_TOURNAMENT_ID, STUB_ROUND_ID, STUB_SET_ID);

        expect(matches).toBeTruthy();
        expect(matches.length).toBeGreaterThan(0);
    });

    it('should fetch a randomly generated match', async () => {
        const match: Match = await controller.fetchMatch(STUB_MATCH_ID, STUB_IDENTITY_LOCATION);
        
        expect(match).toBeTruthy();
    });
    
    it('should fail when adding a match if no match has been fetched before', async () => {
        await expectAsync(controller.addMatch(STUB_TOURNAMENT_ID, STUB_ROUND_ID, STUB_SET_ID, STUB_MATCH_ID)).toBeRejectedWith(
            new Error("Must fetch a match first!")
        );
    });

    it('should fail when adding a match if the previously fetched match does not match the ID passed whn adding', async () => {
        //IMPORTANT: the STUB_MATCH_ID passed into fetchMatch is NEVER the actual
        //id assigned to the match internally because MockTournament assigns it one.
        await controller.fetchMatch(STUB_MATCH_ID, STUB_IDENTITY_LOCATION);
        //since the fetched match's id is NOT STUB_MATCH_ID then this will fail
        await expectAsync(controller.addMatch(STUB_TOURNAMENT_ID, STUB_ROUND_ID, STUB_SET_ID, STUB_MATCH_ID)).toBeRejectedWith(
            new Error("The matchId must match the most recently fetched match id!")
        );
    });

    it('should add a match after fetching with the correct id', async () => {
        //IMPORTANT: the STUB_MATCH_ID passed into fetchMatch is NEVER the actual
        //id assigned to the match internally because MockController assigns it one.
        //It must be obtained after fetching.
        const matchId: number = (await controller.fetchMatch(STUB_MATCH_ID, STUB_IDENTITY_LOCATION)).id;
        
        const numberOfMatchesPreInsertion: number = (await controller.getMatches(STUB_TOURNAMENT_ID, STUB_ROUND_ID, STUB_SET_ID)).length;
        await expect(controller.addMatch(STUB_TOURNAMENT_ID, STUB_ROUND_ID, STUB_SET_ID, matchId));
        const numberOfMatchesPostInsertion: number = (await controller.getMatches(STUB_TOURNAMENT_ID, STUB_ROUND_ID, STUB_SET_ID)).length;
        
        //there should be one more match after inserting
        expect(numberOfMatchesPreInsertion + 1).toBe(numberOfMatchesPostInsertion);
    });

    it('should get the player\'s overall stats', async () => {
        const stats: PlayerOverallStats[] = await controller.getPlayerStats(STUB_TEAM_ID);
        
        expect(stats).toBeTruthy();
        expect(stats.length).toBeGreaterThan(0);
    });
});