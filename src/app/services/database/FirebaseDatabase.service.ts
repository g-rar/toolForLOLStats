import { Tournament, Round, Champion, Set, Match, Team, Player, } from 'src/app/models';
import { Injectable } from '@angular/core';
import ControlModule from '../control.module';
import { Database, DatabaseError } from './Database.service';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NgSelectOption } from '@angular/forms';

@Injectable({
    providedIn: ControlModule
})
export default class FirebaseDatabase implements Database{
    
    afsCollection: AngularFirestoreCollection<any>;
    afsDocument: AngularFirestoreDocument<any>;
    item: Observable<any>
    items: Observable<any[]>;
    //rounds: Observable<Round[]>;
    //sets: Observable<Set[]>;
    //matches: Observable<Match[]>;
    //teams: Observable<Team[]>;
    
    constructor(private afs: AngularFirestore) {

    }

    async addTournament(name: string, description: string, startDate: Date): Promise<Tournament>{    
        
        const tempID = this.afs.createId()
        const rounds = new Array<String>()
        const teams = new Array<String>()

        const newTournament = {
            id: tempID,
            name: name,
            description: description,
            startDate: new Date(),
            endDate: null,
            roundIds: rounds,
            teamIds: teams
        }

        this.afs.doc('tournaments/' + tempID).set(newTournament).then(res => {
            console.log('Tournament added!')
        }).catch(err => {
            console.log('Error adding tournament!',err)
            throw new Error(DatabaseError.UNKNOWN_TOURNAMENT_ID);
        });

        this.item = this.afs.doc('tournaments/' + tempID).valueChanges()
        return this.item.toPromise()
    }
    
    async endTournament(id: string): Promise<Tournament>{
        this.afs.doc('tournaments/' + id).set({
            endDate: new Date()
        },{ merge: true }
        ).then(res => {
            console.log('Tournament added!')
        }).catch(err => {
            console.log('Error adding tournament!',err)
            throw new Error(DatabaseError.UNKNOWN_TOURNAMENT_ID);
        });
        
        this.item = this.afs.doc('tournaments/' + id).valueChanges()
        return this.item.toPromise()
    }
    
    async getTournament(id: string): Promise<Tournament>{
        this.item = this.afs.doc('tournaments/' + id).valueChanges()
        return this.item.toPromise()
    }
    
    async getTournaments(): Promise<Tournament[]>{
        this.items = this.afs.collection<Tournament>('tournaments').valueChanges()
        return this.items.toPromise()
    }

    getTournamentChampionsStats: (tournamentId: string) => Promise<any[]>; //for later
    getTournamentChampionStats: (tournamentId: string, championId: number) => Promise<any>; //for later
    addRound: (tournamentId: string, roundName: string) => Promise<any>;
    deleteRound: (tournamentId: string, roundId: string) => Promise<any>;
    getRound: (tournamentId: string, roundId: string) => Promise<any>;
    getRounds: (tournamentId: string) => Promise<any[]>;
    addSet: (tournamentId: string, roundId: string, firstTeamId: string, secondTeamId: string) => Promise<any>;
    getSets: (tournamentId: string, roundId: string) => Promise<any[]>;
    deleteSet: (tournamentId: string, roundId: string, setId: string) => Promise<any>;
    addMatch: (tournamentId: string, roundId: string, setId: string, match: any) => Promise<any>;
    getMatches: (tournamentId: string, roundId?: string, setId?: string) => Promise<any[]>;
    addTeam: (tournamentId: string, name: string) => Promise<any>;
    getTeams: (tournamentId: string) => Promise<any[]>;
    getPlayerStats: (teamId?: string) => Promise<any[]>; //for later

}
