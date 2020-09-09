import { Injectable } from '@angular/core';
import ControlModule from '../control.module';
import { MatchFetcher, MatchFetcherError } from './MatchFetcher.service';
import { Match, Team, Champion, PerformanceStats, TeamPerformance, Player } from '../../models';
import MockController from '../control/MockController.service';
import { ChampionFetcher } from '../champions/ChampionFetcher.service';

@Injectable({
    providedIn: ControlModule
})
export default class MockMatchFetcher implements MatchFetcher{

    constructor(private championFetcher: ChampionFetcher){}

    async fetch(id: number): Promise<Match> {
        const minutesPlayed = this.random(15, 60);
        const winner: Team = new Team('2', 'Devs Lives Matter', [
            new Player('Player2'),
            new Player('Player6'),
            new Player('Player10'),
            new Player('Player14'),
            new Player('Player18')
        ]);

        const winningChampions: Champion[] = [ 
            this.championFetcher.fetch('Aatrox'),
            this.championFetcher.fetch('Ezreal'),
            this.championFetcher.fetch('Ahri'),
            this.championFetcher.fetch('Yuumi'),
            this.championFetcher.fetch('Gragas')
        ]
        
        const losingChampions: Champion[] = [
            this.championFetcher.fetch('Chogath'),
            this.championFetcher.fetch('Thresh'),
            this.championFetcher.fetch('KogMaw'),
            this.championFetcher.fetch('Syndra'),
            this.championFetcher.fetch('Vi')
        ];

        const loser: Team = new Team('2', 'Los patitos', [
            new Player('Player0'),
            new Player('Player4'),
            new Player('Player8'),
            new Player('Player12'),
            new Player('Player16')
        ]);

        return new Match(
            id,
            this.generateTeamPerformance(winner, winningChampions, minutesPlayed, true),
            this.generateTeamPerformance(loser, losingChampions, minutesPlayed, false), 
            minutesPlayed, 
            new Date()
        );
    }

    private generateTeamPerformance(team: Team, champions: Champion[], minutesPlayed: number, won: boolean): TeamPerformance {
        const stats: PerformanceStats[] = [
            this.generateRandomPerformanceStats(champions[0], minutesPlayed, won),
            this.generateRandomPerformanceStats(champions[1], minutesPlayed, won),
            this.generateRandomPerformanceStats(champions[2], minutesPlayed, won),
            this.generateRandomPerformanceStats(champions[3], minutesPlayed, won),
            this.generateRandomPerformanceStats(champions[4], minutesPlayed, won)
        ]
        return new TeamPerformance(
            team.id,
            team.name,
            [ 
                this.championFetcher.fetch('Aatrox'),
                this.championFetcher.fetch('Ezreal'),
                this.championFetcher.fetch('Ahri'),
                this.championFetcher.fetch('Yuumi'),
                this.championFetcher.fetch('Gragas')
            ],
            won,
            this.random(0, 4), //dragons
            this.random(0, 1), //heralds
            this.random(0, 2), //barons
            this.random(0, 11), //towers
            stats
        );
    }

    private generateRandomPerformanceStats(champion: Champion, minutesPlayed: number, won: boolean): PerformanceStats{
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
            null, //player unknown at this state
            champion,
            this.random(0, 5), //largest multikill
            this.random(0, 7), //largest killing spree
            false,  //got first blood
            false,  //got first tower
            won
        );
    }

    private random(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}