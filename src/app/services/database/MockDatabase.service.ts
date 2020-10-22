import { Injectable } from '@angular/core';
import ControlModule from '../control.module';
import { Database, DatabaseError } from './Database.service';
import { 
    Tournament,
    Round, 
    Set,
    SetResult,
    Match,
    PlayerOverallStats,
    ChampionOverallStats,
    Team,
    Player,
    Champion
} from 'src/app/models';
import { ChampionFetcher } from '../champions/ChampionFetcher.service';

@Injectable({
    providedIn: ControlModule
})
export default class MockDatabase implements Database {

    private championsPromise: Promise<void>;
    private champions: Champion[];
    private ids: number = 0;
    private players: Player[];
    private teams: Team[];
    private matches: Match[];
    private tournaments: Tournament[];
    private rounds: Round[];
    private sets: Set[];

    constructor(private championFetcher: ChampionFetcher){

        //champions
        this.championsPromise = this.fetchChampions();

        //players
        this.players = [];
        for(let i = 0; i < 20; i++)
            this.players.push(new Player(i + '', 'Player ' + i));

        //teams
        this.teams = [
            new Team('0', 'Los patitos', [ this.players[0], this.players[4], this.players[8], this.players[12], this.players[16] ]),
            new Team('1', 'Mancos Gaming', [ this.players[1], this.players[5], this.players[9], this.players[13], this.players[17] ]),
            new Team('2', 'DevsLivesMatter', [ this.players[2], this.players[6], this.players[10], this.players[14], this.players[18] ]),
            new Team('3', 'Ecks Dee Players', [ this.players[3], this.players[7], this.players[11], this.players[15], this.players[19] ])
        ];

        //matches
        this.matches = [];

        //Sets
        this.sets = [
            this.generateSet(this.teams[0], this.teams[1], [ ]),
            this.generateSet(this.teams[2], this.teams[3], [ ]),
        ];

        //rounds
        const groupsID: string = ''+this.ids++;
        const semifinalsID: string = ''+this.ids++;
        const finalsID: string = ''+this.ids++;
        this.rounds = [ 
            new Round(groupsID, 'Groups', this.sets),
            new Round(semifinalsID, 'Semifinals', this.sets),
            new Round(finalsID, 'Finals', this.sets)
        ];

        //tournaments
        this.tournaments = [
            new Tournament(''+this.ids++, 'Current Dummy Tournament', 'https://www.google.com', new Date(), null, [ groupsID, semifinalsID, finalsID]),
            new Tournament(''+this.ids++, 'Finished Tournament', 'https://www.google.com', new Date(new Date().setHours(1)-100000), new Date(new Date().setHours(2) - 100000), [ groupsID, semifinalsID, finalsID]),
            new Tournament(''+this.ids++, 'Future Dummy Tournament', 'https://www.google.com', new Date(new Date().setHours(23)+1000000), null, [ groupsID, semifinalsID, finalsID]),
        ];
    }

    private async fetchChampions(): Promise<void>{
        this.champions = [
            await this.championFetcher.fetch('Aatrox'),
            await this.championFetcher.fetch('Ezreal'),
            await this.championFetcher.fetch('Yuumi'),
            await this.championFetcher.fetch('Gragas'),
            await this.championFetcher.fetch('Chogath'),
            await this.championFetcher.fetch('Thresh'),
            await this.championFetcher.fetch('KogMaw'),
            await this.championFetcher.fetch('Syndra'),
            await this.championFetcher.fetch('Vi'),
        ];
    }

    private random(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    private generateSet(winner: Team, loser: Team, matches: Match[]): Set{
        const matchIds: number[] = [];
        matches.forEach(match => { matchIds.push(match.id) });
        return new Set(
            ''+this.ids++, //set id
            new SetResult(winner.id, winner.name, 2),//first team result
            new SetResult(loser.id, loser.name, 0),//second team result
            matchIds
        );
    }

    private generateChampionOverallStats(champion: Champion){
        return new ChampionOverallStats(
            this.random(0, 10), //deaths
            this.random(0, 10), //assists
            this.random(5000, 10000), //damage dealt to champions
            this.random(2000, 7000), //damage dealt to objectives
            this.random(5000, 10000), //damage received
            this.random(12000, 250000), //gold
            this.random(0, 10), //kills
            this.random(20, 300), //minions
            this.random(15, 3000), //minutes played
            this.random(0, 60), //vision score
            this.random(10, 200), //crowd control score
            this.random(0, 20), //wins
            this.random(0, 20), //losses
            champion,
            this.random(0, 4) //bans
        );
    }

    private generatePlayerOverallStats(player: Player){
        return new PlayerOverallStats(
            this.random(0, 10), //deaths
            this.random(0, 10), //assists
            this.random(5000, 10000), //damage dealt to champions
            this.random(2000, 7000), //damage dealt to objectives
            this.random(5000, 10000), //damage received
            this.random(12000, 250000), //gold
            this.random(0, 10), //kills
            this.random(20, 300), //minions
            this.random(15, 3000), //minutes played
            this.random(0, 60), //vision score
            this.random(10, 200), //crowd control score
            this.random(0, 20), //wins
            this.random(0, 20), //losses
            player,
            this.champions
        );
    }

    private validateId(id: string | number, array: { id: string | number }[], error: DatabaseError): void{
        for(let i = 0; i < array.length; i++)
            if(array[i].id === id)
                return;
        throw new Error(error);
    }

    private getTeam(id: string): Team{
        for(let i = 0; i < this.teams.length; i++)
            if(this.teams[i].id === id)
                return this.teams[i];
        throw new Error(DatabaseError.UNKNOWN_TEAM_ID);
    }

    async addTournament(name: string, description: string, startDate: Date): Promise<Tournament>{
        const tournament: Tournament = new Tournament(''+this.ids++, name, description, startDate, null, []);
        this.tournaments.push(tournament);
        return tournament;
    }

    async endTournament(id: string): Promise<Tournament>{
        for(let i = 0; i < this.tournaments.length; i++){
            if(this.tournaments[i].id === id){
                if(this.tournaments[i].endDate)
                    throw new Error(DatabaseError.TOURNAMENT_ALREADY_ENDED);
                this.tournaments[i].endDate = new Date();
                return this.tournaments[i];
            }
        }
        throw new Error(DatabaseError.UNKNOWN_TOURNAMENT_ID);
    }

    async getTournament(id: string): Promise<Tournament>{
        for(let i = 0; i < this.tournaments.length; i++)
            if(this.tournaments[i].id === id)
                return this.tournaments[i];
        throw new Error(DatabaseError.UNKNOWN_TOURNAMENT_ID);
    }

    async getTournaments(): Promise<Tournament[]>{
        return this.tournaments;
    }

    async getTournamentChampionsStats(tournamentId: string): Promise<ChampionOverallStats[]>{
        await this.championsPromise; //must wait until all champions are fetched
        this.validateId(tournamentId, this.tournaments, DatabaseError.UNKNOWN_TOURNAMENT_ID);
        const stats: ChampionOverallStats[] = [];
        this.champions.forEach(champion => {
            stats.push(this.generateChampionOverallStats(champion));
        });
        return stats;
    }
    
    async getTournamentChampionStats(tournamentId: string, championId: number): Promise<ChampionOverallStats>{
        await this.championsPromise; //must wait until all champions are fetched
        this.validateId(tournamentId, this.tournaments, DatabaseError.UNKNOWN_TOURNAMENT_ID);
        await this.championFetcher.fetch(championId);
        for(let i = 0; i < this.champions.length; i++)
            if(this.champions[i].id == championId)
                return this.generateChampionOverallStats(this.champions[i]);
        throw new Error(DatabaseError.UNKNOWN_CHAMPION_ID);
    }

    async addRound(tournamentId: string, roundName: string): Promise<Round>{
        this.validateId(tournamentId, this.tournaments, DatabaseError.UNKNOWN_TOURNAMENT_ID);
        const round: Round = new Round(''+this.ids++, roundName, this.sets);
        this.rounds.push(round);
        return round;
    }

    async deleteRound(tournamentId: string, roundId: string): Promise<Round>{
        this.validateId(tournamentId, this.tournaments, DatabaseError.UNKNOWN_TOURNAMENT_ID);
        for(let i = 0; i < this.rounds.length; i++){
            if(this.rounds[i].id === roundId){
                const round: Round = this.rounds.splice(i, 1)[0];
                return round;
            }
        }
        throw new Error(DatabaseError.UNKNOWN_ROUND_ID);
    }

    async getRound(tournamentId: string, roundId: string): Promise<Round>{
        this.validateId(tournamentId, this.tournaments, DatabaseError.UNKNOWN_TOURNAMENT_ID);
        for(let i = 0; i < this.rounds.length; i++)
            if(this.rounds[i].id === roundId)
                return this.rounds[i];
        throw new Error(DatabaseError.UNKNOWN_ROUND_ID);
    }

    async getRounds(tournamentId: string): Promise<Round[]>{
        this.validateId(tournamentId, this.tournaments, DatabaseError.UNKNOWN_TOURNAMENT_ID);
        return this.rounds;
    }

    async addSet(tournamentId: string, roundId: string, firstTeamId: string, secondTeamId: string): Promise<Set>{
        this.validateId(tournamentId, this.tournaments, DatabaseError.UNKNOWN_TOURNAMENT_ID);
        this.validateId(roundId, this.rounds, DatabaseError.UNKNOWN_ROUND_ID);
        const set: Set = this.generateSet(this.getTeam(firstTeamId), this.getTeam(secondTeamId), []);
        this.sets.push(set);
        return set;
    }

    async getSets(tournamentId: string, roundId: string): Promise<Set[]>{
        this.validateId(tournamentId, this.tournaments, DatabaseError.UNKNOWN_TOURNAMENT_ID);
        this.validateId(roundId, this.rounds, DatabaseError.UNKNOWN_ROUND_ID);
        return this.sets;
    }

    async deleteSet(tournamentId: string, roundId: string, setId: string): Promise<Set>{
        this.validateId(tournamentId, this.tournaments, DatabaseError.UNKNOWN_TOURNAMENT_ID);
        this.validateId(roundId, this.rounds, DatabaseError.UNKNOWN_ROUND_ID);
        for(let i = 0; i < this.sets.length; i++){
            if(this.sets[i].id === setId){
                const set: Set = this.sets.splice(i, 1)[0];
                return set;
            }
        }
        throw new Error(DatabaseError.UNKNOWN_SET_ID);
    }

    async addMatch(tournamentId: string, roundId: string, setId: string, match: Match): Promise<Match>{
        this.validateId(tournamentId, this.tournaments, DatabaseError.UNKNOWN_TOURNAMENT_ID);
        this.validateId(roundId, this.rounds, DatabaseError.UNKNOWN_ROUND_ID);
        this.validateId(setId, this.sets, DatabaseError.UNKNOWN_SET_ID);
        this.matches.push(match);
        return match;
    }

    async getMatches(tournamentId: string, roundId?: string, setId?: string): Promise<Match[]>{
        this.validateId(tournamentId, this.tournaments, DatabaseError.UNKNOWN_TOURNAMENT_ID);
        if(roundId)
            this.validateId(roundId, this.rounds, DatabaseError.UNKNOWN_ROUND_ID);
        if(setId)
            this.validateId(setId, this.sets, DatabaseError.UNKNOWN_SET_ID);
        return this.matches;
    }

    async addTeam(tournamentId: string, name: string): Promise<Team>{
        this.validateId(tournamentId, this.tournaments, DatabaseError.UNKNOWN_TOURNAMENT_ID);
        const team: Team = new Team(''+this.ids++, name, [ ]);
        this.teams.push(team);
        return team;
    }

    async getTeams(tournamentId: string): Promise<Team[]>{
        this.validateId(tournamentId, this.tournaments, DatabaseError.UNKNOWN_TOURNAMENT_ID);
        return this.teams;
    }

    async getPlayerStats(teamId?: string): Promise<PlayerOverallStats[]>{
        await this.championsPromise; //must wait until all champions are fetched
        if(teamId)
            this.validateId(teamId, this.teams, DatabaseError.UNKNOWN_TEAM_ID);
        let stats: PlayerOverallStats[] = [];
        for(let i = 0; i < this.players.length; i++)
            stats.push(this.generatePlayerOverallStats(this.players[i]));
        return stats;
    }
}