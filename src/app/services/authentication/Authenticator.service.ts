import User from '../../models/User'

export abstract class Authenticator {
    login: (username: string, password: string) => Promise<User>;
    logout: () => Promise<void>;
    validate: () => Promise<void>; //should throw an error if no user is logged in
}

export enum AuthenticatorError {
    AUTHENTICATION_FAILED = "AuthenticatorError.AUTHENTICATION_FAILED",
    NOT_AUTHENTICATED = "AuthenticatorError.NOT_AUTHENTICATED"
}