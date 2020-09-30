import { Injectable } from '@angular/core';
import User from '../../models/User';
import { Authenticator, AuthenticatorError } from './Authenticator.service';
import ControlModule from '../control.module';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
    providedIn: ControlModule,
})
export default class FirebaseAuthenticator implements Authenticator{

    constructor(private auth: AngularFireAuth){}

    async getLoggedUser(): Promise<User>{
        this.validate();
        const user: firebase.User = await this.auth.user.toPromise();
        return new User(user.email);
    }

    async login(username: string, password: string): Promise<User> {
        try{
            const creds: firebase.auth.UserCredential = await this.auth.signInWithEmailAndPassword(username, password);
            return new User(creds.user.email);
        } catch(error) {
            console.error(error);
            throw new Error(AuthenticatorError.AUTHENTICATION_FAILED);
        }
    }

    async logout(): Promise<void> {
        await this.validate();
        await this.auth.signOut();
    }

    async validate(): Promise<void>{
        const user: firebase.User = await this.auth.user.toPromise();
        if(!user)
            throw new Error(AuthenticatorError.NOT_AUTHENTICATED);
    }
}