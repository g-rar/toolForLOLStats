import { Injectable } from '@angular/core';
import ControlModule from '../control.module';
import { Authenticator, AuthenticatorError } from './Authenticator.service';
import User from "../../models/User";

@Injectable({
    providedIn: ControlModule
})
export default class MockAuthenticator implements Authenticator{
    
    public static readonly CORRECT_USERNAME = "username@example.com";
    public static readonly CORRECT_PASSWORD = "password";

    private user: User = JSON.parse(localStorage.getItem("MockUser"));
    
    async login(username: string, password: string): Promise<User>{
        if(username === MockAuthenticator.CORRECT_USERNAME && 
           password === MockAuthenticator.CORRECT_PASSWORD){
            this.user = new User(username);
            localStorage.setItem("MockUser", JSON.stringify(this.user))
            return this.user;
        } else {
            throw new Error(AuthenticatorError.AUTHENTICATION_FAILED);
        }
    }

    async logout(): Promise<void>{
        await this.validate();
        this.user = null;
        localStorage.setItem("MockUser", null)
    }

    async getLoggedUser(): Promise<User>{
        await this.validate();
        return this.user;
    }

    async validate(): Promise<void>{
        if(!this.user)
            throw new Error(AuthenticatorError.NOT_AUTHENTICATED);
    }
}