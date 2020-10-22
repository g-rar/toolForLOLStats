import MockController from './FirebaseDatabase.service';
import FirebaseDatabase from './FirebaseDatabase.service'
import { Tournament, Round, Champion, Set, Match, Team, Player, } from 'src/app/models';
import { TestBed } from '@angular/core/testing';
import { Database } from './Database.service';
import { AngularFirestore, SETTINGS } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

xdescribe('FirebaseDatabase', () => {

    const STUB_EXISTING_TOURNY_ID: string = "A4EwXBNykwtb4Yy4iqLK";
    const STUB_EXISTING_ROUND_ID: string = "0Hkr7FliHRGhCk2QUYwU";

    let database: Database;
    let afs: AngularFirestore;

    beforeEach(() => {
        TestBed.configureTestingModule({
        providers: [
            { provide: Database, useClass: FirebaseDatabase },
            { provide: AngularFirestore },
            { provide: SETTINGS, useValue: {
                host: "localhost:8080",
                ssl: false
            }}
        ], 
        imports: [
            AngularFireModule.initializeApp(environment.firebaseConfig),
            AngularFirestoreModule
        ]
    });
        database = TestBed.inject(Database);
        afs = TestBed.inject(AngularFirestore);
    });

    it('addTournament(): add a new tournament', async () => {
        const name: string = "tourny1";
        const description: string = "this is a new tourny";
        const startDate: Date = new Date();

        const tournament: Tournament = await database.addTournament(name, description, startDate);
        expect(tournament).toBeTruthy();
        expect(tournament.name).toBe(name);

    });

    it('endTournament(): end existing tournament', async () => {
        const tournament: Tournament = await database.endTournament(STUB_EXISTING_TOURNY_ID);
        expect(tournament.endDate).toBeTruthy();
        expect(tournament).toBeTruthy();
    });

    it('getTournament(): get exisiting tournament', async () => {
        const tournament: Tournament = await database.getTournament(STUB_EXISTING_TOURNY_ID);
        expect(tournament).toBeTruthy();
        expect(tournament.id).toBe(STUB_EXISTING_TOURNY_ID);

    });

    it('getTournaments(): get list of exisiting tournaments', async () => {
        const tournaments: Tournament[] = await database.getTournaments();
        expect(tournaments).toBeTruthy();
    });

    it('addRound(): add a new round to existing tournament', async () => {
        const name: string = "round1";

        const round: Round = await database.addRound(STUB_EXISTING_TOURNY_ID, name);
        expect(round).toBeTruthy();
        expect(round.name).toBe(name);

    });


    it('getRound(): get exisiting round', async () => {
        const round: Round = await database.getRound(STUB_EXISTING_TOURNY_ID, STUB_EXISTING_ROUND_ID);
        expect(round).toBeTruthy();
        expect(round.id).toBe(STUB_EXISTING_ROUND_ID);

    });

    it('getRounds(): get list of exisiting rounds', async () => {
        const rounds: Round[] = await database.getRounds(STUB_EXISTING_TOURNY_ID);
        expect(rounds).toBeTruthy();
    });

});