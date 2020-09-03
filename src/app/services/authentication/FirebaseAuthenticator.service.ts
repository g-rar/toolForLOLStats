import { Injectable } from '@angular/core';
import User from '../../models/User'
import Authenticator from './Authenticator.service'
import ControlModule from '../control.module'

@Injectable({
    providedIn: ControlModule,
})
export default class FirebaseAuthenticator implements Authenticator{
    authenticate(username: string, password: string): User {
        throw new Error("Method not implemented.");
    }
}