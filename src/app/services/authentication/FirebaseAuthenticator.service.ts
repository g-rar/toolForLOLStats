import { Injectable } from '@angular/core';
import User from '../../models/User'
import { Authenticator, AuthenticatorError } from './Authenticator.service'
import ControlModule from '../control.module'

@Injectable({
    providedIn: ControlModule,
})
export default class FirebaseAuthenticator implements Authenticator{
    login(username: string, password: string): Promise<User> {
        throw new Error("Method not implemented.");
    }

    logout(): Promise<void>{
        throw new Error("Method not implemented.");
    }

    validate(): Promise<void>{
        throw new Error("Method not implemented.");
    }
}