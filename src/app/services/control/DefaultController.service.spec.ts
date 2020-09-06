import { TestBed } from '@angular/core/testing';
import ControlModule from '../control.module';
import { Controller } from './Controller.service';
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


describe('DefaultController', () => {

    let controller: Controller;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ ControlModule ],
            providers: [ 
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

    it('should fail authentication on incorrect credentials', async () => {
        const wrong_email: string = 'wrong@email.com';
        const wrong_password: string = 'wrong_password';
        await expectAsync(controller.login(wrong_email, wrong_password)).toBeRejectedWith(
            new Error(AuthenticatorError.AUTHENTICATION_FAILED)
        );
    });

    it('should authenticate properly with the correct credentials', async () => {
        const email: string = MockAuthenticator.CORRECT_USERNAME;
        const password: string = MockAuthenticator.CORRECT_PASSWORD;
        await expectAsync(controller.login(email, password)).toBeResolved();
    });

    it('should logout if a user is already logged in', async () => {
        const email: string = MockAuthenticator.CORRECT_USERNAME;
        const password: string = MockAuthenticator.CORRECT_PASSWORD;
        await expectAsync(controller.login(email, password)).toBeResolved();
        await expectAsync(controller.logout()).toBeResolved();
    });

    it('should fail if a logout is attempted when a user isn\'t logged in', async () => {
        //user gets logged-in on the beforeEach, so logout must be called an extra time to trigger
        await expectAsync(controller.logout()).toBeResolved();
        await expectAsync(controller.logout()).toBeRejectedWith(
            new Error(AuthenticatorError.NOT_AUTHENTICATED)
        );
    });

    /*
    it('should    ', async () => {

    });*/
});