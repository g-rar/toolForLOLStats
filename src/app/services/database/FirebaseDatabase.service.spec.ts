import MockController from './FirebaseDatabase.service';
import FirebaseDatabase from './FirebaseDatabase.service'
import { Tournament, Champion, Set, Match, Team, Player, } from 'src/app/models';
import { TestBed } from '@angular/core/testing';
import { Database } from './Database.service';
import { AngularFirestore, SETTINGS } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

fdescribe('FirebaseDatabase', () => {

    const STUB_EXISTING_TOURNY_ID: string = "A4EwXBNykwtb4Yy4iqLK";

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

    it('should connect to local emultator', async () => {
        console.log("testing conection");

        await afs.doc('testSpace/testDoc').set({testVal : "Valor de prueba"})

        let testDoc = (await afs.doc('testSpace/testDoc').get().toPromise()).data()

        expect(testDoc.testVal).toBeDefined();
    });

    // it('addTournament(): add a new tournament', async () => {
    //     const name: string = "tourny1";
    //     const description: string = "this is a new tourny";
    //     const startDate: Date = new Date();

    //     const tournament: Tournament = await database.addTournament(name, description, startDate);
    //     expect(tournament).toBeTruthy();
    //     expect(tournament.name).toBe(name);

    // });

    // it('endTournament(): end existing tournament', async () => {
    //     const tournament: Tournament = await database.endTournament(STUB_EXISTING_TOURNY_ID);
    //     expect(tournament.completed).toBeTruthy();
    // });

    // it('getTournament(): get exisiting tournament', async () => {
    //     const tournament: Tournament = await database.getTournament(STUB_EXISTING_TOURNY_ID);
    //     expect(tournament).toBeTruthy();
    //     expect(tournament.id).toBe(STUB_EXISTING_TOURNY_ID);

    // });

});