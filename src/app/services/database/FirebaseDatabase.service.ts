import { Tournament, Round, Champion, Set, Match, Team, Player, } from 'src/app/models';
import { Injectable } from '@angular/core';
import ControlModule from '../control.module';
import { Database, DatabaseError } from './Database.service';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable({
    providedIn: ControlModule
})
export default class FirebaseDatabase implements Database{
    
    afsCollection: AngularFirestoreCollection<any>;
    afsDocument: AngularFirestoreDocument<any>;
    
    constructor(private afs: AngularFirestore) {

    }

    async addTournament(name: string, description: string, startDate: Date): Promise<Tournament>{    
        try {
            let tempID = this.afs.createId()
            const newTournament = {
                id: tempID,
                name: name,
                description: description,
                startDate: new Date(),
                endDate: null,
                teamIds: []
            }
            await this.afs.doc('tournaments/' + tempID).set(newTournament);
            return new Tournament(
                newTournament.id,
                newTournament.name,
                newTournament.description,
                newTournament.startDate,
                newTournament.endDate,
                newTournament.teamIds
            );
        } catch(error) {
            console.error(error)
            throw new Error(DatabaseError.UNABLE_TO_REACH_DB);
        }
    }
    
    async endTournament(id: string): Promise<Tournament>{
        try{

            await this.afs.doc('tournaments/' + id).update({
                'endDate': new Date()
            })
            
            //then seria a continuacion
            console.log("Tournament added!");
            
            //return
            return await this.getTournament(id)

            //catch
        }catch(error){
            console.error("Error endding tournament")
            throw new Error(DatabaseError.UNKNOWN_TOURNAMENT_ID);   
        }

        // this.afs.doc('tournaments/' + id).update(
        // {
        //     'endDate': new Date()
        // }
        // ).then(res => {
        //     console.log('Tournament added!')
        // }).catch(err => {
        //     console.log('Error adding tournament!',err)
        //     throw new Error(DatabaseError.UNKNOWN_TOURNAMENT_ID);
        // });        
    }
    
    async getTournament(id: string): Promise<Tournament>{
        return (await this.afs.doc('tournaments/' + id).get().toPromise()).data() as Tournament
    }
    
    async getTournaments(): Promise<Tournament[]>{
        let tournaments: Tournament[] = []
        await (await this.afs.collection('tournaments').get().toPromise()).docs.forEach(doc => {
            tournaments.push(doc.data() as Tournament)
        })
        return tournaments
    }

    getTournamentChampionsStats: (tournamentId: string) => Promise<any[]>; //for later
    getTournamentChampionStats: (tournamentId: string, championId: number) => Promise<any>; //for later

    async addRound(tournamentId: string, roundName: string): Promise<any>{

    }

    async deleteRound(tournamentId: string, roundId: string): Promise<any>{

    }

    async getRound(tournamentId: string, roundId: string): Promise<Round>{
        return (await this.afs.doc('tournaments/' + tournamentId + '/rounds/' + roundId).get().toPromise()).data() as Round
    }

    async getRounds(tournamentId: string): Promise<Round[]>{
        let rounds: Round[] = []
        await (await this.afs.collection('tournaments/' + tournamentId + '/rounds').get().toPromise()).docs.forEach(doc => {
            rounds.push(doc.data() as Round)
        })
        return rounds
    }
    
    addSet: (tournamentId: string, roundId: string, firstTeamId: string, secondTeamId: string) => Promise<any>;
    getSets: (tournamentId: string, roundId: string) => Promise<any[]>;
    deleteSet: (tournamentId: string, roundId: string, setId: string) => Promise<any>;
    addMatch: (tournamentId: string, roundId: string, setId: string, match: any) => Promise<any>;
    getMatches: (tournamentId: string, roundId?: string, setId?: string) => Promise<any[]>;

    async addTeam(tournamentId: string, name: string): Promise<any>{
                
        let tempID = this.afs.createId()
        let players: Player[] = []

        const newTeam = {
            id: tempID,
            name: name,
            players: players
        }

        this.afs.doc('teams/' + tempID).set(newTeam).then(res => {
            console.log('New team added!')
        }).catch(err => {
            console.log('Error adding team!',err)
            throw new Error(DatabaseError.UNABLE_TO_REACH_DB);
        });

        let tempList: string [] = ((await this.afs.doc('tournaments/' + tournamentId).get().toPromise()).data() as Tournament).roundIds
        tempList.push(tempID)

        this.afs.doc('tournaments/' + tournamentId).update(
        {
            'roundIds': tempList
        }
        ).then(res => {
            console.log('Team added to tournament!')
        }).catch(err => {
            console.log('Error adding team to tournament!',err)
            throw new Error(DatabaseError.UNKNOWN_TOURNAMENT_ID);
        });

        return (await this.afs.doc('teams/' + tempID).get().toPromise()).data() as Team
    }

    getTeams: (tournamentId: string) => Promise<any[]>;
    getPlayerStats: (teamId?: string) => Promise<any[]>; //for later

}
