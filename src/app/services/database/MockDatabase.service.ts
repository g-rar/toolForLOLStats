import { Injectable } from '@angular/core';
import ControlModule from '../control.module';
import { Database } from './Database.service';
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

@Injectable({
    providedIn: ControlModule
})
export default class MockDatabase implements Database {

    private ids: number = 0;
    private champions: Champion[];
    private players: Player[];
    private teams: Team[];
    private matches: Match[];
    private tournaments: Tournament[];
    private rounds: Round[];
    private sets: Set[];

    constructor(){
        //champions
        this.champions = [];

        //players
        this.players = [];
        for(let i = 0; i < 20; i++)
            this.players.push(new Player(''+i, 'Player ' + i));

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
        this.sets = [];

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
            new Tournament(''+this.ids++, 'Dummy Tournament', new Date(), null, [ groupsID, semifinalsID, finalsID], ['0', '1', '2', '3'])
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

    private getTeam(id: string): Team{
        let result: Team = null;
        this.teams.forEach(team => {
            if(team.id === id)
                result = team;
        });
        return result;
    }

    async addTournament(name: string, startDate: Date): Promise<Tournament>{
        const tournament: Tournament = new Tournament(''+this.ids++, name, startDate, null, [], []);
        this.tournaments.push(tournament);
        return tournament;
    }

    async endTournament(id: string): Promise<Tournament>{
        for(let i = 0; i < this.tournaments.length; i++){
            if(this.tournaments[i].id === id){
                this.tournaments[i].endDate = new Date();
                return this.tournaments[i];
            }
        }
        throw new Error('tournament not found');
    }

    async getTournaments(): Promise<Tournament[]>{
        return this.tournaments;
    }

    async getTournamentChampionsStats(tournamentId: string): Promise<ChampionOverallStats[]>{
        const stats: ChampionOverallStats[] = [];
        this.champions.forEach(champion => {
            stats.push(this.generateChampionOverallStats(champion));
        });
        return stats;
    }
    
    async getTournamentChampionStats(tournamentId: string, championId: number): Promise<ChampionOverallStats>{
        for(let i = 0; i < this.champions.length; i++){
            if(this.champions[i].id == championId){
                const stats: ChampionOverallStats = this.generateChampionOverallStats(this.champions[i]);
                return stats;
            }
        }
        throw new Error('champion not found');
    }

    async addRound(tournamentId: string, roundName: string): Promise<Round>{
        const round: Round = new Round(''+this.ids++, roundName, this.sets);
        this.rounds.push(round);
        return round;
    }

    async deleteRound(tournamentId: string, roundId: string): Promise<Round>{
        for(let i = 0; i < this.rounds.length; i++){
            if(this.rounds[i].id === roundId){
                const round: Round = this.rounds.splice(i, 1)[0];
                return round;
            }
        }
        throw new Error('round not found');
    }

    async getRound(tournamentId: string, roundId: string): Promise<Round>{
        for(let i = 0; i < this.rounds.length; i++)
            if(this.rounds[i].id === roundId)
                return this.rounds[i];
        throw new Error('round not found');
    }

    async getRounds(tournamentId: string): Promise<Round[]>{
        return this.rounds;
    }

    async addSet(tournamentId: string, roundId: string, firstTeamId: string, secondTeamId: string): Promise<Set>{
        const set: Set = this.generateSet(this.getTeam(firstTeamId), this.getTeam(secondTeamId), []);
        this.sets.push(set);
        return set;
    }

    async getSets(tournamentId: string, roundId: string): Promise<Set[]>{
        return this.sets;
    }

    async deleteSet(tournamentId: string, roundId: string, setId: string): Promise<Set>{
        for(let i = 0; i < this.sets.length; i++){
            if(this.sets[i].id === setId){
                const set: Set = this.sets.splice(i, 1)[0];
                return set;
            }
        }
        throw new Error('set not found');
    }

    async addMatch(tournamentId: string, roundId: string, setId: string, match: Match): Promise<Match>{
        this.matches.push(match);

        //missing stat aggregation!
        
        return match;
    }

    async getMatches(tournamentId: string, roundId?: string, setId?: string): Promise<Match[]>{
        return this.matches;
    }

    async addTeam(tournamentId: string, name: string): Promise<Team>{
        const team: Team = new Team(''+this.ids++, name, [ ]);
        this.teams.push(team);
        return team;
    }

    async getTeams(tournamentId: string): Promise<Team[]>{
        return this.teams;
    }

    async getPlayerStats(teamId?: string): Promise<PlayerOverallStats[]>{
        let stats: PlayerOverallStats[] = [];
        for(let i = 0; i < this.players.length; i++)
            stats.push(this.generatePlayerOverallStats(this.players[i]));
        return stats;
    }
}