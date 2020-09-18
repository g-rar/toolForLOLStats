import User from '../../models/User'

export abstract class Authenticator {
    login: (username: string, password: string) => Promise<User>;
    logout: () => Promise<void>;

    //these should throw NOT_AUTHENTICATED if no user is logged in 
    getLoggedUser: () => Promise<User>;
    validate: () => Promise<void>;
}

export enum AuthenticatorError {
    AUTHENTICATION_FAILED = "AuthenticatorError.AUTHENTICATION_FAILED",
    NOT_AUTHENTICATED = "AuthenticatorError.NOT_AUTHENTICATED"
}