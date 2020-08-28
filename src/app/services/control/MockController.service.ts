import Controller from './Controller.service';
import IdentityLocation from '../indentities/IdentityLocation';
import {
    User, 
    Tournament,
    ChampionOverallStats,
    Round,
    Set,
    Match,
    Team,
    PlayerOverallStats,
    Player,
    Champion,
    PerformanceStats,
    TeamPerformance,
    SetResult
} from '../../models/index';

export default class MockController implements Controller{

    private ids: number = 0;

    //champions
    //first team
    private static readonly AATROX = new Champion(226, "Aatrox", "Aatrox", "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Aatrox.png");
    private static readonly EZREAL = new Champion(81, "Ezreal", "Ezreal", "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Ezreal.png");
    private static readonly AHRI = new Champion(103, "Ahri", "Ahri", "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Ahri.png");
    private static readonly YUUMI = new Champion(350, "Yuumi", "Yuumi", "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Yuumi.png");
    private static readonly GRAGAS = new Champion(79, "Gragas", "Aatrox", "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Aatrox.png");
    //second team
    private static readonly CHOGATH = new Champion(31, "Chogath", "Cho'Gath", "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Chogath.png");
    private static readonly THRESH = new Champion(412, "Thresh", "Thresh", "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Thresh.png");
    private static readonly KOGMAW = new Champion(96, "KogMaw", "Kog'Maw", "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/KogMaw.png");
    private static readonly SYNDRA = new Champion(134, "Syndra", "Syndra", "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Aatrox.png");
    private static readonly VI = new Champion(254, "Vi", "Vi", "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Vi.png");

    private champions: Champion[];
    private players: Player[];
    private teams: Team[];
    private matches: Match[];
    private tournaments: Tournament[];
    private rounds: Round[];
    private sets: Set[];

    constructor(){
        //champions
        this.champions =  [ 
            MockController.AATROX,
            MockController.EZREAL,
            MockController.AHRI,
            MockController.YUUMI,
            MockController.GRAGAS,
            MockController.CHOGATH,
            MockController.THRESH,
            MockController.KOGMAW,
            MockController.SYNDRA,
            MockController.VI
        ];

        //players
        this.players = [];
        for(let i = 0; i < 20; i++)
            this.players.push(new Player(''+i, 'Player ' + i, this.champions, [ '' + (i % 4) ]));

        //teams
        this.teams = [
            new Team('0', 'Los patitos', [ this.players[0], this.players[4], this.players[8], this.players[12], this.players[16] ]),
            new Team('1', 'Mancos Gaming', [ this.players[1], this.players[5], this.players[9], this.players[13], this.players[17] ]),
            new Team('2', 'DevsLivesMatter', [ this.players[2], this.players[6], this.players[10], this.players[14], this.players[18] ]),
            new Team('3', 'Ecks Dee Players', [ this.players[3], this.players[7], this.players[11], this.players[15], this.players[19] ])
        ];

        //matches
        this.matches = [
            this.generateMatch(this.teams[0], this.teams[1]),
            this.generateMatch(this.teams[0], this.teams[1]),
            this.generateMatch(this.teams[2], this.teams[3]),
            this.generateMatch(this.teams[2], this.teams[3])            
        ];

        //Sets
        this.sets = [ 
            this.generateSet(this.teams[0], this.teams[1], [ this.matches[0], this.matches[1] ]),
            this.generateSet(this.teams[2], this.teams[3], [ this.matches[2], this.matches[3] ]),            
        ];

        //rounds
        this.rounds = [ 
            new Round(''+this.ids++, 'Groups', this.sets),
            new Round(''+this.ids++, 'Semifinals', this.sets),
            new Round(''+this.ids++, 'Finals', this.sets)
        ];

        //tournaments
        this.tournaments = [
            new Tournament(''+this.ids++, 'Dummy Tournament', new Date(), null, [ 'Groups', 'Semifinals', 'Finals'], ['0', '1', '2', '3'])
        ];
    }

    private random(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    private generateRandomPerformanceStats(player: Player, champion: Champion, minutesPlayed: number, won: boolean): PerformanceStats{
        return new PerformanceStats(
            this.random(0, 10), //deaths
            this.random(0, 10), //assists
            this.random(5000, 10000), //damage dealt to champions
            this.random(2000, 7000), //damage dealt to objectives
            this.random(5000, 10000), //damage received
            this.random(12000, 250000), //gold
            this.random(0, 10), //kills
            this.random(20, 300), //minions
            minutesPlayed,
            this.random(0, 60), //vision score
            this.random(10, 200), //crowd control score
            player.id,
            player.name,
            champion,
            this.random(0, 5), //largest multikill
            this.random(0, 7), //largest killing spree
            false,  //got first blood
            false,  //got first tower
            won
        );
    }

    private generateTeamPerformance(team: Team, minutesPlayed: number, won: boolean): TeamPerformance {
        const stats: PerformanceStats[] = [
            this.generateRandomPerformanceStats(team.players[0], this.champions[5], minutesPlayed, won),
            this.generateRandomPerformanceStats(team.players[1], this.champions[6], minutesPlayed, won),
            this.generateRandomPerformanceStats(team.players[2], this.champions[7], minutesPlayed, won),
            this.generateRandomPerformanceStats(team.players[3], this.champions[8], minutesPlayed, won),
            this.generateRandomPerformanceStats(team.players[4], this.champions[9], minutesPlayed, won)
        ]
        return new TeamPerformance(
            team.id,
            team.name,
            [ 
                MockController.AATROX, 
                MockController.EZREAL, 
                MockController.AHRI, 
                MockController.YUUMI, 
                MockController.CHOGATH
            ],
            false, 
            stats
        );
    }

    //made public to easily generate fake matches
    public generateMatch(winner: Team, loser: Team){
        const minutesPlayed = this.random(15, 60);
        return new Match(
            this.ids++,
            this.generateTeamPerformance(winner, minutesPlayed, true),
            this.generateTeamPerformance(loser, minutesPlayed, false), 
            minutesPlayed, 
            new Date()
        );
    }

    private generateSetResult(team: Team, score: number): SetResult{
        return new SetResult(team.id, team.name, score);
    }

    private generateSet(winner: Team, loser: Team, matches: Match[]): Set{
        const matchIds: number[] = [];
        matches.forEach(match => { matchIds.push(match.id) });
        return new Set(
            ''+this.ids++, //set id
            this.generateSetResult(winner, 2), //first team result
            this.generateSetResult(loser, 0), //second team result
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

    authenticate(email: string, password: string): Promise<User> {
        return new Promise((resolve, reject) => {
            resolve(new User(email));
        });
    }

    addTournament(name: string, startDate: Date): Promise<void> {
        return new Promise((resolve, reject) => {
            this.tournaments.push(new Tournament(''+this.ids++, name, startDate, null, [], []));
            resolve();
        });
    }

    endTournament(id: string): Promise<void> {
        return new Promise((resolve, reject) => {
            for(let i = 0; i < this.tournaments.length; i++)
                if(this.tournaments[i].id === id)
                    this.tournaments[i].endDate = new Date();
            resolve();
        });
    }

    getTournaments(): Promise<Tournament[]> {
        return new Promise((resolve, reject) => {
            resolve(this.tournaments);
        });
    }
    
    getTournamentChampionsStats(tournamentId: string): Promise<ChampionOverallStats[]>{
        return new Promise((resolve, reject) => {
            const stats: ChampionOverallStats[] = [];
            this.champions.forEach(champion => {
                stats.push(this.generateChampionOverallStats(champion));
            });
            resolve(stats);
        });
    }

    getTournamentChampionStats(tournamentId: string, championId: number): Promise<ChampionOverallStats>{
        return new Promise((resolve, reject) => {
            let stats: ChampionOverallStats = null;
            for(let i = 0; i < this.champions.length; i++){
                if(this.champions[i].id == championId){
                    stats = this.generateChampionOverallStats(this.champions[i]);
                    break;
                }
            }
            resolve(stats);
        });
    }

    addRound(tournamentId: string, roundName: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.rounds.push(new Round(''+this.ids++, roundName, this.sets));
            resolve();
        });
    }

    deleteRound(tournamentId: string, roundId: string): Promise<void> {
        return new Promise((resolve, reject) => {
            for(let i = 0; i < this.rounds.length; i++)
                if(this.rounds[i].id === roundId)
                    this.rounds.splice(i, 1);
            resolve();
        });
    }

    getRound(tournamentId: string, roundId: string): Promise<Round> {
        return new Promise((resolve, reject) => {
            let round: Round;
            for(let i = 0; i < this.rounds.length; i++){
                if(this.rounds[i].id === roundId){
                    round = this.rounds[i];
                    break;
                }
            }
            resolve(round);
        });
    }

    getRounds(tournamentId: string): Promise<Round[]> {
        return new Promise((resolve, reject) => {
            resolve(this.rounds);
        });
    }

    addSet(tournamentId: string, roundId: string, firstTeamId: string, secondTeamId: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.sets.push(this.generateSet(this.getTeam(firstTeamId), this.getTeam(secondTeamId), []));
            resolve();
        });
    }

    getSets(tournamentId: string, roundId: string): Promise<Set[]> {
        return new Promise((resolve, reject) => {
            resolve(this.sets);
        });
    }
    
    deleteSet(tournamentId: string, roundId: string, setId: string): Promise<void> {
        return new Promise((resolve, reject) => {
            for(let i = 0; i < this.sets.length; i++){
                if(this.sets[i].id === setId){
                    this.sets.splice(i, 1);
                    break;
                }
            }
            resolve();
        });
    }

    fetchMatch(matchId: number, identityLocation: IdentityLocation): Promise<Match> {
            return new Promise((resolve, reject) => {
                const firstTeamIndex: number = this.random(0, this.teams.length - 1);
            
            //it could roll the same index for the second team, so it has to reroll that case
            let secondTeamIndex: number;
            do{
                secondTeamIndex = this.random(0, this.teams.length - 1);
            }while(firstTeamIndex === secondTeamIndex);

            resolve(this.generateMatch(this.teams[firstTeamIndex], this.teams[secondTeamIndex]));
        });
    }

    addMatch(match: Match, firstTeamId: string, secondTeamId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    getMatches(tournamentId: string, roundId?: string, setId?: string): Promise<Match[]> {
        return new Promise((resolve, reject) => {
            resolve(this.matches);
        });
    }

    addTeam(tournamentId: string, name: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.teams.push(new Team(''+this.ids++, name, [ ]));
            resolve();
        });
    }

    getTeams(tournamentId: string): Promise<Team[]> {
        return new Promise((resolve, reject) => {
            resolve(this.teams);
        });
    }

    getPlayerStats(teamId?: string): Promise<PlayerOverallStats[]> {
        return new Promise((resolve, reject) => {
            let stats: PlayerOverallStats[] = [];
            for(let i = 0; i < this.players.length; i++)
                stats.push(this.generatePlayerOverallStats(this.players[i]));
            resolve(stats);
        });
    }
}